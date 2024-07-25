document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
    if (event.ctrlKey && (event.key === 'U' || event.key === 'S' || event.key === 'C')) {
        event.preventDefault();
    }
});