document.addEventListener("mousemove", function (e) {

    if (window.innerWidth < 768) return;

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    },600);

});