import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const imageCardsMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageCardsMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createImageCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link"
    href="${original}">
    <img class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"/>
    </a>
    </div>
    `;
    })
    .join("");

  return markup;
}

function onGalleryContainerClick(event) {
  event.preventDefault();
  const targetImageEl = event.target.classList.contains("gallery__image");
  if (!targetImageEl) {
    return;
  }

  const instance = basicLightbox.create(
    `
      <div class="modal">
          <img src="${event.target.dataset.source}">
      </div>
  `,
    {
      onShow: (instance) =>
        document.addEventListener("keydown", closeModalOnPressEscape),
      onClose: (instance) =>
        document.removeEventListener("keydown", closeModalOnPressEscape),
    }
  );

  instance.show();

  function closeModalOnPressEscape(event) {
    if (event.code === "Escape") {
      console.log(event.code === "Escape");
      instance.close();
    }
  }

  // const instance = basicLightbox.create(
  //   `
  //     <div class="modal">
  //         <img src="${event.target.dataset.source}">
  //     </div>
  // `
  // );

  // instance.show();

  // galleryContainer.addEventListener(
  //   "keydown",
  //   (event) => {
  //     if (event.code === "Escape") {
  //       console.log(event.code === "Escape");
  //       instance.close();
  //     }
  //   },
  //   { once: true }
  // );
}
