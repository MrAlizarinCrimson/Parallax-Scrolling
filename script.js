const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = 'layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'layer-5.png';

class Layer {
	constructor(image, speedoModifier){
		this.x = 0;
		this.y = 0;
		this.width = 2400;
		this.height = 700;
		this.x2 = this.width;
		this.image = image;
		this.speedoModifier = speedoModifier;
		this.speed = gameSpeed * this.speedoModifier;
	}
	update(){
		//to move layers horizontally by changing .x & .y to reset
		this.speed = gameSpeed * this.speedoModifier;
		if (this.x <= this.width){
			this.x = this.width + this.x2 - this.speed;
		}
		if (this.x2 <= this.width){
			this.x2 = this.width + this.x - this.speed;
		}
		//if there is no resetting
		this.x = Math.floor(this.x - this.speed);
		this.x2 = Math.floor(this.x2 - this.speed);
	}

	draw(){
		//to take info from object to draw into canvas and redraw after the new position
		ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
		ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);			
	}
}

const layer4 = new Layer()


function animate(){
	//this will allow to clear old canvas and take only current in transition
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

	
	
	requestAnimationFrame(animate);
}
animate();

