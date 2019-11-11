const background = document.querySelector('.background')
const slider = document.querySelector('.slider')
const logo = document.querySelector('.logo')
const headline = document.querySelector('.headline')

// New function made from the extension downloaded from CDN TweenMax

const tl = new TimelineMax();

// tl stands for timeline. the animation starting in the background for the duration of 1 second where the height increases from 0% to 90% of the bacground
// This can be similar to both the height and width with an ease addedd to the animation
tl.fromTo(background,1,{height:"0%"},{height:"90%", ease: Power2.easeInOut})
.fromTo(background,1.2, {width: "100%"},{width: "90%", ease: Power2.easeInOut});

const first_name = document.getElementById("fname")
const last_name = document.getElementById("lname")
const email = document.getElementById("mail")
const username = document.getElementById("usern")
const password = document.getElementById("psw")
const form = document.getElementById("form")
const error = document.getAnimations("error")

//showPassword function and myForm function from the 2nd page of the webpage
//this function makes it sso that if a user ticks the checkbox shown beneath the passsword input, it will allow them to see what they are typing
//adding a function that changes the input to a password from a text and vice versa
function showPassword() {
    var x = document.getElementById("psw");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password"; 
    }
}