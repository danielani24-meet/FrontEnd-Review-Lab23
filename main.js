function changeBackgroundColor() {
	
	getElementByTagName(body);
	if (document.body.style.backgroundColor == "lightsteelblue"){
		document.body.style.backgroundColor = "grey";
		console.log("changed to blue");
	}
	else  {
		if(document.body.style.backgroundColor == "grey"){
			document.body.style.backgroundColor = "lightsteelblue";
			console.log("changed to grey");
		}

	}


}
document.body.style.backgroundColor = "lightsteelblue";