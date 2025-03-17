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

L1.forEach(findTheBanana);
L2.forEach(findTheBanana);

function greetingFunc() {
    const d = new Date()
    var h = d.getHours()
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
greetingFunc()