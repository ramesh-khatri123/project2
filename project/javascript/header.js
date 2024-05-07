// JavaScript to toggle the mobile navigation
document.getElementById("mobile-nav-toggle").addEventListener("click", function() {
    var navUl = document.querySelector("nav ul");
    navUl.classList.toggle("active");
});



//Check me

    // Get the button element by its id
    var button = document.getElementById("showAlert");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // Show an alert when the button is clicked
        alert("Thank you! Would you like to know more about myself? You may love me.");
    });


// script.js

window.addEventListener('scroll', function() {
    var backToTop = document.getElementById('back-to-top');
    if (window.pageYOffset > 100) { // Adjust the value according to your needs
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    scrollToTop(500); // Adjust the duration of the scroll animation (in milliseconds)
});

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
}
