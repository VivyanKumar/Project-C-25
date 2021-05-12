class Bin{
    constructor(x,y,width,height){

        var bin_options = {
            isStatic : true,
        };

        this.body = Bodies.rectangle(x,y,width,height,bin_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dustbingreen.png");
        World.add(world,this.body);

    }
        display(){

            push();
            fill ("white");
            imageMode(CENTER);
            image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
            pop ();
        }

    }
