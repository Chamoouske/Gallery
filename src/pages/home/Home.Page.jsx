import React, { Component } from 'react';
import { searchImage } from '../../api/api';
import ListPictures from '../../components/listPictures/ListPictures.Component';
import {
  AddImage,
  BoxPicture,
  HomePage,
  Result,
} from './Home.Style';

class Home extends Component {
  state = {
    pictures: [],
  };
  async componentDidMount() {
    searchImage.getDataList('imgs', (dataReceived) => {
      this.setState({ pictures: dataReceived });
    });
  }
  redirectMavigation(link, node) {
    window.location.href = link;
  }

  render() {
    const { pictures } = this.state;
    return (
      <HomePage>
        <Result>
          <AddImage onClick={this.redirectMavigation.bind(this, '/addImage')}>
            Adicionar Imagem
          </AddImage>

          <BoxPicture>
            {pictures.map((picture) => {
              return (
                <ListPictures
                  author={picture.author}
                  url={decodeURIComponent(picture.url).replaceAll('%2E', '.')}
                  title={picture.title}
                />
              );
            })}
          </BoxPicture>
        </Result>
      </HomePage>
    );
  }
}

export default Home;
