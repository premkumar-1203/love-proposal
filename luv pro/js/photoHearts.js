document.querySelectorAll(".gallery-item").forEach(card => {

    card.addEventListener("mouseenter", () => {

        for(let i = 0; i < 8; i++){

            const heart = document.createElement("span");

            heart.className = "photo-heart";

            heart.innerHTML = "💖";

            heart.style.left = Math.random()*100 + "%";
            heart.style.top = Math.random()*100 + "%";

            card.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            },1500);

        }

    });

});