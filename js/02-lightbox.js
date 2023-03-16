import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulGallery = document.querySelector('.gallery');
const itemGallery = createGalleryItem(galleryItems);
ulGallery.insertAdjacentHTML('afterbegin', itemGallery);
const links = document.querySelectorAll('.gallery__item');

const lightbox = new SimpleLightbox('.gallery a', {
	captions: true,
	captionDelay: 250,
	captionPosition: 'bottom'
});

// links.forEach((link) =>
// 	link.addEventListener('click', (e) => {
// 		e.preventDefault();
// 	})
// );

function createGalleryItem(items) {
	return items
		.map(
			(image) => `<a class="gallery__item" href='${image.original}'>
      <img class="gallery__image" src='${image.preview}' alt='${image.description}' title='${image.description}' />
    </a>`
		)
		.join('');
}
