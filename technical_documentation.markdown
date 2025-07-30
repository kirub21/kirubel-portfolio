# Technical Documentation: Kirubel Gulilat Portfolio Website

## Overview
This portfolio website showcases Kirubel Gulilat’s skills and projects as an IT and Business Enthusiast. Built with raw HTML and CSS, it adheres to PLP Hackathon requirements, avoiding frameworks and external libraries except for Google Fonts and Font Awesome. The site features a responsive design, dark mode, a mobile-friendly navigation menu, YouTube case studies, a skills grid, and a centered About section.

## Project Structure
```
portfolio/
├── index.html         # Main HTML file
├── style.css         # CSS stylesheet
├── images/           # Image assets (e.g., kirubelimage.png)
└── assets/           # Carousel logos (e.g., see-future.png, medlink.png)
```

- **index.html**: Contains the semantic HTML structure for the website, including header, hero, services, about, case studies, contact, and footer sections.
- **style.css**: Defines all styling, animations, and responsive behavior, including dark mode and the typewriter animation for the tagline.
- **images/**: Stores the hero section image (`kirubelimage.png`).
- **assets/**: Stores logos for the experience carousel (e.g., `see-future.png`, `medlink.png`).

## Features
1. **Header**:
   - Sticky navigation bar with a logo, menu links (Services, About, Case Studies, Contact), and a theme toggle (light/dark mode).
   - Mobile-friendly hamburger menu for screens ≤768px, toggled via a checkbox input.
2. **Hero Section**:
   - Displays a tagline (`<h1 class="typewriter">`) with a simplified typing animation (3s duration, blinking cursor).
   - Includes a profile image and subtitle, with a CTA button for free consultation.
   - Reduced top padding (2.5rem on desktop) for a tighter layout.
   - Responsive: Stacks vertically on screens ≤1024px with centered content.
3. **Services Section**:
   - Grid of three cards (Digital Marketing, Software Development, Data Analytics) with hover effects.
4. **About Section**:
   - Centered `<h2>🧠 About Me</h2>`, `.about-description`, and `.experience-description` with `max-width: 800px` and `margin: 0 auto`.
   - Experience carousel with scrolling logos, looping infinitely.
   - Skills grid with 12 skill cards (e.g., Python, Java, HTML5) in a responsive layout.
5. **Case Studies Section**:
   - Two case studies with YouTube iframes and hover overlays for project descriptions.
   - Responsive: Stacks vertically on screens ≤768px.
6. **Contact Section**:
   - Split layout with contact info (email, phone, address) and a form (name, email, message).
7. **Footer**:
   - Social links (LinkedIn, Instagram, Twitter) and a newsletter subscription form.
8. **Dark Mode**:
   - Toggled via a checkbox, updating background colors, text colors, and button styles (e.g., `#22d3ee` to `#38bdf8`).

## Styling Details
- **Typography**: Uses Google Fonts’ `Inter` (weights: 400, 600, 800) for a modern look.
- **Color Scheme**:
  - Light Mode: Background `#f8fafc`, text `#1e293b`, accents `#1d4ed8` and `#22d3ee`.
  - Dark Mode: Background `#1e293b`, text `#f8fafc`, accents `#38bdf8` and `#7dd3fc`.
- **Animations**:
  - `.typewriter`: 3s typing animation (`@keyframes typing`) with a blinking cursor (`@keyframes blink-cursor`, 0.6s).
  - `.hero-image`: Zoom-in animation (`@keyframes zoomIn`, 1.2s).
  - `.hero-text`: Slide-in-right animation (`@keyframes slideInRight`, 1s).
  - `.carousel-track`: Infinite scrolling (`@keyframes scroll`, 30s).
  - `.skill-card`: Fade-in animation (`@keyframes fadeIn`, 1s).
- **Responsive Design**:
  - Breakpoints: 1024px, 768px, 480px.
  - Hero: Stacks vertically ≤1024px, padding reduced to `1.5rem 2rem` at 768px.
  - About: `max-width: 600px` at 1024px, `100%` at 480px for `.about-description` and `.experience-description`.
  - Navigation: Hamburger menu ≤768px.
  - Skills Grid: Adjusts to `minmax(100px, 1fr)` at 1024px.
  - Case Studies: Stacks vertically ≤768px.

## Key CSS Classes
- **.hero**: `padding: 2.5rem 6rem` (desktop), `min-height: 80vh`, flex layout.
- **.typewriter**: `font-size: 3.2rem`, `white-space: nowrap`, with typing and cursor animations.
- **.about-description, .experience-description**: `max-width: 800px`, `margin: 0 auto`, `text-align: center`.
- **.service-cards, .skills-grid**: Responsive grids with `repeat(auto-fit, minmax())`.
- **.case**: Flex layout with hover transform and iframe overlay.
- **body.dark-mode**: Overrides colors for dark mode.

## Accessibility and SEO
- **Semantic HTML**: Uses `<header>`, `<nav>`, `<section>`, `<footer>` for structure.
- **Meta Tags**: Includes `description`, `keywords`, and `author` for SEO.
- **Alt Attributes**: Provided for all images (e.g., hero image, carousel logos).
- **Contrast**: High contrast in both light and dark modes (e.g., `#e0f2fe` on `#1d4ed8`).
- **Responsive Images**: `max-width` and `object-fit: cover` for hero image.

## Dependencies
- **Google Fonts**: `Inter` font (`https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800`).
- **Font Awesome**: Icons for navigation, services, and skills (`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`).
- No JavaScript or frameworks used.

## Responsive Behavior
- **Desktop (>1024px)**: Full layout with side-by-side hero sections, multi-column grids.
- **Tablet (≤1024px)**: Hero stacks vertically, reduced padding, centered content.
- **Mobile (≤768px)**: Hamburger menu, single-column case studies, smaller font sizes.
- **Small Mobile (≤480px)**: Further reduced font sizes and padding, `max-width: 100%` for About content.

## Limitations
- **Static Content**: No dynamic content or backend integration (per PLP Hackathon rules).
- **Form Functionality**: Contact and newsletter forms are static (no submission handling).
- **Image Assets**: Assumes `images/` and `assets/` directories exist with referenced files.

## Future Enhancements
- Add JavaScript for form submission and newsletter functionality.
- Integrate a backend for dynamic content (e.g., case study data).
- Enhance animations with subtle transitions for additional interactivity.

## Last Updated
- **Date**: July 30, 2025
- **Changes**:
  - Reduced hero section top padding to `2.5rem`.
  - Centered About section’s `<h2>`, `.about-description`, and `.experience-description`.
  - Simplified typewriter animation to single-phrase typing with blinking cursor.