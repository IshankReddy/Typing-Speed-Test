function calculateAccuracy(originalText, typedText) {
    if (!originalText || !typedText) return 0;

    const originalWords = originalText.trim().split(/\s+/);
    const typedWords = typedText.trim().split(/\s+/);
    let correctWords = 0;

    originalWords.forEach((word, index) => {
        if (typedWords[index] === word) {
            correctWords++;
        }
    });

    return Math.round((correctWords / originalWords.length) * 100);
} 