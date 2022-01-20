const bg = document.querySelector('body');
let counter = 0, lastRecordedTime = 0;
const delayTime = 4;
const colors = {
    0: 'pink',
    1: 'blue',
    2: 'red',
    3: 'purple',
    4: 'orange'
}

function step(timestamp) {
    const interval = Math.floor(timestamp * 0.001);
    if (interval > lastRecordedTime + delayTime) {
        if (counter < 5) {
            counter++;
        } else {
            counter = 0;
        }
        lastRecordedTime = interval;
        bg.style.backgroundColor = colors[counter];
    }
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
