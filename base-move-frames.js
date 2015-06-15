/* 
 * @Author: darkless
 * @Date:   2015-05-27 09:48:05
 * @Last Modified by:   Kevin
 * @Email: narcissu456@gmail.com
 * @Last Modified time: 2015-06-11 11:40:57
 */
"use strict";
//运动框架，适用以像素为单位的运动 和 透明度变化
var coe = 6;
//json={opacity:100, width:500}
//运动框架
function startMove(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        //终止符
        var end = true;
        //多属性同时变化
        for (var attr in json) {
            var cur = 0;
            //针对有小数位的透明度取整
            if (attr == "opacity") {
                cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                var cur = parseInt(getStyle(obj, attr));
            }
            //缓冲运动的速度
            var speed = (json[attr] - cur) / coe
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (cur != json[attr]) {
                end = false;
            }
            //兼容透明度和像素变化的运动形式
            if (attr == "opacity") {
                obj.style[attr] = (cur + speed) / 100;
            } else {
                obj.style[attr] = cur + speed + "px";
            }
        }
        //回调函数
        if (end) {
            clearInterval(obj.timer);
            if (fn) fn();
        }
    }, 30);
}