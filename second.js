const images = [{
    src: "./img/kitty2.jpeg",
    alt: "kitty",
    date: "24.04.2024"
}, 
{
    src: "./img/kitty.webp",
    alt: "kitty",
    date: "24.04.2024"
},
{
    src: "./img/kitty3.webp",
    alt: "kitty",
    date: "24.04.2024"
}, 
{
    src: "./img/kitty4.webp",
    alt: "kitty",
    date: "24.04.2024"
}, 
{
    src: "./img/kitty5.jpg",
    alt: "kitty",
    date: "24.04.2024"
},
 {
    src: "./img/kitty.webp",
    alt: "kitty",
    date: "24.04.2024"
}, 
{
    src: "./img/kitty7.jpg",
    alt: "kitty",
    date: "24.04.2024"
}, 
{
    src: "./img/kitty2.jpeg",
    alt: "kitty",
    date: "24.04.2024"
},
{
    src: "./img/kitty8.webp",
    alt: "kitty",
    date: "24.04.2024"
}];

function createGallery(images) {
    const galleryContainer = document.getElementById("gallery");
    images.forEach(image => 
        {
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
        img.setAttribute("data-date", image.date);
        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });
}
createGallery(images);

function shuffleImages() {
    const galleryContainer = document.getElementById("gallery");
    const galleryItems = galleryContainer.querySelectorAll(".gallery-item");
    const shuffledImages = Array.from(galleryItems).sort(() => Math.random() - 0.5);
    galleryItems.forEach(item => galleryContainer.removeChild(item));
    shuffledImages.forEach(item => galleryContainer.appendChild(item));
}
document.addEventListener("DOMContentLoaded", function() {
    const galleryContainer = document.getElementById("gallery");
    galleryContainer.addEventListener("click", shuffleImages);
});

