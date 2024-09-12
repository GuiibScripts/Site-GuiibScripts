//Alteração de cores para Tema Claro e Escuro
document.getElementById('theme-toggle').addEventListener('change', function (event) {
    if (event.target.checked) {
        document.documentElement.classList.add('light-theme');
    } else {
        document.documentElement.classList.remove('light-theme');
    }
});

//Modal para gerenciar account
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('account-modal');
    const openButton = document.getElementById('account-link');
    const closeButton = document.querySelector('.close-button');
    
    openButton.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    });
    
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});




//Table para alteração das imagens em destaque
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

//Função para alterar as imagens pelo index
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

window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    const mainNav = document.querySelector(".main-nav");
    const headerHeight = header.offsetHeight;

    if (window.scrollY > headerHeight) {
        mainNav.classList.add("fixed");
    } else {
        mainNav.classList.remove("fixed");
    }
});
