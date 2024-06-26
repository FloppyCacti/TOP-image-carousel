function image_carousel(){
    let images = document.querySelectorAll('#images img');
    let currentIndex = 0;

    function showImage(){
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('visible');
    }

    images[currentIndex].classList.add('visible');

    setInterval(showImage, 3000);
}

image_carousel();