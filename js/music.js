const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

playing=true;

musicBtn.innerHTML="⏸️";

musicBtn.classList.add("playing");

}else{

music.pause();

playing=false;

musicBtn.innerHTML="▶️";

musicBtn.classList.remove("playing");

}

});