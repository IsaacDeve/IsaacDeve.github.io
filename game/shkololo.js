const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: 50,
    y: 300,
    speed: 1,
    dx: 0,
    width: 30,
    height: 30,
    color: "blue",
}


function updatePlayer() {
    player.x += player.dx;
    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
}


function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}



document.addEventListener("keydown", (e) => {
    if (e.key === "d" || e.key === "D") player.dx = player.speed;
    else if (e.key === "a" || e.key === "A") player.dx = -player.speed;
});

document.addEventListener("keyup", (e) => {
    if (e.key === "d" || e.key === "D" || e.key === "a" || e.key === "A") player.dx = 0;
});




function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    updatePlayer();
    requestAnimationFrame(gameLoop);
}

gameLoop();