import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// ==================task 2.1========================

const galleryBox = document.querySelector(".gallery");
const imagesMurkup = createGalleryItems(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", imagesMurkup);

function createGalleryItems(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join("");
}

// ==================task 2.2========================

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  ceptionType: "alt",
  scrollZoomFactor: 0.5,
  captionPosition: "bottom",
});
