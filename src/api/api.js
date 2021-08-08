import firebase from 'firebase/app';
import 'firebase/database';

export const newImage = (props) => {
  let imageData = {
    author: props.author,
    title: props.title,
    url: encodeURIComponent(props.picture).replaceAll('.', '%2E'),
    createdat: firebase.database.ServerValue.TIMESTAMP,
  };

  let imageRef = firebase.database().ref('imgs/' + imageData.author);

  try {
    imageRef.set({
      ...imageData,
    });
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
