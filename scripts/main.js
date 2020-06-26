let miImage = document.querySelector("img");
miImage.onclick = function(){
	let miSrc = miImage.getAttribute("src");
	if (miSrc === "images/logo.jpeg") {
		miImage.setAttribute("src","images/logo2.jpeg");
	} else {
		miImage.setAttribute("src","images/logo.jpeg");
	}
}