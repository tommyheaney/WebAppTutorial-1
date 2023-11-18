// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
// Functions to be called onmouseover and onmouseout to change the color of "Hello World"
function newColor() {
  document.getElementById("hello_world").style.color = "blue";
}

function oldColor() {
  document.getElementById("hello_world").style.color = "darkolivegreen";
}

document.addEventListener('DOMContentLoaded', function () {
    var headings = document.querySelectorAll('h2');

    headings.forEach(function (heading) {
        heading.addEventListener('mouseover', function () {
            this.style.color = 'blue'; // Change to your desired hover color
        });

        heading.addEventListener('mouseout', function () {
            this.style.color = ''; // Resets to original color
        });
    });
});
