document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', () => {
        flag.classList.toggle('clicked');
    });
});

function changeSong() {
    const music = document.getElementById('bg-music');
    const source = document.getElementById('audioSource');
    const selector = document.getElementById('songSelector');
    
    source.src = selector.value;
    music.load();
    music.play();
}

function pauseMusic() {
    const music = document.getElementById('bg-music');
    music.pause();
}

function stopMusic() {
    const music = document.getElementById('bg-music');
    music.pause();            // Pause the music
    music.currentTime = 0;     // Reset to the start
}
  