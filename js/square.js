class Square{


constructor(center,size){
    this.center = center;
    this.pos = createVector(center.x/width, center.y/height);
    this.size = size;
    this.width_p = size/width;
    this.height_p = size/height;
    


}


display(){

    rectMode(CENTER);
    //fill(random(255),random(255),random(255));
    fill(255,0,255);
    rect(this.pos.x,this.pos.y,this.width_p*width,this.height_p*height);

}





}