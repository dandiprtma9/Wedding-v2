const music = document.getElementById("music");
const openButton = document.getElementById("openInvitation");
const musicControl = document.getElementById("musicControl");

// Musik diputar saat tombol Buka Undangan diklik
if (openButton) {
    openButton.addEventListener("click", () => {
        music.play().catch(err => console.log(err));
    });
}

// Tombol Play / Pause
if (musicControl) {

    let isPlaying = false;

    musicControl.addEventListener("click", () => {

        if (isPlaying) {

            music.pause();
            musicControl.innerHTML = "🔇";
            isPlaying = false;

        } else {

            music.play().catch(err => console.log(err));
            musicControl.innerHTML = "🎵";
            isPlaying = true;

        }

    });

}