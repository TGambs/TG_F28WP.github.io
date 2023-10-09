
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


document.body.style.height = '200pt';

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/cookie-banner/1.2.2/cookiebanner.min.js';
script.id = 'cookiebanner';
script['data-height']   = '20px'; // non-standard attribute (may need to use 'setAttribute(..)'
script['data-position'] = 'top';
script['data-message']  = 'We use cookies!';
document.head.appendChild(script); 

script.onload = function()
{
  console.log('loaded script');

  // console.log( initCookieConsent );
}
console.log('ready');