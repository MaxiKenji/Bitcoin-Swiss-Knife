// Bitcoin Swiss Knife - Interactive functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize the application
    initializeApp();
    
    function initializeApp() {
        handleImageErrors(); // Handle icons first
        setupButtonInteractions();
        setupGridItemInteractions();
        setupKeyboardNavigation();
    }
    
    // Handle image loading errors and create fallback icons immediately
    function handleImageErrors() {
        const images = document.querySelectorAll('.section-icon');
        
        images.forEach((img, index) => {
            // Create fallback icons immediately since SVG files likely don't exist
            createFallbackIcon(img, index);
            
            img.addEventListener('error', function() {
                createFallbackIcon(this, index);
            });
            
            img.addEventListener('load', function() {
                // Add loaded class for potential animations
                this.classList.add('loaded');
            });
        });
    }
    
    // Create fallback icons with appropriate symbols
    function createFallbackIcon(img, index) {
        if (img.style.display === 'none') return; // Already handled
        
    

        
        const fallbackIcon = document.createElement('div');
        fallbackIcon.className = 'fallback-icon';
        fallbackIcon.innerHTML = symbol;
        fallbackIcon.style.cssText = `
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: #F7931A;
            background: rgba(247, 147, 26, 0.1);
            border-radius: 50%;
            border: 2px solid rgba(247, 147, 26, 0.3);
            transition: all 0.3s ease;
            filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
        `;
        
        
        img.parentNode.appendChild(fallbackIcon);
        
        // Add hover effects to fallback icons
        const gridItem = img.closest('.grid-item');
        if (gridItem) {
            gridItem.addEventListener('mouseenter', function() {
                fallbackIcon.style.transform = 'scale(1.15) rotate(8deg)';
                fallbackIcon.style.filter = 'drop-shadow(0 6px 12px rgba(247, 147, 26, 0.4)) brightness(1.1)';
            });
            
            gridItem.addEventListener('mouseleave', function() {
                fallbackIcon.style.transform = '';
                fallbackIcon.style.filter = 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))';
            });
        }
    }
    
    // Button interactions and analytics
    function setupButtonInteractions() {
        const buttons = document.querySelectorAll('.btn-text, .btn-donate');
        
        buttons.forEach(button => {
            // Add ripple effect on click for styled buttons
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Create ripple effect for styled buttons
                if (this.classList.contains('btn-donate')) {
                    createRippleEffect(this, e);
                }
                
                // Get the section title for analytics
                const gridItem = this.closest('.grid-item');
                const sectionTitle = gridItem.querySelector('.section-title').textContent;
                
                // Log interaction (for future analytics)
                console.log(`Button clicked: ${sectionTitle}`);
                
                // Add visual feedback
                if (this.classList.contains('btn-donate')) {
                    this.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                } else {
                    // For text buttons, add subtle scale effect
                    this.style.transform = 'scale(0.98) translateX(3px)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 150);
                }
                
                // Show placeholder message - ensure this is called
                setTimeout(() => {
                    showPlaceholderMessage(sectionTitle, this.textContent);
                }, 100);
            });
            
            // Enhanced hover effects
            button.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.2s ease';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
        });
    }
    
    // Create ripple effect for buttons
    function createRippleEffect(button, event) {
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
            z-index: 1000;
        `;
        
        button.appendChild(ripple);
        
        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 600);
    }
    
    // Enhanced grid item interactions
   
    
    // Keyboard navigation support
    function setupKeyboardNavigation() {
        const buttons = document.querySelectorAll('.btn-text, .btn-donate');
        
        buttons.forEach((button, index) => {
            button.setAttribute('tabindex', index + 1);
            
            button.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
            
            button.addEventListener('focus', function() {
                this.style.outline = '3px solid #F7931A';
                this.style.outlineOffset = '2px';
            });
            
            button.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
            });
        });
    }
    
    // Show placeholder message for button clicks
    function showPlaceholderMessage(sectionTitle, buttonText) {
        // Remove any existing modals first
        const existingOverlay = document.querySelector('.modal-overlay');
        if (existingOverlay) {
            existingOverlay.remove();
        }
        
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(5px);
            animation: modalFadeIn 0.3s ease-out;
        `;
        
        // Create modal content
        const modal = document.createElement('div');
        modal.className = 'modal-content';
        modal.style.cssText = `
            background: #1E1E1E;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            max-width: 400px;
            width: 90%;
            box-shadow: 
                -20px -20px 40px 0 rgba(255, 255, 255, 0.05), 
                20px 20px 40px 0 rgba(0, 0, 0, 0.25);
            border: 1px solid rgba(166, 153, 137, 0.2);
            animation: modalAppear 0.3s ease-out;
            position: relative;
        `;
        
        modal.innerHTML = `
            <h3 style="color: #F7931A; margin-bottom: 15px; font-size: 1.3rem;">
                ${sectionTitle}
            </h3>
            <p style="color: #A69989; margin-bottom: 20px; line-height: 1.5;">
                This feature will be available soon! 🚀<br>
                You clicked "${buttonText}" for ${sectionTitle}.
            </p>
            <button class="close-modal-btn" style="
                background: linear-gradient(135deg, #F7931A 0%, #FFCD49 100%);
                color: #1E1E1E;
                border: none;
                padding: 10px 20px;
                border-radius: 20px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 14px;
            ">
                Got it!
            </button>
        `;
        
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        // Close modal functionality
        const closeBtn = modal.querySelector('.close-modal-btn');
        const closeModal = () => {
            overlay.style.animation = 'modalFadeOut 0.3s ease-out';
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 300);
        };
        
        closeBtn.addEventListener('click', closeModal);
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeModal();
            }
        });
        
        // Close with Escape key
        const escapeHandler = function(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
        
        // Auto-focus the close button for accessibility
        setTimeout(() => {
            closeBtn.focus();
        }, 100);
    }
    
    // Add CSS animations for modal and other effects
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes modalFadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        @keyframes modalFadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
        
        @keyframes modalAppear {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
        
        .section-icon.loaded {
            animation: iconLoad 0.5s ease-out;
        }
        
        @keyframes iconLoad {
            from {
                opacity: 0;
                transform: scale(0.8);
            }
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        /* Additional hover effects for text buttons */
        .btn-text {
            position: relative;
        }
        
        .btn-text::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: #F7931A;
            transition: width 0.3s ease;
        }
        
        .btn-text:hover::after {
            width: 100%;
        }
        
        /* Modal button hover effect */
        .close-modal-btn:hover {
            background: linear-gradient(135deg, #FFCD49 0%, #F7931A 100%) !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(247, 147, 26, 0.4);
        }
    `;
    document.head.appendChild(style);
    
    // Performance optimization: Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Reset any transforms on resize
            const gridItems = document.querySelectorAll('.grid-item');
            gridItems.forEach(item => {
                item.style.transform = '';
            });
        }, 250);
    });
    
    // Add loading complete class
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 1000);
});

// Utility function for smooth scrolling (if needed in future)
function smoothScrollTo(target, duration = 800) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Export for potential future use
window.BitcoinSwissKnife = {
    smoothScrollTo
};