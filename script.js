import Ball from './Ball.js';
import Paddle from './Paddle.js';

const ball = new Ball(document.getElementById('ball'));
const playerPaddle = new Paddle(document.getElementById('player-paddle'));

let lastTime;

// function to update game after every frame, infinite loop
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;           // time between frames
        ball.update(delta);
    }
    
    lastTime = time;
    window.requestAnimationFrame(update)
}

// start update loop on load
window.requestAnimationFrame(update)
//console.log(window.innerHeight)