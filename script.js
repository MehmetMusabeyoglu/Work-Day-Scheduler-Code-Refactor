let currentTimeShown = function () {
    let currentTime = moment().format("Do MMM YYYY, ddd / HH:mm:ss");
    $("#currentTime").text(currentTime);
};
currentTimeShown();
setInterval(currentTimeShown, 1000);

