class Chain {
    
    constructor(bodyA,bodyB){
    var option = {
        
        bodyA:bodyA,
        bodyB:bodyB ,
        stiffness:1,
        lenght:20

    }

      this.chain = Constraint.create(option)
      World.add(world,this.chain)
    
    }
  display(){
var poinA = this.chain.bodyA.position
var poinB = this.chain.bodyB.position
strokeWeight(4)
line(poinA.x,poinA.y,poinB.x,poinB.y)

  }
  
};