import { Component } from 'react';
import { Overlay } from './Modal.styled';
import { OpenModal } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onKeyDown);
  }

  render() {
    return (
      <Overlay>
        <OpenModal>
          <img src={`${this.props.url}`} alt="" />
        </OpenModal>
      </Overlay>
    );
  }
}
