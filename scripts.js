import emailjs from 'emailjs-com';

// ====================
// Initialize EmailJS
// ====================
(() => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
})();

// ====================
// Contact Form Handling (EmailJS)
// ====================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        contactForm
      );
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      contactForm.reset();
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send message. Please try again.');
    }
  });
}

// ====================
// Newsletter Form Handling (Google Sheets)
// ====================
document.getElementById("newsletter-form").addEventListener("submit", async function (event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const email = formData.get("email"); // lowercase 'email'
  const messageDiv = document.getElementById("form-message");

  // Validate email format
  if (!email || !validateEmail(email)) {
    messageDiv.textContent = "❌ Please enter a valid email address.";
    return;
  }

  try {
    const response = await fetch(import.meta.env.VITE_WEB_APP_URL, {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      messageDiv.style.color = "green";
      messageDiv.textContent = "✅ Subscription successful!";
      form.reset();
    } else {
      messageDiv.style.color = "red";
      messageDiv.textContent = "❌ Subscription failed. Please try again.";
    }
  } catch (error) {
    console.error(error);
    messageDiv.style.color = "red";
    messageDiv.textContent = "⚠️ An error occurred. Please try again.";
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}


// ====================
// Mobile Menu Toggle
// ====================
const navToggle = document.getElementById('nav-toggle');
if (navToggle) {
  navToggle.addEventListener('change', () => {
    const navMenu = document.querySelector('nav ul');
    if (navMenu) {
      navMenu.style.display = navToggle.checked ? 'flex' : 'none';
    }
  });
}
