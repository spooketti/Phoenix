/*<div class="Post">
                <div class="UserHold">
                  <img src="images/icon.png" class="PostImg">
                <span><a href="profile.html?Name=Username">Username</a></span>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quibusdam nostrum ratione dignissimos fugit doloremque necessitatibus officiis libero dolor, laudantium placeat, odio expedita, provident eius sequi harum corporis consequuntur distinctio.</p>
              </div> */

const postsRef = db.ref("Posts/")
let PostCol = document.getElementById("PostCol")
postsRef.on("child_added", function(snapshot) {
    const dbPost = snapshot.val();
    let Username = "Jon"
    let post = document.createElement("div")
    post.className = "Post"
    PostCol.appendChild(post)
    
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

    let postContent = document.createElement("p")
    postContent.innerText = dbPost.message
    post.appendChild(postContent)

})