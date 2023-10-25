const auth = firebase.auth()
  
  const provide = new firebase.auth.GoogleAuthProvider();
  function signInWithGoogle() 
    {
      firebase.auth()
      .signInWithPopup(provide)
      .then((result) => {
       
        window.location = "./index.html"
        //console.log(firebase.auth().currentUser)
      })
      .catch((error) =>
      {
        console.log(error)
      })
    }

    function signUpWithEmail(email,password)
    {
        firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
    }

    function logInWithEmail(email,password)
    {
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
    }

    function signInAnon()
    {
        firebase.auth().signInAnonymously()
  .then(() => {
    // Signed in..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
    }
    