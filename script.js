
function buttonactivate1(){
    if (btn1.checked == true){
        document.getElementById('1').classList.toggle('button_active');
    }
    else if(btn1.checked == false){
        document.getElementById('1').classList.remove('button_active');
    }
}
function buttonactivate2(){
    if (btn2.checked == true){
        document.getElementById('2').classList.toggle('button_active');
    }
    else if(btn2.checked == false){
        document.getElementById('2').classList.remove('button_active');
    }
}
function buttonactivate3(){
    if (btn3.checked == true){
        document.getElementById('3').classList.toggle('button_active');
    }
    else if(btn3.checked == false){
        document.getElementById('3').classList.remove('button_active');
    }
}
function buttonactivate4(){
    if (btn4.checked == true){
        document.getElementById('4').classList.toggle('button_active');
    }
    else if(btn4.checked == false){
        document.getElementById('4').classList.remove('button_active');
    }
}
function buttonactivate5(){
    if (btn5.checked == true){
        document.getElementById('5').classList.toggle('button_active');
    }
    else if(btn5.checked == false){
        document.getElementById('5').classList.remove('button_active');
    }
}


var A;
var B;
C = Math.sqrt((A*A)+(B*B));
document.getElementById("submit").onclick = function(){
    A = document.getElementById("A").value;
    B = document.getElementById("B").value;
    C = Math.sqrt((A*A)+(B*B));
    document.getElementById("answer").innerHTML="Hypotenuse = "+ C;
}


var count=0;
document.getElementById("count").innerHTML = count;
document.getElementById("decrease").onclick = function(){
    count-=1;
    document.getElementById("count").innerHTML = count;
}
document.getElementById("reset").onclick = function(){
    count=0;
    document.getElementById("count").innerHTML = count;
}
document.getElementById("increase").onclick = function(){
    count+=1;
    document.getElementById("count").innerHTML = count;
}

var bb;
var bname;
document.getElementById("bbutton").onclick = function(){
    bb = Math.floor(Math.random() * 11);
    bname = document.getElementById("bname").value
    document.getElementById("bcount").innerHTML = bname+ " will have "+ bb+ " babies xD";
}

