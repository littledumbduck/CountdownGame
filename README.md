# Countdown Game 🎮
![HTML5 Logo](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3 Logo](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript Logo](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

```
countdown-game/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

## 🚀 How to Play

1.  The countdown starts automatically from **15.0 seconds**.
2.  Once the timer hits **6.0 seconds**, it will vanish from the screen.
3.  Your goal is to press the button exactly when you think the timer reaches **0**.
4.  The game will calculate your precision in milliseconds and tell you how close you were!

---

## 🛠️ Technologies Used
### HTML5
Used to structure the game elements, including the display container, the dynamic countdown text, and the interaction buttons.

Used for the visual design, featuring a modern linear gradient background, responsive flexbox layouts, and custom animations like the `pulse` effect when the game ends.

### CSS3
A precision-based web game where players must test their internal clock. The timer starts at 15 seconds and disappears halfway through, forcing you to guess exactly when it hits zero.

### JavaScript (Vanilla)
The core logic of the game:
* **Interval Management:** Uses `setInterval` to track time every 100ms.
* **State Control:** Handles the transition between the visible and hidden states of the timer.
* **DOM Manipulation:** Dynamically updates the UI with results and handles event listeners for the "Press" and "Restart" actions.

---

## 🕹️ Game Features

* **Invisible Challenge:** The timer disappears at the 6-second mark to increase difficulty.
* **High Precision:** Results are calculated down to the millisecond (ms).
* **Dynamic Feedback:** * **PERFECT/WINNER:** Awarded if you hit exactly 0 or are within a 500ms margin.
    * **MISSED:** Displayed if you are outside the winning threshold.
* **Responsive Design:** Styled to look great on various screen sizes with a clean, modern aesthetic.

---

## 🔧 Installation & Setup

1.  Clone the repository:
    ```bash
    git clone [https://github.com/LittleDumbDuck/countdown-game.git](https://github.com/LittleDumbDuck/countdown-game.git)
    ```
2.  Open `index.html` in any modern web browser.
3.  Start counting!

---

## 📜 License
This project was developed for educational purposes as part of a web development portfolio. Feel free to use and modify it!
