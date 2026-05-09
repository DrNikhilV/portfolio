document.addEventListener('DOMContentLoaded', () => {
    // Update Current Year in Footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get('name') || '';
            const email = formData.get('email') || '';
            const subject = formData.get('subject') || 'Portfolio Contact';
            const message = formData.get('message') || '';
            const body = [
                `Name: ${name}`,
                `Email: ${email}`,
                '',
                message
            ].join('\n');

            window.location.href = `mailto:nikhilvenkataraj@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }
});
