/*
    Paste the code for your week 4 exercise below.
*/
let x=100
let y=100
let z=200
let s=z/8
let e=z*0.075
function setup (){
    createCanvas(400, 400);
}

function draw(){
   
    fill(255,0,0,)
    square(x,y,200)
    fill(255)
    quad(x+s,y+s,x+z-s,y+s,x+z-s,y+2*s,x+s,y+2*s)
    quad(x+e,y+2*s+e,x+z-e,y+2*s+e,x+z-e,y+3*s+e,x+e,y+3*s+e)
    quad(x+(z-s)/2,y+3*s+e,x+(z+s)/2,y+3*s+e,x+(z+s)/2,y+z-e,x+(z-s)/2,y+z-e)
    fill(0)
    textSize(50)
    text("Post Office",80,80)
}