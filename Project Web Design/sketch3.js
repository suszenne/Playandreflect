

let segment;
let aantal = 20;

let im;
let im2;
let im3;

let im4;

let im5;

let im6;
let all = [];





function preload(){
 im = loadImage("Images/Potrait1.jpg")
 all.push(im);
 im2 = loadImage("Images/Potrait2.jpg")
 all.push(im2);
 im3 = loadImage("Images/Potrait3.jpg")
 all.push(im3);
 im4 = loadImage("Images/Potrait4.jpg")
 all.push(im4);
 im5 = loadImage("Images/Potrait5.jpg")
 all.push(im5);
 im6 = loadImage("Images/Potrait5.jpg")
 all.push(im6);
}


function setup() {
    createCanvas(1060, 492);
}

function draw() {
    background(0);
    aantal = constrain(mouseX / 10.0, 4, 40);
    aantal = constrain(mouseY / 10.0, 4, 40);
    segment = width / aantal;
    console.log(aantal);
    for (let i = 0; i < aantal; i++) {
        for (let j = 0; j < aantal; j++) {
            fill(random(255), random(130), 0);
            //rect(i * segment, j * segment, segment - 5, segment - 5);
            image(all[(i*j)%all.length],i * segment, j * segment, segment + 5, segment + 5);
        }
    }
}
