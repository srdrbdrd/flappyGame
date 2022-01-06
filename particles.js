const particlesArray = [];

class Particle {
    constructor() {
        //Particles gonna follow bird so their axis need to be equal
        this.x = bird.x;
        this.y = bird.y + 10;
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random() * 1) - 0.5;
        //To change color randomly using hue value
        this.color = 'hsla(' + hue + ',100%,50%,0.8)';
    }
    update() {
        //Updates x,y axis while frame continue
        this.x -= gameSpeed;
        this.y += this.speedY;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    //Adding Particle object to start of array
    particlesArray.unshift(new Particle);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    //if more than 200, remove 20
    if (particlesArray.length > 200) {
        for (let i = 0; i < 20; i++) {
            particlesArray.pop(particlesArray[i])
        }
    }
}