
// This function changes the background colour of the button once it is clicked
function changeColour(){
    const colours = ["red","blue","green","yellow","orange"];
    let ranNum = Math.floor(Math.random() * 5);
    document.getElementById("colourButton").style.backgroundColor = colours[ranNum];
}

function cookieData(){
    /*let text = "aren't";
    if (navigator.cookieEnabled == true){
        text = "are";
    } 

    alert("Cookies " +text+ " enabled, press to continue"); */

    let usersName = prompt("Please enter your name:");

    let day = new Date();
    day = day.toUTCString();

    document.getElementById("usersName").innerHTML = "Name: " + usersName;
    document.getElementById("dateNow").innerHTML = "Current Date: " + day;
    document.getElementById("extraCookie").innerHTML = "Cookies " + text + " enabled";
}


// Following is for the cookie banner

let popup = document.getElementById("cookiePopUp");

//Listens for when the user clicks the the accept button
document.getElementById("acceptCookie").addEventListener("click",() => {

    let d = new Date();
    d.setMinutes(2 + d.getMinutes()); // Cookie will now expire after 2 minutes

    //Creates cookie with a name, value and expiry time
    document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";

    //Hide the popup
    popup.classList.add("hide");
    popup.classList.remove("show");
} ) ;

//Check if cookie is already present
const checkCookie = () => {

    // Finds the cookie and splits it at "="
    let input = document.cookie.split("=");

    //Check for the cookie
    if (input[0] == "myCookieName"){
        //Hide popup
        popup.classList.add("hide");
        popup.classList.remove("show");
    }else {
        //Show popup
        //popup.classList.remove("hide");
        popup.classList.add("show");
    }
};

//Check if cookie exists when page loads
window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 2000);
};