import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkpup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkpup(items) {
  return items
    .map(
      ({ original, preview, description }) => `
						<a class="gallery__item" href="${original}">
				    	<img class="gallery__image" src="${preview}" alt="${description}" />
				  	</a>
				`
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
