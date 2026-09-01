document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('is-open');

            menuToggle.setAttribute('aria-expanded', isOpen);
            if (isOpen)
                body.classList.add('nav-open');
            else
                body.classList.remove('nav-open');
        });
    }
});
