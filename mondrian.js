//A place outside of the functions where the value of
//the previous selection can be stored
//so we can use it in painCanvas function.
var currentColor='';

//Create a function that changes the class of the target element
    
    $("#red").click( function () {
        //Append the color to 
        $("#color-selection").css("background-color", "red");
    
    });

//when clicking on .color-palette items
    /*$(".color-palette").click( function () {
        //add class selected
        $(".color-palette").addClass("selectd");



    });*/




//the target element is always the same, in this case it is the  div element with the id  color-selection
//this way we identify the element that we want to change
//then we want to change the class attribute of that particular element
//which in this case is the element with the id 'color-selection'
//we add an equal sign to add the new class attribute to the selected item

/*function selectColor (paletteColor){
//this equal sign will remember our selected color
    //currentColor = paletteColor;
   // document.getElementById('color-selection').className = paletteColor + ' color-selection';
} */

function paintCanvas(currentBox){
    document.getElementById(currentBox).className = currentColor + ' box';
}


