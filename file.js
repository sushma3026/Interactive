//code to hold information about the selects and give the selected image output
var book = {
	'genre': ['Select your favourite genre', 'Adventure', 'Horror', 'Romance'],
	'Adventure': ['Choose the release year', '2001', '2004', '2015'],
	'Horror': ['Choose the release year', '2005', '2010'],
	'Romance': ['Choose the release year', '2008', '2013'],


	'2001': ['Select your Manga', 'One Piece', 'Bleach', 'Naruto'],
	'2004': ['Select your Manga', 'Tower of God', 'Onepunch Man'],
	'2015': ['Select your Manga', 'Akatsuki no Yona', 'OverLord'],
	'2005': ['Select your Manga', 'Kiseijuu', 'Ajin'],
	'2010': ['Select your Manga', 'Sankarea', 'Dead Tube', 'I am a Hero'],
	'2008': ['Select your Manga', 'Nisekoi', 'Horimiya'],
	'2013': ['Select your Manga', 'Akame ga Kill', 'Nana to Kaoru'],


	'One Piece': ['images/image1.jpg'],
	'Bleach': ['images/image2.jpg'],
	'Naruto': ['images/image3.jpg'],
	'Tower of God': ['images/image4.jpg'],
	'Onepunch Man': ['images/image5.jpg'],
	'Akatsuki no Yona': ['images/image6.jpg'],
	'OverLord': ['images/image7.jpg'],
	'Kiseijuu': ['images/image8.jpg'],
	'Ajin': ['images/image9.jpg'],
	'Sankarea': ['images/image10.jpg'],
	'Dead Tube': ['images/image11.jpg'],
	'I am a Hero': ['images/image12.jpg'],
	'Nisekoi': ['images/image13.jpg'],
	'Horimiya': ['images/image14.jpg'],
	'Akame ga Kill': ['images/image15.jpg'],
	'Nana to Kaoru': ['images/image16.jpg']


};

//dynamic function to create selects based on the above data
//uses loop to get data from book array
function dynamic(id, div, key) {
	var node = document.createElement("select");
	node.setAttribute("id", id);
	node.setAttribute("class", "form-control");
	node.setAttribute("style", "margin:10px");

	for (var b in book[key]) {
		var opt = document.createElement("option");
		opt.setAttribute("value", book[key][b]);
		var tNode = document.createTextNode(book[key][b]);
		opt.appendChild(tNode);
		node.appendChild(opt);
	}


	//code to remove the child elements, create statment listing all choices and to start from anywhere in the selects
	var onchange = function() {
		if (id === 3) {
			var two = document.getElementById("two");
			var three = document.getElementById("three");
			while (three.firstChild) three.removeChild(three.firstChild);
			while (two.firstChild) two.removeChild(two.firstChild);
			var node = document.createElement("img");
			node.setAttribute("width", '200');
			node.setAttribute("height", "200");
			node.setAttribute("src", book[this.value][0]);
			node.setAttribute("id", "image1");
			document.getElementById("two").appendChild(node);
			var h1Node = document.createElement("h5");
			var selections = 'You have selected Genre: ' + document.getElementById("1").value + ', Published in the Year: ' + document.getElementById("2").value + ', Anime Name: ' + document.getElementById("3").value;
			console.log(selections);
			var texth1Node = document.createTextNode(selections);
			h1Node.setAttribute("id", "note");
			h1Node.appendChild(texth1Node);
			document.getElementById('three').appendChild(h1Node);

			var links = document.getElementById("links");
			while(links.firstChild)links.removeChild(links.firstChild);
			var prevLink = document.createElement("a");
			prevLink.setAttribute("class","btn btn-info");
			prevLink.setAttribute("role","button");
			prevLink.onclick = function() {

				var selectedIndex = document.getElementById("3").selectedIndex;
				selectedIndex = selectedIndex -1 ;
				if( selectedIndex > 0){
					document.getElementById("3").selectedIndex = selectedIndex;
					document.getElementById("3").onchange();
				}
			}
			var nextLink = document.createElement("a");
			nextLink.setAttribute("class", "btn btn-info");
			nextLink.setAttribute("role","button");
			nextLink.onclick = function() {

				var selectedIndex = document.getElementById("3").selectedIndex;
				var length = document.getElementById("3").length;
				selectedIndex = selectedIndex +1 ;
				if(selectedIndex < length) {
					document.getElementById("3").selectedIndex = selectedIndex;
					document.getElementById("3").onchange();
				}				
			}
			var tPrevNode = document.createTextNode("Previous");
			var tNextNode = document.createTextNode("Next");

			prevLink.appendChild(tPrevNode);
			nextLink.appendChild(tNextNode);

			links.appendChild(prevLink);
			links.appendChild(nextLink);

		} else {
			if (document.getElementById("2") && this.id == 1 && document.getElementById("3")) {
				var d = document.getElementById("2");
				var p = document.getElementById("name");
				var el = document.getElementById("3");


				if (document.getElementById("image1")) {
					var pp = document.getElementById("two");
					var p1 = document.getElementById("image1");

					pp.removeChild(p1);
				}

				if (document.getElementById("note")) {
					var px = document.getElementById("three");
					var pz = document.getElementById("note");
					px.removeChild(pz);
				}
				p.removeChild(d);
				p.removeChild(el);

				var links = document.getElementById("links");
				while(links.firstChild)links.removeChild(links.firstChild);


			} else if (document.getElementById("2") && this.id == 1) {
				var d = document.getElementById("2");
				var p = document.getElementById("name");


				if (document.getElementById("image1")) {
					var pp = document.getElementById("two");
					var p1 = document.getElementById("image1");
					pp.removeChild(p1);
				}

				if (document.getElementById("note")) {
					var px = document.getElementById("three");
					var pz = document.getElementById("note");
					px.removeChild(pz);
				}

				var links = document.getElementById("links");
				while(links.firstChild)links.removeChild(links.firstChild);

				p.removeChild(d);
			} else if (document.getElementById("3") && this.id == 2) {
				var d = document.getElementById("3");
				var p = document.getElementById("name");
				if (document.getElementById("image1")) {
					var pp = document.getElementById("two");
					var p1 = document.getElementById("image1");
					pp.removeChild(p1);
				}

				if (document.getElementById("note")) {
					var px = document.getElementById("three");
					var pz = document.getElementById("note");
					px.removeChild(pz);
				}


				p.removeChild(d);

				var links = document.getElementById("links");
				while(links.firstChild)links.removeChild(links.firstChild);
			}

			dynamic(id + 1, div, this.value);
		}
	};
	node.onchange = onchange;



	document.getElementById(div).appendChild(node);
}

dynamic(1, 'name', 'genre');
var x = 1;

//code to do local storage for name and email
var store = document.getElementById("eemail").value;
var storeTwo = document.getElementById("nfirst").value;


// function manual does the local storage and stores name and email
function manual() {
	if (window.localStorage) {

		populateStorage();
		setStyles();
	}
}

function populateStorage() {
	localStorage.setItem('nfirst', document.getElementById('nfirst').value);
	localStorage.setItem('eemail', document.getElementById('eemail').value);

}

function setStyles() {
	var currentname = localStorage.getItem("nfirst");
	var currentemail = localStorage.getItem("eemail");
	document.getElementById("nfirst").value = currentname;
	document.getElementById("eemail").value = currentemail;
}


//code to validate all the fields the form created 
//when submited empty throws error asking to fill the name, email and review
function validateForm() {

	var first = document.getElementById("nfirst").value;
	var second = document.getElementById("eemail").value;
	var third = document.getElementById("message").value;

	if (first === "") {
		alert("Please enter your full name");
		return false;
	}
	if (second === "") {
		alert("Please enter your email address");
		return false;

	}

	if (third === "") {
		alert("Please enter your review");
		return false;

	}

	var pattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!pattern.test(second)){
		var cookie = document.getElementById("cookie1");
		while(cookie.firstChild) cookie.removeChild(cookie.firstChild);

		var h1 = document.createElement("h5");
		var textNode = document.createTextNode("Enter a valid email address. [name]@[example.com]");

		h1.appendChild(textNode);
		cookie.appendChild(h1);
		return false;
	}

	if (first != "" && second != "" && third != "") {
		manual();

		//code to set the name cookie 

		var cookie = document.getElementById("cookie1");
		while(cookie.firstChild) cookie.removeChild(cookie.firstChild);

		var h1 = document.createElement("h4");
		var textNode = document.createTextNode("Thank you, " + (first !== "" ? first : "Anonymous") + " We have recieved your review!! ");

		h1.appendChild(textNode);
		cookie.appendChild(h1);
		SetCookie("user_id", first != "" ? first : "Anonymous");

	}


}