function countdown(num, callback) {
    const countdownContainer = document.getElementById('countdown-container');

    if (num > 0) {
        countdownContainer.textContent = num;
        setTimeout(function () {
            countdown(num - 1, callback);
        }, 1000);
    } else {
        callback();
    }
}

countdown(10, function () {
    const countdownContainer = document.getElementById('countdown-container');
    countdownContainer.textContent = "Happy Independence Day";
});
Now, you have the HTML structure in countdown.html, CSS styles in styles.css, and JavaScript logic in script.js.Open countdown.html in a web browser to see the countdown from 10 to 1, followed by the message "Happy Independence Day".The countdown and message will be styled according to the CSS rules specified in styles.css.





