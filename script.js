// Pre-cargar la imagen del Grinch para evitar el parpadeo
var grinchPreload = new Image();
grinchPreload.src = 'grinchme.gif';

// Variable para llevar la cuenta de cuántas veces dicen que "No"
let noClickCount = 0;

function selectOption(option) {
    // Si dice que SÍ
    if (option === 'yes') {
        flashRainbowColors(function () {
            document.getElementById('question').style.display = 'none';
            displayGrinch();
        });

        // Si dice que NO
    } else if (option === 'no') {
        noClickCount++; // Aumentamos el contador

        // ELEMENTOS
        var noButton = document.getElementById('no-button');
        var yesButton = document.getElementById('si-button');

        // LISTA DE FRASES (Puedes cambiarlas por las que quieras)
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

        // CAMBIAR TEXTO DEL BOTÓN NO
        // Usa el contador para elegir la frase siguiente
        noButton.innerText = phrases[noClickCount % phrases.length];

        // HACER GIGANTE EL BOTÓN SÍ
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 1.4; // Crece un poco menos brusco (1.4x)
        yesButton.style.fontSize = newSize + 'px';

    } else {
        alert('Opción invalida!');
    }
}

// --- El resto del código se queda igual ---

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
    }, 500);
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

displayHorse();