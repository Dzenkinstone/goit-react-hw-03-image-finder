import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getImages } from '../app';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Modal } from './Modal';
export class App extends Component {
  state = {
    page: 1,
    images: [],
    query: '',
    isLoading: false,
    showModal: false,
    showButton: false,
    selectedImage: null,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true });
        const images = await getImages(this.state.query, this.state.page);
        const updatedImages = images.hits;

        if (images.totalHits === 0) {
          return toast('Oops, there are no pictures with this name', {
            duration: 2000,
            style: { color: 'red' },
          });
        }

        this.setState(prevState => ({
          images: [...prevState.images, ...updatedImages],
          showButton:
            this.state.page <
            Math.ceil(images.totalHits / updatedImages.length),
        }));
      } catch (error) {
        console.error(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  makeOptions = () => {
    return this.state.images.map(({ id, webformatURL, largeImageURL }) => ({
      id,
      webformatURL,
      largeImageURL,
    }));
  };

  handleInputSubmit = query => {
    this.setState({ page: 1, images: [], query });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleCLick = value => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      selectedImage: value,
    }));

    window.addEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = ({ code }) => {
    if (code === 'Escape') {
      window.removeEventListener('keydown', this.handleKeyDown);
      return this.setState({ showModal: false });
    }
  };

  render() {
    return (
      <Container>
        <Searchbar
          isLoading={this.state.isLoading}
          onChange={this.handleInputSubmit}
        />
        <Toaster />
        <ImageGallery images={this.makeOptions} onShow={this.handleCLick} />
        {this.state.showModal && <Modal url={this.state.selectedImage} />}
        {this.state.showButton && (
          <Button onChange={this.loadMore} isLoading={this.state.isLoading} />
        )}
      </Container>
    );
  }
}
