export default class Player {
    constructor(gameWidth, gameHeight) {
        this.width = 50;
        this.height = 50;
        this.position = {
            x:gameWidth / 2 - this.width / 2 - this.width - 16,
            y:gameHeight - this.height
        }
    }
    draw(ctx){
      ctx.fillRect( this.position.x, this.position.y,  this.width, this.height);
      
    }
}