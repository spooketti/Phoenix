let scrollbuffer = 0;
let navBar = document.getElementById("navbar")
document.addEventListener("scroll", function(){
   let ypos = window.scrollY
   if (ypos > scrollbuffer) {
      navbarVis = false
      navBar.style.transform = "translateY(-100%)"
      
   } else if (ypos < scrollbuffer) {
    //console.log("up")
      navbarVis = true
      navBar.style.transform = "translateY(0)"
   } 
   scrollbuffer = ypos <= 0 ? 0 : ypos; 
});