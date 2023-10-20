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
   let inputField = document.getElementById("PostBodyInput")
   let postMenu = document.getElementById("CreatePost")
inputField.addEventListener("keydown",function(e)
{
    if(e.key == "Tab")
    {
      /*  e.preventDefault()
        let doc = inputField.ownerDocument.defaultView;
        let sel = doc.getSelection();
        let range = sel.getRangeAt(0);

        let tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0");
        range.insertNode(tabNode);

        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode); 
        sel.removeAllRanges();
        sel.addRange(range);
        */
       e.preventDefault();
       let start = this.selectionStart;
       let end = this.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    this.value = this.value.substring(0, start) +
      "\t" + this.value.substring(end);

    // put caret at right position again
    this.selectionStart =
      this.selectionEnd = start + 1;
  }
})

function submitPost()
{
    const timestamp = Date.now();
    let message = document.getElementById("PostBodyInput").value
    let likes = 0
    if (!/\S/.test(message)) { //white space
      return
    }
    db.ref("Posts/" + timestamp).set({
        message,
        timestamp,
        likes
      });
    hidePostMenu()
    navBar.style.transform = 'translateY(0%)'
    //console.log("Post was submited")
    document.getElementById("PostBodyInput").value = ""
}

function hidePostMenu()
{
    postMenu.style.display = "none"
}

function showPostMenu()
{
    postMenu.style.display = "none"
}

function closeMenu(){
  var navbar = document.getElementById("navbar")
  document.getElementById('CreatePost').style.display = 'none';
  // document.getElementById("PostBodyInput").value = ""in
  // navbar.style.display = 'in';
  navBar.style.transform = 'translateY(0%)'
}