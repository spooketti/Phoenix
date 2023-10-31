let navProfile = document.getElementById("NavProfile")
let navName = document.getElementById("navName")
let notifModal = document.getElementById("notifModal")
let notifTitle = document.getElementById("notifTitle")
let notifContent = document.getElementById("notifContent")
let profMenu = document.getElementById("editProfile")
let handleEdit = document.getElementById("HandleEditProf")
let changeField = document.getElementById("changeField")
let usernameEditProf = document.getElementById("UsernameEditProf")
let postHeadUsername = document.getElementById("PostHeadUsername")
let profEditVis = false;
let currentAspect
let visDict = {true:"0%",false:"100%"}
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
      else
      {
        navName.innerText = activeUser.displayName
        usernameEditProf.innerText = activeUser.displayName
        postHeadUsername.innerText = `Posting As ${activeUser.displayName}`
      }
      username = user.displayName
      pfp = user.photoURL
      //console.log(activeUser)
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
    profEditVis = !profEditVis
    profMenu.style.transform = `translateX(${visDict[profEditVis]})`
}

function editAspect(aspect)
{
    changeField.style.transform = "translateY(0%)"
    currentAspect = aspect
}

function applyAspect()
{
    let newname = changeField.value
    changeField.style.transform = "translateY(-100%)"
    switch(currentAspect)
    {
        case "Username":
            activeUser.updateProfile({
                displayName: newname,
              })
        navName.innerText = newname
        usernameEditProf.innerText = newname
        postHeadUsername.innerText = `Posting As ${newname}`
        break;
    }
    

}
