// script.js
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.product-images img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            img.style.opacity = '0';
            img.style.top = '100%'; // Preparar a imagem para a animação de "queda"
        });
        images[index].classList.add('active');
        images[index].style.opacity = '1';
        images[index].style.top = '0'; // Inicia a animação de "queda"
    }

    function nextImage() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    }

    showImage(currentIndex); // Mostrar a primeira imagem inicialmente

    setInterval(nextImage, 5000); // Trocar imagem a cada 4 segundos
});

document.getElementById('theme-toggle').addEventListener('change', function (event) {
    if (event.target.checked) {
        // Ativar tema claro
        document.documentElement.classList.add('light-theme');
    } else {
        // Voltar para tema escuro
        document.documentElement.classList.remove('light-theme');
    }
});


const imagesColumn1 = [
    './assets/produtos/destaque/travel.png',
    '/assets/produtos/destaque/Portas e Click.png',
    '/assets/produtos/destaque/talk npc.png',
    '/assets/produtos/destaque/extras.png',
];

const imagesColumn2 = [
    '/assets/produtos/destaque/cavebot_supplies.png',
    '/assets/produtos/destaque/cavebot_enchant.png',
    '/assets/produtos/destaque/cavebot_refil.png',
    '/assets/produtos/destaque/cavebot_delays.png',

    '/assets/produtos/destaque/cavebot_hunt.png',
    '/assets/produtos/destaque/cavebot_extras.png'
];

let currentIndex1 = 0;
let currentIndex2 = 0;

function showImage(column, index) {
    if (column === 1) {
        document.getElementById('gallery1-img').src = imagesColumn1[index];
    } else if (column === 2) {
        document.getElementById('gallery2-img').src = imagesColumn2[index];
    }
}

function nextImage(column) {
    if (column === 1) {
        currentIndex1 = (currentIndex1 + 1) % imagesColumn1.length;
        showImage(1, currentIndex1);
    } else if (column === 2) {
        currentIndex2 = (currentIndex2 + 1) % imagesColumn2.length;
        showImage(2, currentIndex2);
    }
}

function prevImage(column) {
    if (column === 1) {
        currentIndex1 = (currentIndex1 - 1 + imagesColumn1.length) % imagesColumn1.length;
        showImage(1, currentIndex1);
    } else if (column === 2) {
        currentIndex2 = (currentIndex2 - 1 + imagesColumn2.length) % imagesColumn2.length;
        showImage(2, currentIndex2);
    }
}

