let segment;
let aantal = 20;

var myPlayer = videojs('cuori.mp4');




function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    background(255);
    aantal = constrain(mouseX / 10.0, 4, 40);
    segment = width / aantal;
    console.log(aantal);
    for (let i = 0; i < aantal; i++) {
        for (let j = 0; j < aantal; j++) {
            fill(random(255), random(130), 0);
            //rect(i * segment, j * segment, segment - 5, segment - 5);
            //image(im,i * segment, j * segment, segment + 5, segment + 5);
            video(vid1, i * segment, j * segment, segment + 5, segment + 5)
        }
    }
}

