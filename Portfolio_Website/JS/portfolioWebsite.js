//Open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
var slideIndex = 0;
// Function that displays the first image in the slideshow when the page loads.
//var slideIndex = 1;
//showSlides(slideIndex);
showSlides();


// Function changes the slide when the arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides()
{
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000);
}

//function showSlides(n) {
//    var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
//    var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot" and stores them in the variable array "dots"
//    if (n > slides.length) { slideIndex = 1 }; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
//    if (n < 1) { slideIndex = slides.length }; // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
//    }
//    for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
//    }
//    slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
//    dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the image
//    setTimeout(showSlides, 2000); // Change image every 2 seconds
//}

// This will close the contact form when the user clicks off of it
// Event listener for any clicks on the website
document.addEventListener("click", function (event) {
    // Stating that if the click happens on the cancel button OR anywere that isnt the form, the closeForm() function is called
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false)

