const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];

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
    }

    move() {

    }
}