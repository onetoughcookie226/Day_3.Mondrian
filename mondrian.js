
$(document).ready(function () {

    var paint = "white"

    $(".color").on("click", function () {
        paint = $(this).css('background-color');
    })

    $('.box').on('click', function () {

        $(this).css("background-color", paint );
    });

});










