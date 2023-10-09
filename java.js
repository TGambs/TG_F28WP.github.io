
// This function changes the background colour of the button once it is clicked
function changeColour(){
    const colours = ["red","blue","green","yellow","orange"];
    let ranNum = Math.floor(Math.random() * 5);
    document.getElementById("colourButton").style.backgroundColor = colours[ranNum];
}

function isCookiesOn(){
    var text = "aren't";
    if (navigator.cookieEnabled == True){
        text = "are";
    }
    alert("Cookies are enabled, press to continue")
    document.getElementById("extraCookie").innerHTML = "Cookies" + text + "enabled"

    
}