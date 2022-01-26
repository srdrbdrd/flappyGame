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


const background = new Image();
background.src = 'BG.png';
const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}

function handleBackground() {
    // if background reach left- end render it from right again
    if (BG.x1 <= -BG.width + gameSpeed) BG.x1 = BG.width;
    else BG.x1 -= gameSpeed;
    if (BG.x2 <= -BG.width + gameSpeed) BG.x2 = BG.width;
    else BG.x2 -= gameSpeed;
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height);
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height);
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10, 10, 50, 50)
    //renderBackground
    handleBackground();
    //render obstacles
    handleObstacles();
    //render particles
    //handleParticles();
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
    bird.frameX = 0
})

//const band = new Image();
//bang.src = '';

const collisionSound = document.createElement('audio');
collisionSound.src = 'sound.ogg';

function handleCollision() {
    for (let i = 0; i < obstaclesArray.length; i++) {
        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            bird.x + bird.width > obstaclesArray[i].x &&
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
                (bird.y > canvas.height - obstaclesArray[i].bottom &&
                    bird.y + bird.height < canvas.height))) {
            collisionSound.play();
            console.log("Crashed");
            ctx.font = "30px Arial";
            ctx.fillStyle = 'black';
            ctx.fillText('Game Over, your score is: ' + score, 120, canvas.height / 2)
            return true;
        }

    }
}

