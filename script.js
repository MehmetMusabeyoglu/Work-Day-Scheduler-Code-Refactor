// Global variables
var textArea09El = $("textArea09");
var textArea10El = $("textArea10");
var textArea11El = $("textArea11");
var textArea12El = $("textArea12"); 
var textArea13El = $("textArea13");
var textArea14El = $("textArea14"); 
var textArea15El = $("textArea15");
var textArea16El = $("textArea16");
var textArea17El = $("textArea17");



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
        $('#time09').css('background-color', 'slategray');
    }
    else if (currentHour < 9) {
        $('#time09').css('background-color', 'mediumseagreen');
    }
    else {
        $('#time09').css('background-color', 'darkseagreen');
    }


    if (currentHour > 10) {
        $('#time10').css('background-color', 'slategray');
    }
    else if (currentHour < 10) {
        $('#time10').css('background-color', 'mediumseagreen');
    }
    else {
        $('#time10').css('background-color', 'darkseagreen');
    }


    if (currentHour > 11) {
        $('#time11').css('background-color', 'slategray');
    }
    else if (currentHour < 11) {
        $('#time11').css('background-color', 'mediumseagreen');
    }
    else {
        $('#time11').css('background-color', 'darkseagreen');
    }


    if (currentHour > 12) {
        $('#time12').css('background-color', 'slategray');
    }
    else if (currentHour < 12) {
        $('#time12').css('background-color', 'mediumseagreen');
    }
    else {
        $('#time12').css('background-color', 'darkseagreen');
    }


    if (currentHour > 13) {
        $('#time13').css('background-color', 'slategray');
    }
    else if (currentHour < 13) {
        $('#time13').css('background-color', 'mediumseagreen');
    }
    else {
        $('#time13').css('background-color', 'darkseagreen');
    }


    if (currentHour > 14) {
        $('#time14').css('background-color', 'slategray');
    }
    else if (currentHour < 14) {
        $('#time14').css('background-color', 'mediumseagreen');
    }
    else {
        $('#time14').css('background-color', 'darkseagreen');
    }
    
    
    if (currentHour > 15) {
        $('#time15').css('background-color', 'slategray');
    }
    else if (currentHour < 15) {
        $('#time15').css('background-color', 'mediumseagreen');
    }
    else {
        $('#time15').css('background-color', 'darkseagreen');
    }


    if (currentHour > 16) {
        $('#time16').css('background-color', 'slategray');
    }
    else if (currentHour < 16) {
        $('#time16').css('background-color', 'mediumseagreen');
    }
    else {
        $('#time16').css('background-color', 'darkseagreen');
    }


    if (currentHour > 17) {
        $('#time17').css('background-color', 'slategray');
    }
    else if (currentHour < 17) {
        $('#time17').css('background-color', 'mediumseagreen');
    }
    else {
        $('#time17').css('background-color', 'darkseagreen');
    }



    
   

    if (currentHour > 19) {
        $('#time19').css('background-color', 'gray');
    }
    else if (currentHour < 19) {
        $('#time19').css('background-color', 'olivedrab');
    }
    else {
        $('#time19').css('background-color', 'darkseagreen');
    }
    if (currentHour > 20) {
        $('#time20').css('background-color', 'gray');
    }
    else if (currentHour < 20) {
        $('#time20').css('background-color', 'mediumseagreen');
    }
    else {
        $('#time20').css('background-color', 'cadetblue');
    }
}
colorChange();





