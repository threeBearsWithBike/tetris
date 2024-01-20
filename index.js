import Game from "./src/Game.js";
import View from "./src/View.js";
import Controler from "./src/Controler.js";

const root = document.querySelector('#root');

const game = new Game();
const view = new View(root, 480, 640, 20, 10);
const controler = new Controler(game, view);

window.game = game;
window.view = view;
window.controler = controler;