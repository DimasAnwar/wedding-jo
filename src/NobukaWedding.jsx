import React, { useState, useEffect, useRef } from 'react';
import { weddingData } from './data/weddingData';
import {
  useCountdown,
  useGuestName,
  useWishes,
  useScrollReveal,
  useToast
} from './hooks';
import {
  Toast,
  Lightbox,
  BottomNav,
  OpeningCover,
  DesktopStickyLeft,
  HeroSection,
  QuranVerseSection,
  CoupleSection,
  EventSection,
  GallerySection,
  StorySection,
  RsvpSection,
  GiftSection,
  WishesSection,
  FooterSection
} from './components';

export default function NobukaWedding() {
  // Page / Modal states
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Slideshow indices
  const [heroIndex, setHeroIndex] = useState(0);
  const [footerIndex, setFooterIndex] = useState(0);

  // Refs
  const audioRef = useRef(null);

  // Custom Hooks
  const guestName = useGuestName('Tamu');
  const timeLeft = useCountdown(weddingData.eventDate.targetDate);
  const { wishes, addWish } = useWishes(weddingData.defaultWishes);
  const { toastMsg, showToast } = useToast(3000);
  useScrollReveal(isOpen);

  // Background Audio Controller
  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => console.log('Audio autoplay prevented'));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Slideshow Timer (Cycles images every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % weddingData.heroSlides.length);
      setFooterIndex((prev) => (prev + 1) % weddingData.heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Handlers
  const handleOpenInvitation = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsPlaying(true);
    }, 600);
  };

  const handleCopyText = (text, label) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} berhasil disalin!`);
  };

  const handleAddWish = (name, text) => {
    const success = addWish(name, text);
    if (success) {
      showToast('Ucapan berhasil dikirim!');
    }
    return success;
  };

  return (
    <div className="elementor elementor-253749" data-elementor-type="page" data-elementor-id="253749">
      {/* Background Audio Element */}
      <audio ref={audioRef} src={weddingData.audio.src} loop preload="auto" />

      {/* Floating Toast Notification */}
      <Toast message={toastMsg} />

      {/* Gallery Lightbox Modal */}
      <Lightbox
        imageSrc={lightboxImg}
        images={weddingData.gallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxImg(null)}
        onNavigate={(img, idx) => {
          setLightboxImg(img);
          setLightboxIndex(idx);
        }}
      />

      {/* 1. Cover Envelope Card Modal */}
      <OpeningCover
        isOpen={isOpen}
        isClosing={isClosing}
        guestName={guestName}
        coverData={weddingData.cover}
        onOpen={handleOpenInvitation}
      />

      {/* 2. Main Page Container */}
      <div className="elementor-element elementor-element-19c9698d e-flex e-con-boxed e-con e-parent">
        <div className="e-con-inner">
          {/* Desktop Sticky Left Column */}
          <DesktopStickyLeft
            guestName={guestName}
            coverData={weddingData.cover}
            eventDate={weddingData.eventDate}
          />

          {/* Main Invitation Column */}
          <div
            className="elementor-element elementor-element-53067d80 e-con-full e-flex e-con e-child"
            style={{ background: '#D4D4D2' }}
          >
            {/* Hero Section */}
            <HeroSection
              isOpen={isOpen}
              isClosing={isClosing}
              heroImage={weddingData.heroSlides[heroIndex]}
              coverData={weddingData.cover}
              eventDate={weddingData.eventDate}
              timeLeft={timeLeft}
              isPlaying={isPlaying}
              onToggleAudio={() => setIsPlaying(!isPlaying)}
            />

            {/* Quran Verse Section */}
            <QuranVerseSection quote={weddingData.quote} />

            {/* Couple Profile Section */}
            <CoupleSection
              groom={weddingData.groom}
              bride={weddingData.bride}
              invitationText={weddingData.invitationText}
            />

            {/* Event & Locations Section */}
            <EventSection events={weddingData.events} />

            {/* Gallery Section */}
            <GallerySection
              galleryImages={weddingData.gallery}
              onImageClick={(img, idx) => {
                setLightboxImg(img);
                setLightboxIndex(idx);
              }}
            />

            {/* Our Story Section */}
            <StorySection
              coupleName={weddingData.cover.coupleName}
              stories={weddingData.stories}
            />

            {/* RSVP / Konfirmasi Kehadiran Section */}
            <RsvpSection guestName={guestName} onShowToast={showToast} />

            {/* Digital Envelope / Gift Section */}
            <GiftSection gifts={weddingData.gifts} onCopy={handleCopyText} />

            {/* Wishes & Guestbook Section */}
            <WishesSection wishes={wishes} onAddWish={handleAddWish} />

            {/* Footer Section */}
            <FooterSection
              footerImage={weddingData.heroSlides[footerIndex]}
              copyrightText={weddingData.footer.copyright}
            />

            {/* Floating Bottom Navigation Bar */}
            <BottomNav isVisible={isOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}
