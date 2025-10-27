const skillCards = document.querySelectorAll('.skill-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.animation = `fadeInUp 0.6s ease forwards`;
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

skillCards.forEach(card => observer.observe(card));

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => observer.observe(card));
