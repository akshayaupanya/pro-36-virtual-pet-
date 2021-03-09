var dog,sadDog,happyDog;
var foodobj;
var database;
var foods;
var time;
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
 B1 = createButton("feedDog");
 B1.position(750,100);
 B1.mousePressed(feeddog)
 B2 = createButton("AddFood");
 B2.position(820,100);
 B2.mousePressed(addfood)
foodobj = new Food()
// command to read the foodstock from database
var foodstock = database.ref('foodCount');
foodstock.on("value",readstock);
var readfedtime = database.ref('fedTime');
readfedtime.on("value",fedtime);
}

function draw() {
  background(46,139,87);
 foodobj.display();
  drawSprites();
 console.log(foodobj.foodcount);
 // display fed time
 fill(255);
 if(time>=12){
   text("last fed:" + time%12 + "PM", 350,50);
 }
 else if( time === 0){
   text("last fed : 12 AM", 350, 50);
 } 
 else {
   text("lastfed:" + time + "AM", 350,50);
 }
}

//function to read food Stock
function readstock(data){
  foods = data.val();
  
  foodobj.updatefoodcount(foods);

}

//function to update food stock and last fed time
function fedtime(data){
  time = data.val();
}

//function to add food in stock
function addfood(){
foodobj.addfoodcount()
database.ref('/').update({
  foodCount: foodobj.foodcount
});

}
function feeddog(){
foodobj.decreasefoodcount()
database.ref('/').update({
  foodCount: foodobj.foodcount,
  fedTime:hour()
})
}