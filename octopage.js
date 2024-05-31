const navToggle = () => {
    const nav = document.getElementById('oct-nav');
    const overlay = document.getElementById('oct-nav-overlay');
    const shell = document.getElementById('oct-nav-shell');

    if (nav.style.display !== 'block') {
        nav.style.display = 'block';
        overlay.style.opacity = 0;
        shell.style.transform = 'translateX(-100%)';


        setTimeout(() => {
            overlay.style.transition = 'opacity 200ms ease';
            shell.style.transition = 'transform 200ms ease';

            overlay.style.opacity = 1;
            shell.style.transform = 'translateX(0)';
        }, 10);
    } else {
        overlay.style.opacity = 0;
        shell.style.transform = 'translateX(-100%)';


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


const navLinks = document.querySelectorAll('.oct-nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('oct-menu-link-hover');
    });

    link.addEventListener('mouseleave', () => {
        link.classList.remove('oct-menu-link-hover');
    });


    const linkPath = new URL(link.href).pathname;
    const currentPath = window.location.pathname;

    if (linkPath === currentPath) {
        link.classList.add('oct-nav-link-current');
    }
});

const todoCheck = () => {
    const todos = document.getElementsByClassName('oct-todo');

    Array.from(todos).forEach(todo => {
        todo.addEventListener('click', function() {
            if (this.classList.contains('oct-todo-checked')) {
                this.classList.remove('oct-todo-checked');
                const check = this.querySelector('.oct-todo-check');
                if (check) {
                    check.classList.remove('oct-todo-check-visible');
                }
            } else {
                this.classList.add('oct-todo-checked');
                const check = this.querySelector('.oct-todo-check');
                if (check) {
                    check.classList.add('oct-todo-check-visible');
                }
            }
        });
    });
};

todoCheck();

