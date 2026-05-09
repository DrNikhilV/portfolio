document.addEventListener('DOMContentLoaded', () => {
    // Dark/Light Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIconUse = document.querySelector('#theme-icon use');
    const htmlElement = document.documentElement;
    const brandLogo = document.getElementById('brand-logo');
    const favicon = document.getElementById('favicon');

    // Check for saved user preference, if any, on load of the website
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        if (theme === 'dark') {
            themeIconUse.setAttribute('href', '#icon-sun');
            if (brandLogo) brandLogo.src = 'assets/icons/myLogoWhite.png';
            if (favicon) favicon.href = 'assets/icons/myLogoWhite.png';
        } else {
            themeIconUse.setAttribute('href', '#icon-moon');
            if (brandLogo) brandLogo.src = 'assets/icons/myLogoBlack.png';
            if (favicon) favicon.href = 'assets/icons/myLogoBlack.png';
        }
    }
});
