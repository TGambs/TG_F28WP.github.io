
// This function changes the background colour of the button once it is clicked
function changeColour(){
    const colours = ["red","blue","green","yellow","orange"];
    let ranNum = Math.floor(Math.random() * 5);
    document.getElementById("colourButton").style.backgroundColor = colours[ranNum];
}

function UserData(){
    
    // Asks the user to input a username on button click
    let usersName = prompt("Please enter your name:");
    document.getElementById("usersName").innerHTML = "Name: " + usersName;

    // Shows the exact time and date in UTC form
    let day = new Date();
    day = day.toUTCString();
    document.getElementById("dateNow").innerHTML = "Current Date: " + day;

    // Checks to see if cookies are enabled by the browser
    // Text changes but colour does not...
    if (navigator.cookieEnabled) {
        document.getElementById("cookiesEnabled").innerHTML = "Cookies are enabled";
        document.getElementById("cookiesEnabled").style.backgroundColor = "rgb(75, 165, 70)";
    } else{
        document.getElementById("cookiesEnabled").innerHTML = "Cookies are not enabled";
        document.getElementById("cookiesEnabled").style.backgroundColor = "rgb(170, 35, 35)";
    }

    // Tells the user which browser and version they are using
    let userBrowser = window.navigator.userAgent;
    userBrowser = userBrowser.split( ")" );
    userBrowser[0] += ")";
    document.getElementById("uBrowser").innerHTML = "Browser:<br>" + userBrowser[0];



    // Shows the user their locations
    let uPos = document.getElementById("uPos");

    function showPosition(position) {

        //<a href="https://www.google.com/maps/@55.902208,-3.3292288,14z">"Map"</a>

        let mapLink ="https://www.google.com/maps/@"+position.coords.latitude+","+position.coords.longitude;
        
        document.getElementById("link").innerHTML = mapLink;

        uPos.innerHTML = "<br>Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    }


    if (navigator.geolocation) {
        let pos = navigator.geolocation.getCurrentPosition(showPosition);
        document.getElementById("uPos").innerHTML = "Position: " + pos;
    } else {
        uPos.innerHTML = "Geolocation is not supported by this browser.";
    }


}


// Following is for the cookie banner

let popup = document.getElementById("cookiePopUp");

//Listens for when the user clicks the the accept button
let cookieButton = document.getElementById("acceptCookie");
//cookieButton.addEventListener(click,cookieClicked());

function cookieClicked(){
    let d = new Date();
    d.setMinutes(2 + d.getMinutes()); // Cookie will now expire after 2 minutes

    //Creates cookie with a name, value and expiry time
    document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";

    //Hide the popup
    popup.classList.add("hide");
    popup.classList.remove("show");
}

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

/*
//Check if cookie exists when page loads
window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 2000);
};
*/

let t1 = "Cookies Enabled: " + navigator.cookieEnabled;
let t2 = "Browser Language: " + navigator.language;
let t3 = "Browser Online: " + navigator.onLine;
let t4 = "User-agent header: " + navigator.userAgent;

console.log(t4);
t4 = t4.split(")");
t4[0] += ")";


console.log(window.navigator.userAgent);
console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4[0]);