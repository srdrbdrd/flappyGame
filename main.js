const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

//To check space pressed
let spacePressed = false;

//To check move up and down
let angle = 0;

//To control color spectrum
let hue = 0;

//Frame count of loop
let frame = 0;

//Game point for every obstacle passed
let score = 0;

// Game frame speed 
let gameSpeed = 2;


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10, 10, 50, 50)
    //render obstacles
    handleObstacles()
    //render particles
    handleParticles();
    bird.update();
    bird.draw();

    ctx.fillStyle = 'black'
    ctx.font = '70px Arial';
    ctx.fillText(score, 450, 70);

    handleCollision();
    if (handleCollision()) return;
    //Javascript recursion (funtion calls itself for infinite loop)
    requestAnimationFrame(animate);
    angle += 0.12;
    hue++;
    frame++;
}
animate();

//To check space pressed or not
window.addEventListener('keydown', function (e) {
    if (e.code === 'Space') spacePressed = true;
});

window.addEventListener('keyup', function (e) {
    if (e.code === 'Space') spacePressed = false;
})

//const band = new Image();
//bang.src = '';

function handleCollision() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            bird.x + bird.width > obstaclesArray[i].x &&
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
                (bird.y > canvas.height - obstaclesArray[i].bottom &&
                    bird.y + bird.height < canvas.height))) {
            console.log("Crashed");
            ctx.font = "30px Arial";
            ctx.fillStyle = 'black';
            ctx.fillText('Game Over, your score is: ' + score, 120, canvas.height / 2)
            return true;
        }

    }
}