const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
// console.log(randomColor());

let intervalId;
const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(chnageBgColor, 1000);
    }

    function chnageBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
    // intervalId = setInterval(function chnageBgColor() {
    //     document.body.style.backgroundColor = randomColor();
    // }, 1000)
};
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
};

const Start = document.querySelector('#Start');
Start.addEventListener('click', startChangingColor);

const Stop = document.querySelector('#stop');
Stop.addEventListener('click', stopChangingColor);