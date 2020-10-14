//Setting up grey canvas for the game
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

//Sets up the snake and fruit and starts game loop
(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }
    }, 250)
}());

//Change direction using keys W, A, S, and D
window.addEventListener('keydown', ((evt) => {
    const direction = evt.key;
    snake.changeDirection(direction);
}))