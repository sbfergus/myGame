import Ball from './Ball.js'

const ball = new Ball(document.getElementById('ball'));

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