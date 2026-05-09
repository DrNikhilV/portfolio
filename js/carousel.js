document.addEventListener('DOMContentLoaded', () => {
    // Research Carousel Logic
    const track = document.getElementById('research-track');
    if (!track) return;
    
    const slides = Array.from(track.children);
    const nextButton = document.getElementById('res-next');
    const prevButton = document.getElementById('res-prev');
    const dotsNav = document.getElementById('research-nav');
    const dots = Array.from(dotsNav.children);

    let currentSlideIndex = 0;

    const updateCarousel = (index) => {
        // Update track position
        track.style.transform = `translateX(-${index * 100}%)`;
        
        // Update classes
        slides.forEach(s => s.classList.remove('current-slide'));
        slides[index].classList.add('current-slide');
        
        dots.forEach(d => d.classList.remove('current-indicator'));
        dots[index].classList.add('current-indicator');
    };

    nextButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateCarousel(currentSlideIndex);
    });

    prevButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        updateCarousel(currentSlideIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlideIndex = index;
            updateCarousel(currentSlideIndex);
        });
    });
});
