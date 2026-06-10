// Simple fade-in animation for sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section, i) => {
    section.style.opacity = 0;
    setTimeout(() => {
      section.style.transition = "opacity 1s ease";
      section.style.opacity = 1;
    }, i * 300);
  });
});

// WhatsApp Integration
function openWhatsApp() {
  const phoneNumber = "2348137058362"; 
  const message = "Hello Market Boi Team, I’d like to partner with you.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
// Open modal when "Join the Waitlist" is clicked
document.querySelector('.btn.primary').addEventListener('click', () => {
  document.getElementById('waitlist-modal').style.display = 'flex';
  startCountdown();
});

// Close modal
function closeModal() {
  document.getElementById('waitlist-modal').style.display = 'none';
}

// Countdown animation
function startCountdown() {
  let timeLeft = 5; // seconds
  const countdownEl = document.getElementById('countdown');
  countdownEl.textContent = `Loading... ${timeLeft}`;
  
  const timer = setInterval(() => {
    timeLeft--;
    countdownEl.textContent = `Loading... ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      countdownEl.textContent = "✅ Stay Tuned!";
    }
  }, 1000);
}
