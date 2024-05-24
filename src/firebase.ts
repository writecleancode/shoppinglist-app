import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAUcGa9JCUnqDy4GnHk_AmdpVMc9Y4njls',
	authDomain: 'shopping-list-a412d.firebaseapp.com',
	projectId: 'shopping-list-a412d',
	storageBucket: 'shopping-list-a412d.appspot.com',
	messagingSenderId: '718455921557',
	appId: '1:718455921557:web:9944bc5c9b83ddf64c349c',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
