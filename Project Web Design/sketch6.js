let x = 200;
let y = 200;
let im;

function preload(){
    im = loadImage("Images/circle.png")
   }


function setup() {
    createCanvas(400, 400);
    imageMode(CENTER);
}

function draw() {
    background(0, 0, 0);
    var d = dist(mouseX, mouseY, x, y);
    fill(100, 100, 100, 1000);
    //ellipse(x, y, d, d);
    image(im, x, y, d, d);

}