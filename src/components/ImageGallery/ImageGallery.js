import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ images, handleClick }) => {
  return (
    <List>
      <ImageGalleryItem images={images} handleClick={handleClick} />
    </List>
  );
};
