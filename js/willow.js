
let sumA;
let randomZ;
let theta = 0

function setup() {
    createCanvas(800, 1000, WEBGL);
    angleMode(DEGREES);
    colorMode(RGB);
    frameRate(1);
    // noLoop()

}

function draw() {

    randomSeed(44);
    background(50, 50, 60);


// if(frameCount<=10){
//     p=-1
// }else{
//     p=1
// }
    translate(0, 00,-400 + 500*cos(theta));
    theta+=10
    rotateX(0);
  

    noStroke()


    push();
 scale(2)

    translate(0, 100);

    
    fill(255,200,180,200);
    sphere(30);

    fill(170, 50, 200, 40);
    sphere(40);

    fill(80, 160, 100, 150);
    sphere(50, 4);
   
    fill(20, 100, 100, 50);
    sphere(60);

    fill(90, 75, 70,200);
    translate(0, 300, 0,);
    cone(50, 500);

   

    fill(90, 75, 70,200);
    rotate(180);

    translate(0,500);
    cone(50, 300);
    


    pop();






   



    // for (a = 1; a < 20; a++) {
    //     push();
    //     sumA = 0;
    //     translate(0, -300);
    //     rotateY(random(360));
    //     branch(100, 80);
    //     pop();
    // }
    rotateY(frameCount);

    for (a = 1; a < 200; a++) {
        push();
        sumA = 0;
        rotateY(random(360));
        branch(250, 80);
        pop();
    }
    // push()
    // fill(20, 100, 100, 100)
    // translate(0,100)
    // sphere(400)
    // pop()

}

function branch(length, maxAngle) {
   
    // noStroke(0);
    fill(80, 160, 100, 100);

   

    // line(0, 0, 0, 0, -length - 5, 0);
    translate(0, -length, 0);


    // console.log(sumA);

    if (sumA < 180) {

        randomZ = random(10, maxAngle);

        if (sumA + randomZ > 180) {
            randomZ = 180 - sumA;
        }


        for (i = 1; i < random(sumA); i++) {
            push();
            stroke(20, 10, 30)
            strokeWeight(2);
            rotateZ(-sumA);
            rotateY(random(360));

            ellipse(0, i * i / 2, 20* i/20 , 10 * i/2);
            pop();
        }
        

        
        sumA += randomZ;

        for (b = 0; b < 3; b++) {
            rotateZ(randomZ);
            branch(length * 0.75);
        }


    }



}
