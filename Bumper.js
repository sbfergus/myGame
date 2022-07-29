
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

    get r() {
        return parseFloat(getComputedStyle(this.bumperElem).getPropertyValue("--y") / 2);
    }

    
}