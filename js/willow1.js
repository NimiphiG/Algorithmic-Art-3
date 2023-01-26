


function setup() {
    createCanvas(800, 800, WEBGL);
    angleMode(DEGREES) 
    frameRate(10)
    
}


function draw() {
    background(100);
   randomSeed(1)
    translate(0, 200, 300); 
    rotateX(20);
    rotateY(frameCount);
  
    branch(200);

   
}
 
function branch(length) {

    strokeWeight(map(length, 10, 100, 0.5, 5))
    line(0, 0, 0, 0, -length - 2, 0)
    translate(0, -length, 0)
   
    if (length > 10) {
        
        for (var i = 0; i < 3; i++) {

        

            rotateY(random(100,160))
            
            push()
            rotateZ(random(30,60))
            branch(length * 0.65)
            
            pop()
            
        }


    } else {
        
        noFill(0)
        ellipse(0, -7, 10,10)
    }
}

