var x = 5
var y = 7
var z = x + y
console.log(z)
var A = "Hello "
var B = "World!"
var C = A + B
console.log(C)

function SumNPrint(x1, x2) {
    x3 = x1 + x2
    return x3
}

console.log(SumNPrint(x, y))
console.log(SumNPrint(A, B))

if (C.length > z) {
    console.log(C)
}
if (C.length < z) {
    console.log(z)
}
if (C.length = z) {
    console.log("good job!")
}

const L1 = ["Watermelon", "Pineapple", "Pear", "Banana"]
const L2 = ["Apple", "Banana", "Kiwi", "Orange"]

function findTheBanana(item) {
    if (item == "Banana") {
        alert("We found the banana")
    }
}

/*
L1.forEach(findTheBanana);
L2.forEach(findTheBanana);
*/

function greetingFunc() {
    const d = new Date();
    var h = d.getHours();
    if (h < 12){
        document.getElementById("timed").innerHTML = "Good Morning, I am Billy McGrath";
    }
    else if (12 < h < 18){
        document.getElementById("timed").innerHTML = "Good Afternoon, I am Billy McGrath";
    }
    else if (18 < h < 20){
        document.getElementById("timed").innerHTML = "Good Evening, I am Billy McGrath";
    }
    else if (20 < h < 24){
        document.getElementById("timed").innerHTML = "Good Night, I am Billy McGrath";
    }
    else if (0 < h < 5){
        document.getElementById("timed").innerHTML = "Good Night, I am Billy McGrath";
    }
}
//greetingFunc()

function addYear() {
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("copyYear").innerHTML += year
}
/*
function showList() {
    document.getElementById("hidden").style.display = "block";
    document.getElementById("button").style.display = "none";
}
*/
var more = true

function showBio() {
    if (more = true) {
        more = false
        document.getElementById("more").style.display = "none";
        document.getElementById("less").style.display = "block";
    }
    else {
        more = true
        document.getElementById("less").style.display = "none";
        document.getElementById("more").style.display = "block";
    }
}

if (window.location.pathname === '/index.html') {
    $(document).ready(function(){
        $("#more").click(function(){
        $("#more").hide();
        $("#less").show();
        $("#bio").show()
        });
        $("#less").click(function(){
        $("#less").hide();
        $("#more").show();
        $("#bio").hide()
        });
    });
}
function checkValid() {
    const x = document.getElementById("name");
    const y = document.getElementById("email");
    const z = document.getElementById("comment");
    if (!x.checkValidity()){
        document.getElementById("valid").style.display = "block";
    }
    if (!y.checkValidity()){
        document.getElementById("valid").style.display = "block";
    }
    if (!z.checkValidity()){
        document.getElementById("valid").style.display = "block";
    }
}

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.text())
        .then(text => {
            const x = document.getElementById("adviceText");
            x.innerText = text.substring(text.indexOf('"advice":') + 9, text.length - 2);
})
    .catch(error => {
        console.error('something went wrong');
    })
}