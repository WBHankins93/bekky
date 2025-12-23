// Global JavaScript for Big Butt Association Shopify Theme
// This will be expanded with cart functionality and other features

console.log('Big Butt Association theme loaded');

// Auto-scrolling carousel
document.addEventListener('DOMContentLoaded', function() {
  const carouselTracks = document.querySelectorAll('.carousel-track');
  
  carouselTracks.forEach(function(track) {
    const speed = parseInt(track.getAttribute('data-carousel-speed')) || 40;
    const duration = speed; // seconds
    
    // Set animation duration dynamically
    track.style.animationDuration = duration + 's';
    
    // Calculate total width for seamless loop
    const items = track.querySelectorAll('.carousel-item');
    if (items.length > 0) {
      const itemWidth = items[0].offsetWidth;
      const gap = 16; // 1rem = 16px
      const totalWidth = (itemWidth + gap) * (items.length / 2); // Divide by 2 since we duplicate
      track.style.width = totalWidth * 2 + 'px';
    }
  });
});

