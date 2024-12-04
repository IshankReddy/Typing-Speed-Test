function calculateWPM(text, timeInSeconds) {
    const words = text.trim().split(/\s+/).length;
    const minutes = timeInSeconds / 60;
    return Math.round(words / minutes);
}

// After typing is complete
const typedText = document.getElementById('typingArea').value;
const timeTaken = stopTimer();
const wpm = calculateWPM(typedText, timeTaken);
