import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const STORAGE_KEY = 'jovant_dila_wishes';

/**
 * Format relative / readable date from timestamp
 */
function formatDate(dateStr) {
  if (!dateStr) return 'Baru saja';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}

/**
 * Custom hook to manage wedding guestbook wishes with Supabase integration & real-time sync
 * @param {Array} defaultWishes
 * @returns {{ wishes: Array, isLoading: boolean, addWish: (name: string, text: string) => Promise<boolean> }}
 */
export function useWishes(defaultWishes = []) {
  const [wishes, setWishes] = useState(() => {
    try {
      localStorage.removeItem('nobuka_wishes');
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to read wishes from localStorage', e);
    }
    return defaultWishes;
  });
  const [isLoading, setIsLoading] = useState(false);

  // 1. Fetch live wishes from Supabase on mount
  useEffect(() => {
    let isMounted = true;

    async function fetchWishes() {
      if (!supabase) return;
      setIsLoading(true);
      try {
        // Try querying 'wishes' table
        let { data, error } = await supabase
          .from('wishes')
          .select('*')
          .order('id', { ascending: false });

        // Fallback check on 'friend_wishes' if 'wishes' doesn't exist
        if (error && error.message.includes('not find')) {
          const res = await supabase
            .from('friend_wishes')
            .select('*')
            .order('id', { ascending: false });
          if (!res.error) {
            data = res.data;
            error = null;
          }
        }

        if (!error && data && data.length > 0 && isMounted) {
          const mapped = data.map((item) => ({
            id: item.id,
            name: item.name || item.nama || 'Anonim',
            text: item.text || item.message || item.ucapan || item.content || '',
            date: formatDate(item.date || item.created_at)
          }));
          setWishes(mapped);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped));
        }
      } catch (err) {
        console.warn('Supabase wishes fetch warning:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    fetchWishes();

    // 2. Setup Realtime subscription
    let channel;
    try {
      channel = supabase
        .channel('realtime_wishes')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'wishes' },
          (payload) => {
            if (payload && payload.new) {
              const newWish = {
                id: payload.new.id || Date.now(),
                name: payload.new.name || payload.new.nama || 'Anonim',
                text: payload.new.text || payload.new.message || payload.new.ucapan || '',
                date: formatDate(payload.new.date || payload.new.created_at)
              };
              setWishes((prev) => [newWish, ...prev.filter((w) => w.id !== newWish.id)]);
            }
          }
        )
        .subscribe();
    } catch (e) {
      console.warn('Realtime subscription error:', e);
    }

    return () => {
      isMounted = false;
      if (channel) supabase.removeChannel(channel);
    };
  }, []);

  // Save to localStorage as secondary backup
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
    } catch (e) {
      console.error('Failed to write wishes to localStorage', e);
    }
  }, [wishes]);

  // 3. Add new wish
  const addWish = async (name, text) => {
    if (!name.trim() || !text.trim()) return false;

    const trimmedName = name.trim();
    const trimmedText = text.trim();

    // Optimistic UI update
    const tempWish = {
      id: Date.now(),
      name: trimmedName,
      text: trimmedText,
      date: 'Baru saja'
    };
    setWishes((prev) => [tempWish, ...prev]);

    // Insert to Supabase
    try {
      if (supabase) {
        let { data, error } = await supabase
          .from('wishes')
          .insert([
            {
              name: trimmedName,
              text: trimmedText
            }
          ])
          .select();

        // Fallback insert to 'friend_wishes' if table name is friend_wishes
        if (error && error.message.includes('not find')) {
          const res = await supabase
            .from('friend_wishes')
            .insert([
              {
                name: trimmedName,
                text: trimmedText
              }
            ])
            .select();
          if (!res.error) {
            data = res.data;
            error = null;
          }
        }

        if (error) {
          console.warn('Supabase insert warning:', error.message);
        } else if (data && data[0]) {
          // Replace temp wish with confirmed row
          setWishes((prev) =>
            prev.map((w) =>
              w.id === tempWish.id
                ? {
                    id: data[0].id,
                    name: data[0].name || trimmedName,
                    text: data[0].text || trimmedText,
                    date: formatDate(data[0].created_at || data[0].date)
                  }
                : w
            )
          );
        }
      }
    } catch (err) {
      console.warn('Error inserting wish to Supabase:', err);
    }

    return true;
  };

  return { wishes, isLoading, addWish };
}
