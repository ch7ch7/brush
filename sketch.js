function setup() {
  createCanvas(700, 500);
}

function draw() {
  fill(random(0,255),random(0,255),random(0,255));
  if(mouseIsPressed)
    {
      fill(mouseX,mouseY,random(0,255));
      quad(random(0,700),random(0,500),random(0,700),random(0,500),random(0,700),random(0,500),random(0,700),random(0,500));
    }
  else
    {
      fill(random(0,255),random(0,255),random(0,255))
      circle(mouseX,mouseY,random(0,300));
    }
    
  
}