# 💰 Budgy - Financial Coach Landing Page

A modern, responsive landing page for Budgy - an AI-powered personal finance application. Built with pure HTML, CSS, and JavaScript, featuring smooth animations, interactive components, and a clean, professional design.

![Budgy Landing Page](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🌟 Features

### 🎨 Design & UI

- **Modern Glassmorphism Design** - Backdrop blur effects and semi-transparent elements
- **Gradient Accents** - Beautiful gradient overlays and color transitions
- **Bento Grid Layout** - Modern card-based feature showcase
- **Floating Animations** - Smooth floating cards and animated elements
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop (9 breakpoints)

### 🧩 Page Components

#### Navigation Header

- Fixed header with glassmorphism backdrop blur
- Smooth scroll effects and shadow enhancement
- Mobile hamburger menu with slide-in drawer
- Desktop navigation with pill-style button group
- Logo with hover animations

#### Hero Section

- Bold headline with gradient text effect
- Badge showing "#1 Personal Finance App of 2025"
- Dual CTAs (Start Free Trial & See How It Works)
- Social proof with user avatars and star ratings
- Hero image with floating statistic cards
- Animated background patterns and gradient orbs

#### Trust Section

- Logo strip with partner companies
- Security features highlight (SOC2, AES-256 encryption, Private AI)
- Split layout with feature list and imagery
- Floating security badges
- "No Hidden Fees" transparency messaging

#### Features Section (Bento Grid)

5 interactive feature cards:

1. **Smart Budgeting** - Auto-categorization, custom limits
2. **Real-time Analytics** - Interactive charts, cash flow visualization
3. **Goal Tracking** - Savings goals for vacations, emergency funds
4. **Debt Payoff** - Snowball/avalanche method calculator
5. **Bank-Level Security** - 256-bit encryption, data privacy

#### Video Section

- Featured video with thumbnail and play button
- Video modal with YouTube embed support
- Playlist sidebar with 3 additional resources
- Duration badges on thumbnails
- Hover effects and smooth transitions

#### Testimonials (Wall of Love)

- 3 user testimonial cards with:
  - User photos and credentials
  - 5-star ratings
  - Platform icons (Twitter/X)
  - Featured/verified badges
- Real quotes from Sarah Jenkins, Michael Chen, Emma Wilson

#### Emotional Connection Section

- Large inspirational quote with quote icon
- "94% Report less stress" statistic overlay
- Lifestyle imagery
- Secondary CTA button

#### Resources Section

- 3 blog/article cards:
  - "The 50/30/20 Rule Explained" (Guide)
  - "Investing for Beginners" (Strategy)
  - "Achieving Financial Freedom" (Lifestyle)
- Featured images with category tags
- Arrow link animations

#### Final CTA Section

- "Master Your Money Today" headline
- Split layout with lifestyle image
- Dual CTAs (Get Started Free & View Demo)
- Trust indicators (No credit card, 14-day trial)

#### Contact Section

- Contact form with first name, last name, email, message
- Multiple contact methods:
  - Live chat option
  - Email: hello@example.com
  - Phone: +1 (555) 000-0000
- Icon-based information cards

#### Footer

- Brand logo and description
- Social media links (X/Twitter, LinkedIn, Instagram)
- 4-column navigation:
  - Product (Features, Pricing, Security, Changelog)
  - Company (About, Careers, Blog, Contact)
  - Resources (Community, Help Center, Partners, Status)
  - Legal (Privacy, Terms, Cookies)
- Copyright © 2025 Budgy, Inc.

### ⚙️ Interactive Features

#### JavaScript Functionality

- **Smooth Scrolling** - Animated navigation to anchor sections
- **Mobile Menu** - Hamburger toggle with slide animation
- **Video Modal** - Full-screen YouTube player with close handlers
- **Form Validation** - Email validation and input checking
- **Notification System** - Toast notifications for user feedback
- **Scroll Animations** - Fade-in effects using Intersection Observer
- **Navbar Effects** - Dynamic styling on scroll (shadow, opacity)
- **CTA Handlers** - Smart navigation to contact/video sections
- **Outside Click Detection** - Close modals/menus on outside click
- **Keyboard Support** - ESC key closes modals and menus
- **Event Tracking** - Google Analytics integration (gtag)
- **Theme Management** - User preference detection and storage

### 🎭 Animations & Effects

- **fadeInUp** - Entrance animations for cards and sections
- **float** - Organic floating motion for cards and orbs (6-20s cycles)
- **floatCard** - Individual card floating patterns
- **modalSlideIn** - Modal entrance with scale and translate
- **Gradient Shifts** - Animated background gradients
- **Hover Transforms** - Lift, scale, and rotate effects
- **SVG Animations** - Icon state changes and movements
- **Staggered Delays** - Coordinated entrance timing (0.1s-2s)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with ARIA labels
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Google Fonts** - Inter (body), Caveat (decorative)
- **SVG Icons** - Inline vector graphics
- **Unsplash** - High-quality placeholder images

## 📁 File Structure

```
budgy-landing/
├── index.html               # Main HTML (~1200 lines)
├── styles.css              # All styles (~3230 lines)
├── script.js               # Interactivity (~900 lines)
├── favicon.svg             # Site icon
├── CNAME                   # Domain configuration
├── CUSTOMIZATION_GUIDE.html # Detailed customization docs
├── LICENSE                 # MIT License
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required!

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/CodeWithKarol/budgy-landing.git
cd budgy-landing
```

2. **Open the project:**

```bash
# Simply open index.html in your browser
# Or use a local server (recommended):

# Python
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# PHP
php -S localhost:8000

# VS Code Live Server
# Right-click index.html > "Open with Live Server"
```

3. **Visit** `http://localhost:8000` in your browser

## 🎨 Customization

**Update Colors** - Edit CSS variables in `styles.css`:

```css
:root {
  --primary-blue: #6366f1;
  --secondary-blue: #4f46e5;
  --warm-coral: #10b981;
  --text-dark: #0f172a;
  --text-light: #64748b;
}
```

**Update Content** - Edit `index.html`:

- Modify headlines and descriptions
- Change testimonial quotes and names
- Update feature descriptions
- Replace images (update `src` attributes)
- Modify contact information

**Customize JavaScript** - Edit `script.js`:

- Change animation timings
- Add form submission logic
- Update video embed URLs
- Configure analytics tracking

### Detailed Customization Guide

For comprehensive instructions, open **`CUSTOMIZATION_GUIDE.html`** in your browser. It covers:

- ✏️ Content modifications
- 🎨 Color schemes and gradients
- 🔤 Typography changes
- ✨ Animation customization
- 🖼️ Image management
- 📱 Responsive breakpoints
- 📊 Analytics setup

## 📱 Responsive Design

### 9-Breakpoint System

```
budgy-landing/
├── index.html               # Main HTML file with semantic structure
├── styles.css               # Complete CSS with variables and animations
├── script.js                # JavaScript for interactivity and analytics
├── favicon.svg              # Site favicon (clock icon)
├── package.json             # Project metadata
├── README.md                # Documentation
├── CUSTOMIZATION_GUIDE.html # Comprehensive customization guide
├── CHECKLIST.md             # Implementation checklist
└── LICENSE                  # MIT License
```

The landing page adapts to all screen sizes:

- **1280px+** - Widescreen monitors
- **1140px** - Standard desktop/laptops
- **1024px** - Large tablets landscape
- **900px** - Medium tablets
- **768px** - Mobile menu breakpoint
- **640px** - Small tablets/large phones
- **480px** - Standard smartphones
- **375px** - Compact phones (iPhone SE)
- **320px** - Extra small devices

### Progressive Enhancements

- Typography scales fluidly
- Touch targets minimum 44px on mobile
- Navigation transforms to side drawer at 768px
- Grid layouts reflow at each breakpoint
- Images scale proportionally

## 🎨 Color Palette

| Color Name     | Hex Code | Usage                          |
| -------------- | -------- | ------------------------------ |
| Primary Blue   | #6366f1  | Buttons, links, accents        |
| Secondary Blue | #4f46e5  | Hover states, gradients        |
| Light Blue     | #e0e7ff  | Backgrounds, subtle accents    |
| Warm Coral     | #10b981  | Success states, secondary CTAs |
| Light Coral    | #6ee7b7  | Light accents, gradients       |
| Cream          | #f8fafc  | Page backgrounds               |
| Text Dark      | #0f172a  | Headings, body text            |
| Text Light     | #64748b  | Descriptions, metadata         |
| White          | #ffffff  | Cards, overlays                |

## ⚙️ Animation System

The page features sophisticated animations powered by CSS keyframes and JavaScript Intersection Observer:

### Key Animations

- **fadeInUp** - Section entrance (0.6s)
- **float** - Organic element movement (20s loop)
- **floatCard** - Card hover effects (6s loop)
- **modalSlideIn** - Modal entrance (0.5s)
- **Staggered Entrance** - Elements appear progressively (0.1-2s delays)

### Performance

- GPU-accelerated transforms
- `will-change` optimization on animated elements
- 60fps smooth animations
- Reduced motion support ready

## 📊 Analytics Integration

Built-in event tracking (requires Google Analytics setup):

```javascript
// Events tracked:
-"page_view" - // Initial page load
  "cta_click" - // CTA button clicks
  "video_modal_open" - // Video interactions
  "signup_submit"; // Form submissions
```

Add your GA4 measurement ID to enable tracking.

## 🎯 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Supports modern CSS Grid, Flexbox, backdrop-filter

## 🚀 Performance

- **Zero dependencies** - No frameworks, pure vanilla JS
- **Fast load times** - Optimized CSS and minimal JavaScript
- **Efficient animations** - GPU-accelerated transforms
- **Lazy loading ready** - Intersection Observer for on-demand loading

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

MIT License - See [LICENSE](LICENSE) file for details.

## 👤 Author

**CodeWithKarol**

- GitHub: [@CodeWithKarol](https://github.com/CodeWithKarol)
- Repository: [budgy-landing](https://github.com/CodeWithKarol/budgy-landing)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Fonts from [Google Fonts](https://fonts.google.com)
- Design inspiration from modern SaaS landing pages

## 📞 Support

For issues or questions:

- Open an issue on GitHub
- Use the contact form on the landing page

---

**Note**: This is a static landing page template. Form submissions and video embeds require backend integration for production use.

**Built with ❤️ for financial wellness**
