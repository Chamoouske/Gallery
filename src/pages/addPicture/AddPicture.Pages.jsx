import React, { useState } from 'react';
import newImage from '../../api/api.js';
import './AddPicture.Style.js';
import {
  FormAdd,
  AddPage,
  InputFieldAdd,
  ButtonAdd,
  BackgroundAdd,
  AddTitle,
  Buttons,
  ButtonReturn,
} from './AddPicture.Style.js';

function AddPicture() {
  const [imag, setImage] = useState({});

  const setValues = {
    picture: (link) => setImage({ ...imag, picture: link }),
    title: (title) => setImage({ ...imag, title: title }),
    author: (author) => setImage({ ...imag, author: author }),
  };

  function redirectNavigation(link, node) {
    window.location.href = link;
  }

  function addImage({ author, picture, title }) {
    newImage({ author, picture, title });
  }
  return (
    <AddPage>
      <BackgroundAdd>
        <FormAdd>
          <AddTitle>Adicionar Imagem</AddTitle>
          <InputFieldAdd
            value={imag?.picture}
            placeholder="URL da Imagem"
            onChange={(e) => setValues.picture(e.target.value)}
            required
          ></InputFieldAdd>
          <InputFieldAdd
            value={imag?.title}
            onChange={(e) => setValues.title(e.target.value)}
            placeholder="Título da Imagem"
            required
          ></InputFieldAdd>
          <InputFieldAdd
            value={imag?.author}
            onChange={(e) => setValues.author(e.target.value)}
            placeholder="Autor da Imagem"
            required
          ></InputFieldAdd>
          <Buttons>
            <ButtonReturn onClick={redirectNavigation.bind(this, '/')}>
              Voltar
            </ButtonReturn>
            <ButtonAdd onClick={() => addImage(imag)}>Adicionar</ButtonAdd>
          </Buttons>
        </FormAdd>
      </BackgroundAdd>
    </AddPage>
  );
}

export default AddPicture;
