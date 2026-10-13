const dragon = document.getElementById("dragon");
const room = document.getElementById("room1");

dragon.onmouseenter = function () {
    dragon.style.opacity = "0";
// AI edited to make the dragon move randomly
    setTimeout(function () {
        dragon.style.left = Math.random() * (room.clientWidth - dragon.offsetWidth) + "px";
        dragon.style.top = Math.random() * (room.clientHeight - dragon.offsetHeight) + "px";
        dragon.style.opacity = "1";
    }, 500);
};