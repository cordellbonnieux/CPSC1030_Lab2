const bg = document.querySelector('body');
let counter = 0;
const colors = {
    0: 'pink',
    1: 'blue',
    2: 'red',
    3: 'purple',
    4: 'orange'
}

function step(timestamp) {
    // mess around with this
    console.log(timestamp);
    const interval = Math.floor(timestamp)
    if (interval % 6000 == 0) {
        console.log("every six seconds");
        if (counter < 5) {
            counter++;
        } else {
            counter = 0;
        }
        bg.style.backgroundColor = colors[counter];
    }
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
