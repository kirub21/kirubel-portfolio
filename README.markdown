# Kirubel Gulilat Portfolio Website

This is a personal portfolio website for Kirubel Gulilat, showcasing expertise in IT, digital marketing, software development, and data analytics. Built with raw HTML and CSS, it features a responsive design, dark mode, a mobile-friendly navigation menu, YouTube case studies, a skills grid, and a centered About section.

## Features
- **Sticky Header**: Navigation with logo, menu links, and dark mode toggle. Mobile hamburger menu for screens ≤768px.
- **Hero Section**: Tagline with simplified typing animation, profile image, and CTA button. Reduced top padding for a compact layout.
- **Services**: Grid of three service cards (Digital Marketing, Software Development, Data Analytics).
- **About**: Centered education and experience details, with a scrolling logo carousel and responsive skills grid.
- **Case Studies**: Two YouTube video embeds with hover overlays for project descriptions.
- **Contact**: Static contact form and contact info (email, phone, address).
- **Footer**: Social links and a newsletter subscription form.
- **Dark Mode**: Toggleable theme with adjusted colors and gradients.

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Safari).
- Internet connection for Google Fonts and Font Awesome CDN.
- Local server (e.g., VS Code Live Server, Python’s `http.server`) to view the site locally.

## Installation
1. Clone or download the repository:
   ```bash
   git clone <repository-url>
   ```
2. Ensure the following directory structure:
   ```
   portfolio/
   ├── index.html
   ├── style.css
   ├── images/
   │   └── kirubelimage.png
   └── assets/
       ├── see-future.png
       ├── icoglabs.png
       ├── medlink.png
       ├── uog.png
       └── alx.png
   ```
3. Place your image assets in `images/` and `assets/` directories as referenced in `index.html`.
4. Open `index.html` in a browser or serve it locally:
   ```bash
   python3 -m http.server 8000
   ```
   Navigate to `http://localhost:8000` in your browser.

## Usage
- **Navigation**: Click menu links to jump to sections or toggle the hamburger menu on mobile.
- **Dark Mode**: Click the sun/moon icon in the header to switch themes.
- **Hero Section**: View the animated tagline and click the CTA to navigate to the contact section.
- **Case Studies**: Hover over video iframes to see project descriptions.
- **Contact Form**: Static form (requires JavaScript/backend for functionality).

## Customization
- **Change Content**:
  - Edit `index.html` to update text, images, or links (e.g., social media URLs, YouTube embed IDs).
  - Update `images/kirubelimage.png` with your profile image.
  - Add/remove logos in `assets/` and update the `.carousel-track` in `index.html`.
- **Modify Styling**:
  - Adjust colors in `style.css` (e.g., `#1d4ed8`, `#22d3ee` for light mode; `#38bdf8`, `#7dd3fc` for dark mode).
  - Tweak the `.typewriter` animation duration in `style.css` (e.g., change `3s` in `@keyframes typing`).
  - Modify hero padding (`2.5rem 6rem`) or About section `max-width` (`800px`) for layout changes.
- **Add Functionality**:
  - Add JavaScript to `index.html` for form submission or dynamic content.
  - Integrate a backend (e.g., Node.js, Flask) for newsletter or contact form processing.

## Dependencies
- **Google Fonts**: `Inter` font (`https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800`).
- **Font Awesome**: Icons (`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`).

## Notes
- Ensure image assets exist in `images/` and `assets/` to avoid broken links.
- The contact and newsletter forms are static; add JavaScript for submission handling.
- Tested on Chrome, Firefox, and Safari as of July 30, 2025.

## License
This project is for personal use and adheres to PLP Hackathon guidelines. Contact Kirubel Gulilat for usage permissions.

## Contact
- **Email**: [Kirub@medlink.et](mailto:Kirub@medlink.et)
- **Phone**: +251 947 600 082
- **Address**: Dembel, Bole, Ethiopia