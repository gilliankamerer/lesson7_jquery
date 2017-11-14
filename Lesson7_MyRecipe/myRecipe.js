/* 
    Program name: Recipe Display Application
    
    Author: Gillian Kamerer
    
    Date: 11/13/17
    
    Filename: myRecipe.js
    
*/

/* global $ */

//displays the next element after the current target
function display (event) {
    
    $ (event.currentTarget).previous().fadeIn("slow")
    
} //end of display 

//attach event listener to h3 elements to invoke display function when clicked 
$("h3").click(display);
//$("h3").click(display);

//displays and animates the next element after the current taerget 
function display2(event) {
    $(event.currentTarget).next().animate({height:"toggle"}, "fast");
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it 
$("h3").hover(function() {
    $(this).css("background-color", "orange")
    }, function() {
    $(this).css("background-color", "white")
});

//hover() will trigger display2 method each time the mouse hovers over header 
$("h3").hover(display2);
    
//attach event listener to h3 elements to invoke display function when clicked 
$("h3").click(display);

//adds a message to readers to ENJOY!! at the end of the Instructions
$("div").append("<center>ENJOY!!</center>")

//adds a space between the h2 and h3 elements
$("h2").height(100)