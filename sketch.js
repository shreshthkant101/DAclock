function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(200, 200);
    rotate(-90);
    let hr = hour();
    let sc = second();
    let mn = minute();


    strokeWeight(8);

    stroke(255, 100, 150);
    let end = map(sc, 0, 60, 0, 360);
    noFill();
    arc(0, 0, 300, 300, 0, end);

    stroke(150, 100, 255);
    let end2 = map(mn, 0, 60, 0, 360);
    noFill();
    arc(0, 0, 280, 280, 0, end2);

    stroke(100, 255, 150);
    let end3 = map(hr % 12, 0, 12, 0, 360);
    noFill();
    arc(0, 0, 260, 260, 0, end3);

    fill(255);
    push();
    rotate(90);
    noStroke();
    textSize(20);
    text(hr + " : " + mn + " : " + sc, -55, 0);
    pop();
    drawSprites();


}