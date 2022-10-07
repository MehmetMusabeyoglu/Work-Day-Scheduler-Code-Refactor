// Variables


let currentTimeShown = function () {
    let currentTime = moment().format("Do MMM YYYY, ddd / HH:mm:ss");
    $("#currentTime").text(currentTime);
};
currentTimeShown();
setInterval(currentTimeShown, 1000);


function colorChange() {
    var currentHour = moment().hour();
    // console.log(currentHour);

    if (currentHour > 9) {
        $('#time09').css('background-color', 'gray');
    }
    else if (currentHour < 9) {
        $('#time09').css('background-color', 'green');
    }
    else {
        $('#time09').css('background-color', 'red');
    }
















}
colorChange();





