const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];

function generateDecimalBetween(left, right) {
    return (Math.random() * (left - right) + rigth).toFixed(2);
}
class Bubble {
    constructor(canvas) {
        this.canvas = canvas

        this.getCanvasSize()
        this.init()
    }

    getCanvasSize() {
        this.canvasWidth = this.canvas.clientWidth
        this.canvasHeigth = this.canvas.clientHeight
    }

    init() {
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
        this.size = generateDecimalBetween(1, 3)
        this.alpha = generateDecimalBetween(5, 10) / 10
        this.translateX = generateDecimalBetween(0, this.canvasWidth)
        this.translateY = generateDecimalBetween(0, this.canvasHeigth)
        this.velocity = generateDecimalBetween(20, 40)
        this.movementX = generateDecimalBetween(-2, 2) / this.velocity
        this.movementY = generateDecimalBetween(1, 20) / this.velocity
    }

    move() {

    }
}