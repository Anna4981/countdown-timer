Countdown Timer

A countdown timer built with HTML, CSS and JavaScript. It counts down to a specific date and shows the days, hours, minutes and seconds remaining, updating every second.

Built as part of the Veda Technology web development internship (Day 13, Task 13).

Features
Live countdown that updates every second
Target date and event name set in the code
Message shown when the countdown reaches zero (or if the date has already passed)
Interval is cleared when the countdown ends
Responsive layout that works on desktop and mobile
Tools Used
HTML5
CSS3
JavaScript
Project Structure
countdown-timer/
├── index.html   # Page structure
├── style.css    # Styling and responsive layout
├── script.js    # Countdown logic
└── README.md
How to Run
Download or clone the project folder.
Open index.html in any web browser (or use Live Server in VS Code).
How to Change the Target Date

Open script.js and edit the lines at the top:

javascript
const TARGET_DATE = new Date("2027-01-01T00:00:00");
const EVENT_NAME = "New Year 2027";
const FINISH_MESSAGE = "🎉 Time's up! The countdown has finished.";

The date format is YYYY-MM-DDTHH:MM:SS in local time.

How It Works
new Date() gets the current time on every tick.
The current time is subtracted from the target date, which gives the remaining time in milliseconds.
The milliseconds are converted into days, hours, minutes and seconds using division and the remainder operator (%).
setInterval runs the update function every 1000 ms, and the values are written to the page with DOM updates.
When the difference is zero or less, the display is set to zeros, the finish message is shown, and clearInterval stops the timer.
Author

Anna Makgabo Thantsha# countdown-timer
