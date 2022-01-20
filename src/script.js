const bg = document.querySelector('body');
let counter = 0, lastRecordedTime = 0;
const delayTime = 4;
const colors = {
    0: 'radial-gradient(circle, rgba(179,58,180,1) 0%, rgba(253,77,29,1) 49%, rgba(245,252,69,1) 93%);',
    1: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);',
    2: 'radial-gradient(circle, rgba(58,177,180,1) 0%, rgba(253,29,248,1) 49%, rgba(137,252,69,1) 93%);',
    3: 'radial-gradient(circle, rgba(62,58,180,1) 0%, rgba(253,29,29,1) 49%, rgba(252,241,69,1) 93%);',
    4: 'radial-gradient(circle, rgba(180,166,58,1) 9%, rgba(29,165,253,1) 49%, rgba(113,252,69,1) 93%);'
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
        bg.setAttribute('style',`background: ${colors[counter]}`);
    }
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
