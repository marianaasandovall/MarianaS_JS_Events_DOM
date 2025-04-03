document.addEventListener("DOMContentLoaded", function(){
    let onLoadEl = document.getElementById("onload");
    onLoadEl.innerHTML = "<h1>I loaded cause the DOM was fully loaded </h1>"
})

let directionEl = document.getElementById("direction");
document.addEventListener("keydown", function(e){
    directionEl.innerText = `The Key you pressed is ${e.code}`;
});

document.getElementById("clickMe").addEventListener("click", function () {
    this.innerText = "You clicked me!";
});

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

document.getElementById("randomColorBtn").addEventListener("click", changeBackgroundColor);