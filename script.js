import Ball from './Ball.js';
import Paddle from './Paddle.js';
import Bumper from './Bumper.js';

const ball = new Ball(document.getElementById('ball'));
const paddle = new Paddle(document.getElementById('paddle'));
const bumper1 = new Bumper(document.getElementById('bumper1'));
const bumper2 = new Bumper(document.getElementById('bumper2'));


let lastTime;

// function to update game after every frame, infinite loop
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;           // time between frames
        ball.update(delta, [paddle.rect()]);
    }
    
    lastTime = time;
    window.requestAnimationFrame(update)
}

document.addEventListener("mousemove", e => {
    paddle.position = (e.x / window.innerHeight) *100;
})

// start update loop on load
window.requestAnimationFrame(update)
console.log(bumper1.x, bumper1.y)