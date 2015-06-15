/* 
 * @Author: darkless
 * @Date:   2015-05-14 11:03:19
 * @Last Modified by:   darkless
 * @Email: narcissu456@gmail.com
 * @Last Modified time: 2015-05-14 16:39:56
 */
"use strict";
// function c(){
//     return 2;
// }
// c();
window.onload = function() {
    //     console.log(this.cellIndex);
    //     return;
    document.getElementById("main").addEventListener("click", main, false);
    // 计数器
    var cnt = (function() {
        var color = "black"; //第一次运行后，内存里的该值会被改变。不再是初始值。
        return function() {
            // var tmp = color
            if (color == "black") {
                color = "white";
            } else {
                color = "black";
            }
            return color;
        }
    })();
    //棋局是否继续的标志位
    var on_off = false;
    // console.log(cnt());
    // console.log(cnt());
    // console.log(cnt());
    // console.log(cnt());
    // return;
    // 主函数
    function main(ev) {
        // var on_off = false;
        luozi.apply(ev.target, arguments);
    }
    // 落子函数
    function luozi() {
        var color = cnt();
        // var on_off = false;
        if (on_off) {
            alert("棋局已经结束！");
            var conf = confirm("是否重新开启新棋局？")
            if (conf) {
                location.reload();
            } else {
                return;
            }
            return;
        }
        // if(bg == ""){
        //     bg = color;
        // }
        // else{
        //     alert("这里已经下过了！");
        // }
        // this.style.backgroundColor = cnt();
        //判断是否已有棋子
        if (this.style.backgroundColor.indexOf("black") >= 0) {
            alert("这里不能再下了");
            return;
        }
        if (this.style.backgroundColor.indexOf("white") >= 0) {
            alert("这里不能再下了");
            return;
        }
        this.style.backgroundColor = color;
        win.call(this, color);
    }
    //判断胜负
    function win(color) {
        // console.log(this.cellIndex, this.parentNode.rowIndex);
        var aIn = {
            x: this.cellIndex,
            y: this.parentNode.rowIndex,
            color: color
        };
        // console.log(aIn);
        var aPos = ["", "", "", ""];
        var aTds = document.getElementsByTagName("td");
        var len = aTds.length;
        for (var i = 0; i < len; i++) { //确定棋盘长度
            // var tmp = i;
            var aTmp = {
                x: aTds[i].cellIndex,
                y: aTds[i].parentNode.rowIndex,
                color: "0"
            }
            // console.log(aTmp[254]);
            if (aTds[i].style.backgroundColor.indexOf("black") >= 0) {
                aTmp.color = "b";
            }
            if (aTds[i].style.backgroundColor.indexOf("white") >= 0) {
                aTmp.color = "w";
            }
            //横向
            if (aTmp.y == aIn.y) {
                aPos[0] += aTmp.color;
            }
            //纵向
            if (aTmp.x == aIn.x) {
                aPos[1] += aTmp.color;
            }
            //左下
            if ((aTmp.x + aTmp.y) == (aIn.x + aIn.y)) {
                aPos[2] += aTmp.color;
            }
            //右下
            if ((aTmp.x - aIn.x) == (aTmp.y - aIn.y)) {
                aPos[3] += aTmp.color;
            }
        }
        console.log(aPos);
        //判断胜负的条件
        for (var i = 0; i < 4; i++) {
            if (aPos[i].indexOf("bbbbb") >= 0) {
                alert("Black is winner.");
                on_off = true;
                var conf = confirm("是否重新开启新棋局？")
                if (conf) {
                    location.reload();
                } else {
                    return;
                }
                break;
            } else if (aPos[i].indexOf("wwwww") >= 0) {
                alert("White is winner.")
                on_off = true;
                var conf = confirm("是否重新开启新棋局？")
                if (conf) {
                    location.reload();
                } else {
                    return;
                }
                break;
            }
        }
    }
}