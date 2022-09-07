//variables
const body = document.querySelector("body");
const square = document.querySelectorAll(".square");
const colorDisplay = document.querySelector("#colorDisplay");
const message = document.querySelector("#message");
const h1 = document.querySelector("#h1");
const reset = document.querySelector("#reset");
const easy = document.querySelector("#EASY");
const hard = document.querySelector("#HARD");
const inputsLevel = document.querySelectorAll(".inputLevel")
const score = document.querySelector("#score");
const scoreContainer = document.querySelector(".score-container");


//default body background color for square clicks
body.style.backgroundColor = "rgb(23, 23, 23)"

//num of Squares for EASY and HARD mode
let numSquare = 6;

//Random Colors for Squares
let colors = generateRandomColors(numSquare);

//Click in winner color
let clickedColor = '';

//Winner color 
let pickedColor = pickColor();

//Color to discover
colorDisplay.textContent = pickedColor;
colorDisplay.style.fontSize = "72px"

//Score
score.value = 0;


//Giving colors to squares and functionality

for (let i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i]
    square[i].addEventListener("click",function () {
        
        clickedColor = square[i].style.backgroundColor;
        if (clickedColor === pickedColor) {
            updateScore()
            message.textContent = 'CORRECT!';
            message.style.color = "#28ed59";
            message.style.fontWeight = "bold"
            message.style.fontSize = "24px"
            h1.style.backgroundColor = pickedColor;
            changeColors(pickedColor);
            reset.textContent = 'PLAY AGAIN?'
            reset.addEventListener("click",function() {
            this.textContent = 'NEW COLORS';
            message.textContent = '';
            })
        }
        else {
            square[i].style.backgroundColor = body.style.backgroundColor;
            message.textContent = 'TRY AGAIN';
            message.style.color = "red"
            message.style.fontWeight = "bold"
            message.style.fontSize = "24px"
            decreaseScore()
        }
    })
}

//Change bg of clicked square
function changeColors (color) {
    if (color) {
        for (let i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = pickedColor
            square[i].style.pointerEvents = "none";
        }
    }
};

//Winner color
function pickColor () {
    let randomNum = Math.floor(Math.random() * colors.length)
    return colors[randomNum];
}

//Generate of random colors
function randomColor () {
    let num1 = Math.floor(Math.random() * 255 + 1);
    let num2 = Math.floor(Math.random() * 255 + 1);
    let num3 = Math.floor(Math.random() * 255 + 1);
    let color = `rgb(${num1}, ${num2}, ${num3})`;
    return color;
}

//Array generator for give colors to squares
function generateRandomColors (num) {
    let arrColors = [];
    for (let i = 0; i < num; i++) {
        arrColors.push(randomColor())
    }
    return arrColors;
}

//Update score
function updateScore () {
    score.value += 1;
    scoreContainer.innerHTML = `${score.value}`;
    scoreContainer.style.fontSize = "50px";
    scoreContainer.style.marginBottom = "0px";
    scoreContainer.style.marginTop = "0px";
};

//Decrease score
function decreaseScore () {
    score.value -= 1;
    scoreContainer.innerHTML = `${score.value}`;
    scoreContainer.style.fontSize = "50px";
    scoreContainer.style.marginBottom = "0px";
    scoreContainer.style.marginTop = "0px";
};

resetLevel()


inputsLevel.forEach(input => {
    
    input.addEventListener("click",function () {
        easy.classList.remove("selected");
        hard.classList.remove("selected")
        if (this.classList !== "selected") {
            this.classList.add("selected")
        }

        (this.textContent === "EASY") ? numSquare = 3 : numSquare = 6;
        reset.textContent = "NEW COLORS";
        message.textContent = '';

        colors = generateRandomColors(numSquare);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        h1.style.backgroundColor = "rgb(23, 23, 23)"

        for (let i = 0; i < colors.length; i++) {
        square[i].style.pointerEvents = "auto";
        square[i].style.backgroundColor = colors[i]
        square[i].addEventListener("click",function () {
            
            clickedColor = square[i].style.backgroundColor;

            if (clickedColor === pickedColor) {
                square[i].style.pointerEvents = "none";
                message.textContent = 'CORRECT!';
                h1.style.backgroundColor = pickedColor;
                changeColors(pickedColor);
                reset.textContent = 'PLAY AGAIN?'
                resetLevel()
            }
            else {
                square[i].style.backgroundColor = body.style.backgroundColor;
                message.textContent = 'TRY AGAIN';
            }
        })

        if (numSquare === 3) {
            square[3].style.display = "none"
            square[4].style.display = "none"
            square[5].style.display = "none"
        }
        else {
            square[i].style.display = "block"
        }

        }
    })
})

function resetLevel () {
    reset.addEventListener("click",function() {
        colors = generateRandomColors(numSquare);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        h1.style.backgroundColor = "rgb(23, 23, 23)"
        this.textContent = 'NEW COLORS';
        message.textContent = '';
        for (let i = 0; i < colors.length; i++) {
            square[i].style.backgroundColor = colors[i]
            square[i].style.pointerEvents = "auto";
        }
    })
}


















//=================================== CON ID (sin simplificar) ==================================//

// reset.addEventListener("click",function() {
//     colors = generateRandomColors(6);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;

//     for (let i = 0; i < square.length; i++) {
//     square[i].style.backgroundColor = colors[i]
//     square[i].addEventListener("click",function () {
        
//         clickedColor = square[i].style.backgroundColor;
//         if (clickedColor === pickedColor) {
//             message.textContent = 'Correct!';
//             h1.style.backgroundColor = pickedColor;
//             changeColors(pickedColor);
//             reset.textContent = 'PLAY AGAIN?'
//             reset.addEventListener("click",function() {
//             this.textContent = 'NEW COLORS';
//             message.textContent = '';
//             })
//         }
//         else {
//             square[i].style.backgroundColor = body.style.backgroundColor;
//             message.textContent = 'TRY AGAIN';
//         }
//     })
//     }
//     h1.style.backgroundColor = 'steelblue';
// })

// hard.addEventListener("click",function() {

//     numSquare = 6;

//     this.classList = "selected";
//     easy.classList = "";

//     reset.textContent = "NEW COLORS";
//     message.textContent = '';

//     colors = generateRandomColors(6);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     h1.style.backgroundColor = "steelblue"

//     for (let i = 0; i < colors.length; i++) {
//     square[i].style.backgroundColor = colors[i]
//     square[i].addEventListener("click",function () {
        
//         clickedColor = square[i].style.backgroundColor;

//         if (clickedColor === pickedColor) {
//             message.textContent = 'Correct!';
//             h1.style.backgroundColor = pickedColor;
//             changeColors(pickedColor);
//             reset.textContent = 'PLAY AGAIN?'
//             reset.addEventListener("click",function() {
//                 this.textContent = 'NEW COLORS';
//                 message.textContent = '';
//             })
//         }
//         else {
//             square[i].style.backgroundColor = body.style.backgroundColor;
//             message.textContent = 'TRY AGAIN';
//         }
//     })
//     if (colors[i]) {
//         square[i].style.display = "block"
//     }
//     }
// })

// easy.addEventListener("click",function () {

//     numSquare = 3;

//     this.classList = "selected";
//     hard.classList = "";

//     reset.textContent = 'NEW COLORS'
//     message.textContent = '';

//     colors = generateRandomColors(3);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     h1.style.backgroundColor = "steelblue"

//     for (let i = 0; i < colors.length; i++) {
//         square[i].style.backgroundColor = colors[i]

//         square[i].addEventListener("click",function () {
        
//             clickedColor = square[i].style.backgroundColor;

//             if (clickedColor === pickedColor) {
//                 message.textContent = 'Correct!';
//                 h1.style.backgroundColor = pickedColor;
//                 changeColors(pickedColor);
//                 reset.textContent = 'PLAY AGAIN?'
//                 reset.addEventListener("click",function() {
//                     colors = generateRandomColors(3);
//                     pickedColor = pickColor();
//                     colorDisplay.textContent = pickedColor;
//                     h1.style.backgroundColor = "steelblue"
//                     this.textContent = 'NEW COLORS';
//                     message.textContent = '';
//                     for (let i = 0; i < colors.length; i++) {
//                         square[i].style.backgroundColor = colors[i]
//                     }
//                 })
//             }
//             else {
//                 square[i].style.backgroundColor = body.style.backgroundColor;
//                 message.textContent = 'TRY AGAIN';
//             }
//         })

//     if (square.length >= 4) {
//         square[3].style.display = "none"
//         square[4].style.display = "none"
//         square[5].style.display = "none"
//     }
//     }
// })