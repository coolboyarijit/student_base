import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'; // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, combineReducers, compose } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'; // <- needed if using firestore

const fbConfig = {
  apiKey: 'AIzaSyBAAijgkxL_KmY__d0rLZLOtMp47PTQLs4',
  authDomain: 'studentbase-629fb.firebaseapp.com',
  databaseURL: 'https://studentbase-629fb.firebaseio.com',
  projectId: 'studentbase-629fb',
  storageBucket: 'studentbase-629fb.appspot.com',
  messagingSenderId: '555657334031',
  appId: '1:555657334031:web:4ba642e662f1652683827a',
  measurementId: 'G-D91WW17Z4X',
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});

// Create store with reducers and initial state
const initialState = {};
const store = createStore(rootReducer, initialState, composeWithDevTools());

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export default store;
