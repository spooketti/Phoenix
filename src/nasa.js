var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "U1Log8NeUnLqV03SBUbjcP61fEHF10YuDeUA9KGm";
var img_type = ".png";
var date = "2023-09-13"

//"&date="  + date
req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
	if(req.status == 200 && req.readyState == 4){
  	var response = JSON.parse(req.responseText);
    console.log(response)
    document.getElementById("loginWrapper").style.backgroundImage = `url(${response.hdurl})`
  }
})