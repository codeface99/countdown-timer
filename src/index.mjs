import "./styles.css";

// Get references to the input, button, and display elements
const endTimeInput = document.getElementById("end-time");
const startBtn = document.getElementById("start-btn");
const timeDisplay = document.getElementById("time-display");

// Event listener for start button click
startBtn.addEventListener("click", () => {
  const endTimeValue = new Date(endTimeInput.value); // Parse the end time input

  // Only start countdown if end time is provided
  if (endTimeValue) {
    // Update time display every second
    const intervalId = setInterval(() => {
      const timeLeft = Math.max(endTimeValue - new Date(), 0); // Calculate remaining time
      const hours = Math.floor(timeLeft / 3600000); // Calculate hours
      const minutes = Math.floor((timeLeft % 3600000) / 60000); // Calculate minutes
      const seconds = Math.floor((timeLeft % 60000) / 1000); // Calculate seconds

      // Update the display with formatted time
      timeDisplay.textContent = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      // Stop the interval when time reaches zero
      if (timeLeft === 0) {
        clearInterval(intervalId);
        timeDisplay.textContent = "00:00:00"; // Display zeros when countdown ends
      }
    }, 1000);
  }
});
