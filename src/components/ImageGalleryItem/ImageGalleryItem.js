import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item }) => {
  const { webformatURL, largeImageURL, tags } = item;
  return (
    <GalleryItem>
      <GalleryItemImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
