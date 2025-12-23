// Global JavaScript for Big Butt Association Shopify Theme
// This will be expanded with cart functionality and other features

console.log('Big Butt Association theme loaded');

// Auto-scrolling carousel with manual scroll support
function initCarousel() {
  const carouselTracks = document.querySelectorAll('.carousel-track');
  
  if (carouselTracks.length === 0) return;
  
  carouselTracks.forEach(function(track) {
    const speed = parseInt(track.getAttribute('data-carousel-speed')) || 30;
    const container = track.closest('.carousel-container');
    
    // Wait for images to load before calculating scroll width
    const images = track.querySelectorAll('img');
    let imagesLoaded = 0;
    const totalImages = images.length;
    
    function checkImagesLoaded() {
      imagesLoaded++;
      if (imagesLoaded >= totalImages || totalImages === 0) {
        initializeCarousel();
      }
    }
    
    if (totalImages > 0) {
      images.forEach(img => {
        if (img.complete) {
          checkImagesLoaded();
        } else {
          img.addEventListener('load', checkImagesLoaded);
          img.addEventListener('error', checkImagesLoaded);
        }
      });
    } else {
      // No images, initialize immediately
      setTimeout(initializeCarousel, 100);
    }
    
    function initializeCarousel() {
      // Auto-scroll variables
      let autoScrollAnimationId = null;
      let isPaused = false;
      let isUserInteracting = false;
      let userInteractionTimeout = null;
      
      // Calculate scroll width (half of total since we duplicate items)
      const scrollWidth = track.scrollWidth / 2;
      
      if (scrollWidth <= 0) {
        console.warn('Carousel scrollWidth is 0, retrying...');
        setTimeout(initializeCarousel, 200);
        return;
      }
      
      // Calculate scroll speed (pixels per frame at 60fps)
      const pixelsPerSecond = scrollWidth / speed;
      const pixelsPerFrame = pixelsPerSecond / 60;
      
      // Auto-scroll function
      function autoScroll() {
        if (isPaused || isUserInteracting) {
          autoScrollAnimationId = requestAnimationFrame(autoScroll);
          return;
        }
        
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
        stopAutoScroll();
        
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
    }
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initCarousel();

  // Cart Modal Functionality
  const cartModal = document.getElementById('cart-modal');
  const cartModalContinue = document.getElementById('cart-modal-continue');
  
  if (cartModal && cartModalContinue) {
    // Close modal when clicking continue shopping
    cartModalContinue.addEventListener('click', () => {
      cartModal.style.display = 'none';
    });
    
    // Close modal when clicking overlay
    const overlay = cartModal.querySelector('.cart-modal-overlay');
    if (overlay) {
      overlay.addEventListener('click', () => {
        cartModal.style.display = 'none';
      });
    }
    
    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && cartModal.style.display !== 'none') {
        cartModal.style.display = 'none';
      }
    });
  }

  // AJAX Add to Cart
  const addToCartForms = document.querySelectorAll('form[action*="cart/add"]');
  
  addToCartForms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton ? submitButton.textContent : 'Add to Cart';
      
      // Disable button and show loading state
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Adding...';
      }
      
      try {
        const formData = new FormData(form);
        const response = await fetch(window.routes.cart_add_url, {
          method: 'POST',
          body: formData
        });
        
        if (response.ok) {
          const data = await response.json();
          
          // Update cart count if element exists
          const cartCounts = document.querySelectorAll('.cart-count');
          if (cartCounts.length > 0) {
            // Get updated cart count from Shopify
            const cartResponse = await fetch(window.routes.cart_url + '.js');
            if (cartResponse.ok) {
              const cartData = await cartResponse.json();
              cartCounts.forEach(count => {
                count.textContent = cartData.item_count || 0;
              });
            } else if (data.item_count !== undefined) {
              cartCounts.forEach(count => {
                count.textContent = data.item_count;
              });
            }
          }
          
          // Show modal
          if (cartModal) {
            cartModal.style.display = 'flex';
          }
        } else {
          // Handle error
          const errorData = await response.json();
          console.error('Error adding to cart:', errorData);
          alert('There was an error adding the item to your cart. Please try again.');
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
        alert('There was an error adding the item to your cart. Please try again.');
      } finally {
        // Re-enable button
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      }
    });
  });
});

