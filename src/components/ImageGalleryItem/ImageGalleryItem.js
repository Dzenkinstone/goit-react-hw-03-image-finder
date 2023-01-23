import { Item } from './ImageGalleryItem.styled';
import { Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images }) => {
  const responce = images();
  return (
    <>
      {responce.map(({ id, webformatURL }) => {
        return (
          <Item key={id}>
            <Image src={webformatURL} alt="" />
          </Item>
        );
      })}
    </>
  );
};
