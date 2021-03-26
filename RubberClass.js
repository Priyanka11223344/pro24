class RubberClass {

    constructor(x, y,r) {
        var options = {
          'restitution': 1,
          'density':1,
          'friction': 0.5,
        };
        this.body = Bodies.circle(x, y,r, options);
        this.r = r;
        World.add(world, this.body);
      };
       display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("blue");
        circle(0, 0, this.r);
        pop();
      };
    };