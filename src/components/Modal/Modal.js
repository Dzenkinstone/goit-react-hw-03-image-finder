import { Overlay } from './Modal.styled';
import { OpenModal } from './Modal.styled';

export const Modal = ({ url }) => {
  return (
    <Overlay>
      <OpenModal>
        <img src={`${url}`} alt="" />
      </OpenModal>
    </Overlay>
  );
};
