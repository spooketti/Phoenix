let params = new URL(document.location).searchParams;
let localUsernameElements = ["IntroUsername","ProfileName"]
for(let i=0;i<localUsernameElements.length;i++)
{
    document.getElementById(localUsernameElements[i]).innerText = params.get("Name")
}


