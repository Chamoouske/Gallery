import firebase from 'firebase';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_APIKEY}`,
  authDomain: `${process.env.REACT_APP_DOMAIN}`,
  databaseURL: `https://gallery-2eb2f-default-rtdb.firebaseio.com`,
  projectId: `${process.env.REACT_APP_PRJID}`,
  storageBucket: `${process.env.REACT_APP_SB}`,
  messagingSenderId: `${process.env.REACT_APP_MSID}`,
  appId: `${process.env.REACT_APP_APPID}`,
  measurementId: `${process.env.REACT_APP_MID}`,
};
firebase.initializeApp(firebaseConfig);

export default firebase;
