# Kirubel Gulilat Portfolio

Welcome to my personal portfolio website, showcasing my expertise in IT and business solutions. I specialize in Digital Marketing, Software Development, and Data Analytics, with a passion for creating impactful tech solutions for startups, businesses, and underserved communities.

## Live Demo

Explore the deployed website: [https://kirubel-portfolio-website.vercel.app/](https://kirubel-portfolio-website.vercel.app/)

## Features

- **Home Page**: Overview of services, about me, case studies, and contact form with EmailJS integration.
- **Services Page**: Detailed explanations of core services (Digital Marketing, Software Development, Data Analytics) and their interrelations.
- **About Page**: Highlights my journey, mission, and certifications in a slider with animations and shadow effects.
- **Dark Mode**: Toggleable dark theme with a cohesive color palette for improved user experience.
- **Responsive Design**: Mobile-friendly layout with a hamburger menu for navigation.
- **Newsletter Signup**: Integrated with Google Apps Script to collect subscriber emails.
- **Case Studies**: Showcases projects like the Artisans Ecommerce Android App and Medlink Healthcare Startup.

## Technologies Used

- HTML5, CSS3, JavaScript
- Font Awesome for icons
- EmailJS for contact form
- Google Apps Script for newsletter form
- Vercel for deployment

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kirub21/kirubel-portfolio.git
   cd kirubel-portfolio
   ```

2. **Install Dependencies**:
   - Ensure you have a modern browser and Python (for local testing).
   - No additional installations required (uses CDN for EmailJS and Font Awesome).

3. **Configure Environment Variables**:
   - Create a `.env` file with:
     ```
     EMAILJS_USER_ID=your_emailjs_user_id
     EMAILJS_SERVICE_ID=your_emailjs_service_id
     EMAILJS_TEMPLATE_ID=your_emailjs_template_id
     GOOGLE_APPS_SCRIPT_URL=your_google_apps_script_url
     ```
   - Update `env.js` with these values for local testing.

4. **Run Locally**:
   ```bash
   python -m http.server 8000
   ```
   Access at `http://localhost:8000`.

5. **Deploy to Vercel**:
   - Push to GitHub: `git push origin main`.
   - Set environment variables in Vercel dashboard.
   - Deploy via Vercel (`https://vercel.com/dashboard`).

## Project Structure

```
kirubel-portfolio/
├── /images/
│   └── kirubelimage.png
├── /assets/
│   ├── see-future.png
│   ├── icoglabs.png
│   ├── medlink.png
│   ├── uog.png
│   ├── alx.png
│   ├── coursera-digital-marketing.png
│   ├── udemy-python.png
│   └── udacity-data-analytics.png
├── index.html
├── services.html
├── about.html
├── style.css
├── scripts.js
├── env.js
├── .env
├── .gitignore
├── favicon.ico
└── README.md
```

## Contact

- **Email**: [Kirub@medlink.et](mailto:Kirub@medlink.et)
- **Phone**: +251 947 600 082
- **LinkedIn**: [kirub21](https://www.linkedin.com/in/kirub21)
- **Instagram**: [kirubgulilat](https://www.instagram.com/kirubgulilat/)
- **Twitter**: [KirubGulilat](https://x.com/KirubGulilat)

---

Built with ❤️ by Kirubel Gulilat for the PLP Hackathon.
