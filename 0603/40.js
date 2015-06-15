/* 
 * @Author: darkless
 * @Date:   2015-05-27 09:48:05
 * @Last Modified by:   darkless
 * @Email: narcissu456@gmail.com
 * @Last Modified time: 2015-05-27 14:45:16
 */
"use strict";
//运动框架，适用以像素为单位的运动 和 透明度变化
var coe = 6;

function startMove(obj, attr, iTarget) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var cur = 0;
        if (attr == "opacity") {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
        } else {
            var cur = parseInt(getStyle(obj, attr));
        }
        var speed = (iTarget - cur) / coe
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (cur == iTarget) {
            clearInterval(obj.timer);
        } else {
            if (attr == "opacity") {
                obj.style[attr] = (cur + speed) / 100;
            } else {
                obj.style[attr] = cur + speed + "px";
            }
        }
        document.title = cur;
    }, 30);
}
// console.log(opacity.timer);
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}
// function getStyle(obj, name)
// {
//     if(obj.currentStyle)
//     {
//         return obj.currentStyle[name];
//     }
//     else
//     {
//         return getComputedStyle(obj, false)[name];
//     }
// }
// function startMove(obj, attr, iTarget)
// {
//     clearInterval(obj.timer);
//     obj.timer=setInterval(function (){
//         var cur=0;
//         if(attr=='opacity')
//         {
//             cur=Math.round(parseFloat(getStyle(obj, attr))*100);
//         }
//         else
//         {
//             cur=parseInt(getStyle(obj, attr));
//         }
//         var speed=(iTarget-cur)/6;
//         speed=speed>0?Math.ceil(speed):Math.floor(speed);
//         if(cur==iTarget)
//         {
//             clearInterval(obj.timer);
//         }
//         else
//         {
//             if(attr=='opacity')
//             {
//                 obj.style.filter='alpha(opacity:'+(cur+speed)+')';
//                 obj.style.opacity=(cur+speed)/100;
//                 document.getElementById('txt1').value=obj.style.opacity;
//             }
//             else
//             {
//                 obj.style[attr]=cur+speed+'px';
//             }
//         }
//     }, 30);
//     }