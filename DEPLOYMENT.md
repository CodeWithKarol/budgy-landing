# Budgy Landing Page - Configuration & Deployment Guide

## Quick Start

1. **Clone or download the repository**
2. **Open `index.html` in a browser** (or use a local server)
3. **Customize content** (see sections below)
4. **Deploy to your hosting** (see deployment options)

## Configuration

### 1. Google Analytics Setup

Add your Google Analytics measurement ID to `index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script
	async
	src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() {
		dataLayer.push(arguments);
	}
	gtag("js", new Date());
	gtag("config", "GA_MEASUREMENT_ID");
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual measurement ID (e.g., `G-XXXXXXXXXX`).

### 2. Form Submission Endpoint

Update the form submission handler in `script.js` to send data to your backend:

```javascript
// In script.js, find the signupForm submit handler
signupForm.addEventListener(
	"submit",
	function (e) {
		e.preventDefault();

		const name = this.querySelector(
			'input[type="text"]'
		).value;
		const email = this.querySelector(
			'input[type="email"]'
		).value;
		const goal =
			this.querySelector("select").value;

		// Send to your backend
		fetch("YOUR_API_ENDPOINT", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, goal }),
		})
			.then((response) => response.json())
			.then((data) => {
				showNotification(
					"Welcome to Budgy!",
					"success"
				);
				this.reset();
			})
			.catch((error) => {
				showNotification(
					"An error occurred. Please try again.",
					"error"
				);
			});
	}
);
```

### 3. Email Service Integration

#### Option A: EmailJS (Serverless)

```html
<!-- Add to <head> -->
<script
	type="text/javascript"
	src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"
></script>
<script type="text/javascript">
	(function () {
		emailjs.init("YOUR_PUBLIC_KEY");
	})();
</script>
```

Then update form handler:

```javascript
emailjs
	.send("service_id", "template_id", {
		from_name: name,
		from_email: email,
		user_goal: goal,
	})
	.then((response) => {
		showNotification(
			"Welcome to Budgy!",
			"success"
		);
	});
```

#### Option B: Zapier Integration

Create a Zapier webhook and POST to it:

```javascript
fetch(
	"https://hooks.zapier.com/hooks/catch/YOUR_HOOK_ID/",
	{
		method: "POST",
		body: JSON.stringify({ name, email, goal }),
	}
);
```

#### Option C: Your Backend API

Post directly to your backend URL (see #2 above).

### 4. Live Chat Integration

Add to `index.html` before closing `</body>` tag:

#### Intercom

```html
<script>
	window.intercomSettings = {
		api_base: "https://api-iam.intercom.io",
		app_id: "YOUR_APP_ID",
	};
</script>

<script>
	// We pre-filled your app ID in the widget embed tag.
	(function () {
		var w = window;
		var ic = w.Intercom;
		if (typeof ic === "function") {
			ic("reattach_activator");
			ic("update", intercomSettings);
		} else {
			var d = document;
			var i = function () {
				i.c(arguments);
			};
			i.c = function (args) {
				args.unshift("intercomSettings");
				(w.intercomBuffer =
					w.intercomBuffer || []).push(args);
			};
			w.Intercom = i;
		}
	})();
</script>

<script
	async
	src="https://widget.intercom.io/widget/YOUR_APP_ID"
></script>
```

#### Drift

```html
<!-- Start Drift Code -->
<script>
	"use strict";
	!(function () {
		var t =
			(window.driftt =
			window.drift =
				window.drift || []);
		if (!t.init) {
			if (t.invoked)
				return void (
					window.console &&
					console.error &&
					console.error(
						"Drift snippet included twice."
					)
				);
			(t.invoked = !0),
				(t.methods = [
					"identify",
					"config",
					"track",
					"reset",
					"debug",
					"show",
					"ping",
					"page",
					"hide",
					"off",
					"on",
				]),
				(t.factory = function (e) {
					return function () {
						var n =
							Array.prototype.slice.call(
								arguments
							);
						return n.unshift(e), t.push(n), t;
					};
				}),
				t.methods.forEach(function (e) {
					t[e] = t.factory(e);
				}),
				(t.load = function (t) {
					var e = 3e5,
						n = Math.ceil(new Date() / e) * e,
						o = document.createElement("script");
					(o.type = "text/javascript"),
						(o.async = !0),
						(o.crossorigin = "anonymous"),
						(o.src =
							"https://js.driftt.com/include/" +
							n +
							"/" +
							t +
							".js");
					var i =
						document.getElementsByTagName(
							"script"
						)[0];
					i.parentNode.insertBefore(o, i);
				});
		}
	})();
	drift.SNIPPET_VERSION = "0.3.1";
	drift.load("YOUR_ORG_ID");
</script>
<!-- End Drift Code -->
```

### 5. Meta Tags for Social Sharing

Add to `<head>` in `index.html`:

```html
<!-- SEO Meta Tags -->
<meta
	name="description"
	content="Your AI-powered financial coach, ready when you are. Personalized guidance, smart budgeting, and financial confidence."
/>
<meta
	name="keywords"
	content="financial coaching, budgeting app, AI finance, personal finance, debt payoff, savings"
/>
<meta
	name="author"
	content="Budgy"
/>

<!-- Open Graph Tags -->
<meta
	property="og:type"
	content="website"
/>
<meta
	property="og:url"
	content="https://budgy.app/"
/>
<meta
	property="og:title"
	content="Budgy - Your Financial Coach, Ready When You Are"
/>
<meta
	property="og:description"
	content="AI-powered personalization that grows with your life's changing needs."
/>
<meta
	property="og:image"
	content="https://budgy.app/og-image.jpg"
/>

<!-- Twitter Card Tags -->
<meta
	property="twitter:card"
	content="summary_large_image"
/>
<meta
	property="twitter:url"
	content="https://budgy.app/"
/>
<meta
	property="twitter:title"
	content="Budgy - Your Financial Coach"
/>
<meta
	property="twitter:description"
	content="AI-powered personalization that grows with your life's changing needs."
/>
<meta
	property="twitter:image"
	content="https://budgy.app/twitter-image.jpg"
/>
```

## Content Updates

### Update Testimonials

In `index.html`, find the testimonials section and update:

```html
<div class="testimonial-card">
	<div class="stars">★★★★★</div>
	<p class="testimonial-quote">
		"Your quote here..."
	</p>
	<div class="testimonial-author">
		<div class="author-avatar">XX</div>
		<div>
			<p class="author-name">User Name</p>
			<p class="author-title">Title, Location</p>
		</div>
	</div>
</div>
```

### Update Feature Descriptions

Find the features section and update feature blocks:

```html
<div class="feature-block">
	<div class="feature-number">01</div>
	<h3>Feature Name</h3>
	<p>Feature description here.</p>
</div>
```

### Add Real Videos

Replace video placeholders:

```html
<!-- Replace the video-placeholder div with: -->
<div class="video-placeholder">
	<iframe
		width="100%"
		height="300"
		src="https://www.youtube.com/embed/VIDEO_ID"
		frameborder="0"
		allow="autoplay; encrypted-media"
		allowfullscreen
	></iframe>
</div>
```

### Update Contact Information

Update the contact section with your actual info:

```html
<p class="contact-detail">your-email@budgy.app</p>
```

## Deployment Options

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Option 2: Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

Or drag & drop the folder on https://app.netlify.com/

### Option 3: GitHub Pages

```bash
git add .
git commit -m "Deploy landing page"
git push origin main
```

Then enable GitHub Pages in repository settings.

### Option 4: Shared Hosting (GoDaddy, Bluehost, etc.)

1. Use FTP or File Manager to upload files
2. Ensure `index.html` is in the public directory

### Option 5: AWS S3 + CloudFront

```bash
# Upload files to S3 bucket
aws s3 sync . s3://your-bucket/

# Set up CloudFront distribution
# Enable static website hosting in S3
```

### Option 6: Docker (for containerized deployment)

Create `Dockerfile`:

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:

```bash
docker build -t budgy-landing .
docker run -p 80:80 budgy-landing
```

## Performance Optimization

### 1. Image Optimization

- Use WebP format where supported
- Use srcset for responsive images
- Compress with TinyPNG or ImageOptim

### 2. Minification

Install and use build tools:

```bash
npm install --save-dev minify
```

### 3. Caching Headers

Set in `.htaccess` (Apache):

```apache
<FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|svg|woff)$">
  Header set Cache-Control "max-age=2592000, public"
</FilesMatch>
```

Or in `vercel.json`:

```json
{
	"headers": [
		{
			"source": "/static/(.*)",
			"headers": [
				{
					"key": "Cache-Control",
					"value": "public, max-age=31536000, immutable"
				}
			]
		}
	]
}
```

### 4. CDN Setup

Use Cloudflare (free) or similar:

1. Change DNS to Cloudflare nameservers
2. Enable caching and minification
3. Set cache rules

## SSL Certificate

Ensure HTTPS is enabled:

- Netlify: Automatic
- Vercel: Automatic
- GitHub Pages: Automatic
- Self-hosted: Use Let's Encrypt (free)

## Domain Setup

### Update DNS Records

For your domain registrar:

- If using Netlify: Set CNAME to `your-site.netlify.app`
- If using Vercel: Set CNAME to `cname.vercel-dns.com`
- If using GitHub Pages: Set A records to GitHub IPs
- If self-hosted: Set A record to your server IP

## Testing Checklist

- [ ] Desktop browser (Chrome, Firefox, Safari, Edge)
- [ ] Mobile devices (iOS, Android)
- [ ] Form submission works
- [ ] Links navigate correctly
- [ ] Analytics events fire
- [ ] Page speed is acceptable (<3s)
- [ ] All images load
- [ ] Videos play (if added)
- [ ] Responsive design works at all breakpoints
- [ ] Print stylesheet looks good
- [ ] Accessibility features work

## Troubleshooting

### Forms not submitting

- Check browser console for errors
- Verify API endpoint is correct
- Check CORS settings if using external API
- Test with Postman first

### Images not loading

- Verify image paths are correct
- Check image file exists
- Try absolute URLs instead of relative
- Check file permissions

### Animations not working

- Check browser supports CSS Grid/Flexbox
- Disable browser extensions
- Clear browser cache
- Check JavaScript isn't disabled

### Analytics not tracking

- Verify GA measurement ID is correct
- Check Network tab in DevTools
- Allow cookies in browser
- Wait 24 hours for data to appear

## Support

For questions or issues:

1. Check the CHECKLIST.md file
2. Review the README.md documentation
3. Examine browser console for errors
4. Test on different browsers/devices

---

**Version 1.0.0 - Ready for Production**
