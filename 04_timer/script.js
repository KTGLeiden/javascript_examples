// Sets the content of the #time element to the current time.
function updateTime() {
    // Get date
    var now = new Date();

    // Format into string
    var nowString = now.toLocaleTimeString();

    // Update value in DOM
    document.getElementById('timer').innerHTML = nowString;
}

// Starts the timer.
function startTime() {
    setInterval(updateTime, 500);
}
