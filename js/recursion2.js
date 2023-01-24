
let brown1, brown2;

function setup() {
    createCanvas(800, 1000);
    angleMode(DEGREES);
    noLoop();
    brown1 = color('brown');
    brown2 = color('black');
    slider = createSlider(5, 90, 45);
    
    slider.style('width','200px')
    slider.position(windowWidth/2-100,40);
    slider.input(draw);
}

function draw() {
    background(100);
    resetMatrix();
    translate(width / 2, height);
    branch(200);
}

function branch(length) {
    let maxAngle = slider.value();
    strokeWeight(map(length, 20, 200, 1, 15));
    stroke(lerpColor(brown1, brown2, length / 150)); // mixes two colours

    line(0, 0, 0, -length);
    translate(0, -length);

    if (length > 10) {
        if (length < 15) {

            let r = 200 + random(-20, 20);
            let g = 200 + random(-100, 20);
            let b = 200 + random(-100, 20)

            fill(r, g, b, 150)

            // let leaf = length
            // ellipse(0, -length, leaf, leaf*2);
            noStroke();

            beginShape();

            let radius = random(5, 20)

            for (let i = 45; i < 135; i++) {
                let x = radius * cos(i);
                let y = radius * sin(i);
                vertex(x, y);
            }
            for (let i = 135; i > 45; i--) {
                let x = radius * cos(i)
                let y = radius * sin(-i);
                vertex(x, y);
            }

            endShape(CLOSE)

        } else {

            push();
            rotate(random(-maxAngle, maxAngle));
            branch(length * 0.4);
            pop();

            push();
            rotate(random(-maxAngle, maxAngle));
            branch(length * 0.6);
            pop();

            push();
            rotate(random(-maxAngle, maxAngle));
            branch(length * 0.8);
            pop();

            
        }

    }
}

