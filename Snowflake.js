class Snowflake{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
        }
        this.body=Bodies.circle(x,y,r,options);
        World.add(world, this.body);
        this.r=r;
        this.image=loadImage("Snowflake.png");
        
    }

    display(){
        var pos=this.body.position;
        push();
        imageMode(CENTER);  
        image(this.image,pos.x,pos.y,this.r,this.r, 50, 50);
        pop();
        //ellipse(pos.x,pos.y,this.r,this.r,this.image);
    }

}