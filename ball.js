let gravity = 0.1;
let bounce = 0.9;
let vx = 0;
let vy = 0;
let vh = Math.round(window.innerHeight / 100);
let lastY;

export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem;
    }

    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
    }

    set x(value) {
        this.ballElem.style.setProperty("--x", value);
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"));
    }

    set y(value) {
        this.ballElem.style.setProperty("--y", value);
    }

    rect() {
        return this.ballElem.getBoundingClientRect();
    }
    
    update(delta, paddleRect) {
        //this.x = ;
        //console.log(this.y)
        this.y += vy;
        vy += gravity;
        const deltaY = this.y - lastY;
        //console.log(deltaY);
        const rect = this.rect();
        // if (rect.bottom >= (window.innerHeight) || rect.top <= 0) {
        //     vy *= -1;
        //     vy *= bounce;
        // }
        lastY = this.y;
        //console.log(rect.width)
        if(deltaY<0 && deltaY>-0.4) {
            vy=0;
        }
        console.log(paddleRect);
        if (paddleRect.some(r => isCollision(r, rect))) {
            vy *= -1;
            vy *= bounce;
        }
        //console.log(vy)                 

    }
}

function isCollision(rect1, rect2) {
    return (rect1.left <= rect2.right && 
           rect1.right >= rect2.left &&
           rect1.top <= rect2.bottom &&
           rect1.bottom >= rect2.top)  
}
