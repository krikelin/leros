/***
An app is a JS object
*/
function App() {
	this.title = "Home";
	var node = document.createElement("div");
	this.node = node;
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function () {
		if(xmlHttp.readyState == 4) {
			if(xmlHttp.status == 200) {
			
				node.innerHTML = xmlHttp.responseText;
			}
		}
	};
	xmlHttp.open("GET", "apps/audiodemo/index.html", true);
	xmlHttp.send(null);
}