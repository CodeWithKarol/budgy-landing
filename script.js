// ========================================
// CTA BUTTON HANDLERS
// ========================================

function initCTAButtons() {
  // Helper function to scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Helper to close mobile menu
  const closeMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    if (mobileMenu && menuToggle) {
      mobileMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  };

  // Get Started buttons - scroll to contact
  document
    .querySelectorAll(".nav-cta, .cta-button.primary.large")
    .forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("contact");
        closeMobileMenu();
      });
    });

  // Watch Demo buttons - scroll to video
  document
    .querySelectorAll(".cta-button.secondary-outline")
    .forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("video");
      });
    });

  // Final CTA buttons
  document.querySelectorAll(".cta-button-modern").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const href = button.getAttribute("href");
      const text = button.textContent.trim();
      if (href === "#contact" || text.includes("Get Started")) {
        scrollToSection("contact");
      } else if (href === "#video" || text.includes("Demo")) {
        scrollToSection("video");
      }
    });
  });
}

// ========================================
// SMOOTH SCROLLING & NAVIGATION
// ========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    // Only scroll if href is a valid selector (not just "#")
    if (href && href !== "#") {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// ========================================
// SIGN-UP FORM HANDLING
// ========================================

const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const goal = this.querySelector("select").value;

    // Here you would typically send this to your backend
    console.log("Sign-up submitted:", {
      name,
      email,
      goal,
    });

    // Show success message
    showNotification(
      "Welcome to Budgy! Check your email to get started.",
      "success"
    );

    // Reset form
    this.reset();
  });
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.textContent = message;

  // Add notification styles
  const style = document.createElement("style");
  if (!document.getElementById("notification-styles")) {
    style.id = "notification-styles";
    style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                font-weight: 500;
                animation: slideIn 0.3s ease;
                z-index: 1000;
                max-width: 400px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }
            
            .notification-success {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                color: white;
            }
            
            .notification-error {
                background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                color: white;
            }
            
            .notification-info {
                background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
                color: white;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(500px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @media (max-width: 768px) {
                .notification {
                    left: 20px;
                    right: 20px;
                    max-width: none;
                }
            }
        `;
    document.head.appendChild(style);
  }

  document.body.appendChild(notification);

  // Remove notification after 5 seconds
  setTimeout(() => {
    notification.style.animation = "slideIn 0.3s ease reverse";
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.6s ease forwards";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add fade-in animation CSS
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .trust-card,
    .bento-card,
    .video-card,
    .testimonial-card,
    .resource-card {
        opacity: 0;
    }
`;
document.head.appendChild(styleSheet);

// Observe elements for animation
document
  .querySelectorAll(
    ".trust-card, .bento-card, .video-card, .testimonial-card, .resource-card"
  )
  .forEach((el) => {
    observer.observe(el);
  });

// ========================================
// MOBILE MENU TOGGLE (if implemented in HTML)
// ========================================

function initMobileMenu() {
  const menuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  const toggleScroll = (disable) => {
    document.body.style.overflow = disable ? "hidden" : "";
    document.documentElement.style.overflow = disable ? "hidden" : "";
  };

  if (menuButton && mobileMenu) {
    // Toggle menu on button click
    menuButton.addEventListener("click", function (e) {
      e.stopPropagation();
      menuButton.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      toggleScroll(mobileMenu.classList.contains("active"));
    });

    // Close menu when a link is clicked
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.classList.remove("active");
        mobileMenu.classList.remove("active");
        toggleScroll(false);
      });
    });

    // Close menu when clicking on the CTA button
    const mobileCTA = document.querySelector(".mobile-menu-cta");
    if (mobileCTA) {
      mobileCTA.addEventListener("click", () => {
        menuButton.classList.remove("active");
        mobileMenu.classList.remove("active");
        toggleScroll(false);
      });
    }

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickOnButton = menuButton.contains(event.target);

      if (
        !isClickInsideMenu &&
        !isClickOnButton &&
        mobileMenu.classList.contains("active")
      ) {
        menuButton.classList.remove("active");
        mobileMenu.classList.remove("active");
        toggleScroll(false);
      }
    });

    // Close menu on window resize (when transitioning to desktop)
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        menuButton.classList.remove("active");
        mobileMenu.classList.remove("active");
        toggleScroll(false);
      }
    });

    // Close menu on Escape key press
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
        menuButton.classList.remove("active");
        mobileMenu.classList.remove("active");
        toggleScroll(false);
      }
    });
  }
}

// ========================================
// VIDEO MODAL HANDLING
// ========================================

function initVideoModals() {
  // Handle play button large click
  const playButtonLarge = document.querySelector(".play-button-large");
  if (playButtonLarge) {
    playButtonLarge.addEventListener("click", function () {
      // Prevent multiple modals
      if (document.querySelector(".video-modal")) {
        return;
      }

      // Create modal
      const modal = document.createElement("div");
      modal.className = "video-modal";
      modal.innerHTML = `
				<div class="video-modal-overlay"></div>
				<button class="video-modal-close" aria-label="Close">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
				<div class="video-modal-wrapper">
					<div class="video-modal-content">
						<div class="video-modal-player">
							<iframe
								width="100%"
								height="100%"
								src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&rel=0"
								title="Video Player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
					</div>
				</div>
			`;

      // Add modal styles
      if (!document.getElementById("video-modal-styles")) {
        const style = document.createElement("style");
        style.id = "video-modal-styles";
        style.textContent = `
					.video-modal {
						position: fixed;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						z-index: 10000;
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 20px;
						animation: fadeIn 0.3s ease;
					}
					
					.video-modal-overlay {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background: rgba(15, 23, 42, 0.95);
						backdrop-filter: blur(8px);
						cursor: pointer;
					}
					
					.video-modal-wrapper {
						position: relative;
						width: 100%;
						max-width: 1200px;
						z-index: 1;
					}
					
					.video-modal-content {
						position: relative;
						width: 100%;
						aspect-ratio: 16 / 9;
						background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
						border-radius: 24px;
						overflow: hidden;
						box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6), 
									0 0 0 1px rgba(255, 255, 255, 0.1);
						animation: modalSlideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
					}
					
					.video-modal-player {
						width: 100%;
						height: 100%;
						position: relative;
						overflow: hidden;
					}
					
					.video-modal-player iframe {
						position: absolute;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
					}
					
					.video-modal-close {
						position: fixed;
						top: 20px;
						right: 20px;
						background: rgba(255, 255, 255, 0.1);
						backdrop-filter: blur(12px);
						-webkit-backdrop-filter: blur(12px);
						border: 2px solid rgba(255, 255, 255, 0.15);
						color: white;
						cursor: pointer;
						z-index: 10002;
						width: 52px;
						height: 52px;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 50%;
						transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
						padding: 0;
						box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
					}
					
					.video-modal-close:hover {
						transform: scale(1.1) rotate(90deg);
						background: rgba(255, 255, 255, 0.2);
						border-color: rgba(255, 255, 255, 0.3);
						box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
					}
					
					.video-modal-close svg {
						width: 24px;
						height: 24px;
						pointer-events: none;
					}
					
					.video-modal-close svg line {
						pointer-events: none;
					}
					
					@keyframes fadeIn {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}
					
					@keyframes fadeOut {
						from {
							opacity: 1;
						}
						to {
							opacity: 0;
						}
					}
					
					@keyframes modalSlideIn {
						from {
							opacity: 0;
							transform: scale(0.9) translateY(30px);
						}
						to {
							opacity: 1;
							transform: scale(1) translateY(0);
						}
					}
					
					@media (max-width: 768px) {
						.video-modal {
							padding: 15px;
						}
						
						.video-modal-content {
							border-radius: 16px;
						}
						
						.video-modal-close {
							top: 15px;
							right: 15px;
							width: 48px;
							height: 48px;
						}
						
						.video-modal-close svg {
							width: 20px;
							height: 20px;
							pointer-events: none;
						}
						
						.video-modal-close svg line {
							pointer-events: none;
						}
					}
					
					@media (max-width: 480px) {
						.video-modal {
							padding: 0;
						}
						
						.video-modal-content {
							border-radius: 0;
							box-shadow: none;
						}
						
						.video-modal-close {
							top: 15px;
							right: 15px;
							width: 44px;
							height: 44px;
							background: rgba(0, 0, 0, 0.8);
							border-color: rgba(255, 255, 255, 0.2);
						}
						
						.video-modal-close svg {
							pointer-events: none;
						}
						
						.video-modal-close svg line {
							pointer-events: none;
						}
					}
				`;
        document.head.appendChild(style);
      }

      // Add modal to body
      document.body.appendChild(modal);
      document.body.style.overflow = "hidden";

      // Close modal functionality
      const closeModal = () => {
        modal.style.animation = "fadeOut 0.2s ease";
        setTimeout(() => {
          modal.remove();
          document.body.style.overflow = "";
        }, 200);
      };

      // Get elements
      const closeButton = modal.querySelector(".video-modal-close");
      const overlay = modal.querySelector(".video-modal-overlay");
      const videoContent = modal.querySelector(".video-modal-content");

      // Close button - direct handler without stopPropagation
      if (closeButton) {
        closeButton.addEventListener(
          "click",
          (e) => {
            closeModal();
          },
          true
        );
      }

      // Overlay click
      if (overlay) {
        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) {
            closeModal();
          }
        });
      }

      // Prevent clicks on video content from closing modal
      if (videoContent) {
        videoContent.addEventListener("click", (e) => {
          e.stopPropagation();
        });
      }

      // Close on Escape key
      const escapeClose = (e) => {
        if (e.key === "Escape") {
          closeModal();
          document.removeEventListener("keydown", escapeClose);
        }
      };
      document.addEventListener("keydown", escapeClose);
    });
  }

  const videoCards = document.querySelectorAll(".video-card");

  videoCards.forEach((card) => {
    card.addEventListener("click", function () {
      const videoTitle = this.querySelector(".video-title").textContent;
      const videoSubtitle = this.querySelector(".video-subtitle").textContent;

      // In a real implementation, you would open an actual video
      showNotification(`Opening: ${videoTitle}`, "info");

      // Example: You could use a modal or iframe here
      console.log("Video clicked:", {
        videoTitle,
        videoSubtitle,
      });
    });
  });
}

initVideoModals(); // ========================================
// NAVBAR SCROLL EFFECTS
// ========================================

const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  // Add scrolled class to header
  if (currentScroll > 20) {
    header?.classList.add("scrolled");
  } else {
    header?.classList.remove("scrolled");
  }

  lastScrollY = currentScroll;
});

// ========================================
// FORM VALIDATION
// ========================================

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Add email validation to form
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value && !validateEmail(this.value)) {
      this.style.borderColor = "#FF6B6B";
    } else {
      this.style.borderColor = "rgba(91, 163, 168, 0.2)";
    }
  });
});

// ========================================
// COUNTER ANIMATION (for stats, if added)
// ========================================

function animateCounter(element, target, duration = 1000) {
  const increment = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

// ========================================
// GTAG / ANALYTICS EVENT TRACKING
// ========================================

function trackEvent(eventName, eventData = {}) {
  if (typeof gtag !== "undefined") {
    gtag("event", eventName, eventData);
  }
}

// Track CTA button clicks
document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("click", function (e) {
    const buttonText = this.textContent;
    trackEvent("cta_click", {
      button_text: buttonText,
      location: this.closest("section")?.className || "unknown",
    });
  });
});

// Track form submissions
document.addEventListener("submit", function (e) {
  if (e.target.id === "signupForm") {
    trackEvent("signup_submit", {
      form_type: "main_signup",
    });
  }
});

// ========================================
// DOCUMENT READY
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("Landing page initialized successfully");

  // Initialize all components
  initCTAButtons();
  initMobileMenu();
  initVideoModals();

  // Track page view
  trackEvent("page_view", {
    page_location: window.location.href,
  });
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Get user's preferred theme
function getPreferredTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Set theme
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

// Initialize theme on page load
setTheme(getPreferredTheme());
