document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('show');
    }

    hamburger.addEventListener('click', toggleMenu);

    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navLinks.classList.remove('show');
        });
    });

    document.addEventListener('click', function (event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('show')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('show');
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('show');
        }
    });
});