class Ball{
    constructor(x,y,radius) {
        
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density:1.2
        };
        this.image = loadImage("sprites/paper.png");
        this.radius = radius;
        this.body = Bodies.circle(x,y,(this.radius-20)/2,options);
        World.add(world,this.body);
        

    }

         display() {
            push();
            translate(this.body.position.x,this.body.position.y);
            angleMode(RADIANS);
            rotate(this.body.angle);
            imageMode(CENTER);
            image(this.image,0,0,this.radius,this.radius);
            pop();
        }
        
	}