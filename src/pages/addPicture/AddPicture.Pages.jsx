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
} from './AddPicture.Style.js';

function AddPicture() {
  const [imag, setImage] = useState({});
  
  const setValues = {
    src: (link) => setImage({ ...imag, url: link }),
    title: (title) => setImage({ ...imag, title: title }),
    author: (author) => setImage({ ...imag, author }),
  };

  function addImage() {
    newImage(...imag);
  }
  return (
    <AddPage>
      {console.log(imag)}
      <BackgroundAdd>
        <FormAdd>
          <AddTitle>Registrar Imagem</AddTitle>
          <InputFieldAdd
            value={imag?.url}
            placeholder="Url da Imagem"
            onChange={e=>setValues.src(e.target.value)}
            required
          ></InputFieldAdd>
          <InputFieldAdd
            value={imag?.title}
            onChange={e=>setValues.title(e.target.value)}
            placeholder="Título da Imagem"
            required
          ></InputFieldAdd>
          <InputFieldAdd
            value={imag?.author}
            onChange={e=>setValues.author(e.target.value)}
            placeholder="Autor da Imagem"
            required
          ></InputFieldAdd>
          <ButtonAdd onClick={(e) => addImage(e.value)}>Adicionar</ButtonAdd>
        </FormAdd>
      </BackgroundAdd>
    </AddPage>
  );
}

export default AddPicture;
