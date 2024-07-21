document.addEventListener("DOMContentLoaded", function() {
    // Navbar links animation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.2)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // Form submit animation
    const form = document.querySelector('form');
    form.addEventListener('submit', () => {
        form.style.transform = 'scale(0.95)';
        setTimeout(() => {
            form.style.transform = 'scale(1)';
        }, 200);
    });
});

