const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const close = document.getElementById("closeLightbox");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = img.src;

        lightboxCaption.innerText = img.alt;

    });

});

close.onclick = () => {

    lightbox.style.display = "none";

};

lightbox.onclick = (e) => {

    if(e.target === lightbox){

        lightbox.style.display = "none";

    }

};

document.addEventListener("keydown", function(e){

    if(e.key==="Escape"){

        lightbox.style.display="none";

    }

});