const userName = prompt('isminizi giriniz.','');
const myName = document.getElementById('myName');
myName.innerText = userName;

const myClock = document.getElementById('myClock');
function showTime() {
    const current = new Date();
    const time = current.toLocaleTimeString();
    myClock.innerText = time;
}


setInterval(() => {
    showTime() 
}, 1000)