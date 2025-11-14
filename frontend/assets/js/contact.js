document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ contact.js loaded successfully and waiting for form submission");

  const contactForm = document.getElementById('contact-form');
  if (!contactForm) {
    console.error("❌ Contact form not found in DOM.");
    return;
  }

  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.textContent;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;

    try {
      const response = await fetch('/api/contact', // Adjust the URL as needed***********
         {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const result = await response.json();

      if (result.success) {
        submitButton.textContent = '✅ Message Sent!';
        submitButton.classList.replace('bg-secondary-orange', 'bg-green-500');
        contactForm.reset();

        // Optional popup message
        setTimeout(() => {
          alert("✅ Thank you! We’ll get back to you soon.");
        }, 500);
      } else {
        throw new Error(result.message || 'Server error.');
      }
    } catch (error) {
      console.error('❌ Form submission error:', error);
      submitButton.textContent = '❌ Failed!';
      submitButton.classList.replace('bg-secondary-orange', 'bg-red-500');
    }

    setTimeout(() => {
      submitButton.textContent = originalButtonText;
      submitButton.disabled = false;
      submitButton.classList.remove('bg-green-500', 'bg-red-500');
      submitButton.classList.add('bg-secondary-orange', 'hover:bg-primary-purple');
    }, 3000);
  });
});
