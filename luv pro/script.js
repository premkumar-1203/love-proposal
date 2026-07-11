document.getElementById("proposalBtn").onclick = function(){

document.getElementById("proposal").style.display="block";

window.scrollTo({

top:document.body.scrollHeight,
behavior:"smooth"

});

}

function yesClicked(){

document.body.innerHTML=`

<div style="display:flex;
justify-content:center;
align-items:center;
height:100vh;
background:#ff4f81;
color:white;
font-family:Poppins;
text-align:center;
padding:20px;">

<div>

<h1 style="font-size:70px;">❤️</h1>

<h1>YAY!!</h1>

<h2>I Promise To Love You Forever ❤️</h2>

<p style="font-size:22px;">
You made me the happiest person in the world.
</p>

</div>

</div>

`;

}

function moveNo(){

const no=document.getElementById("noBtn");

const x=Math.random()*300-150;

const y=Math.random()*300-150;

no.style.transform=`translate(${x}px,${y}px)`;

}