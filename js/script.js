const countdownElement = document.getElementById('countdown');
const buttonElement = document.getElementById('button');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart');

let currentTime = 15000; // In milliseconds (15 seconds)
let countdownInterval = null;
let gameEnded = false;
let countdownHidden = false;

// Start the game
function startCountdown() {
    currentTime = 15000; // 15 seconds in milliseconds
    gameEnded = false;
    countdownHidden = false;
    buttonElement.disabled = false;
    buttonElement.style.display = 'block';
    restartButton.style.display = 'none';
    resultElement.innerHTML = '';
    resultElement.classList.add('hidden');
    countdownElement.classList.remove('hidden', 'finished');
    countdownElement.textContent = (currentTime / 1000).toFixed(1);

    countdownInterval = setInterval(() => {
        currentTime -= 100; // Decrease 100ms every interval

        // Hide the timer when it reaches 6 seconds (6000ms)
        if (currentTime === 6000 && !countdownHidden) {
            countdownHidden = true;
            countdownElement.classList.add('hidden');
        }

        // Update the display if still visible (showing seconds)
        if (!countdownHidden) {
            const seconds = (currentTime / 1000).toFixed(1);
            countdownElement.textContent = seconds;
        }

        // Stop at -5 seconds to avoid running forever
        if (currentTime <= -5000) {
            clearInterval(countdownInterval);
            endGame();
        }
    }, 100);
}

// Handle button click
buttonElement.addEventListener('click', () => {
    if (!gameEnded) {
        clearInterval(countdownInterval);
        endGame();
    }
});

// End the game and show the result
function endGame() {
    gameEnded = true;
    buttonElement.disabled = true;
    restartButton.style.display = 'block';
    showResult(currentTime);
}

// Show the result in milliseconds
function showResult(pressedAtTime) {
    resultElement.classList.remove('hidden');
    
    let message = '';
    let messageClass = '';
    let difference = Math.abs(pressedAtTime);

    if (pressedAtTime === 0) {
        message = 'PERFECT! You hit the exact moment!';
        messageClass = 'perfect';
    } else if (difference < 500) {
        message = `WINNER! Difference: ${difference}ms`;
        messageClass = 'perfect';
    } else if (pressedAtTime > 0) {
        message = `MISSED! You pressed ${pressedAtTime}ms before 0`;
        messageClass = 'miss';
    } else {
        message = `MISSED! You pressed ${difference}ms after 0`;
        messageClass = 'miss';
    }

    resultElement.innerHTML = `
        <div class="result-message ${messageClass}">${message}</div>
        <div class="result-details">Pressed at: ${pressedAtTime}ms</div>
    `;
}

// Restart the game
restartButton.addEventListener('click', () => {
    startCountdown();
});

// Start on page load
startCountdown();
