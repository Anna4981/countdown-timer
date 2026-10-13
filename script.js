// ===== CONFIGURE HERE =====
// Change the date below to set your countdown target.
// Format: "YYYY-MM-DDTHH:MM:SS" (local time)
const TARGET_DATE = new Date("2027-01-01T00:00:00");
const EVENT_NAME = "New Year 2027";
const FINISH_MESSAGE = "🎉 Time's up! The countdown has finished.";
// ==========================

const titleEl = document.getElementById("event-title");
const labelEl = document.getElementById("target-label");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const messageEl = document.getElementById("message");

titleEl.textContent = EVENT_NAME;
labelEl.textContent = "Counting down to " + TARGET_DATE.toLocaleString();

function pad(num) {
  return String(num).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const diff = TARGET_DATE - now; // difference in milliseconds

  // Countdown finished (or the date has already passed)
  if (diff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    messageEl.textContent = FINISH_MESSAGE;
    messageEl.hidden = false;
    clearInterval(timerId); // stop the interval, it is no longer needed
    return;
  }

  // Convert milliseconds into days, hours, minutes, seconds
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
}

// Run once immediately so there is no 1 second blank, then every second
updateCountdown();
const timerId = setInterval(updateCountdown, 1000);