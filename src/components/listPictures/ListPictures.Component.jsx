import React from 'react';
import { Picture } from './ListPictures.Style';

function ListPictures({ author, picture, title }) {
  return (
    <div>
      <h2>{author}</h2>
      <h4>{title}</h4>
      <Picture src={picture} alt={title} />
    </div>
  );
}

export default ListPictures;
