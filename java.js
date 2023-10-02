
// This function changes the background colour of the button once it is clicked
function changeColour(){
    const colours = ["red","blue","green","yellow","orange"];
    let ranNum = Math.floor(Math.random() * 5);
    document.getElementById("colourButton").style.backgroundColor = colours[ranNum];
}