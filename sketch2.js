var pieces = [];
var matrixCodetxt = "   stereotypes   ";
var matrixCode = matrixCodetxt.split("");
var ffont;
let vid;

function preload() {
    ffont = loadFont("files/IBMPlexMono-Regular.ttf");

vid = loadImage("Images/wordspioggia.jpg")
all.push(im6);
}

function setup() {
    createCanvas(1084, 500);
    textFont(ffont);
    textSize(35);
    noStroke();
    frameRate(50);
    for (var i = 0; i < 10; i++) {
        var mp = new matrixPiece(random(width), random(height / 2));
        pieces.push(mp);
    }
}

function draw() {
    background(vid);
    for (var i = 0; i < pieces.length; i++) {
        var mp = pieces[i];
        mp.draw();
    }
}

function mousePressed() {
    var mp = new matrixPiece(mouseX, mouseY);
    pieces.push(mp);
    console.log("nu:");
}

var matrixPiece = function (xx, yy) {
    this.x = xx;
    this.y = yy;
    this.ys = random(0.5, 4);
    this.locations = [];
    this.max = int(random(5, 20));
    this.select = int(random(matrixCode.length));
};

matrixPiece.prototype.move = function () {
    this.y += this.ys;
};

matrixPiece.prototype.store = function () {
    if (frameCount % 10 == 0) {
        this.locations.push(this.y);
    }
    if (this.locations.length > this.max) {
        this.locations.splice(0, 1);
    }
};

matrixPiece.prototype.resetthis = function () {
    if (this.y > height * 2) {
        this.y = 0;
    }
};

matrixPiece.prototype.draw = function () {
    this.move();
    this.store();
    this.resetthis();
    for (var i = 0; i < this.locations.length; i++) {
        var f = this.locations[i];
        fill(255, 255, 255, random(50) + (f + i) / 2.0);
        text(matrixCode[(this.select + i) % matrixCode.length], this.x, f);
    }
};