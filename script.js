// script.js FINAL

// 1. Cargamos la música (nombre exacto del archivo que subiste)
var music = new Audio('careless_whispers.mp3');
music.loop = true; // Para que se repita si se acaba
music.volume = 1.0; // Volumen al máximo

// 2. Pre-carga del Grinch
var grinchPreload = new Image();
grinchPreload.src = 'grinchme.gif';

let noClickCount = 0;

window.onload = function () {
    displayHorse();
};

function selectOption(option) {
    // Si dice que SÍ
    if (option === 'yes') {
        // --- AQUÍ SUENA LA CANCIÓN ---
        music.play().catch(function (error) {
            console.log("Error al reproducir audio:", error);
        });

        // Animación de colores instantánea
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none';
            displayGrinch();
        });

        // Si dice que NO
    } else if (option === 'no') {
        noClickCount++;

        var noButton = document.getElementById('no-button');
        var yesButton = document.getElementById('si-button');

        var phrases = [
            "¿Estás segura?",
            "¿De verdad?",
            "¡Piénsalo bien!",
            "Mira el otro botón...",
            "¡Me vas a romper el corazón!",
            "¡Voy a llorar!",
            "¡No seas así!",
            "¡Di que sí por favor!",
            "¡Andaaa!",
            "Vale, ya entendí... mentira, ¡di que SÍ!"
        ];

        noButton.innerText = phrases[noClickCount % phrases.length];

        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.4;
        yesButton.style.fontSize = newSize + 'px';

    } else {
        alert('Opción invalida!');
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function () {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 0); // Cambio instantáneo

    setTimeout(function () {
        clearInterval(interval);
        document.body.style.backgroundColor = '';
        if (callback) {
            callback();
        }
    }, 0); // Sin espera
}

function displayHorse() {
    var imageContainer = document.getElementById('image-container');
    var horseImage = new Image();
    horseImage.src = 'horses.gif';
    horseImage.alt = 'Horses';
    horseImage.onload = function () {
        imageContainer.appendChild(horseImage);
    };
}

function displayGrinch() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var grinchImage = new Image();
    grinchImage.src = 'grinchme.gif';
    grinchImage.alt = 'Grinch Meme';
    grinchImage.onload = function () {
        imageContainer.appendChild(grinchImage);
        document.getElementById('options').style.display = 'none';
    };
}