
let brown1, brown2;
let theta

function setup() {
    createCanvas(1200, 1200);
    angleMode(DEGREES);
    frameRate(10)
 
    

    brown1 = color('while');
    brown2 = color('black');
    slider = createSlider(0, 10, 5);

    slider.style('width', '200px')
    slider.position(windowWidth / 2 - 100, 20);
    slider.input(draw);
}

function draw() {
    background(100);
    resetMatrix();

    length = 200
    let angle = 0
  

    while (angle < 360) {

        push();
        translate(width / 2, height / 2);
        rotate(angle)
        branch(length);
        pop();
        angle += 15
        
    }
}

function branch(length) {
      let maxAngle = slider.value()
    strokeWeight(map(length, 15, 200, 1, 20));
    stroke(lerpColor(brown2, brown1, length / 150)); // mixes two colours

    if (length == 200) {
        noStroke()
        translate(0, +length)
    }
    if (length == 0){
        strokeWeight(10)
    }

    line(0, 0, 0, -length);
    translate(0, -length);


    if (length > 1) {
        if (length <10) {

            let r = 150 + random(-20, 20);
            let g = 150 + random(-20, 20);
            let b = 150 + random(-20, 20)

           fill(r,g,b)


            let leaf = length
            ellipse(0, 0, leaf, leaf * 2);

            noStroke();

        } else {

            push();
            rotate(randomGaussian(-maxAngle, maxAngle));
            branch(length * 0.2);
            pop();

            push();
            rotate(randomGaussian(-maxAngle, maxAngle));
            branch(length * 0.2);
            pop();

            push();
            rotate(randomGaussian(-maxAngle, maxAngle));
            branch(length * 0.4);
            pop();
            push();

            rotate(randomGaussian(-maxAngle, maxAngle));
            branch(length *0.6);
            pop();

            push()
            rotate(randomGaussian(-maxAngle, maxAngle));
            branch(length * 0);
            pop();



        }

    }
}
