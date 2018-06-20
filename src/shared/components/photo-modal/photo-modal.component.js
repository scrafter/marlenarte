import React from 'react';
import { PhotoModalStyled } from './photo-modal.styles';
import propTypes from 'prop-types';
import { CloseIcon } from 'mdi-react';
import { Modal, ModalBody } from 'reactstrap';

export default class PhotoModal extends React.Component {
  static propTypes = {
    img: propTypes.any.isRequired,
    isOpen: propTypes.bool.isRequired,
    toggle: propTypes.func,
  };

  render() {
    return (
      <PhotoModalStyled>
        <button className="btn btn-primary" onClick={this.props.toggle}>Open</button>
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className="photo-modal">
          <ModalBody>
            <div className="content">
              <button className="close-button" onClick={this.props.toggle}><CloseIcon color={'#fff'} /></button>
              <img src={this.props.img} />
            </div>
          </ModalBody>
        </Modal>
      </PhotoModalStyled>
    );
  }
}