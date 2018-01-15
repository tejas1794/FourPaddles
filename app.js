var windowDimensions = [window.innerWidth,window.innerHeight];
var Score = [0,0,0,0];
var lastHit = '-';
var isGameOver = false;
var wid = Math.min(...windowDimensions);
var hei = Math.min(...windowDimensions);

function setup() {
	createCanvas(wid, hei);
    ball = new Ball();
    p1 = new Paddle('u','Red','R','T');
	p2 = new Paddle('r','Green', 'K','M');
	p3 = new Paddle('d','Blue','V','B');
	p4 = new Paddle('l','Yellow','A','Z');
}

function draw() {

    background(0);

    if(Math.max(...Score)>=10){
    	fill(255);
    	textSize(wid/20);
    	let winningPlayer = (Score.indexOf(max(...Score))+1).toString();
    	isGameOver = true;
    	text("Paddle " + getPaddle(winningPlayer).color + " wins!",wid/3,wid/2);
    }
    
    ball.checkPaddleRight(p2);
    ball.checkPaddleLeft(p4);
    ball.checkPaddleUp(p1);
    ball.checkPaddleDown(p3);

    p4.show();
    p2.show();
   	p1.show();
   	p3.show();

    p4.update('l');
    p2.update('r');
   	p1.update('u');
   	p3.update('d');
    
	ball.update();
	ball.edges();
	ball.show();

    fill(255);
    textSize(wid/50);
    text(Score[0],	p1.x,	p1.y);
    text(Score[1], p2.x, p2.y);
    text(Score[2],	p3.x,	p3.y);
    text(Score[3], p4.x, p4.y);   
}

function keyReleased() {
    p4.move(0,'l');
    p2.move(0,'r');
   	p1.move(0,'u');
   	p3.move(0,'d');
}

function keyPressed() {
    if (key === p1.keyOne) {
       	p1.move(-10, 'u');
    } else if (key === p1.keyTwo) {
       	p1.move(10, 'u');
    }
    if (key === p4.keyOne) {
        p4.move(-10,'l');
    } else if (key === p4.keyTwo) {
        p4.move(10,'l');
    }
    if (key === p2.keyOne) {
        p2.move(-10,'r');
    } else if (key === p2.keyTwo) {
        p2.move(10,'r');
    }
    if (key === p3.keyOne) {
       	p3.move(-10,'d');
    } else if (key === p3.keyTwo) {
       	p3.move(10,'d');
    }
}

/* Returns paddle object based on give player ID */
function getPaddle(playerID){
	switch(playerID){
		case '1': return p1;
		case '2': return p2;
		case '3': return p3;
		case '4': return p4;
	}
	return 0;
}
