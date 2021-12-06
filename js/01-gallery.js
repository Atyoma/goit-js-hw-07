import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

// 1...Создание и рендер разметки по массиву данных galleryItems
// и предоставленному шаблону элемента галереи. done!!!

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
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// 2...Реализация делегирования на div.gallery и получение url
// большого изображения.

// ==================task 1.2========================

galleryBox.addEventListener("click", onGalleryBoxClick);

function onGalleryBoxClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(e.currentTarget);
  console.log(e.target);
}

// 3...Подключение скрипта и стилей библиотеки модального окна
// basicLightbox.Используй CDN сервис jsdelivr и добавь в
// проект ссылки на минифицированные(.min) файлы библиотеки.

// 4...Открытие модального окна по клику на элементе галереи.
// Для этого ознакомься с документацией и примерами.

// 5...Замена значения атрибута src элемента < img > в модальном
// окне перед открытием.Используй готовую разметку модального
// окна с изображением из примеров библиотеки basicLightb
