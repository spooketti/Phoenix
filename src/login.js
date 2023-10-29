
  let emailPrompt = document.getElementById("UsernamePrompt")
  let pwPrompt = document.getElementById("PasswordPrompt")
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
      window.location.href = "./index.html"
      // ...
    }).catch((error) => {
      logInWithEmail(email,password)
    });
    }

    function logInWithEmail(email,password)
    {
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    window.location.href = "./index.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("i hate you")
  });
    }

    function signInAnon()
    {
        firebase.auth().signInAnonymously()
  .then((userCredential) => {
    window.location.href = "./index.html"
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

    }
    

    //setTimeout(() => {
      document.getElementById("loginMenu").style.filter = "blur(0px)"
    //}, 1000);

    function emPW() //email password
    {
        signUpWithEmail(emailPrompt.value, pwPrompt.value)
    }