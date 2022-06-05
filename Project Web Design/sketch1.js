
let im;
let em;


function preload(){
 im = loadImage("Images/Why.png")
em = loadImage("Images/Mondo.jpg")
}

function setup() {
    createCanvas(1144, 536);
    background(em);
    noStroke();
}

function draw() {
    let red_prob = 0.6; // 60% kans op rood
    let orange_prob = 0.1; // 10% kans op groen
    let blue_prob = 0.3; // 30% kans op blauw
    let num = random(1); // kies een random nummer tussen 0 en 1.

    if (num < red_prob) {
        fill(255, 44, 0);
    } else if (num < orange_prob + red_prob) {
        fill(255, 182, 0);
    } else {
        fill(2, 76, 104);
    }
if(frameCount < 500){
    image(im,random(1044), random(456), 100, 100);
}
    
}