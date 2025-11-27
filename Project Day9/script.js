let bottom = document.querySelector("#bottom");
let highScoreElem = document.querySelector("#high-score span")
let scoreElem = document.querySelector("#score span")
let timeElem = document.querySelector("#time span")
let startBtn = document.querySelector("#startBtn");
let modal = document.querySelector("#modal");
let controls = document.querySelector("#controls");

let highScore = Number(localStorage.getItem("highscore") || 0);
let score = 0;
let time = 0;

highScoreElem.textContent = highScore;

let blockLength = 30;

let cols = Math.floor(bottom.clientWidth / blockLength);
let rows = Math.floor(bottom.clientHeight / blockLength);

let blocks = [];
let snake = [
    { x: 1, y: 3 }
];

let interId = null;
let timerId = null;
let food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
let direction = "right";

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        let div = document.createElement("div");
        div.classList.add("block");
        bottom.appendChild(div);
        blocks[`${row}-${col}`] = div;
    }
}


function render() {
    let head = null;
    blocks[`${food.x}-${food.y}`].classList.add("food");

    if (direction === "right") {
        head = { x: snake[0].x, y: snake[0].y + 1 };
    } else if (direction === "left") {
        head = { x: snake[0].x, y: snake[0].y - 1 };
    } else if (direction === "down") {
        head = { x: snake[0].x + 1, y: snake[0].y };
    } else if (direction === "up") {
        head = { x: snake[0].x - 1, y: snake[0].y };
    }

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    });

    function isBodyTouch() {
        return snake.some((e) => {
            return JSON.stringify(e) === JSON.stringify(head)
        })
    }

    let touch = isBodyTouch();

    if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols || touch) {
        clearInterval(interId);
        modal.style.display = "flex";
        document.querySelector("#over").textContent = "Game over, Play again";
        clearInterval(timerId);
        return;
    }

    if ((head.x === food.x) && (head.y === food.y)) {
        blocks[`${food.x}-${food.y}`].classList.remove("food");
        food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
        snake.unshift(head);
        score += 10;
        scoreElem.textContent = score;
        if (score >= highScore) {
            console.log(`hi`);
            localStorage.setItem("highscore", score);
            highScore = score;
            highScoreElem.textContent = highScore;
        }
    }


    snake.unshift(head);
    snake.pop();
    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.add("fill");
    });
}


document.addEventListener("keydown", (dets) => {
    if (dets.key === "ArrowUp") {
        direction = "up";
    } else if (dets.key === "ArrowDown") {
        direction = "down";
    } else if (dets.key === "ArrowLeft") {
        direction = "left";
    } else if (dets.key === "ArrowRight") {
        direction = "right";
    }
});

controls.addEventListener("click", (dets) => {
    if (dets.target.matches(".up")) {
        direction = "up";
    } else if (dets.target.matches(".down")) {
        direction = "down";
    } else if (dets.target.matches(".left")) {
        direction = "left";
    } else if (dets.target.matches(".right")) {
        direction = "right";
    }
});


startBtn.addEventListener("click", (e) => {
    let state;
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    modal.style.display = "none";
    time = 0;
    timeElem.textContent = "00-00";
    score = 0;
    scoreElem.textContent = "0";
    direction = "right";
    food = { x: Math.floor(Math.random() * rows), y: Math.floor(Math.random() * cols) };
    snake = [
        { x: 1, y: 3 }
    ];
    if (e.target.matches("#easy")) {
        state = 300;
    } else if (e.target.matches("#medium")) {
        state = 200;
    } else if (e.target.matches("#hard")) {
        state = 100;
    }
    timerId = setInterval(() => {
        time++;
        let min = Math.floor(time / 60).toString().padStart(2, "0");
        let sec = (time % 60).toString().padStart(2, "0");
        timeElem.textContent = `${min}-${sec}`
    }, 1000);
    interId = setInterval(() => {
        render();
    }, state);
})
