document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.submenu-toggle');
    const submenu = document.getElementById('accessibility-submenu');

    function toggleMenu() {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', String(!isExpanded));
        submenu.hidden = isExpanded;
    }

    toggleButton.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleMenu();
        }
    });

    toggleButton.addEventListener('click', function () {
        toggleMenu();
    });
});
