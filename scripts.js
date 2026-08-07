const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icon = themeToggle?.querySelector('i');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  if (icon) {
    icon.classList.replace('fa-moon', 'fa-sun');
  }
}

themeToggle?.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');

  localStorage.setItem('theme', isDark ? 'dark' : 'light');

  if (icon) {
    if (isDark) {
      icon.classList.replace('fa-moon', 'fa-sun');
    } else {
      icon.classList.replace('fa-sun', 'fa-moon');
    }
  }
});

function handleFormSubmit(e) {
  e.preventDefault();
  const emailInput = document.getElementById('emailInput');
  const messageDiv = document.getElementById('form-message');
  const submitBtn = document.getElementById('submitBtn');
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  messageDiv.className = '';

  if (!emailRegex.test(email)) {
    messageDiv.textContent = 'Please enter a valid email address.';
    messageDiv.classList.add('error');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

  setTimeout(() => {
    messageDiv.textContent = "Thanks! I'll be in touch shortly to discuss your architecture.";
    messageDiv.classList.add('success');
    emailInput.value = '';
    submitBtn.disabled = false;
    submitBtn.innerHTML = "Let's Talk";
  }, 1500);
}

window.handleFormSubmit = handleFormSubmit;

const modal = document.getElementById('videoModal');
const iframe = document.getElementById('modalIframe');

function openModal(videoUrl) {
  iframe.src = videoUrl + (videoUrl.includes('?') ? '&' : '?') + 'autoplay=1';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

window.openModal = openModal;

function closeModal(e) {
  if (e.target === modal) {
    forceCloseModal();
  }
}

window.closeModal = closeModal;

function forceCloseModal() {
  modal.classList.remove('active');
  iframe.src = '';
  document.body.style.overflow = '';
}

window.forceCloseModal = forceCloseModal;
