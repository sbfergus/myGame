let gravity = 0.1;
let bounce = 0.7;
let vx = 0;
let vy = -.0025;

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

    update(delta) {
        //this.x = ;
        //console.log(this.y)
        this.y += vy;
        vy += gravity;
        
        const rect = this.rect();
        if (rect.bottom >= window.innerHeight || rect.top <= 0) {
            
            vy *= -1;
        }

    }
}

