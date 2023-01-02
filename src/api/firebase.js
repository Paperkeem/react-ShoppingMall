import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const provider = new GoogleAuthProvider();

// 로그인 할 시 계정 선택할 수 있도록
provider.setCustomParameters({
prompt: "select_account",
});

export function Login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function Logout(){
  signOut(auth).catch(console.error);
}

export function onAuth(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

export async function adminUser(user){
  return get(ref(db, 'admins'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
  });
}

export async function addItem(item) {
  return set(ref(db, `products/${item.id}`), item);
}

export async function getAllItem() {
  return get(ref(db), 'products')
    .then((snapshot) => {
      if (snapshot.exists()) {
        const products = snapshot.val().products;
        return Object.values(products);
      }
      return [];
    });
}