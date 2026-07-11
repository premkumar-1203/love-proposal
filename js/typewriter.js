const text =
"I Never Believed In Magic Until I Met You ❤️";

const typing=document.getElementById("typing");

let index=0;

function type(){

if(index<text.length){

typing.innerHTML+=text.charAt(index);

index++;

setTimeout(type,75);

}

}

window.onload=()=>{

setTimeout(type,2200);

};