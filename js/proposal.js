const ringBox=document.getElementById("ringBox");

const proposal=document.getElementById("proposalMessage");

ringBox.addEventListener("click",()=>{

ringBox.classList.add("open");

setTimeout(()=>{

proposal.style.display="block";

},900);

});
const noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseenter",()=>{

const x=Math.random()*300-150;

const y=Math.random()*150-75;

noBtn.style.transform=`translate(${x}px,${y}px)`;

});
const yesBtn = document.getElementById("yesBtn");
const proposalSection = document.getElementById("proposal");
const celebration = document.getElementById("celebration");

yesBtn.addEventListener("click", () => {

    proposalSection.style.display = "none";

    celebration.classList.add("show");

    celebration.scrollIntoView({
        behavior: "smooth"
    });

    launchFireworks();

});