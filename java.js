
// This function changes the background colour of the button once it is clicked
function changeColour(){
    const colours = ["red","blue","green","yellow","orange"];
    let ranNum = Math.floor(Math.random() * 5);
    document.getElementById("colourButton").style.backgroundColor = colours[ranNum];
}

function refreshTime() {
    const timeDisplay = document.getElementById("liveTime");
    const dateString = new Date().toLocaleString();
    //console.log(dateString);
    const formattedString = dateString.replace(", ", "\n");
    document.getElementById("liveTime").innerHTML = formattedString;
    //timeDisplay.textContent = formattedString;
  }
setInterval(refreshTime, 1000);

function UserData(){
    
    // Asks the user to input a username on button click
    //let usersName = prompt("Please enter your name:");
    //document.getElementById("usersName").innerHTML = "Name: " + usersName;

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

        // Minipulates the link to add the user's live position
        let mapLink ="https://www.google.com/maps/@"+position.coords.latitude+","+position.coords.longitude;
        // Opens new tab for google maps when the text is clicked
        document.getElementById("uPos").onclick = function() {
            window.open(mapLink);
        }
        
        // Displays the user's latitude and longditude
        uPos.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
    }
    
    // Automatically checks if the user's location is accessable
    if (navigator.geolocation) {
        let pos = navigator.geolocation.getCurrentPosition(showPosition);
        document.getElementById("uPos").innerHTML = "Position: " + pos;
    } else {
        uPos.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// Following is for the cookie banner

let popup = document.getElementById("cookiePopUp");

function cookieClicked(){
    let popup = document.getElementById("cookiePopUp");
    let d = new Date();
    d.setMinutes(5 + d.getMinutes()); // Cookie will now expire after 5 minutes

    //Creates cookie with a name, value and expiry time
    document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";

    //Hide the popup
    popup.classList.add("hide");
    popup.classList.remove("show");
}

//Check if cookie is already present
const checkCookie = () => {
    let popup = document.getElementById("cookiePopUp");

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
        console.log(popup.classList);
        popup.classList.add("show");
    }
};


//Check if cookie exists when page loads
window.onload = () => {
    setTimeout(() => {
        checkCookie();
    }, 2000);
};




// - - - - - IMG slideshow - - - - -
let imgCount = 0;
function imgNext(imgCount){
    if(imgCount==0){
        imgCount+=1;
    } else if(imgCount==1){
        imgCount+=1;
    } else if(imgCount==2){
        imgCount=0
    }
    imgSS(imgCount);
    return imgCount;
}
function imgPre(imgCount){
    if(imgCount==0){
        imgCount=2;
    } else if(imgCount==1){
        imgCount-=1;
    } else if(imgCount==2){
        imgCount-=1;
    }
    imgSS(imgCount);
    return imgCount;
}
function imgSS(imgCount) {
    let pic = document.getElementById("liveImg");
    
    switch(imgCount){
        case 0:
            pic.src = "sunset1.png";
            break;
        case 1:
            pic.src = "sunset2.png";
            break;
        case 2:
            pic.src = "sunset3.png";
            break;
    }

}


// - - - - - - - - - - Settings Page - - - - - - - - - -
var bgc = document.getElementById("bgCol");
var txtf = document.getElementById("txtFont");
if(bgc){
    // use if to check if there is an element with this id on the page
    bgc.addEventListener('change', (event) => {
        document.body.style.backgroundColor = event.target.value;
    });
}

if(txtf){
    txtf.addEventListener('change', (event) => {
        document.body.style.fontFamily = event.target.value;
    });
}
