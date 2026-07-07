
const params=new URLSearchParams(window.location.search);

const guest=params.get("to");

if(guest){

document.querySelector(".guest-box h2").innerHTML=decodeURIComponent(guest);

}
document

.getElementById("openInvitation")

.addEventListener("click",function(){

document

.getElementById("cover")

.scrollIntoView({

behavior:"smooth"

});

});
document

.getElementById("openInvitation")

.addEventListener("click",function(){

document

.getElementById("cover")

.scrollIntoView({

behavior:"smooth"

});

});
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