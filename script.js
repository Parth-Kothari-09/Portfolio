document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('section');
    const contactForm = document.getElementById('contact-form');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');

            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active-section');
                section.classList.add('hidden-section');
            });

            document.getElementById(targetSection).classList.remove('hidden-section');
            document.getElementById(targetSection).classList.add('active-section');
        });
    });

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! I will get back to you soon.');
        contactForm.reset();
    });
});