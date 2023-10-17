var posting = document.getElementById("Posts")
var posts = [
    ["", "Rando on Phoenix", "I want to have a fair and weighted desision on this, should pinapple belong on pizza"], 
    ["", "Obviously Biased A", "Pinnaple Should Belong on Pizza, It gives a juicy bite upon eating it"], 
    ["", "Obviously Biased B", "Are you Crazy! Pinnaple is absolutly disgusting, it should be banned on pizza"], 
    ["", "Obviously Biased A", "Have you tried eating Pinnaple on Pizza, it tastes great!"]]


function newPost(){
    for(x = 0; x < posts.length; x++){
        var textForPost = document.createElement("p");
        var accountName = document.createTextNode("span");
        accountName.textContent = String(posts[x][1]);
        textForPost.innerHTML = String(posts[x][2]);
        var accountImage = ""
        console.log(posts[x][0] == "")
        if(String(posts[x][0]) == ""){
            accountImage = document.createElement("img")
            accountImage.src = "images/icon.png"
        }
        else{
            accountImage = document.createElement("img").src = posts[0]
        }
        accountImage.className = "PostImg"
        var divForPost = document.createElement("div");
        divForPost.className = "Post"

        console.log(accountName.src)
        divForPost.appendChild(accountImage);
        divForPost.appendChild(accountName);
        divForPost.appendChild(textForPost);
        posting.appendChild(divForPost);
    }
}

newPost()