
let sumA;
let randomZ;

function setup() {
    createCanvas(800, 800, WEBGL);
    angleMode(DEGREES)

    frameRate(2)


}
function draw() {
    randomSeed(2)
    background(100);
   
  

    translate(0, 200, 200);
    rotateX(40)
    rotateY(frameCount)
    fill(80, 70, 60);
    noStroke()
    push();
    rotate(180);
    translate(0, 200);
    cone(50, 500);
    pop();


    // for (a = 1; a < 10; a++) {
    //     push()
    //     sumA = 0;
    //     translate(0,-300)
    //     rotateY(random(120))
    //     branch(200, 90);
    //     pop()
    // }
    for (a = 1; a < 20; a++) {
        push()
        sumA = 0;
        translate(0, -200)
        rotateY(random(360))
        branch(100, 100);
        pop()
    }
    for (a = 1; a < 50; a++) {
        push()
        sumA = 0;
        rotateY(random(360))
        branch(200, 40);
        pop()
    }
    // for (a = 1; a < 10; a++) {
    //     push()
    //     sumA = 0;
    //     rotateY(random(120,240))
    //     branch(200, 40);
    //     pop()
    // }
    // for (a = 1; a < 10; a++) {
    //     push()
    //     sumA = 0;
    //     rotateY(random(240,360))
    //     branch(200, 40);
    //     pop()
    // }



}

function branch(length, maxAngle) {
    // if (length >= 200*0.7){
    //     noStroke()
    //     noFill()
    //     strokeWeight(5)
    // }else{ 
    stroke(0)
    fill(20, 100, 100, 100)
    strokeWeight(1)

    line(0, 0, 0, 0, -length - 5, 0);
    translate(0, -length, 0);


    console.log(sumA)
    if (sumA < 180) {

        randomZ = random(10, maxAngle);

        if (sumA + randomZ > 180) {
            randomZ = 180 - sumA
        }


        for (i = 1; i < random(sumA); i++) {
            push()
            rotateZ(-sumA)
            rotateY(random(60 * i))
            ellipse(0, i * 10, 10, 20); pop()
        }
        sumA += randomZ;

        for (b = 0; b < 3; b++) {
            rotateZ(randomZ);
            branch(length * 0.7);
        }


    }



}
