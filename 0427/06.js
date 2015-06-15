/* 
* @Author: darkless
* @Date:   2015-04-10 11:25:01
* @Last Modified by:   darkless
* @Last Modified time: 2015-04-10 11:41:22
*/

'use strict';

var x = document.getElementById("nav");
// alert(x);
// 获取外联css属性
function getStyle(obj , attr){
    return obj.currentStyle[attr]? obj.currentStyle[attr]: getComputedStyle(attr);
}

// alert(getStyle(x , "width"));