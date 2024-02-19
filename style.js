// using the below function we are going to start the clock

// let hour = document.getElementById("hourbox")
// let minute =  document.getElementById("minutebox")
// let second = document.getElementById("secondsbox")

let hour = 0;
let minute = 0;
let second = 0;



function startTheClock() {
interval = setInterval(updateStopWatch, 1000)
}

function stopTheClick() {
    clearInterval(interval)
    console.log(interval)
}

function resumeTheClick() {
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById("StopWatch").innerText = `00:00:00`
}

function updateStopWatch() {
    second++;
    if (second >= 60) {
        second = 0;
        minute++;
        if (minute>=60) {
            minute = 0;
            hour++;
        }
    }
    
    document.getElementById("StopWatch").innerText =

        (hour < 10 ? '0' + hour : hour) + ":" +
        (minute < 10 ? '0' + minute : minute) + ":" +
        (second < 10 ? '0' + second : second)
}
