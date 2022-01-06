class Bird {
    constructor() {
        this.x = 150;
        this.y = 200;
        // vs = Velocity Y(How fast moves up and down)
        this.vy = 0;
        this.width = 20;
        this.height = 20;
        //Weight will constantly pull bird down unless space pressed
        this.weight = 1;
    }
    update() {
        let curve = Math.sin(angle) * 20;

        //To sure that bird will never fall off from screenview
        if (this.y > canvas.height - (this.height * 3) + curve) {
            this.y = canvas.height - (this.height * 3) + curve;
            this.vy = 0;
        } else {
            //For each frame vy will increase by weight
            this.vy += this.weight;

            //To make velocity more manageable
            this.vy *= 0.9;

            //For each frame vertical position of bird will increase by vy. Fall speed will increase depends fall long
            this.y += this.vy;
        }
        //Y ındex is start with 0 and going down by negatively. So this.y = 200 mean -200
        if (this.y < 0 + this.height) {
            this.y = this.height;
            this.vy = 0
        }
        if (spacePressed && this.y > this.height * 3) this.flap();
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    flap() {
        this.vy -= 2;
    }
}
//Global constant
const bird = new Bird();