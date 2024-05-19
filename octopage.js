const navToggle = () => {
    const nav = document.getElementById('oct-nav');
    const overlay = document.getElementById('oct-nav-overlay');
    const shell = document.getElementById('oct-nav-shell');

    if (nav.style.display !== 'block') {
        nav.style.display = 'block';
        overlay.style.opacity = 0;
        shell.style.transform = 'translateX(-100%)';

        // Добавляем задержку для включения транзишенов
        setTimeout(() => {
            overlay.style.transition = 'opacity 200ms ease';
            shell.style.transition = 'transform 200ms ease';

            overlay.style.opacity = 1;
            shell.style.transform = 'translateX(0)';
        }, 10);
    } else {
        overlay.style.opacity = 0;
        shell.style.transform = 'translateX(-100%)';

        // Удаляем стили после завершения анимации
        setTimeout(() => {
            nav.style.display = 'none';
            overlay.style.transition = '';
            shell.style.transition = '';
        }, 200);
    }
}

if (window.innerWidth <= 991) {
    document.getElementById('oct-menu-button').addEventListener('click', navToggle);
    document.getElementById('oct-nav-overlay').addEventListener('click', navToggle);
}