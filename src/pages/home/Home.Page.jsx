import React, { Component } from 'react';
import { searchImage } from '../../api/api';
import ListPictures from '../../components/listPictures/ListPictures.Component';
import { AddImage, BoxPicture, BoxSelect, HomePage, Result } from './Home.Style';
class Home extends Component {
  state = {
    pictures: [],
    author: 'none'
  };
  async componentDidMount() {
    searchImage.getDataList('imgs', (dataReceived) => {
      this.setState({ pictures: dataReceived });
    });
  }
  redirectMavigation(link, node) {
    window.location.href = link;
  }

  handleChange(value) {
    this.setState({ author: value })
  }

  render() {
    const { pictures, author } = this.state;
    console.log(pictures)
    return (
      <HomePage>
        <Result>
          <AddImage onClick={this.redirectMavigation.bind(this, '/addImage')}>
            Adicionar Imagem
          </AddImage>

          <BoxSelect onChange={e => this.handleChange(e.target.value)}>
            <option value='none'>Selecione um autor</option>
            {pictures.map(picture => {
              return (
                <option value={picture.author}>{picture.author}</option>
              );
            })}
          </BoxSelect>

          <BoxPicture>
            {pictures.map((picture) => {
              if (picture.author === author || author === 'none') {
                return (
                  <ListPictures
                    author={picture.author}
                    picture={decodeURIComponent(picture.url).replaceAll('%2E', '.')}
                    title={picture.title}
                  />
                );
              }
            })}
          </BoxPicture>
        </Result>
      </HomePage>
    );
  }
}

export default Home;
