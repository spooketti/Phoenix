const postsRef = db.ref("Posts/")
let urlRegex = /(https?:\/\/[^\s]+)/g; //just detects links
let tildaRegex = /(```)/; //code block opener regex
//let postRegex = /(https?:\/\/[^\s]+)|(```)/g
let PostCol = document.getElementById("Posts")
postsRef.on("child_added", function(snapshot) {
    const dbPost = snapshot.val();
    let Username = "Jon"
    let post = document.createElement("div")
    post.className = "Post"
    PostCol.insertBefore(post,PostCol.firstChild)
    
    let userHold = document.createElement("div")
    userHold.className = "UserHold"
    post.appendChild(userHold)

    let pfp = document.createElement("img")
    pfp.src = "images/icon.png"
    pfp.className = "PostImg"
    userHold.appendChild(pfp)

    let usernameAnchor = document.createElement("a")
    usernameAnchor.innerText = "Username" //temp
    usernameAnchor.href = `profile.html?Name=${Username}`
    userHold.appendChild(usernameAnchor)

    let postContent = document.createElement("pre")
    let postText = urlify(dbPost.message)//(dbPost.message).split(tildaRegex)
    //console.log(postText)
    //postText = urlify(postText)
    let isCodeOpen = false
    let codeSection = null
    postText = postText.filter(elm => elm)
    for(let i=0;i<postText.length;i++)
    {
      let dontAppend = false
      console.log(postText)
      let textSection = document.createElement("span")
      if(postText[i] == "```")
      {
        dontAppend = true
        isCodeOpen = !isCodeOpen
        if(isCodeOpen)
        {
          //let preSection = document.createElement("pre")
          //postContent.appendChild(preSection)
          codeSection = document.createElement("code")
          postContent.appendChild(codeSection)
        }
      }
      else if(isCodeOpen)
      {
        dontAppend = true
        codeSection.innerText = postText[i]
      }
      else if((postText[i] || '').split(urlRegex).length > 1)
      {
        textSection = document.createElement("a")
        textSection.href = postText[i]
        textSection.target = "_blank"
        textSection.rel = "noopener"
        if(postText[i].match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp|webp)(\?(.*))?$/gmi) != null)
          {
            textSection = document.createElement("img")
            textSection.src = postText[i]
            textSection.className = "PostPhoto"
          }
      }
      
      if(!dontAppend)
      {
        postContent.appendChild(textSection)
        textSection.innerText = postText[i]
      }
    }
   
    
    post.appendChild(postContent)

    let postDate = document.createElement("span")
    let dateString = new Date(dbPost.timestamp)

    const dd = String(dateString.getDate()).padStart(2, '0');
    const mm = String(dateString.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = dateString.getFullYear();
  
    let time =  dateString.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    dateString = mm + '/' + dd + '/' + yyyy + " at " + time;
    postDate.innerText = dateString
    postDate.className = "PostDate"
    post.appendChild(postDate)
    hljs.highlightAll()
})



function urlify(text) {
  return text.split(urlRegex).flatMap(part => part.split(tildaRegex));
}