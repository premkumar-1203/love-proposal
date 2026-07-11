const canvas=document.getElementById("fireworksCanvas");

const ctx=canvas.getContext("2d");

function resize(){

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

}

resize();

window.addEventListener("resize",resize);

const particles=[];

function explode(x,y){

for(let i=0;i<80;i++){

particles.push({

x,

y,

vx:(Math.random()-0.5)*10,

vy:(Math.random()-0.5)*10,

life:100

});

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x+=p.vx;

p.y+=p.vy;

p.life--;

ctx.beginPath();

ctx.arc(p.x,p.y,3,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},100%,70%)`;

ctx.fill();

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();

window.launchFireworks=function(){

for(let i=0;i<12;i++){

setTimeout(()=>{

explode(

Math.random()*canvas.width,

Math.random()*canvas.height/2

);

},i*300);

}

}