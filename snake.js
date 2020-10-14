//Snake that can move around the game areas and eat fruit
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    this.draw = function() {
        ctx.fillStyle = "#FFFFFF";

        for (let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);
    }

    //Sets speed for snake in certain direction
    this.update = function() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y};

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x > canvas.width) {
            this.x = 0;
        }

        if (this.y > canvas.height) {
            this.y = 0;
        }

        if (this.x < 0) {
            this.x = canvas.width;
        }

        if (this.y < 0) {
            this.y = canvas.height;
        }

    }

    //Determines direction snake is moving based on key press
    this.changeDirection = function(direction) {
        switch(direction) {
            case 'w':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'a':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case 's':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'd':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    //Adds length to tail when fruit is eaten
    this.eat = function(fruit) {
        if (this.x === fruit.x && this.y === fruit.y) {
            this.total++;
            return true;
        }

        return false;
    }
}