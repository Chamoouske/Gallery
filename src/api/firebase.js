import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBqPHVURzqNuaoVPWSnPydZ0S9b1eLzH4k',
  authDomain: 'gallery-2eb2f.firebaseapp.com',
  databaseURL: 'https://gallery-2eb2f-default-rtdb.firebaseio.com',
  projectId: 'gallery-2eb2f',
  storageBucket: 'gallery-2eb2f.appspot.com',
  messagingSenderId: '129188004867',
  appId: '1:129188004867:web:309ee45943410c555f3a36',
  measurementId: 'G-HBGDG2HKWV',
};
firebase.initializeApp(firebaseConfig);

export default firebase.database();
