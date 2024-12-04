function displaySummary(wpm, accuracy, timeTaken) {
    const summary = `
        <p><strong>Words Per Minute:</strong> ${wpm}</p>
        <p><strong>Accuracy:</strong> ${accuracy.toFixed(2)}%</p>
        <p><strong>Time Taken:</strong> ${timeTaken.toFixed(2)} seconds</p>
    `;
    document.getElementById('performanceSummary').innerHTML = summary;
}

// After calculations
displaySummary(wpm, accuracy, timeTaken);
