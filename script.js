document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', () => {
        flag.classList.toggle('clicked');
    });
});

window.addEventListener("load", function() {
    setTimeout(function() {
      const loader = document.getElementById("loader");
      loader.style.opacity = 0;
      setTimeout(function() {
        loader.style.display = "none";
        document.getElementById("content").style.display = "block";
      }, 400);
    }, 2000);
});
  