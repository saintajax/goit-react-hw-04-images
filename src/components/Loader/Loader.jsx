import { ThreeDots } from 'react-loader-spinner';
import { createPortal } from 'react-dom';
import { Overlay } from './Loader.styled';

const modalRoot = document.querySelector('#modal-root');

export const Loader = () => {
  return createPortal(
    <Overlay>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Overlay>,
    modalRoot
  );
};
