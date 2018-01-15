class Ball {
    /* Represents a new ball. */
    constructor() {
        this.x = wid/2;
        this.y = hei/2;
        this.xspeed = 0;
        this.yspeed = 0;
        this.r = wid/50;
        
        this.reset();
    }
    
    /* Checks if ball hit the left paddle and returns the ball in the opposite direction. */
    checkPaddleLeft(p) {
        if (this.y - this.r < p.y + p.h/2 &&
            this.y + this.r > p.y - p.h/2 &&
            this.x - this.r < p.x + p.w/2) {
                
            if (this.x > p.x) {
                this.xspeed = -this.xspeed;
                lastHit = 'l';
            }
            
        }
    }

    /* Checks if ball hit the left paddle and returns the ball in the opposite direction. */
    checkPaddleRight(p) {
        if (this.y - this.r < p.y + p.h/2 &&
            this.y + this.r > p.y - p.h/2 &&
            this.x + this.r > p.x - p.w/2) {
                
            if (this.x < p.x) {
                this.xspeed = -this.xspeed;
                lastHit = 'r';
            }
        }
    }
    
    /* Checks if ball hit the left paddle and returns the ball in the opposite direction. */
    checkPaddleUp(p) {
        if (this.x - this.r < p.x + p.w/2 &&
            this.x + this.r > p.x - p.w/2 &&
            this.y - this.r < p.y + p.h/2) {
                
            if (this.y > p.y) {
                this.yspeed = - this.yspeed;
                lastHit = 'u';
            }
            
        }
    }

    /* Checks if ball hit the left paddle and returns the ball in the opposite direction. */
	checkPaddleDown(p) {
        if (this.x - this.r < p.x + p.w/2 &&
            this.x + this.r > p.x - p.w/2 &&
            this.y + this.r > p.y - p.h/2) {
               
            if (this.y < p.y) {
                this.yspeed = - this.yspeed;
                lastHit = 'd';
            } 
        }
    }

    /* Generates new coordinates of the ball based on current ball speed. */
    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
    }
    
    /* Sets defaults speed and location params for the ball. */
    reset() {
        this.x = wid/2;
        this.y = hei/2;
        lastHit = '-';
        let angle = random(-PI, PI);
        if ([0].includes(angle)){
        	this.reset();
        }
        this.xspeed = 5 * Math.cos(angle*angle);
        this.yspeed = 5 * Math.sin(angle*angle);
        
        if (random(1) < 0.5) {
            this.xspeed *= -1;
        }
        if (random(1) < 0.5) {
            this.yspeed *= -1;
        }
    }
    
    /* Determine edges of the screen and updates score. */
    edges() {
    	if (isGameOver){
    		if (this.y - this.r > hei || this.y + this.r < 0) {
				this.yspeed *= -1;
    		}
    		if (this.x - this.r > wid || this.x + this.r < 0){
    			this.xspeed *= -1;
    		}    		
    	}
    	else{
    		if (this.y - this.r > hei) {
	            if(lastHit === 'l'){
	            	Score[3]++;
	            }
	            if(lastHit === 'r'){
	            	Score[1]++;
	            }
	            if(lastHit === 'u'){
	            	Score[0]++;
	            }
	            this.reset();
	        }
	        
	        if (this.y + this.r < 0) {
	            if(lastHit === 'l'){
	            	Score[3]++;
	            }
	            if(lastHit === 'r'){
	            	Score[1]++;
	            }
	            if(lastHit === 'd'){
	            	Score[2]++;
	            }
	            this.reset();            
	        }
	        
	        if (this.x - this.r > wid) {
	            if(lastHit === 'l'){
	            	Score[3]++;
	            }
	            if(lastHit === 'u'){
	            	Score[0]++;
	            }
	            if(lastHit === 'd'){
	            	Score[2]++;
	            }
	            this.reset();
	        }
	        
	        if (this.x + this.r < 0) {
	        	if(lastHit === 'u'){
	            	Score[0]++;
	            }
	            if(lastHit === 'r'){
	            	Score[1]++;
	            }
	            if(lastHit === 'd'){
	            	Score[2]++;
	            }
	            this.reset();            
	        }
    	}
        
    }
    
    /* Generates UI elements for the ball. */
    show() {
        fill(255);
        ellipse(this.x, this.y, this.r*2);
    }
}