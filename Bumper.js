let radius = document.querySelector('.bumper').clientHeight / 2;
console.log(radius)

export default class Bumper {
    constructor(bumperElem) {
        this.bumperElem = bumperElem;
    }

    get x() {
        return parseFloat(getComputedStyle(this.bumperElem).getPropertyValue("--x"));
    }

    get y() {
        return parseFloat(getComputedStyle(this.bumperElem).getPropertyValue("--y"));
    }

    dist(ballX, ballY, bumperCenterX, bumperCenterY) {
        // const bumperCenterX = this.x;
        // const bumperCenterY = this.y;

        return ;
    }
}