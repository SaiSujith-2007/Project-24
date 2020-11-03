class paper
{
    constructor(x,y,r){
    var options={
       isStatic:true,
       restitution:0.3,
       friction:0,
       density:1.2
    }
    
    this.radius=r;
    this.x=x;
    this.y=y;
    this.object=Bodies.circle(this.x,this.y,this.radius,options);
    World.add(world,this.object);
  }

  display(){
    var pos=this.object.position;
    var angle = this.object.angle;
    push();
    translate(pos.x,pos.y);
    
    
    
    fill("pink");
    ellipse(0,0,this.radius,this.radius);
    pop();
  }
}