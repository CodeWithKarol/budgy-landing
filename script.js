// ========================================
// SMOOTH SCROLLING & NAVIGATION
// ========================================

document
	.querySelectorAll('a[href^="#"]')
	.forEach((anchor) => {
		anchor.addEventListener(
			"click",
			function (e) {
				e.preventDefault();
				const target = document.querySelector(
					this.getAttribute("href")
				);
				if (target) {
					target.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}
		);
	});

// ========================================
// SIGN-UP FORM HANDLING
// ========================================

const signupForm =
	document.getElementById("signupForm");
if (signupForm) {
	signupForm.addEventListener(
		"submit",
		function (e) {
			e.preventDefault();

			// Get form values
			const name = this.querySelector(
				'input[type="text"]'
			).value;
			const email = this.querySelector(
				'input[type="email"]'
			).value;
			const goal =
				this.querySelector("select").value;

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
		}
	);
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================

function showNotification(
	message,
	type = "info"
) {
	// Create notification element
	const notification =
		document.createElement("div");
	notification.className = `notification notification-${type}`;
	notification.textContent = message;

	// Add notification styles
	const style = document.createElement("style");
	if (
		!document.getElementById(
			"notification-styles"
		)
	) {
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
                background: linear-gradient(135deg, #5BA3A8 0%, #4A8B92 100%);
                color: white;
            }
            
            .notification-error {
                background: linear-gradient(135deg, #FF6B6B 0%, #FF5252 100%);
                color: white;
            }
            
            .notification-info {
                background: linear-gradient(135deg, #4ECDC4 0%, #44B8AC 100%);
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
		notification.style.animation =
			"slideIn 0.3s ease reverse";
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

const observer = new IntersectionObserver(
	function (entries) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.animation =
					"fadeInUp 0.6s ease forwards";
				observer.unobserve(entry.target);
			}
		});
	},
	observerOptions
);

// Add fade-in animation CSS
const styleSheet =
	document.createElement("style");
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
    .feature-block,
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
		".trust-card, .feature-block, .video-card, .testimonial-card, .resource-card"
	)
	.forEach((el) => {
		observer.observe(el);
	});

// ========================================
// MOBILE MENU TOGGLE (if implemented in HTML)
// ========================================

function initMobileMenu() {
	const menuButton = document.getElementById(
		"mobileMenuButton"
	);
	const mobileMenu =
		document.getElementById("mobileMenu");
	const mobileLinks = document.querySelectorAll(
		".mobile-nav-link"
	);

	console.log("Mobile Menu Debug:", {
		menuButton,
		mobileMenu,
		linkCount: mobileLinks.length,
	});

	if (menuButton && mobileMenu) {
		console.log(
			"Mobile menu initialized successfully"
		);

		// Toggle menu on button click
		menuButton.addEventListener(
			"click",
			function (e) {
				console.log("Hamburger clicked");
				e.stopPropagation();
				menuButton.classList.toggle("active");
				mobileMenu.classList.toggle("active");
				console.log(
					"Menu active:",
					mobileMenu.classList.contains("active")
				);
			}
		);

		// Close menu when a link is clicked
		mobileLinks.forEach((link) => {
			link.addEventListener("click", () => {
				menuButton.classList.remove("active");
				mobileMenu.classList.remove("active");
			});
		});

		// Close menu when clicking on the CTA button
		const mobileCTA = document.querySelector(
			".mobile-nav-cta"
		);
		if (mobileCTA) {
			mobileCTA.addEventListener("click", () => {
				menuButton.classList.remove("active");
				mobileMenu.classList.remove("active");
			});
		}

		// Close menu when clicking outside
		document.addEventListener(
			"click",
			function (event) {
				const isClickInsideMenu =
					mobileMenu.contains(event.target);
				const isClickOnButton =
					menuButton.contains(event.target);

				if (
					!isClickInsideMenu &&
					!isClickOnButton
				) {
					menuButton.classList.remove("active");
					mobileMenu.classList.remove("active");
				}
			}
		);
	}
}

// ========================================
// VIDEO MODAL HANDLING
// ========================================

function initVideoModals() {
	const videoCards = document.querySelectorAll(
		".video-card"
	);

	videoCards.forEach((card) => {
		card.addEventListener("click", function () {
			const videoTitle = this.querySelector(
				".video-title"
			).textContent;
			const videoSubtitle = this.querySelector(
				".video-subtitle"
			).textContent;

			// In a real implementation, you would open an actual video
			showNotification(
				`Opening: ${videoTitle}`,
				"info"
			);

			// Example: You could use a modal or iframe here
			console.log("Video clicked:", {
				videoTitle,
				videoSubtitle,
			});
		});
	});
}

initVideoModals();

// ========================================
// NAVBAR SCROLL EFFECTS
// ========================================

const navbar = document.querySelector(".navbar");
let lastScrollY = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.scrollY;

	if (currentScroll > 50) {
		navbar.style.boxShadow =
			"0 4px 20px rgba(91, 163, 168, 0.15)";
	} else {
		navbar.style.boxShadow =
			"0 2px 10px rgba(91, 163, 168, 0.1)";
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
const emailInputs = document.querySelectorAll(
	'input[type="email"]'
);
emailInputs.forEach((input) => {
	input.addEventListener("blur", function () {
		if (
			this.value &&
			!validateEmail(this.value)
		) {
			this.style.borderColor = "#FF6B6B";
		} else {
			this.style.borderColor =
				"rgba(91, 163, 168, 0.2)";
		}
	});
});

// ========================================
// COUNTER ANIMATION (for stats, if added)
// ========================================

function animateCounter(
	element,
	target,
	duration = 1000
) {
	const increment = target / (duration / 16);
	let current = 0;

	const timer = setInterval(() => {
		current += increment;
		if (current >= target) {
			element.textContent =
				target.toLocaleString();
			clearInterval(timer);
		} else {
			element.textContent =
				Math.floor(current).toLocaleString();
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
	console.log(
		"Event tracked:",
		eventName,
		eventData
	);
}

// Track CTA button clicks
document
	.querySelectorAll(".cta-button")
	.forEach((button) => {
		button.addEventListener(
			"click",
			function (e) {
				const buttonText = this.textContent;
				trackEvent("cta_click", {
					button_text: buttonText,
					location:
						this.closest("section")?.className ||
						"unknown",
				});
			}
		);
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

document.addEventListener(
	"DOMContentLoaded",
	function () {
		console.log(
			"Landing page initialized successfully"
		);

		// Initialize all components
		initMobileMenu();
		initVideoModals();

		// Track page view
		trackEvent("page_view", {
			page_location: window.location.href,
		});
	}
);

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Get user's preferred theme
function getPreferredTheme() {
	const savedTheme =
		localStorage.getItem("theme");
	if (savedTheme) return savedTheme;

	return window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches
		? "dark"
		: "light";
}

// Set theme
function setTheme(theme) {
	document.documentElement.setAttribute(
		"data-theme",
		theme
	);
	localStorage.setItem("theme", theme);
}

// Initialize theme on page load
setTheme(getPreferredTheme());
