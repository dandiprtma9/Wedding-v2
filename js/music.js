document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("music");
    const openButton = document.getElementById("openInvitation");
    const musicControl = document.getElementById("musicControl");

    if (!music || !openButton || !musicControl) {
        console.error("Elemen HTML tidak ditemukan.");
        return;
    }

    let isPlaying = false;

    openButton.addEventListener("click", async () => {

        try {

            await music.play();

            isPlaying = true;

            musicControl.innerHTML = "🎵";

        } catch (err) {

            console.error(err);

        }

    });

    musicControl.addEventListener("click", async () => {

        if (isPlaying) {

            music.pause();

            isPlaying = false;

            musicControl.innerHTML = "🔇";

        } else {

            try {
                await music.play();
                isPlaying = true;
                musicControl.innerHTML = "🎵";
            } catch (err) {
                console.error(err);
            }

        }

    });

});