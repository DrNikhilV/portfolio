document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const iconUse = hamburger.querySelector('use');
        if (navLinks.classList.contains('active')) {
            iconUse.setAttribute('href', '#icon-times');
        } else {
            iconUse.setAttribute('href', '#icon-bars');
        }
    });

    // Close mobile menu when a link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const iconUse = hamburger.querySelector('use');
                iconUse.setAttribute('href', '#icon-bars');
            }
        });
    });

    // 2. Header Scroll Effect & Active Link Highlight
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        // Header background shadow
        if (window.scrollY > 50) {
            header.style.boxShadow = 'var(--shadow-sm)';
        } else {
            header.style.boxShadow = 'none';
        }

        // Active Link Highlight
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjustment for sticky header
            if (scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
