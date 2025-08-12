(function() {
  // Initialize EmailJS with USER_ID
  emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with EmailJS User ID
})();

// Contact Form (EmailJS)
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', this)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      this.reset();
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again.');
    });
});

// Newsletter Form (Google Sheets)
window.addEventListener("load", function() {
  const form = document.getElementById('newsletter-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = 'YOUR_GOOGLE_APPS_SCRIPT_URL'; // Replace with Google Apps Script URL
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
});
// Mobile Menu Toggle
document.getElementById('nav-toggle').addEventListener('change', function() {
  const nav = document.querySelector('nav ul');
  if (this.checked) {
    nav.style.display = 'flex'; // Show menu
  } else {
    nav.style.display = 'none'; // Hide menu
  }
});