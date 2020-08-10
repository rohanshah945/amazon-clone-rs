import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCizgn6pC3O8MbGWKGpRm54RlC60XlnKm8',
  authDomain: 'ecommerce-clone-rs.firebaseapp.com',
  databaseURL: 'https://ecommerce-clone-rs.firebaseio.com',
  projectId: 'ecommerce-clone-rs',
  storageBucket: 'ecommerce-clone-rs.appspot.com',
  messagingSenderId: '641211689940',
  appId: '1:641211689940:web:d4734f90215b08d8ee8441',
  measurementId: 'G-BN9JBWS8TS',
});

const auth = firebase.auth();

export { auth };
