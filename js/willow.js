
let sumA;
let randomZ;

let randomseed = 44

function setup() {
    createCanvas(800, 1000, WEBGL);
    angleMode(DEGREES); // allows the program to used degreese instead of radians
    colorMode(RGB);
}

function draw() {

    randomSeed(randomseed);

    background(50, 50, 60);
    translate(0, 0, -900);


    rotateX(0);
    noStroke();

    push();

    scale(2);
    translate(0, 100);

    fill(255, 200, 180, 200); sphere(30); //pink

    fill(170, 50, 200, 40); sphere(40);//purple

    fill(80, 160, 100, 150); sphere(50, 4); // the second number is the detail so the lower the number the less edges it has

    fill(20, 100, 100, 50); sphere(60);//green

    translate(0, 300, 0,);

    fill(90, 75, 70, 200); cone(50, 500);// brown

    rotate(180);
    translate(0, 500);
    cone(50, 300);

    pop();

    rotateY(frameCount);//spin 

    for (a = 1; a < 200; a++) {
        push();
        sumA = 0;
        rotateY(random(360));
        branch(250, 80); // base length and max angle to change the overall shape and size
        pop();
    }
}

function branch(length, maxAngle) {

    fill(80, 160, 100, 100);// green

    translate(0, -length, 0); // move to new leaf pos

    
    if (sumA < 180) {

        randomZ = random(10, maxAngle);

        if (sumA + randomZ > 180) {
            randomZ = 180 - sumA;// let last leaf direction be 180
        } 

        for (i = 1; i < random(sumA); i++) { //draw a random amount of leaves (more as you get the the end of the branch)
            
            push();

            stroke(20, 10, 30); strokeWeight(2); // style

            rotateZ(-sumA); // rotate each leaf so that it points down
            rotateY(random(360));

            ellipse(0, i * i / 2, 20 * i / 20, 10 * i / 2);

            pop();
        }
            rotateZ(randomZ);
            sumA += randomZ; 

            branch(length * 0.75);// recall with a sccaleing value to create recursion
    }
}
