const THEME_KEY = "preferredTheme";

function applySavedTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const body = document.body;

    if (savedTheme) {
        body.className = savedTheme;
    } else {
        body.className = 'light-theme';
    }
}

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';

    body.className = newTheme;
    localStorage.setItem(THEME_KEY, newTheme);
}

applySavedTheme();

document.getElementById('changeColorButton').addEventListener('click', toggleTheme);
