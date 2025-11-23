document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('submit-button');
    const feedbackMessage = document.getElementById('feedback-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (validateForm(name, email, message)) {
            // Simulate form submission
            feedbackMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            feedbackMessage.style.color = 'green';
            contactForm.reset();
        } else {
            feedbackMessage.textContent = 'Please fill in all fields correctly.';
            feedbackMessage.style.color = 'red';
        }
    });

    function validateForm(name, email, message) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return name !== '' && emailPattern.test(email) && message !== '';
    }
});