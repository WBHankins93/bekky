// Global JavaScript for Big Butt Association Shopify Theme
// This will be expanded with cart functionality and other features

console.log('Big Butt Association theme loaded');

// Auto-scrolling carousel with manual scroll support
document.addEventListener('DOMContentLoaded', function() {
  const carouselTracks = document.querySelectorAll('.carousel-track');
  
  carouselTracks.forEach(function(track) {
    const speed = parseInt(track.getAttribute('data-carousel-speed')) || 30;
    const container = track.closest('.carousel-container');
    
    // Auto-scroll variables
    let autoScrollAnimationId = null;
    let isPaused = false;
    let isUserInteracting = false;
    let userInteractionTimeout = null;
    let lastScrollTime = Date.now();
    
    // Calculate scroll width (half of total since we duplicate items)
    const scrollWidth = track.scrollWidth / 2;
    
    // Calculate scroll speed
    const pixelsPerSecond = scrollWidth / speed;
    const pixelsPerFrame = pixelsPerSecond / 60; // 60fps
    
    // Auto-scroll function
    function autoScroll() {
      if (isPaused || isUserInteracting) {
        autoScrollAnimationId = requestAnimationFrame(autoScroll);
        return;
      }
      
      const now = Date.now();
      const deltaTime = (now - lastScrollTime) / 1000; // Convert to seconds
      lastScrollTime = now;
      
      // Smooth scroll increment
      track.scrollLeft += pixelsPerFrame;
      
      // Handle infinite loop - reset to beginning when reaching halfway
      if (track.scrollLeft >= scrollWidth) {
        track.scrollLeft = track.scrollLeft - scrollWidth;
      }
      
      autoScrollAnimationId = requestAnimationFrame(autoScroll);
    }
    
    // Start auto-scroll
    function startAutoScroll() {
      if (autoScrollAnimationId) return;
      lastScrollTime = Date.now();
      isPaused = false;
      autoScrollAnimationId = requestAnimationFrame(autoScroll);
    }
    
    // Stop auto-scroll
    function stopAutoScroll() {
      if (autoScrollAnimationId) {
        cancelAnimationFrame(autoScrollAnimationId);
        autoScrollAnimationId = null;
      }
    }
    
    // Handle user interaction
    function handleUserInteraction() {
      isUserInteracting = true;
      
      // Clear existing timeout
      if (userInteractionTimeout) {
        clearTimeout(userInteractionTimeout);
      }
      
      // Resume auto-scroll after user stops interacting
      userInteractionTimeout = setTimeout(() => {
        isUserInteracting = false;
        if (!isPaused) {
          startAutoScroll();
        }
      }, 1500);
    }
    
    // Pause on hover
    if (container) {
      container.addEventListener('mouseenter', () => {
        isPaused = true;
        stopAutoScroll();
      });
      
      container.addEventListener('mouseleave', () => {
        isPaused = false;
        if (!isUserInteracting) {
          startAutoScroll();
        }
      });
    }
    
    // Manual scroll support - mouse drag
    let isDown = false;
    let startX;
    let scrollLeft;
    
    track.addEventListener('mousedown', (e) => {
      isDown = true;
      track.style.cursor = 'grabbing';
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      handleUserInteraction();
    });
    
    track.addEventListener('mouseleave', () => {
      isDown = false;
      track.style.cursor = 'grab';
    });
    
    track.addEventListener('mouseup', () => {
      isDown = false;
      track.style.cursor = 'grab';
    });
    
    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
      handleUserInteraction();
    });
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;
    
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].pageX - track.offsetLeft;
      touchScrollLeft = track.scrollLeft;
      handleUserInteraction();
    });
    
    track.addEventListener('touchmove', (e) => {
      if (!touchStartX) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - touchStartX) * 2;
      track.scrollLeft = touchScrollLeft - walk;
      handleUserInteraction();
    });
    
    track.addEventListener('touchend', () => {
      touchStartX = 0;
    });
    
    // Mouse wheel scroll
    track.addEventListener('wheel', (e) => {
      e.preventDefault();
      track.scrollLeft += e.deltaY;
      handleUserInteraction();
    });
    
    // Handle scroll event for infinite loop (when user scrolls manually)
    track.addEventListener('scroll', () => {
      // Handle infinite scroll loop
      if (track.scrollLeft >= scrollWidth) {
        track.scrollLeft = track.scrollLeft - scrollWidth;
      } else if (track.scrollLeft <= 0) {
        track.scrollLeft = scrollWidth + track.scrollLeft;
      }
    });
    
    // Start auto-scroll initially
    startAutoScroll();
  });
});

