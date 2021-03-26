class StoneClass {

    constructor(x, y,width,height) {
        var options = {
          'restitution': 1,
          'density': 3,
          'friction': 0.5,
        };
        this.body = Bodies.rectangle(x, y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      };
       display(){
        //var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        
        rotate(angle);
        rectMode(CENTER);
        fill(225);
        //rect(this.body.position.x,this.body.position.y, this.width,this.height);
        rect(0, 0, this.width, this.height);
        pop();
      };
    };