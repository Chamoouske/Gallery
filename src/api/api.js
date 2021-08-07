import firebase from 'firebase/app';
import 'firebase/database';

export const newImage = (props) => {
  const imageData = {
    author: props.author,
    url: encodeURIComponent(props.url).replaceAll('.', '%2E'),
    title: props.title,
    createdat: firebase.database.ServerValue.TIMESTAMP,
  };

  let iamgeRef = firebase.database().ref('imgs/' + imageData.author);

  try {
    iamgeRef.set({
      ...imageData,
    });
    alert('Imagem ' + imageData.title + ' foi cadastrada com sucesso!');
  } catch (e) {
    console.log(e.message);
    return e;
  }
};

export class searchImage {
  static getDataList = (nodePath, callback) => {
    let query = firebase.database().ref(nodePath);
    query.on('value', (dataSnapshot) => {
      let items = [];
      dataSnapshot.forEach((childSnapshot) => {
        let item = childSnapshot.val();
        item['key'] = childSnapshot.key;
        items.push(item);
      });
      callback(items);
    });
    return query;
  };
}

export default newImage;
