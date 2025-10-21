/* 
Playing with mouse events: 
See https://p5js.org/reference/#/p5/mouseClicked 
*/

let select = 0; // Color of the shape
let size = 30; // Size of the shape
let rgba = [900, 0, 900, 20]; 
function setup() {
  noStroke(); 
  createCanvas(800, 800);
}

function draw() {
  fill(rgba);
  ellipse(mouseX, mouseY, size, size);
  if(select!=2){
    size = random(10, 10);
  }
}

function mouseClicked() {
  
   console.log('select: '+select); 
  
  rgba[select] = random(600,255); // Set r, g, or b 
  rgba[3] = random(0,50); // Set alpha (transparency) 
  select++; // Increment select by 1
 
  if(select >= 3){ // if select is greater or equal to...
    console.log('reset select'); 
    select = 0; 
  }
  return false; // mouseClicked expects this
}