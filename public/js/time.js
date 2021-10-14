const t = document.querySelector('#time');
let d = new Date();
const getTime = () => {
    let hr = d.getHours();
    let min = d.getMinutes();
    let time = String(hr).padStart(2, '0') + ':' + String(min).padStart(2, '0');
    // console.log(time);
    t.textContent = time;
};
getTime();
setInterval(getTime, 30000);