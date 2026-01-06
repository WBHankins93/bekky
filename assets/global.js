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
    
    // Detect mobile - slower speed on mobile
    const isMobile = window.innerWidth < 768;
    const adjustedSpeed = isMobile ? speed * 1.5 : speed; // 50% slower on mobile
    
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
      
      // Calculate scroll speed (pixels per frame at 60fps) - slower on mobile
      const pixelsPerSecond = scrollWidth / adjustedSpeed;
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
        // Resume auto-scroll after touch ends on mobile
        setTimeout(() => {
          if (!isPaused && !isUserInteracting) {
            startAutoScroll();
          }
        }, 2000); // Wait 2 seconds after touch ends before resuming
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

// Cart State Management
function manageCartState() {
  // Only manage cart for guest users
  if (window.customerLoggedIn) {
    // Logged-in users: Shopify handles cart persistence automatically
    return;
  }

  // Guest users: Reset cart on new sessions
  const sessionId = sessionStorage.getItem('cart_session_id');
  
  if (!sessionId) {
    // New session - clear cart
    const newSessionId = Date.now().toString();
    sessionStorage.setItem('cart_session_id', newSessionId);
    
    // Clear cart via API
    fetch(window.routes.cart_url + '.js')
      .then(response => response.json())
      .then(cart => {
        if (cart.item_count > 0) {
          // Clear all items from cart
          const updates = {};
          cart.items.forEach(item => {
            updates[item.key] = 0;
          });
          
          fetch(window.routes.cart_update_url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ updates })
          })
          .then(() => {
            // Update cart count display
            const cartCounts = document.querySelectorAll('.cart-count');
            cartCounts.forEach(count => {
              count.textContent = '0';
            });
          })
          .catch(error => {
            console.log('Could not clear cart:', error);
          });
        }
      })
      .catch(error => {
        console.log('Could not check cart:', error);
      });
  }
  // If sessionId exists, keep the cart (same session)
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  // Manage cart state first
  manageCartState();
  
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
          body: formData,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        });
        
        // Check if response is ok or if it's a redirect (Shopify sometimes redirects on success)
        const contentType = response.headers.get('content-type');
        const isJson = contentType && contentType.includes('application/json');
        
        if (response.ok || response.redirected) {
          let data = {};
          
          // Try to parse JSON if available
          if (isJson) {
            try {
              data = await response.json();
            } catch (e) {
              // If JSON parsing fails but response is ok, assume success
              console.log('Response OK but not JSON, assuming success');
            }
          }
          
          // Update cart count if element exists
          const cartCounts = document.querySelectorAll('.cart-count');
          if (cartCounts.length > 0) {
            // Get updated cart count from Shopify
            try {
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
            } catch (e) {
              console.log('Could not update cart count, but item was likely added');
            }
          }
          
          // Show modal
          if (cartModal) {
            cartModal.style.display = 'flex';
          }
        } else {
          // Only show error if response is actually an error (4xx, 5xx)
          let errorMessage = 'There was an error adding the item to your cart. Please try again.';
          try {
            if (isJson) {
              const errorData = await response.json();
              if (errorData.description) {
                errorMessage = errorData.description;
              }
            }
          } catch (e) {
            // If we can't parse error, use default message
          }
          console.error('Error adding to cart:', response.status, errorMessage);
          alert(errorMessage);
        }
      } catch (error) {
        // Only show error for network errors or actual failures
        console.error('Network error adding to cart:', error);
        // Don't show alert for network errors if cart might have been updated
        // Check cart to see if item was actually added
        try {
          const cartCheck = await fetch(window.routes.cart_url + '.js');
          if (cartCheck.ok) {
            const cartData = await cartCheck.json();
            // If cart has items, assume success despite error
            if (cartData.item_count > 0) {
              const cartCounts = document.querySelectorAll('.cart-count');
              cartCounts.forEach(count => {
                count.textContent = cartData.item_count || 0;
              });
              if (cartModal) {
                cartModal.style.display = 'flex';
              }
              return; // Don't show error if cart was updated
            }
          }
        } catch (e) {
          // If we can't check cart, show error
        }
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

