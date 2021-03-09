class Food{
    constructor(){
        this.imgs = loadImage("Images/Milk.png")
        this.foodcount = 0;
    }
    getfoodcount(){
        return this.foodcount
    }
    decreasefoodcount(){
        this.foodcount = this.foodcount-1;
    }
    addfoodcount(){
        this.foodcount = this.foodcount+1;
    }
    updatefoodcount(food){
        this.foodcount = food;
    }
    display(){
        var x = 80;
        var y = 100;
        imageMode(CENTER);
        image(this.imgs,720,220,70,70);
        for(var i=0; i<this.foodcount;i++){
            if(i%10 === 0){
                x=80;
                y=y+70;
            }
            image(this.imgs,x,y,70,70)
            x=x+30;

        }
    }
}