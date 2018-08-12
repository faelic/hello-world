var iconPlus = document.getElementById("plus");
var ink = document.getElementById("textarea");
var btn1 = document.getElementById("btn");
var ul = document.querySelector("ul");
var posts = [];



function myFunction(event){
	var link = ink.value;
	posts.push(link);
	if (event.which==13) {
		console.log(posts);
	}
}

function show() {
	var textArea = document.getElementById("textarea");
	if (textArea.style.display === "none") {
		textArea.style.display="block"
	}else{
		textArea.style.display="none"
	}
};



// if (input!=="") {
// 	function check(){
// 		var she = input.value();
// 		alert("she");
// 	}
// }





// window.Storage
// if (typeof(Storage) !=="undefined") {
//  	//store
//  	localStorage.setItem("posts", "favour");
//  	//retrieve
//  	document.getElementById("h1").innerHTML = localStorage.getItem("posts");
// }else{
// 	alert("sorry")
// }
 