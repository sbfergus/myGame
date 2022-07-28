let gravity = 0.1;
let bounce = 0.9;
let vx = .5;
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
        
        this.y += vy;
        this.x += vx;
        vy += gravity;
        const deltaY = this.y - lastY;
        
        const rect = this.rect();
        console.log(rect)
        if (rect.x <= 0 || rect.x >= window.innerWidth) {
            vx *= -1;
        }
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
