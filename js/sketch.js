let squares = [];


function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background(0);
    fill(255,0,255);
    //ellipse(mouseX, mouseY, 10,10);

    squares.forEach((square) => {
        square.display();
    });

    if(frameCount%150==0){
        let x = random(0,width); let y = random(0,height);
        let pos = createVector(x,y);
        let size = random(5,50);
        let s = new Square(pos,size);
        squares.push(s);
    }

}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);

}

function keyPressed(){
    if (key == 'a'){
        let x = mouseX; let y = mouseY;
        let pos = createVector(x,y);
        let size = random(5,50);
        let s = new Square(pos,size);
        squares.push(s);
    }
}