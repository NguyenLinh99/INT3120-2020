import firebase from 'firebase';
import '@firebase/firestore';
// TODO: Replace the following with your app's Firebase project configuration
const Config = {
  apiKey: 'AIzaSyDrOcOVkvItKxIirPzOhyoa_OP2uIWtx6Q',
  authDomain: 'apptest-29.firebaseapp.com',
  databaseURL: 'https://apptest-29.firebaseio.com',
  projectId: 'apptest-29',
  storageBucket: 'apptest-29.appspot.com',
  messagingSenderId: '956335494553',
  appId: '1:956335494553:web:265042972f53577938ef08',
};
// Initialize Firebase
const AppConfig = firebase.initializeApp(Config);
const rootRef = AppConfig.database().ref('sign');
const arrBan = rootRef.child('ban');
const arrCommand = rootRef.child('command');
const arrDanger = rootRef.child('danger');
const arrInstruction = rootRef.child('instruction');
export { rootRef, arrBan, arrCommand, arrDanger, arrInstruction };

// // Initialize Firebase
// class Fire {
//   constructor(callback) {
//     this.init(callback);
//   }

//   init(callback) {
//     if (!firebase.apps.length) {
//       firebase.initializeApp(Config);
//     }

//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         callback(null, user);
//       } else {
//         firebase
//           .auth()
//           .signInAnonymously()
//           .catch((error) => {
//             callback(error);
//           });
//       }
//     });
//   }

//   getLists(callback) {
//     let ref = firebase
//       .firestore()
//       .collection('users')
//       .doc(this.userId)
//       .collection('lists')
//       .doc('ban');

//     this.unsubscribe = ref.onSnapshot((snapshot) => {
//       lists = [];

//       snapshot.forEach((doc) => {
//         lists.push({ id: doc.id, ...doc.data() });
//       });

//       callback(lists);
//     });
//   }

//   get userId() {
//     return firebase.auth().currentUser.uid;
//   }

//   detach() {
//     this.unsubscribe();
//   }
// }
// export default Fire;

export async function getSignsBan(signsRetreived) {
  var signsList = [];
  await AppConfig.database()
    .ref('sign/ban')
    .once('value')
    .then((snapshot) => {
      //   console.log('User data: ', snapshot.val());
      snapshot.forEach((doc) => {
        signsList.push({
          key: doc.key,
          name1: doc.toJSON().name,
          content1: doc.toJSON().content,
          image1: doc.toJSON().image,
        });
      });
      signsRetreived(signsList);
    });
}
export async function getSignsCommand(signsRetreived) {
  var signsList = [];
  await AppConfig.database()
    .ref('sign/command')
    .once('value')
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        signsList.push({
          key: doc.key,
          name1: doc.toJSON().name,
          content1: doc.toJSON().content,
          image1: doc.toJSON().image,
        });
      });
      signsRetreived(signsList);
    });
}

export async function getSignsDanger(signsRetreived) {
  var signsList = [];
  await AppConfig.database()
    .ref('sign/danger')
    .once('value')
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        signsList.push({
          key: doc.key,
          name1: doc.toJSON().name,
          content1: doc.toJSON().content,
          image1: doc.toJSON().image,
        });
      });
      signsRetreived(signsList);
    });
}

export async function getSignsInstruction(signsRetreived) {
  var signsList = [];
  await AppConfig.database()
    .ref('sign/instruction')
    .once('value')
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        signsList.push({
          key: doc.key,
          name1: doc.toJSON().name,
          content1: doc.toJSON().content,
          image1: doc.toJSON().image,
        });
      });
      signsRetreived(signsList);
    });
}
