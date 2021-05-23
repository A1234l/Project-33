class Snow{
    constructor(){
        var options = {
            isStatic : false,
            density : 1
        }
        this.posX = random(0,800);
        this.snow = Bodies.circle(this.posX,-20,10,options);
        this.image = loadImage('snow4.webp');
        World.add(aiworld,this.snow);
    }
    display(){
        ellipseMode(CENTER);
        fill('white');
        push();
        translate(this.posX,this.snow.position.y);
        imageMode(CENTER);
        image(this.image,0,0,20,20);
        pop();
    }
}