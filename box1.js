class Box1 {
  constructor(x, y, width, height) {
    var options = {
      'restitution':0.2,
      'friction':1,
      'density':1
    }
    this.visiblity=255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    if (this.body.speed<3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body)
      push();
      this.visibility=this.visibility-5
      pop();
    }
  }
};
