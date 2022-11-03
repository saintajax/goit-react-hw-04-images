import { Overlay, ModalWindow } from './Modal.styled';
import { PropTypes } from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Loader } from 'components/Loader/Loader';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  state = {
    isImgLoad: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onModalClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onModalClose);
    this.setState({ isImgLoad: false });
  }

  onModalClose = e => {
    if (e.target !== e.currentTarget || e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  onImgload = () => {
    this.setState({ isImgLoad: true });
  };

  render() {
    const { src, name } = this.props;
    const { isImgLoad } = this.state;

    return createPortal(
      <Overlay onClick={this.onModalClose}>
        <ModalWindow>
          {!isImgLoad && <Loader />}
          <img src={src} alt={name} onLoad={this.onImgload} />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
