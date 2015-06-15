/* 
* @Author: darkless
* @Date:   2015-05-04 14:52:42
* @Last Modified by:   darkless
* @Last Modified time: 2015-05-05 13:06:46
*/

'use strict';

var cnt = (function(){
    var curr = "black";
    return function(){
        var tmp = curr;
        if(curr == "black"){
            curr = "white";
        }
        else if(curr == "white"){
            curr = "black";
        }
        return tmp;
    }
})();
        


window.onload = function(){
    document.getElementsByTagName("table")[0].onclick = function(ev){
        // console.log(ev);
        xia.call(ev.target); //做一个对象劫持，劫持this的指向
    };
    
    
    var xia = function(){

        //第一步  下棋
        var color = cnt(); //执行结果
        this.style.backgroundImage = "url(images/" + color + ".gif)";
        judge.call(this,color);
    }

    //判断胜负
    var judge = function(color){
        var tds = document.getElementsByTagName("td");
        // console.log(tds);
        //获得点击的位置的横向坐标和竖向坐标
        // alert("x:" + this.cellIndex + "y:" + this.parentNode.rowIndex);
        // console.log(this);
        // console.log(this.cellIndex);
        // return;
        var count = {x:this.cellIndex, y:this.parentNode.rowIndex, color:color};
        // console.log(count);
        var line = ["", "", "", ""];
        
        for(var i=0,tmp={};i<225;i++){  //????
            // console.log(i);
            // return;
            // console.log("x:" + tds[i].cellIndex);
            tmp = {x:tds[i].cellIndex,y:tds[i].parentNode.rowIndex,color:'0'};
            // console.log(tds[i]);
            // return;
            if(tds[i].style.backgroundImage.indexOf("black") >= 0){
                tmp.color = "b";
            }
            else if(tds[i].style.backgroundImage.indexOf("white") >= 0){
                tmp.color = "w";
            }

            //横轴
            if(count.y == tmp.y){
                line[0] += tmp.color;
            }
            //纵轴
            if(count.x == tmp.x){
                line[1] += tmp.color;
            }
            //左下
            if((count.x+count.y) == (tmp.y+tmp.x)){
                line[2] += tmp.color;
            }
            //右下
            if((count.y-tmp.y) == (count.x-tmp.x)){
                line[3] += tmp.color;
            }
            // console.log(line);
        }
        
        console.log(line);

        var win = color == "black"? "bbbbb":"wwwww"; //?????
        
        // var win = ""
        
        // if((color == "black") >= 0){
        //     win = "bbbbb";
        // }
        // else{
        //     win = "wwwww";
        // }

        console.log(win);

        for(var i=0; i<4; i++)

            if(line[i].indexOf(win) >= 0){
                alert(win + "胜利了！");
                break;
            }
    }
}