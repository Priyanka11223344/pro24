class HammarClass {

        constructor(x, y,width,height) {
            var options = {
              'density': 5,
              'friction': 1,
              'restitution':0.5
            };
            this.body = Bodies.rectangle(x, y,width,height, options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
          };
          display(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        var angle = this.body.angle;
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            fill("red");
            rect(0,0,this.width,this.height);
            pop();
          };
        };