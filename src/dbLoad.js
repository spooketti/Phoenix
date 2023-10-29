const firebaseConfig = {
    apiKey: "AIzaSyBJ2GR7HQlKJBConf2Mjmqpe9KLEytsZmU",
    authDomain: "twitterclone-aff2f.firebaseapp.com",
    databaseURL: "https://twitterclone-aff2f-default-rtdb.firebaseio.com",
    projectId: "twitterclone-aff2f",
    storageBucket: "twitterclone-aff2f.appspot.com",
    messagingSenderId: "1089185872675",
    appId: "1:1089185872675:web:350744b5c281b8998b2a96",
    measurementId: "G-7J6C100Q36"
  };
  const app = firebase.initializeApp(firebaseConfig);
  //const analytics = firebase.getAnalytics(app);
  const db = firebase.database();
  const auth = firebase.auth()