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
    bird.update();
    bird.draw();
    //render particles
    handleParticles();
    //render obstacles
    handleObstacles()
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