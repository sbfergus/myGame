
let lastTime;

// function to update game after every frame, infinite loop
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime;

    }
    
    lastTime = time;
    window.requestAnimationFrame(update)
}

// start update loop on load
window.requestAnimationFrame(update)