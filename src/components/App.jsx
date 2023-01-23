import { Component } from 'react';
import { getImages } from '../app';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
export class App extends Component {
  state = {
    page: 1,
    images: [],
    query: '',
    isLoading: false,
    showModal: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ isLoading: true });
        const images = await getImages(this.state.query, this.state.page);
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
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

  render() {
    return (
      <Container>
        <Searchbar
          isLoading={this.state.isLoading}
          onChange={this.handleInputSubmit}
        />
        <ImageGallery images={this.makeOptions} />
        {this.state.images.length !== 0 && (
          <Button onChange={this.loadMore} isLoading={this.state.isLoading} />
        )}
      </Container>
    );
  }
}
