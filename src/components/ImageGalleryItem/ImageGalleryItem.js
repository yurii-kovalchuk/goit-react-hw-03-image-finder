import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };

  // toggleModal = () => {
  //   this.setState(state => ({
  //     modal: !state.modal,
  //   }));
  // };

  modalOpen = () => {
    this.setState({
      modal: true,
    });
  };

  modalClose = () => {
    this.setState({
      modal: false,
    });
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props.item;
    const { modal } = this.state;
    return (
      <>
        <GalleryItem onClick={this.modalOpen}>
          <GalleryItemImage src={webformatURL} alt={tags} />
        </GalleryItem>
        {modal && (
          <Modal src={largeImageURL} alt={tags} onClose={this.modalClose} />
        )}
      </>
    );
  }
}
