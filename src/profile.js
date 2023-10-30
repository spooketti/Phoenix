let navProfile = document.getElementById("NavProfile")
let navName = document.getElementById("navName")
let notifModal = document.getElementById("notifModal")
let notifTitle = document.getElementById("notifTitle")
let notifContent = document.getElementById("notifContent")
let profMenu = document.getElementById("editProfile")
let handleEdit = document.getElementById("HandleEditProf")
let activeUser
auth.onAuthStateChanged((user) => {
    if (user) {
      activeUser = user
      let originEmail = activeUser.email
      originEmail = originEmail.split("@")
      //console.log(originEmail)
      handleEdit.innerText = "@"+originEmail[0]
      if(!activeUser.displayName)
      {
       noUsernameError()
      }
      username = user.displayName
      pfp = user.photoURL
      console.log(activeUser)
      var uid = user.uid;
    } else {
     window.location = "./login.html"
    }
  });

function noUsernameError()
{
    notifModal.style.display = "block"
    notifTitle.innerText = "Warning: Missing Username"
    notifContent.innerText = "Hello from the Phoenix team, you're currently missing a username. Feel free to change it anytime but clicking the box in the top right."
}

function editProfileMenu()
{

}
