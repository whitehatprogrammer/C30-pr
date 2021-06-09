class Ball{
    constructor(x,y,r){
        var options = {
            'restitution':0.8,
            'friction' :1.0,
            'density' :1.0
        }
        this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r, options) ;
        this.image = loadImage("polygon.png");
        World.add(world,this.body);

    }
    display(){

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r);
        pop ();

    }
}