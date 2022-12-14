// Global variables for textAreas for each hour
var textArea9El = $("#textArea9");
var textArea10El = $("#textArea10");
var textArea11El = $("#textArea11");
var textArea12El = $("#textArea12"); 
var textArea13El = $("#textArea13");
var textArea14El = $("#textArea14"); 
var textArea15El = $("#textArea15");
var textArea16El = $("#textArea16");
var textArea17El = $("#textArea17");


//function leveraging moment.js to show current time
let currentTimeShown = function () {
    let currentTime = moment().format("Do MMM YYYY, ddd / HH:mm:ss");
    $("#currentTime").text(currentTime);
};
//currentTimeShown();

//shown time updated every second
setInterval(currentTimeShown, 1000);


//logic to change colors of hours in the workday based on whether they are past (gray), present (midseagreen), or future (darkseagreen)
function colorChange() {
    var currentHour = moment().hour();
    // console.log(currentHour);

    for(var i=9; i<=17; i++){
        if (currentHour > i) {
            $('#time'+i).css('background-color', 'slategray');
        }
        else if (currentHour < i) {
            $('#time'+i).css('background-color', 'mediumseagreen');
        }
        else {
            $('#time'+i).css('background-color', 'darkseagreen');
        }   
    }


    // if (currentHour > 9) {
    //     $('#time09').css('background-color', 'slategray');
    // }
    // else if (currentHour < 9) {
    //     $('#time09').css('background-color', 'mediumseagreen');
    // }
    // else {
    //     $('#time09').css('background-color', 'darkseagreen');
    // }


    // if (currentHour > 10) {
    //     $('#time10').css('background-color', 'slategray');
    // }
    // else if (currentHour < 10) {
    //     $('#time10').css('background-color', 'mediumseagreen');
    // }
    // else {
    //     $('#time10').css('background-color', 'darkseagreen');
    // }


    // if (currentHour > 11) {
    //     $('#time11').css('background-color', 'slategray');
    // }
    // else if (currentHour < 11) {
    //     $('#time11').css('background-color', 'mediumseagreen');
    // }
    // else {
    //     $('#time11').css('background-color', 'darkseagreen');
    // }


    // if (currentHour > 12) {
    //     $('#time12').css('background-color', 'slategray');
    // }
    // else if (currentHour < 12) {
    //     $('#time12').css('background-color', 'mediumseagreen');
    // }
    // else {
    //     $('#time12').css('background-color', 'darkseagreen');
    // }


    // if (currentHour > 13) {
    //     $('#time13').css('background-color', 'slategray');
    // }
    // else if (currentHour < 13) {
    //     $('#time13').css('background-color', 'mediumseagreen');
    // }
    // else {
    //     $('#time13').css('background-color', 'darkseagreen');
    // }


    // if (currentHour > 14) {
    //     $('#time14').css('background-color', 'slategray');
    // }
    // else if (currentHour < 14) {
    //     $('#time14').css('background-color', 'mediumseagreen');
    // }
    // else {
    //     $('#time14').css('background-color', 'darkseagreen');
    // }
    
    
    // if (currentHour > 15) {
    //     $('#time15').css('background-color', 'slategray');
    // }
    // else if (currentHour < 15) {
    //     $('#time15').css('background-color', 'mediumseagreen');
    // }
    // else {
    //     $('#time15').css('background-color', 'darkseagreen');
    // }


    // if (currentHour > 16) {
    //     $('#time16').css('background-color', 'slategray');
    // }
    // else if (currentHour < 16) {
    //     $('#time16').css('background-color', 'mediumseagreen');
    // }
    // else {
    //     $('#time16').css('background-color', 'darkseagreen');
    // }


    // if (currentHour > 17) {
    //     $('#time17').css('background-color', 'slategray');
    // }
    // else if (currentHour < 17) {
    //     $('#time17').css('background-color', 'mediumseagreen');
    // }
    // else {
    //     $('#time17').css('background-color', 'darkseagreen');
    // }
}
colorChange();

// for (var i=9; i<=17; i++){
//     $('#button' + i).on('click', function(){
//         console.log($('#textArea'+i));
//     })
// }

//adding eventListeners to save buttons, so that the text entered for an hour is saved to local storage when save button is clicked
$('#button9').on('click',function(){
    console.log('textArea9El');
    localStorage.setItem(9, textArea9El.val());
})

$('#button10').on('click',function(){
    console.log('textArea10El');
    localStorage.setItem(10, textArea10El.val());
})

$('#button11').on('click',function(){
    console.log('textArea11El');
    localStorage.setItem(11, textArea11El.val());
})

$('#button12').on('click',function(){
    console.log('textArea12El');
    localStorage.setItem(12, textArea12El.val());
})

$('#button13').on('click',function(){
    console.log('textArea13El');
    localStorage.setItem(13, textAre13El.val());
})

$('#button14').on('click',function(){
    console.log('textArea14El');
    localStorage.setItem(14, textArea14El.val());
})

$('#button15').on('click',function(){
    console.log('textArea15El');
    localStorage.setItem(15, textArea15El.val());
})

$('#button16').on('click',function(){
    console.log('textArea16El');
    localStorage.setItem(16, textArea16El.val());
})

$('#button17').on('click',function(){
    console.log('textArea17El');
    localStorage.setItem(17, textArea17El.val());
})

//getting the saved events from local storage and writing it to the specific hour's text area
textArea9El.val( localStorage.getItem(9));
textArea10El.val( localStorage.getItem(10));
textArea11El.val( localStorage.getItem(11));
textArea12El.val( localStorage.getItem(12));
textArea13El.val( localStorage.getItem(13));
textArea14El.val( localStorage.getItem(14));
textArea15El.val( localStorage.getItem(15));
textArea16El.val( localStorage.getItem(16));
textArea17El.val( localStorage.getItem(17));
