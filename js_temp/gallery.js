const images=document.querySelectorAll(".gallery-grid img");

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const close=document.getElementById("closeLightbox");

images.forEach(function(img){

img.addEventListener("click",function(){

lightbox.style.display="flex";

lightboxImage.src=this.src;

});

});

close.addEventListener("click",function(){

lightbox.style.display="none";

});