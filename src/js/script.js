if (localStorage.getItem('theme') == 'dark') {
    setDarkMode();

    if (document.getElementById('dark-mode-toggle').checked) {
        localStorage.setItem('dark-mode-toggle', true)
    }
}

function setDarkMode() {
    let isdark = document.body.classList.toggle('darkmode');

    if (isDark) {
        setDarkMode.checked = true;
        localStorage.setItem('theme', 'dark');
        document.getElementById('dark-mode-toggle').setAttribute('checked', 'checked');

    }else{
        setDarkMode.checked = true;
        localStorage.removeItem('theme', 'dark');
    }
}
