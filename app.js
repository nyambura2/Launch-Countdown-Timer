// launch date (month, day, year, hour, minute, second)
const launchDate = new Date('March 23, 2024; 00:00:00')

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

//     const seconds = 1000
//     const minutes = seconds * 60
//     const hours = minutes * 60
//     const days = hours * 24


    // Calculate days, hours, minutes, and seconds using modulous
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

    // Display the countdown
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the launch date has passed, display a message
    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "<h3>Launch time has passed!</h3>";
    }
}
// Initial call to update countdown
updateCountdown();
// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);