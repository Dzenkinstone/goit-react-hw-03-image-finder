import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export const ImageGallery = ({ images, onShow }) => {
  return (
    <List>
      <ImageGalleryItem images={images} onShow={onShow} />
    </List>
  );
};
