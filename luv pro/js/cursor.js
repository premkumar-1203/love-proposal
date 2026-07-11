document.addEventListener("mousemove", function (e) {

    // Don't create particles on touch devices
    if (window.innerWidth < 768) return;

    const heart = document.createElement("div");

    heart.className = "mouse-heart";

    heart.innerHTML = "❤️";

    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);

});