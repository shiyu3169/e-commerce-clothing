import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCOS3IKhyBoua_aaRB52Z9tvDFTWWQwxMw",
  authDomain: "e-clothing-8174b.firebaseapp.com",
  databaseURL: "https://e-clothing-8174b.firebaseio.com",
  projectId: "e-clothing-8174b",
  storageBucket: "e-clothing-8174b.appspot.com",
  messagingSenderId: "769747248310",
  appId: "1:769747248310:web:d8f0f9087658a5c58c3217"
};

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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
