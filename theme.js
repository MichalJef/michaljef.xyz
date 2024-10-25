// Funkce pro aplikování tématu podle localStorage nebo systémového nastavení
function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.className = savedTheme || (prefersDark ? 'dark' : 'light');
}

// Funkce pro přepínání tématu a uložení do localStorage
function toggleTheme() {
    const newTheme = document.body.className === 'light' ? 'dark' : 'light';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
}

applyTheme();
