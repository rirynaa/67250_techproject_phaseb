var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    var sum = x1 + x2
    console.log(sum)
}
sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C)
    if (C.length < z) {
        console.log(z)
    }
} else {
    console.log("good job!")
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

/*function findTheBanana(list) {
    list.forEach((element) => {
        if (element == "Banana") {
            alert("Found the banana!")
        }
    });
}   

findTheBanana(L1);
findTheBanana(L2); */

var now = new Date();
var hour = now.getHours();

function greeting(x) {
    if ((document.getElementById("greeting") != null && (window.location.pathname.endsWith("index.html")))) {
        if (x < 5 || x>=20) {
            document.getElementById("greeting").innerHTML = "Good night";
        } else if (x < 12) {
            document.getElementById("greeting").innerHTML = "Good morning";
        } else if (x < 18) {
            document.getElementById("greeting").innerHTML = "Good afternoon";
        } else {
            document.getElementById("greeting").innerHTML = "Good evening";
        }
    }
}
greeting(hour);

function addYear(){
    var year = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = "&copy; " + year + " MonoMuse. All rights reserved.";
}
addYear();