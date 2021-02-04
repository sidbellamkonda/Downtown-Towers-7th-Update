class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution : 0.3,
            friction : 0.008,
           
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
      }
     
      score(){
        if(this.visibility < 0 && this.visibility > -105 && gameState == "launched"){
          score++;
        }

     /*   if(this.visibility < 0 && this.visibility > -105 && gameState == "onSling2"){
          score++;
        } */

        if(this.visibility < 0 && this.visibility > -52.5 && gameState == "launched2"){
          score++;
        }
      }

      display(){
       // console.log(this.body.speed);
       if (this.body.position.y < 700 && this.body.position.x < 1200 && this.body.position.x > 0){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
       }
       else {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
      } 
    /*  if(gameState === "launched" || gameState === "launched2"){
        this.body.restitution = 0.3;
        this.body.friction = 0.0015;
      } */
  }
}