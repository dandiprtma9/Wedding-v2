// Nama tamu dari URL
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

if (guest) {
    document.querySelector(".guest-box h2").textContent = decodeURIComponent(guest);
}

// Tombol Buka Undangan
document.getElementById("openInvitation").addEventListener("click", function () {

    // Sembunyikan cover
    document.getElementById("cover").style.display = "none";

    // Tampilkan isi undangan
    document.getElementById("main").style.display = "block";

    // Scroll ke isi
    document.getElementById("main").scrollIntoView({
        behavior: "smooth"
    });

});

// Tombol Share
const shareButton = document.getElementById("shareButton");

if (shareButton) {

    shareButton.addEventListener("click", async () => {

        if (navigator.share) {

            await navigator.share({
                title: "Wedding Invitation",
                text: "Undangan Pernikahan Syahril & Nova Elysa",
                url: window.location.href
            });

        } else {

            alert("Browser Anda belum mendukung fitur Share.");

        }

    });

}