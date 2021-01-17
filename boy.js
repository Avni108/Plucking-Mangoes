class Boy
{   
    constructor(x,y,r){
        
       var options= {
           isStatic:true,  
       }

       this.x = x
       this.y = y
       this.r = r
       this.image = loadImage("boy.png");
       this.body = Bodies.circle(this.x,this.y,this.r/2,options);
       World.add(world,this.body);
    }
 
    display(){
        var boypos = this.body.position;
        push()
        translate(boypos.x,boypos.y);
        //strokeWeight(3)
        //fill(127,0,255);
        //ellipse(0,0,this.r,this.r);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop()  
    }
}    





