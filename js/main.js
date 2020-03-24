import Erelis from './tank.js';
import Player from './player.js';
let canvas = document.getElementById("GameScreen");
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
let gameHeight = 800;
let gameWidth = 800;
ctx.clearRect( 0, 0, gameWidth, gameHeight); // trina nereikalingus, kurie juda
let erelis = new Erelis(gameWidth, gameHeight);
erelis.draw(ctx);
let player = new Player(gameWidth, gameHeight);
player.draw(ctx);



