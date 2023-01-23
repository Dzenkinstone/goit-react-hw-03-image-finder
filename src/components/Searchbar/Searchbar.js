import { Component } from 'react';
import { Loader } from '../Loader';
import { Header } from './Searchbar.styled';
import { Form } from './Searchbar.styled';
import { Button } from './Searchbar.styled';
import { Label } from './Searchbar.styled';
import { Input } from './Searchbar.styled';
import { Container } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onChange(this.state.value);
    this.setState({ value: '' });
    return;
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <Label>Search</Label>
          </Button>
          <Input
            onChange={this.handleChange}
            value={this.state.value}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          {this.props.isLoading && (
            <Container>
              <Loader />
            </Container>
          )}
        </Form>
      </Header>
    );
  }
}
