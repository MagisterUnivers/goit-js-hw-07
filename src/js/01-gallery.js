import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGallery = document.querySelector('.gallery');
const itemGallery = createGalleryItem(galleryItems);
divGallery.insertAdjacentHTML('afterbegin', itemGallery);
const links = document.querySelectorAll('.gallery__link');

let modal = basicLightbox.create(`
    <div class="modal"></div>`);

links.forEach((link, index) =>
	link.addEventListener('click', (e) => {
		e.preventDefault();

		modal = basicLightbox.create(`
    <div class="modal">
    <img
    src='${galleryItems[index].original}'
    alt='${galleryItems[index].description}' 
  />
    </div>`);
		modal.show();
	})
);

/**
  |============================
  | Super option
  |============================
*/

// 		const modal = basicLightbox.create(`
//     <div class="modal">
//     <img
//     src='${e.srcElement.currentSrc}'
//     alt='${e.srcElement.alt}'
//   />
//     </div>
// `);
// 		modal.show();

function createGalleryItem(items) {
	const markup = items
		.map(
			(image) => `<div class="gallery__item">
    <a class="gallery__link" href='${image.original}'>
      <img
        class="gallery__image"
        src='${image.preview}'
        data-source='${image.original}'
        alt='${image.description}' 
      />
    </a>
  </div>`
		)
		.join('');
	return markup;
}

window.addEventListener('keydown', (e) => {
	if (e.code == 'Escape') {
		// if (modal.visible()) modal.close();

		/**
      |============================
      | Illegal thing
      |============================
    */
		modal.visible() && modal.close();
	}
});
