var Boardia = function () {
	var viewStack = {};
	this.play = function () {};
	this.stop = function () {};
	this.navigate = function(args) {
		if(args[0] == "app") {
			console.log(args);
			var app = args[1];
			var sections = args.splice(2);
			
			var xmlHttp = new XMLHttpRequest();
			xmlHttp.onreadystatechange = function () {
				console.log(xmlHttp.responseText);
				var appInstance = eval("(new " + xmlHttp.responseText + ")");
				console.log(appInstance);
				viewStack["boardia:" + args.join(":")] = appInstance;
				document.getElementById("content").innerHTML =  "";
				console.log(appInstance.node);
				document.getElementById("content").appendChild(appInstance.node);
			};
			xmlHttp.open("GET", "apps/" + app + "/app.js", true);
			xmlHttp.send(null);
		}
	};
};
boardia = new Boardia();
window.addEventListener("load", function () {
	
	navigator.registerProtocolHandler(
    'web+bistlr', '#!/%s', 'Bistlr');
	//alert("A");
});
window.addEventListener("hashchange", function (evt) {
	var url = decodeURI(document.location.hash.replace("#!/", "").replace("%3A", "\/"));
	//alert(url);
	url = url.replace(":", "\/");
	url = url.split("\/");
	var app = url[0];
	var section = url[1];
	var parameter = url[2];
	var query = url[3];
	boardia.navigate(url);
	console.log(url);
});

