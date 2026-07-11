const stars = document.getElementById("stars");

// Create 250 stars
for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDuration=(1+Math.random()*3)+"s";

    star.style.animationDelay=Math.random()*5+"s";

    star.style.opacity=Math.random();

    stars.appendChild(star);

}

// Shooting stars

function createShootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*250+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2000);

}

setInterval(createShootingStar,4000);