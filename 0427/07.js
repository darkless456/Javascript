/* 
* @Author: darkless
* @Date:   2015-04-12 14:07:58
* @Last Modified by:   darkless
* @Last Modified time: 2015-04-13 14:58:46
*/

'use strict';
var id = function(lab){
        return document.getElementById(lab);
    }
    var attr = id("wrapper");

    if (attr){
        var ul = id("dis");
        var list = ul.getElementsByTagName("li");
        var len = list.length;
        // var width = list[0].offsetWidth;
        var height = list[0].offsetHeight;
        var speed = 50;
        roll = function(){
            // attr.scrollLeft += 2;
            attr.scrollTop = attr.scrollTop + 2;
            // if (attr.scrollLeft % width <= 1){
            //     ul.appendChild(list[0]);
            //     attr.scrollLeft = 0;
            // }
            // setTimeout(roll, speed);
            if (attr.scrollTop % height <= 1){
                ul.appendChild(list[0]);
                attr.scrollTop = 0;
            }
            }
        }
 
    // ul.style.width = width*len + "px";
    ul.style.height = height*len + "px";
    ul.style.background = "blue";
    var timer = setInterval(roll, speed);

    attr.onmouseover = function(){
        clearInterval(timer);
    }
    attr.onmouseout = function(){
        timer = setInterval(roll, speed);
    }