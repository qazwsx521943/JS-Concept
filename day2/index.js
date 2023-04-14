const second_pointer = document.querySelector(".seconds");
const minute_pointer = document.querySelector(".minutes");
const hour_pointer = document.querySelector(".hours");
const display_time = document.getElementById("display-time");

function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    let hour = now.getHours();
    hour = hour > 12 ? hour - 12 : hour;
    const minute = now.getMinutes();
    console.log("now", now);
    console.log("seconds", second);
    console.log("minutes", minute);
    console.log("hours", hour);
    second_pointer.style.transform = `rotate(${90 + 6 * second}deg)`;
    minute_pointer.style.transform = `rotate(${90 + 6 * minute}deg)`;
    hour_pointer.style.transform = `rotate(${90 + 30 * hour}deg)`;
    display_time.innerText = now;
}

setInterval(setDate, 1000);
