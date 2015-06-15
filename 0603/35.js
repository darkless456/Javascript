/* 
 * @Author: darkless
 * @Date:   2015-05-22 15:12:10
 * @Last Modified by:   darkless
 * @Email: narcissu456@gmail.com
 * @Last Modified time: 2015-05-25 13:47:32
 */
"use strict";
window.onload = function() {
    var oTable = document.getElementsByTagName("table")[0];
    var aTbody = document.getElementsByTagName("tbody")[0];
    var aTrs = document.getElementsByTagName("tr");
    var aTds = document.getElementsByTagName("td");
    // var oldColor = [];
    // console.log(aTbody);
    // alert(rows);
    // return;
    //
    // oTable.onmouseover = function(ev){
    //     console.log(ev);
    // }
    // return;
    //添加行
    var iD = aTrs.length;
    var oBtn = document.getElementsByTagName('input')[1];
    oBtn.addEventListener('click', function() {
        var oTr = document.createElement('tr');
        var oTd = document.createElement("td");
        oTd.innerHTML = iD++
        oTr.appendChild(oTd);
        var oTd = document.createElement("td");
        oTr.appendChild(oTd);
        var oTd = document.createElement("td");
        oTr.appendChild(oTd);
        var oTd = document.createElement("td");
        oTr.appendChild(oTd);
        aTbody.appendChild(oTr);
        changeColor();
    })
    // 隔行变色和鼠标移入移出变色
    function changeColor() {
        for (var i = 0; i < aTrs.length; i++) {
            if (i % 2) {
                aTrs[i].style.backgroundColor = "#ccc";
            } else {
                aTrs[i].style.backgroundColor = "";
            }
            // oldColor[i] = aTrs[i].style.backgroundColor;
        }
    }
    changeColor();
    // console.log(oldColor);
    var old = "";
    oTable.addEventListener("mouseover", function(ev) {
        old = ev.target.parentNode.style.backgroundColor;
        ev.target.parentNode.style.backgroundColor = "green";
    })
    oTable.addEventListener("mouseout", function(ev) {
        ev.target.parentNode.style.backgroundColor = old;
    })
    //删除行
    var aA = document.getElementsByTagName('a');
    for (var i = 0; i < aA.length; i++) {
        // console.log(aA[i]);
        aA[i].onclick = function() {
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
        }
        // console.log(aA[i].parentNode.parentNode.parentNode);
        // aA[i].onclick = (function(i){
        //     // alert(this);
        //     console.log(aA[i]);
        //     // aA[i].parentNode.parentNode.removeChild(this.parentNode.parentNode);
        // })
    }
    var aSearch = document.getElementById("search");
    var oSbtn = document.getElementById("sbutton");
    oSbtn.onclick = function() {
        for (var i = 0; i < aTds.length; i++) {
            var oChar1 = aSearch.value.toLowerCase(); //输入值
            var oChar2 = aTds[i].innerHTML.toLowerCase(); //表格中的值
            var arr = oChar1.split(" "); //模糊搜索未能成功
            changeColor();
            for (var k = 0; k < arr.length; k++) {
                if (oChar2.search(arr[k]) != -1) {
                    aTds[i].style.backgroundColor = 'yellow'
                } else {
                    aTds[i].style.backgroundColor = old;
                }
            }
        }
    }
}