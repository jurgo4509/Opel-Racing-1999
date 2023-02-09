const buttonX = [50, 40];
const buttonY = [50, 40];
const buttonW = [400, 400];
const buttonH = [120, 120];

let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let rx = 200;
let ry = 200;
let recticul;
let opelis = new Image(20,20);
opelis.src = "opel.png";

function button(x){
    ctx.fillStyle = "#232323";
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 5;
    ctx.fillRect(buttonX[x], buttonY[x], buttonW[x], buttonH[x]);
    ctx.strokeRect(buttonX[x], buttonY[x], buttonW[x], buttonH[x]);
}


function rectangel(x,y){
    // ctx.fillStyle = "#ffffff";
    // ctx.strokeStyle = "#000000";
    // ctx.lineWidth = 3;
    // ctx.fillRect(x,y,20,20);
    // ctx.strokeRect(x,y,20,20);
    ctx.drawImage(opelis, x, y);
}


function clearScreen(){
    ctx.clearRect(0,0,800,800);
}


function draw() {
    // if(rx == 200 && ry == 200){
    //     recticul = 0;
    // }
    // if(rx == 600 && ry == 200){
    //     recticul = 1;
    // }
    // if(rx == 600 && ry == 600){
    //     recticul = 2;
    // }
    // if(rx == 200 && ry == 600){
    //     recticul = 3;
    // }
    // switch(recticul){
    //     case 0:
    //         rx+=2;
    //         break;
    //     case 1:
    //         ry+=2;
    //         break;
    //     case 2:
    //         rx-=2;
    //         break;
    //     case 3:
    //         ry-=2;
    //         break;
    // }
    // rx += rx <= 600 ? rx <= 200 ? 2 : 0 : -2;
    // ry += ry <= 600 ? ry <= 200 ? 2 : 0 : -2;   
    // console.log(rx)
    rx += ry <= 400 ? -2 : 2;
    ry += rx >= 400 ? -2 : 2;
    clearScreen();
    rectangel(rx, ry)
}

setInterval(function() {draw()}, 16);