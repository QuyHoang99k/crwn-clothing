import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyCh4qATNyqRZdnywyTFs-ht0MgJ6rFn42U",
    authDomain: "crwn-db-e2260.firebaseapp.com",
    projectId: "crwn-db-e2260",
    storageBucket: "crwn-db-e2260.appspot.com",
    messagingSenderId: "752694546822",
    appId: "1:752694546822:web:b9ce4d8fb09b34fc6f5c07",
    measurementId: "G-R0ZMWW6MGS"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
