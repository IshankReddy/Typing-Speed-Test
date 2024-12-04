document.addEventListener('DOMContentLoaded', function() {
    const typingArea = document.getElementById('typingArea');
    const paragraphDisplay = document.getElementById('paragraphDisplay');
    
    // Prevent copy-paste
    typingArea.addEventListener('paste', function(e) {
        e.preventDefault();
        alert('Copying and pasting is not allowed!');
    });
    
    typingArea.addEventListener('copy', function(e) {
        e.preventDefault();
        alert('Copying is not allowed!');
    });
    
    // Prevent right-click
    typingArea.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Prevent drag and drop
    typingArea.addEventListener('drop', function(e) {
        e.preventDefault();
        return false;
    });

    // Make paragraph text unselectable
    paragraphDisplay.style.userSelect = 'none';
    paragraphDisplay.style.webkitUserSelect = 'none';
    paragraphDisplay.style.msUserSelect = 'none';
}); 

function submitTest() {
    const typingArea = document.getElementById('typingArea');
    const paragraphDisplay = document.getElementById('paragraphDisplay');
    
    // Don't allow empty submissions
    if (!typingArea.value.trim()) {
        alert('Please type something before submitting!');
        return;
    }

    // Stop the timer
    const timeTaken = stopTimer();
    
    // Get the typed text
    const typedText = typingArea.value;
    const originalText = paragraphDisplay.innerText;
    
    // Calculate metrics
    const wpm = calculateWPM(typedText, timeTaken);
    const accuracy = calculateAccuracy(originalText, typedText);
    
    // Display results
    displaySummary(wpm, accuracy, timeTaken);
    
    // Disable the typing area
    typingArea.disabled = true;
    
    // Disable submit button
    document.querySelector('.submit-btn').disabled = true;
    
    // Add reset button if it doesn't exist
    if (!document.querySelector('.reset-btn')) {
        document.querySelector('.container').insertAdjacentHTML('beforeend', 
            '<button onclick="resetTest()" class="submit-btn reset-btn" style="margin-top: 1rem; background: #2196F3;">Try Again</button>'
        );
    }
} 