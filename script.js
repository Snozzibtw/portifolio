document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', () => {
        flag.classList.toggle('clicked');
    });
});