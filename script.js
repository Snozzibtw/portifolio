document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', () => {
        flag.classList.toggle('clicked');
    });
});

AOS.init({
    duration: 1000,
    once: true,
});