# Leros HTML5 app bootstrap
Leros is a MVC HTML5 application bootstrap.

# Directories
 * /apps Servers the apps, which are controllers that servers the contents of the apps.
 * /assets Serves the assets related to the site.
 * /css Stylesheets
 
#Parts
 
##index.html 

	<!doctype html>
	<html>
		<head>
			<script src="js/boardia.js" type="text/JavaScript"></script>
			<link rel="stylesheet" href="css/style.css" type="text/css" />
			<script>
				var audio = null;
				var audioContext = new webkitAudioContext();
				function play(buffer) {
					var source = audioContext.createBufferSource();
					source.buffer = buffer;
					source.conncet(source.destination);
					source.noteOn(0);
				}
			</script>
		</head>
		<body>
			<header>
				<div id="search">
					<input type="search" class="input" />
				</div>
			</header>
			<nav >
				<ul id="tree">
					<a href="#!/app/home">Home</a>
					<a href="#!/app/blog">Blog</a>
					<a href="#!/app/portfolio">Portfolio</a>
				</ul>
			</nav>
			<div id="content">
			test
			</div>
			<footer>
			</footer>
		</body>
	</html>

#Apps

An app is consiting of a controller named "app.js" and a view index.html ("optional"). The controller is featuring a code like this:

##/apps/home/app.js

	/***
	An app is a JS object. The name of the class/function must be "App"
	*/
	function App() {
		this.title = "Home";
		var node = document.createElement("div"); // Important, this property must be a HTMLElement which will be appended to the viewstack
		this.node = node;
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function () {
			if(xmlHttp.readyState == 4) {
				if(xmlHttp.status == 200) {
				
					node.innerHTML = xmlHttp.responseText;
				}
			}
		};
		xmlHttp.open("GET", "apps/home/index.html", true);
		xmlHttp.send(null);
	}
				
##/apps/index/index.html

No shell tags are allowed!

	<h1>Hello world</h1>
				
