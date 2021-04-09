class Chain {
    constructor(myBodyA,myBodyB){
      var options={
        bodyA:myBodyA,
        bodyB:myBodyB,
        stiffness:0.5,
        length:10
      }
      this.chain = Constraint.create(options);
      World.add(world,this.chain);
    }

    display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    strokeWeight(3);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}