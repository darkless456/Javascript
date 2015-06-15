/* 
* @Author: darkless
* @Date:   2015-04-13 11:45:45
* @Last Modified by:   darkless
* @Last Modified time: 2015-04-13 14:41:00
*/

'use strict';
var pics = document.getElementById("pic").getElementsByTagName("img");
// alert(pics.length); 21 pics
var x = {}, y = {}, i;
var speed = 70;
var timer1 = setInterval(scroll, speed);
// var timer2 = change();
// reset the pics
function pos(){
    for(i=0; i<pics.length-1; i++){
        if(i<5){
            x[i] = 2+i*100; y[i] = 2;
        }
        else if(i<10){
            x[i] = 2+5*100; y[i] = 2+(i-5)*100;
        }
        else if(i<15){
            x[i] = (2+5*100)-(i-10)*100; y[i] = 2+5*100;
        }
        else if(i<20){
            x[i] = 2; y[i] = 2+5*100-(i-15)*100;
        }
        pics[i].style.top = y[i] + "px";
        pics[i].style.left = x[i] + "px";
    }
}
pos();
function scroll(){
    for(i=0; i<pics.length-1; i++){
        // top
        if(x[i]!=(2+5*100)&&y[i]==2){
            x[i] = x[i] + 2;
            pics[i].style.left = x[i] + "px";
        }
        // left
        if(x[i]==2&&y[i]!=2){
            y[i] = y[i] - 2;
            pics[i].style.top = y[i] + "px";
        }
        // right
        if(x[i]==(2+5*100)&&y[i]!=(2+5*100)){
            y[i] = y[i] + 2;
            pics[i].style.top = y[i] + "px";
        }
        // bottom
        if(x[i]!=2&&y[i]==(2+5*100)){
            x[i] = x[i] - 2;
            pics[i].style.left = x[i] + "px";
        }
    }
}
