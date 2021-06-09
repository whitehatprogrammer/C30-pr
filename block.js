class Block{
    constructor(x, y, width, height) {
        var options = {
      
          restitution :0.4,
          friction :0.02
                    
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.jpeg");
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(this.color)
        image(this.image,0,0,this.width, this.height);
        pop();
        }
        else{
          World.remove(world,this.body);

          push();
          this.Visibility = this.Visibility-5;
          tint(255,this.Visibility);
          image(this.image,this.body.position.x,this.body.position.y,50,50)
          pop ();
        }
      }
}
