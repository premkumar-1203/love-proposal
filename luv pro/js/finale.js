function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-50px";

    heart.style.fontSize=(20+Math.random()*40)+"px";

    heart.style.pointerEvents="none";

    heart.style.zIndex="999";

    heart.style.transition="6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform=`translateY(-120vh)
        rotate(${Math.random()*360}deg)`;

        heart.style.opacity="0";

    },100);

    setTimeout(()=>{

        heart.remove();

    },6500);

}

setInterval(createHeart,350);
const restart=document.getElementById("restartLove");

restart.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});