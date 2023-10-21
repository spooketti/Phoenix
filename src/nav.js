let scrollbuffer = 0;
let navBar = document.getElementById("navbar")
let CreatePost = document.getElementById("CreatePost")
document.addEventListener("scroll", function(){
   let ypos = window.scrollY
   if (ypos > scrollbuffer || CreatePost.style.display == "flex") {
      navbarVis = false
      navBar.style.transform = "translateY(-100%)"
      
   } else if (ypos < scrollbuffer) {
    //commit test
    //console.log("up")
      navbarVis = true
      navBar.style.transform = "translateY(0)"
   } 
   scrollbuffer = ypos <= 0 ? 0 : ypos; 
});