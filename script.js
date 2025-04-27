document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', () => {
        flag.classList.toggle('clicked');
    });
});

// function togglePlayPause() {
//     const music = document.getElementById('bg-music');
//     const playButton = document.getElementById('playPauseButton');
//     const playIcon = playButton.querySelector('.fa-play');
//     const pauseIcon = playButton.querySelector('.fa-pause');

//     if (music.paused) {
//         // Play the music
//         music.play();
//         // Change the icon to pause
//         playIcon.style.display = 'none';
//         pauseIcon.style.display = 'inline-block';
//     } else {
//         // Pause the music
//         music.pause();
//         // Change the icon to play
//         playIcon.style.display = 'inline-block';
//         pauseIcon.style.display = 'none';
//     }
// }

// function changeSong() {
//     const music = document.getElementById('bg-music');
//     const selector = document.getElementById('songSelector');

//     music.src = selector.value;
//     music.play();
// }

// function skipMusic() {
//     const music = document.getElementById('bg-music');
//     const songSelector = document.getElementById('songSelector');

//     const currentIndex = songSelector.selectedIndex;
//     const nextIndex = (currentIndex + 1) % songSelector.options.length;

//     songSelector.selectedIndex = nextIndex;
//     music.src = songSelector.options[nextIndex].value;
//     music.play();
// }

// function playbackMusic() {
//     const music = document.getElementById('bg-music');
//     const songSelector = document.getElementById('songSelector');

//     const currentIndex = songSelector.selectedIndex;

//     if (currentIndex == 0) {
//         console.log("No previous songs");
//         return;
//     }

//     const nextIndex = (currentIndex - 1) % songSelector.options.length;

//     songSelector.selectedIndex = nextIndex;
//     music.src = songSelector.options[nextIndex].value;
//     music.play();
// }   

// // Volume control function
// const volumeSlider = document.getElementById('volumeSlider');
// const music = document.getElementById('bg-music');

// // Update volume when slider value changes
// volumeSlider.addEventListener('input', function() {
//     music.volume = this.value;
// });

window.addEventListener("load", function() {
    setTimeout(function() {
      const loader = document.getElementById("loader");
      loader.style.opacity = 0;
      setTimeout(function() {
        loader.style.display = "none";
        document.getElementById("content").style.display = "block";
      }, 500); // match the CSS transition duration
    }, 2500); // keeps the logo for 2.5 seconds
});
  