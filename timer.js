let startTime;
let endTime;

function startTimer() {
    startTime = new Date();
}

function stopTimer() {
    endTime = new Date();
    return (endTime - startTime) / 1000; // Time in seconds
}

// In your event listener for the first keystroke
document.getElementById('typingArea').addEventListener('keydown', function(event) {
    if (!startTime) {
        startTimer();
    }
});
