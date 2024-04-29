document.getElementById("gallery").addEventListener("click", function(event) {
    if (event.target.tagName === "IMG") {
        const modal = document.getElementById("modal");
        const modalImage = document.getElementById("modal-image");
        const modalDate = document.getElementById("modal-date");
        const src = event.target.src;
        const alt = event.target.alt;
        const date = event.target.getAttribute("data-date");
        modalImage.src = src;
        modalImage.alt = alt;
        modalDate.textContent = "Дата публікації: " + date;
        modal.style.display = "block";
    }
});

document.querySelector(".close").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});
