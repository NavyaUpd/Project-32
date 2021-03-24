class Ball{
    constructor(x,y,size){
        var options = {
            'setStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //this.size = Math.floor(random(1,6))*10;
        //console.log(this.size)
        this.color = color;
        this.body = Bodies.circle(x, y, size, options);
        World.add(world, this.body);
        this.size = size;
        this.image1 = loadImage("10.png");
        this.image2 = loadImage("20.png");
        this.image3 = loadImage("30.png");
        this.image4 = loadImage("40.png");
        this.image5 = loadImage("50.png");
    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER);
        imageMode(CENTER);
        var angle = this.body.angle;

        if (this.size === 10){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            image(this.image1, 0, 0, this.size*2, this.size*2);
            pop();
        }else if (this.size === 20){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            image(this.image2, 0, 0, this.size*2, this.size*2);
            pop();
        }else if (this.size === 30){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            image(this.image3, 0, 0, this.size*2, this.size*2);
            pop();
        }else if (this.size === 40){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            image(this.image4, 0, 0, this.size*2, this.size*2);
            pop();
        }else if (this.size === 50){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            image(this.image5, 0, 0, this.size*2, this.size*2);
            pop();
        }else {
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            image(this.image5, 0, 0, this.size*2, this.size*2);
            pop();
        }
        
    }
}
/*if (this.size === 10){
            fill("blue");
            ellipse(pos.x,pos.y,this.size*2,this.size*2);
        }else if (this.size === 20){
            fill("red");
            ellipse(pos.x,pos.y,this.size*2,this.size*2);
        }else if (this.size === 30){
            fill("green");
            ellipse(pos.x,pos.y,this.size*2,this.size*2);
        }else if (this.size === 40){
            fill("yellow");
            ellipse(pos.x,pos.y,this.size*2,this.size*2);
        }else if (this.size === 50){
            fill("orange");
            ellipse(pos.x,pos.y,this.size*2,this.size*2);
        }else {
            fill("black");
            ellipse(pos.x,pos.y,this.size*2,this.size*2);
        }*/