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