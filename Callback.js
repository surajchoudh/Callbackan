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


