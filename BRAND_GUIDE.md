# Budgy Landing Page - Brand Style Guide

## Brand Overview

**Budgy** is an AI-powered financial coaching platform that makes personal finance feel less intimidating and more achievable. The brand embodies comfort, confidence, and empowerment.

## Brand Values

- 🎯 **Personalization** - Every financial journey is unique
- 💡 **Clarity** - No jargon, just honest advice
- 🤝 **Empathy** - Understanding challenges with compassion
- 🚀 **Growth** - Evolving with users' changing needs
- 🔒 **Trust** - Security and reliability

## Visual Identity

### Color Palette

#### Primary Colors

- **Primary Blue**: `#5BA3A8` - Trust, stability, professionalism
- **Secondary Blue**: `#4A8B92` - Depth, sophistication

#### Accent Colors

- **Warm Coral**: `#FF8C69` - Action, optimism, warmth
- **Light Coral**: `#FFB8A3` - Soft highlights, approachability

#### Neutral Colors

- **Light Blue**: `#E8F4F8` - Calm, breathing room
- **Cream**: `#FFF9F5` - Warm neutrality, comfort
- **Dark Text**: `#2C3E50` - Readability, authority
- **Light Text**: `#5A6C7D` - Hierarchy, secondary information
- **Muted Text**: `#8B9FB0` - Tertiary information

### Color Usage Guidelines

| Element           | Primary Color            | Accent Color | Use Case               |
| ----------------- | ------------------------ | ------------ | ---------------------- |
| Primary Buttons   | Primary Blue             | -            | High importance CTAs   |
| Secondary Buttons | Light Blue               | -            | Low importance actions |
| Accent Buttons    | -                        | Warm Coral   | Urgent/Final CTAs      |
| Hover States      | Secondary Blue           | Light Coral  | Interactive feedback   |
| Backgrounds       | Light Blue, Cream        | -            | Content areas          |
| Text              | Dark Text                | -            | Body copy              |
| Links             | Primary Blue             | -            | Navigation, references |
| Borders/Accents   | Primary Blue, Warm Coral | -            | Visual separation      |

### Typography

#### Font Families

1. **Inter** (Google Fonts)

   - Purpose: Body text, headlines, UI
   - Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
   - Use: All body copy, button text, form labels

2. **Caveat** (Google Fonts)
   - Purpose: Emotional quotes, testimonials, accent text
   - Weights: 400 (Regular), 700 (Bold)
   - Use: Pull quotes, handwritten-style callouts, emotional messaging

### Typography Scale

```
h1: 3.5rem (56px) - Hero headline
h2: 2.5rem (40px) - Section headings
h3: 1.5rem (24px) - Subsection headings
h4: 1.25rem (20px) - Card headings
p:  1rem    (16px) - Body text
small: 0.875rem (14px) - Small text, captions
```

### Font Hierarchy

```
Display: Caveat Bold 48px - Emotional quotes
Heading 1: Inter Bold 56px - Page title
Heading 2: Inter Bold 40px - Section title
Heading 3: Inter Bold 24px - Card title
Body: Inter Regular 16px - Main content
Label: Inter SemiBold 14px - Form labels
Button: Inter SemiBold 16px - Button text
```

## Layout & Spacing

### Spacing Scale

- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)

### Max Width

- Container: 1200px
- Content: 800px (for narrow columns)
- Sidebar: 300px

### Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Component Styles

### Buttons

#### Primary Button

```css
Background: Linear gradient (Primary Blue → Secondary Blue)
Color: White
Padding: 1rem 2rem
Border Radius: 8px
Font Weight: 600
Hover: Translate up 2px, enhanced shadow
```

#### Secondary Button

```css
Background: Light Blue
Color: Primary Blue
Padding: 0.75rem 1.5rem
Border Radius: 6px
Font Weight: 600
Hover: Background becomes Primary Blue, text becomes White
```

#### Text Link

```css
Color: Primary Blue
Font Weight: 500
Underline: On hover only
```

### Cards

#### Trust/Feature Card

```css
Background: Cream or White
Padding: 1.5rem - 2rem
Border Radius: 12px
Border: 1px solid rgba(Primary Blue, 0.1)
Box Shadow: Subtle (0 5px 15px rgba(Primary Blue, 0.1))
Hover: Translate up 5px, enhanced shadow
```

#### Testimonial Card

```css
Background: White
Padding: 1.5rem - 2rem
Border Radius: 12px
Box Shadow: 0 5px 15px rgba(Primary Blue, 0.1)
Hover: Translate up 5px, enhanced shadow
Stars: #FFD700 (Gold)
```

### Forms

#### Input Fields

```css
Background: White
Border: 1px solid rgba(Primary Blue, 0.2)
Border Radius: 8px
Padding: 0.875rem
Font: Inter Regular 1rem
Focus: Border becomes Primary Blue, add 3px box shadow
Error: Border becomes Red (#FF6B6B)
```

#### Labels

```css
Color: Dark Text
Font Weight: 600
Font Size: 0.95rem
Margin Bottom: 0.5rem
```

## Image & Media Guidelines

### Photography Style

- **Authentic**: Real people, real situations
- **Warm**: Natural lighting, warm color tones
- **Diverse**: Represent varied backgrounds and ages
- **Emotional**: Show genuine moments of relief, accomplishment
- **Professional**: High quality, well-composed

### Image Ratios

- Hero: 16:9
- Cards: 4:3
- Testimonial avatars: 1:1 (circular)
- Social media: 1.2:1

### Icons

- Style: Minimalist, rounded corners
- Size: 24px (UI), 32px (cards), 48px (sections)
- Colors: Primary Blue or Warm Coral
- Consistency: All icons should have similar visual weight

## Animation Guidelines

### Timing

- Quick interactions: 0.2s - 0.3s
- Section transitions: 0.5s - 0.6s
- Page transitions: 0.8s - 1s
- Hover effects: 0.3s ease

### Easing Functions

- Smooth hover: `ease` or `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Entrance animations: `ease-out`
- Exit animations: `ease-in`

### Common Animations

```css
/* Fade In */
animation: fadeIn 0.6s ease forwards;

/* Slide Up */
animation: slideUp 0.6s ease forwards;

/* Float */
animation: float 6s ease-in-out infinite;

/* Scale on Hover */
transform: scale(1.05);
transition: transform 0.3s ease;
```

## Writing Style

### Tone of Voice

- **Warm & Inviting** - "Your Financial Coach"
- **Empathetic** - Understands challenges
- **Clear** - No financial jargon
- **Optimistic** - Emphasizes growth and wins
- **Action-Oriented** - "Start," "Take," "Discover"

### Headline Guidelines

✅ **DO:**

- Use action verbs
- Focus on user benefits
- Be specific
- Create urgency (gently)

❌ **DON'T:**

- Use jargon
- Make false promises
- Be overly technical
- Use clickbait language

### Copy Examples

**Strong Headlines:**

- "Your Financial Coach, Ready When You Are."
- "Personalized Guidance That Grows With You"
- "From Overwhelmed to Confident"

**Weak Headlines:**

- "Financial Services Platform"
- "Next-Gen FinTech Solution"
- "Manage Your Money Better"

## Call-to-Action Copywriting

### Primary CTA: "Start Your Journey Today"

- Inviting and forward-looking
- Suggests a process, not a transaction
- Emotionally resonant

### Secondary CTAs

- "Explore Features"
- "Learn More"
- "Join Our Community"
- "Access Your Free Trial"

## Social Media Guidelines

### Messaging

- Share success stories
- Educational financial tips
- Behind-the-scenes content
- User testimonials

### Hashtags

- #FinancialFreedom
- #BudgetingTips
- #PersonalFinance
- #AIFinance
- #MoneyMindset

### Posting Frequency

- Instagram: 3x per week
- Twitter: 5x per week
- LinkedIn: 2x per week

## Email Template Style

### Header

- Logo on left
- Color: Warm Blue background
- Font: Inter SemiBold

### Body

- Font: Inter Regular, 16px
- Line height: 1.6
- Color: Dark Text
- Links: Primary Blue

### CTA Button

- Style: Primary Button
- Text: Action-oriented
- Padding: 1rem 2rem

### Footer

- Background: Light Gray
- Color: Muted Text
- Links: Primary Blue

## Accessibility Guidelines

### Color Contrast

- Text on background: Minimum 4.5:1 ratio
- Large text: Minimum 3:1 ratio
- Test with contrast checker tools

### Typography

- Minimum font size: 12px (14px preferred)
- Line height: 1.5 minimum
- Letter spacing: Normal or slightly increased

### Interactive Elements

- Minimum click target: 48px × 48px
- Focus visible: Clear outline or highlight
- Keyboard navigation: All interactive elements accessible

## Responsive Design

### Mobile-First Approach

1. Design for mobile first
2. Enhance for tablet
3. Optimize for desktop

### Mobile Spacing

- Reduce margins/padding: 50-75% of desktop
- Increase button size: 16px padding minimum
- Full-width components where appropriate

### Typography Scaling

- Desktop h1: 56px → Mobile h1: 32px
- Desktop body: 16px → Mobile body: 16px (readable without zoom)

## Logo Usage

### Logo Variations

- **Full Logo**: Use on light backgrounds
- **Icon Only**: Use as favicon
- **Gradient**: Primary approach on landing page

### Minimum Size

- Web: 32px height
- Print: 1 inch height
- Favicon: 32×32px

### Clear Space

- Minimum 0.5 × logo width on all sides
- Don't overlap with other elements
- Maintain aspect ratio

## Brand Do's and Don'ts

✅ **DO:**

- Use warm, inviting imagery
- Keep copy clear and jargon-free
- Emphasize personalization
- Show real customer testimonials
- Use the full color palette
- Maintain consistency across channels
- Focus on emotional benefits
- Make CTAs obvious

❌ **DON'T:**

- Use overly corporate imagery
- Use financial jargon
- Make false promises
- Overcomplicate the design
- Use all caps for body text
- Create hollow promises
- Focus only on features, not benefits
- Use generic stock photos

## File Formats

### Web

- Images: WebP (with PNG/JPG fallback)
- Icons: SVG (scalable, crisp)
- Fonts: WOFF2 (modern compression)

### Print

- Resolution: 300 DPI minimum
- Format: PDF or high-res PNG
- Color mode: CMYK

## Trademark & Legal

- Brand name: "Budgy"
- Tagline: "Your Financial Coach, Ready When You Are."
- © 2025 Budgy, Inc. All rights reserved.

---

**Last Updated: November 5, 2025**

For questions about brand guidelines or usage, contact: branding@budgy.app
