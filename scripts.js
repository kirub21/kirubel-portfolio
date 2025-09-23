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
(function() {
  emailjs.init(window.ENV.EMAILJS_USER_ID);
})();

document.getElementById('contact-form')?.addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm(window.ENV.EMAILJS_SERVICE_ID, window.ENV.EMAILJS_TEMPLATE_ID, this)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      this.reset();
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again.');
    });
});

window.addEventListener("load", function() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = window.ENV.GOOGLE_APPS_SCRIPT_URL;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(response => response.json())
      .then(json => {
        if (json.result === 'success') {
          alert("You've subscribed successfully!");
          form.reset();
        } else {
          alert("Subscription failed. Please try again.");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Subscription failed. Please try again.");
      });
    });
  }
});

document.getElementById('nav-toggle')?.addEventListener('change', function() {
  const nav = document.querySelector('nav ul');
  if (nav) {
    if (this.checked) {
      nav.style.display = 'flex';
    } else {
      nav.style.display = 'none';
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const sliderTrack = document.querySelector('.slider-track');
  if (sliderTrack) {
    const cards = document.querySelectorAll('.certification-card');
    const cardWidth = cards[0]?.offsetWidth + 20; // Card width + margin
    let currentIndex = 0;
    const totalCards = cards.length / 2; // Account for duplicated cards

    function updateSlider() {
      sliderTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      if (currentIndex >= totalCards) {
        setTimeout(() => {
          sliderTrack.style.transition = 'none';
          currentIndex = 0;
          sliderTrack.style.transform = `translateX(0)`;
          setTimeout(() => {
            sliderTrack.style.transition = 'transform 0.5s ease-in-out';
          }, 50);
        }, 500);
      }
    }

    document.querySelector('.slider-next')?.addEventListener('click', () => {
      currentIndex++;
      updateSlider();
    });

    document.querySelector('.slider-prev')?.addEventListener('click', () => {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : totalCards - 1;
      updateSlider();
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
      currentIndex++;
      updateSlider();
    }, 5000);
  }
});