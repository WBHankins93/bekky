// Global JavaScript for Big Butt Association Shopify Theme
// This will be expanded with cart functionality and other features

console.log('Big Butt Association theme loaded');

// Auto-scrolling carousel with manual scroll support
document.addEventListener('DOMContentLoaded', function() {
  const carouselTracks = document.querySelectorAll('.carousel-track');
  
  carouselTracks.forEach(function(track) {
    const speed = parseInt(track.getAttribute('data-carousel-speed')) || 30;
    const fps = 60;
    
    // Calculate total width for seamless loop
    const items = track.querySelectorAll('.carousel-item');
    if (items.length > 0) {
      const itemWidth = items[0].offsetWidth;
      const gap = 16; // 1rem = 16px
      const totalWidth = (itemWidth + gap) * (items.length / 2); // Divide by 2 since we duplicate
      track.style.width = totalWidth * 2 + 'px';
    }
    
    // Auto-scroll variables
    let autoScrollInterval = null;
    let isUserScrolling = false;
    let scrollTimeout = null;
    
    // Calculate pixels per frame for smooth scrolling
    const scrollWidth = track.scrollWidth / 2;
    const pixelsPerSecond = scrollWidth / speed;
    const pixelsPerFrame = pixelsPerSecond / fps;
    
    // Start auto-scroll
    function startAutoScroll() {
      if (autoScrollInterval) return;
      
      autoScrollInterval = setInterval(() => {
        if (!isUserScrolling) {
          track.scrollLeft += pixelsPerFrame;
          
          // Reset to beginning when reaching halfway point (seamless loop)
          if (track.scrollLeft >= scrollWidth) {
            track.scrollLeft = 0;
          }
        }
      }, 1000 / fps);
    }
    
    // Stop auto-scroll
    function stopAutoScroll() {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
      }
    }
    
    // Handle user scroll interaction
    function handleUserScroll() {
      isUserScrolling = true;
      stopAutoScroll();
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Resume auto-scroll after user stops scrolling
      scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
        startAutoScroll();
      }, 1500);
    }
    
    // Manual scroll support
    let isDown = false;
    let startX;
    let scrollLeft;
    
    // Mouse events
    track.addEventListener('mousedown', (e) => {
      isDown = true;
      track.style.cursor = 'grabbing';
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      handleUserScroll();
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
      const walk = (x - startX) * 2; // Scroll speed multiplier
      track.scrollLeft = scrollLeft - walk;
      handleUserScroll();
    });
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;
    
    track.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].pageX - track.offsetLeft;
      touchScrollLeft = track.scrollLeft;
      handleUserScroll();
    });
    
    track.addEventListener('touchmove', (e) => {
      if (!touchStartX) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - touchStartX) * 2;
      track.scrollLeft = touchScrollLeft - walk;
      handleUserScroll();
    });
    
    track.addEventListener('touchend', () => {
      touchStartX = 0;
    });
    
    // Enable scroll with mouse wheel
    track.addEventListener('wheel', (e) => {
      e.preventDefault();
      track.scrollLeft += e.deltaY;
      handleUserScroll();
    });
    
    // Handle scroll event (for touch scrolling on mobile and infinite loop)
    track.addEventListener('scroll', () => {
      handleUserScroll();
      
      // Handle infinite scroll loop
      if (track.scrollLeft >= scrollWidth) {
        track.scrollLeft = track.scrollLeft - scrollWidth;
      } else if (track.scrollLeft <= 0) {
        track.scrollLeft = scrollWidth;
      }
    });
    
    // Start auto-scroll
    startAutoScroll();
  });
});

