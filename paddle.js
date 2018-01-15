class Paddle {
    /* Represents a paddle. Supports 4 locations, with two single key controls for navigation. */
    constructor(pLoc, color, keyOne, keyTwo) {
        this.ychange = 0;
        this.xchange = 0;
        this.keyOne = keyOne;
        this.keyTwo = keyTwo;
        this.color = color;
        switch(pLoc){
            case 'l':
                this.w = wid/35;
                this.h = hei/5;
                this.y = hei/2;
                this.x = this.w*3;
                break;
            case 'r':
                this.w = wid/35;
                this.h = hei/5;
                this.y = hei/2;
                this.x = (wid - 3*this.w);
                break;
            case 'u':
                this.w = wid/5;
                this.h = hei/35;
                this.x = wid/2;
                this.y = 3*this.h;
                break;
            case 'd':
                this.w = wid/5;
                this.h = hei/35;
                this.x = wid/2;
                this.y = (hei - 3*this.h);
                break;
        } 
    }
    
    /* Generates new location coordinates for a given paddle based on given change params. */
    update(paddleType) {
    	if (paddleType === 'l' || paddleType === 'r') {
    		this.y += this.ychange;
        	this.y = constrain(this.y, this.h/2, hei-this.h/2);	
    	}
    	else{
    		this.x += this.xchange;
        	this.x = constrain(this.x, this.w/2, wid-this.w/2);	
    	}
        
    }
    
    /* Assigns change params for a given paddle. */ 
    move(steps, paddleType) {
    	if (paddleType === 'l' || paddleType === 'r') {
        	this.ychange = steps;
    	}
    	else{
    		this.xchange = steps;
    	}
    }
    
    /* Generates paddle UI elements. */
    show() {
        fill(this.color);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
        fill(255);
        textSize(wid/50);
        text(this.keyOne,  this.x - this.w/2,   this.y - this.h/2);
        text(this.keyTwo,  this.x + this.w/2,   this.y + this.h/2);
    }
}