import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// ==================task 1.1========================

const galleryBox = document.querySelector(".gallery");
const imagesMurkup = createGalleryItems(galleryItems);

galleryBox.insertAdjacentHTML("beforeend", imagesMurkup);

function createGalleryItems(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// ==================task 1.2-1.3-1.4========================

galleryBox.addEventListener("click", onGalleryBoxClick);

function onGalleryBoxClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  const refsImg = e.target.dataset.source;
  const refsAlt = e.target.alt;
  basicLightbox
    .create(
      `
		< <img
      width="1280"
      src=${refsImg}
      alt="${refsAlt}"
      data-modal
    /> 
	`
    )
    .show();
}
