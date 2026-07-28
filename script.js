let sec = 0;
let min = 0;
let hr = 0;
let timer;

function stopwatch() {
    sec++;

    if (sec == 60) {
        sec = 0;
        min++;
    }

    if (min == 60) {
        min = 0;
        hr++;
    }

    document.getElementById("time").innerHTML =
        (hr < 10 ? "0" : "") + hr + ":" +
        (min < 10 ? "0" : "") + min + ":" +
        (sec < 10 ? "0" : "") + sec;
}

function start() {
    clearInterval(timer);
    timer = setInterval(stopwatch, 1000);
}

function stop() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById("time").innerHTML = "00:00:00";
}