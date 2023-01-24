import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ pictures }) => {
  return (
    <Gallery>
      {pictures.map(picture => (
        <ImageGalleryItem key={picture.id} item={picture} />
      ))}
    </Gallery>
  );
};
