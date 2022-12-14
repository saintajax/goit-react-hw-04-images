import { Overlay, ModalWindow } from './Modal.styled';
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ src, name, toggleModal }) => {
  const [isImgLoad, setiIsImgLoad] = useState(false);

  const onModalClose = e => {
    const { target, currentTarget, code } = e;
    if (target === currentTarget || code === 'Escape') {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onModalClose);
    return () => {
      window.removeEventListener('keydown', onModalClose);
      setiIsImgLoad(false);
    };
  });

  const onImgload = () => {
    setiIsImgLoad(false);
  };

  return createPortal(
    <Overlay onClick={onModalClose}>
      <ModalWindow>
        {!isImgLoad && <Loader />}
        <img src={src} alt={name} onLoad={onImgload} />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
