class Plinko{
constructor(x,y,r){
   var options = {
              isStatic: true
          }
          this.body = Bodies.circle(x,y,r,options);
          this.color=color(random(0,255),random(0,255),random(0,255))
          this.r=10;
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          rectMode(CENTER);
          fill("brown");
          ellipseMode(RADIUS);
          ellipse(pos.x, pos.y, this.r,this.r);
        }
      };
    
