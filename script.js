// script.js CORREGIDO

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    // CORREGIDO: Ahora comparamos con 'yes' porque eso es lo que envía tu HTML
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayGrinch(); // Muestra al Grinch
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'Segura?';
        // Increase font size of "Yes" button
        // CORREGIDO: Buscamos 'si-button' porque así le pusiste en el HTML
        var yesButton = document.getElementById('si-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Opción invalida!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 2000);
}

// Function to display the horses.gif initially
function displayHorse() {
    var imageContainer = document.getElementById('image-container');
    var horseImage = new Image();
    horseImage.src = 'horses.gif';
    horseImage.alt = 'Horses';
    horseImage.onload = function () {
        imageContainer.appendChild(horseImage);
    };
}

// Function to display the grinchme.gif
function displayGrinch() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var grinchImage = new Image();
    grinchImage.src = 'grinchme.gif';
    grinchImage.alt = 'Grinch Meme';
    grinchImage.onload = function () {
        imageContainer.appendChild(grinchImage);
        // Ocultar los botones después de decir que sí
        document.getElementById('options').style.display = 'none';
    };
}

// Display the horses.gif initially
displayHorse();