/*
    Paste the code for your week 3 exercise below.
*/

let x=100
let y=100
let z=200
let s=z/8
let e=z*0.075
let q=10

// string and object work
let gB = {}
gB.text="Post Office"
console.log(gB.text);

let gS = gB.text;
console.log(gB.text);

function setup(){
createCanvas(800,800);
// background(200) 
}


function draw(){
    
    background(200)

    //郵便局
    fill(0)
    textSize(50);
    text(gB.text,mouseX,mouseY)
    textSize(15)
    text("Street Number:" + key,30,30)
    if(keyIsPressed){
        print(key)
    }

  
    // main object
    fill(255,0,0,)
    square(x,y,z)
    fill(255)
    quad(x+s,y+s,x+z-s,y+s,x+z-s,y+2*s,x+s,y+2*s)
    quad(x+e,y+2*s+e,x+z-e,y+2*s+e,x+z-e,y+3*s+e,x+e,y+3*s+e)
    quad(x+(z-s)/2,y+3*s+e,x+(z+s)/2,y+3*s+e,x+(z+s)/2,y+z-e,x+(z-s)/2,y+z-e)
    
    // mouse input
    // background(200)
    fill (255,212,0)
    square (mouseX,mouseY,10)


}


//double clik ダブルクリックの処理
//引用/refarence/ https://qiita.com/shoboo/items/3754a4eb3a2cee310a引用

function doubleClicked() { 
    fill(212,223,21)
    point (mouseX, mouseY);
    return false;
}








