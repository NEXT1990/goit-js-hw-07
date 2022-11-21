import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imageCardsMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageCardsMarkup);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item"
    href="${original}">
    <img class="gallery__image"
    src="${preview}"
    alt="${description}" />
</a>
    `;
    })
    .join("");

  return markup;
}

const lightbox = new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log();
