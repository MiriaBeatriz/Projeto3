const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let imageIndex = 0;
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
];

function showImage(index) {
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
}

function prevImage() {
    imageIndex--;
    if (imageIndex < 0) {
        imageIndex = images.length - 1;
    }
    showImage(imageIndex);
}

function nextImage() {
    imageIndex++;
    if (imageIndex >= images.length) {
        imageIndex = 0;
    }
    showImage(imageIndex);
}

prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

showImage(imageIndex);