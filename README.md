# Budgy Landing Page

## Overview

A modern, conversion-focused landing page for Budgy, an AI-powered financial coaching platform. Designed to drive sign-ups through trust, emotional engagement, and personalized storytelling.

## Design Strategy

### Headline

**"Your Financial Coach, Ready When You Are."**

- Inviting, forward-looking, emphasizes personalization and readiness

### Key Visual Elements

- **Warm color gradients**: Soft blues (#5BA3A8) and warm coral accents (#FF8C69) evoking comfort and optimism
- **Handwritten fonts** (Caveat) for quotes and emotional elements
- **Modern sans-serif** (Inter) for body text and clarity
- **Authentic imagery**: Real user photos and video testimonials
- **Floating animations**: Smooth, engaging micro-interactions

### Core Value Propositions

1. **Personalized Guidance** - AI learns your unique situation
2. **Adaptive AI** - Grows with your life's changing needs
3. **Privacy-First** - Bank-level security
4. **Actionable Insights** - No jargon, practical advice

## Key Features

✅ **Mobile-First Design** - Responsive at all breakpoints
✅ **Trust Building** - Real testimonials and security messaging
✅ **Multiple CTAs** - Strategically placed throughout page
✅ **Emotional Appeal** - Storytelling and real user stories
✅ **Performance Optimized** - Lightweight, fast-loading
✅ **Analytics Ready** - GA4 event tracking built-in
✅ **Smooth Animations** - Scroll effects and transitions

## Getting Started

### Local Development

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using VS Code Live Server
# Right-click index.html > "Open with Live Server"
```

Then open `http://localhost:8000` in your browser.

## File Structure

```
budgy-landing/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # Complete CSS with variables and animations
├── script.js           # JavaScript for interactivity and analytics
├── package.json        # Project metadata
├── README.md           # Documentation
├── CHECKLIST.md        # Implementation checklist
└── LICENSE             # MIT License
```

## Color Palette

| Color          | Hex     | Usage                                |
| -------------- | ------- | ------------------------------------ |
| Primary Blue   | #5BA3A8 | Primary buttons, links, accents      |
| Secondary Blue | #4A8B92 | Button hover states, gradients       |
| Light Blue     | #E8F4F8 | Backgrounds, light accents           |
| Warm Coral     | #FF8C69 | Call-to-action, secondary highlights |
| Light Coral    | #FFB8A3 | Subtle accents                       |
| Cream          | #FFF9F5 | Page background, card backgrounds    |

## Customization

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
	--primary-blue: #5ba3a8;
	--warm-coral: #ff8c69;
	/* ... etc */
}
```

### Update Content

- Edit text directly in `index.html`
- Update testimonials in the testimonials section
- Modify feature descriptions in the features section

### Add Real Videos

Replace video placeholders with actual video embeds or links.

## Analytics Integration

The landing page tracks:

- `page_view` - Initial page load
- `cta_click` - Button clicks with location context
- `signup_submit` - Form submission
- `video_play` - Video interactions

Add your Google Analytics ID to enable tracking.

## SEO Optimization

- Semantic HTML structure
- Mobile-first responsive design
- Fast loading time
- Meta tags ready for customization
- Proper heading hierarchy

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## License

MIT License - Feel free to use this as a template.

---

**Built with ❤️ for Budgy**
