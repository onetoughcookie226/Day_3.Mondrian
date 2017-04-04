//A place outside of the functions where the value of
//the previous selection can be stored
//so we can use it in painCanvas function.
// $("#red").hide().show();



/-------------------------------------------------/
$(document).ready(function () {

    var paint = "white"

    $(".color").on("click", function () {
        paint = $(this).css('background-color');
    })

    $('.box').on('click', function () {

        $(this).css("background-color", paint );
    });

});










