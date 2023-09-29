function countdown(num, callback) {
    if (num > 0) {
      setTimeout(function () {
        console.log(num);
        countdown(num - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  countdown(10, function () {
    setTimeout(function () {
      console.log("Happy Independence Day");
    }, 1000);
  });