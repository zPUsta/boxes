const button = document.getElementById("btn");
const container = document.querySelector('#boxes');

function createBox(){
     let box = document.createElement("div");
     box.classList.add("box");
     container.appendChild(box)
     
    let randomColor = RandomColor();
    box.style.color = randomColor;
    box.textContent = `Message ${Math.floor(Math.random() * 10) + 1}`; 

    setTimeout(function() {
        container.removeChild(box);
    }, 3000);
     
}

function RandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener("click", createBox);




