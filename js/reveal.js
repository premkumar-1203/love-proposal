const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",reveal);

reveal();

function reveal(){

const trigger=window.innerHeight*0.85;

reveals.forEach(item=>{

const top=item.getBoundingClientRect().top;

if(top<trigger){

item.classList.add("active");

}

});

}