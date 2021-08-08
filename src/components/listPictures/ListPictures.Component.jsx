import React from 'react';
import { Picture } from './ListPictures.Style';

function ListPictures({ author, url, title }) {
  return (
    <div>
      <h2>{author}</h2>
      <h4>{title}</h4>
      <Picture src={url} alt={title} />
    </div>
  );
}

export default ListPictures;
