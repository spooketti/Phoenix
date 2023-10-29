auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("LET'S firetrucking GOOOOO")
    } else {
     window.location = "./login.html"
    }
  });