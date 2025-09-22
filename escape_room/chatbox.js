// Diese Funktion wird direkt beim Start der Seite ausgeführt, füllt die erste Nachricht aus,
// setzt die Navigations Buttons auf disabled, lädt die Start Seite ins Display DIV und initalisiert einige Variablen
function codeAddress() {
	window.calState = 0;
	window.conState = 0;
	window.polState = 0;
    	document.getElementById("msg1").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Da bist du ja! Se.. gut. Thorsten wir habib …  großes Problem, unsere Versorgungs Rakete hsrte beim Andocken …  Fehler, hat die Luke verfehlt ud7 unsere Antenne abgebroch…  Wir haben nur noch wenige …  und können niemanden kontaktieren! Zum Glück ist …  alten Kommunikationssatelliten ns der Nähe, so könn9e wir… dpch kontakierrn aber nicht … lange! Das Signal pe? bereits sch8n schwach. Du musst uns helf… , verbinde dich … 8i der Versorgungsrakete und docke …  an. Wir zählen a..  dich! Die Rakete heißt: A… T_6… , wie die Sterne der Zwillinge und … vom Mars. Vergiss den PIN nicht, … das Jahr in… Monde.</p></div>';
	var firstDivContent = document.getElementById('startDIV');
	var secondDivContent = document.getElementById('display');
	secondDivContent.innerHTML = firstDivContent.innerHTML;
	document.getElementById("chatButton").disabled = true;
	document.getElementById("geräteButton").disabled = true;
	document.getElementById("loginButton").disabled = true;
	document.getElementById("ressButton").disabled = true;

}

// Startet den Timer, schaltet den Login frei und zeigt ihn gleich
function startTimer() 
{
	document.getElementById("loginButton").disabled = false;
	document.getElementById("ressButton").disabled = false;
	showLogin();
	const startTime = Date.now();
	let interval = setInterval(function() 
	{
		let elapsedTime = Date.now() - startTime;
		document.getElementById('timer').textContent = (elapsedTime / 1000).toFixed(1);
	}, 100);
}

// Überprüfen des Passworts und der Quadrantenauswahl
function login()
{
	eingabe1 = document.getElementById('zahl1');
	eingabe2 = document.getElementById('zahl2');
	eingabe3 = document.getElementById('zahl3');
	if(eingabe1.value == 1969 && eingabe2.value == 384000 && eingabe3.value == 3475)
	{
		var quadWahl = document.getElementById("quad");
		if (quadWahl.value == "lime")
		{
			alert('Korrekt');
			document.getElementById("chatButton").disabled = false;
			document.getElementById("geräteButton").disabled = false;
			document.getElementById("chatButton").className = "nav-buttons-notif";
		} else {
			alert('Bitte wähle einen Quadranten aus um dich mit diesem zu verbinden');
		}
	}
	else
	{
		alert('Falsches Passwort! Bitte versuche es erneut.');
	}
}

// Lädt die Login Seite ins Display DIV
function showLogin()
{
	var firstDivContent = document.getElementById('login');
	var secondDivContent = document.getElementById('display');
	secondDivContent.innerHTML = firstDivContent.innerHTML;
}

// Lädt die Chat Seite ins Display DIV
function showChat()
{
	var firstDivContent = document.getElementById('chat');
	var secondDivContent = document.getElementById('display');
	secondDivContent.innerHTML = firstDivContent.innerHTML;
}

// Lädt die Gerätepanel Seite ins Display DIV
function showGeräte()
{
	var firstDivContent = document.getElementById('sats');
	var secondDivContent = document.getElementById('display');
	secondDivContent.innerHTML = firstDivContent.innerHTML;
}

// Lädt die Ressourcen Seite ins Display DIV
function showRess()
{
	var firstDivContent = document.getElementById('ress');
	var secondDivContent = document.getElementById('display');
	secondDivContent.innerHTML = firstDivContent.innerHTML;
}

// Die Gerätepanel Seite wird zwischen gespeichert, aus einem dritten DIV wird die Sternkarte in das Display DIV geladen
function saveSats()
{
	if (window.conState === 1) {
		var firstDivContent = document.getElementById('display');
		var secondDivContent = document.getElementById('saveSatsDiv');
		var thirdDivContent = document.getElementById('sternKarte');
		secondDivContent.innerHTML = firstDivContent.innerHTML;
		firstDivContent.innerHTML = thirdDivContent.innerHTML;

	// Falls nicht zuvor richtige PIN eingegeben, Fehlermeldung
	} else {
		alert('Bitte verbinde dich erst mit der PIN, bevor du mit diesem Gerät interagierst!');
	}
}

// Lädt die Gerätepanel Seite zurück ins Display DIV, wenn auf der Sternenkarten der falsche Stern ausgewählt wird, setzt außerdem polState auf 0, da nicht Polarstern
function reloadSats()
{
	var firstDivContent = document.getElementById('display');
	var secondDivContent = document.getElementById('saveSatsDiv');
	firstDivContent.innerHTML = secondDivContent.innerHTML;
	window.polState = 0
}

// Ruft reloadSats, setzt aber mit etwas Verzögerung polSelect auf 1, da nun der Polarstern gefunden wurde
function polFound()
{
	reloadSats();
	setTimeout(function()		
	{
		window.polState = 1
		document.getElementById("polSelect").innerHTML='✅';
	}, (10));;
}

// Setzt conState auf 1 um den nächsten Schritt freizuschalten, außerdem setzt es die zweite Nachricht ein und bringt den Chat Button zum blinken
function connectRocket()
{
	pwort = document.getElementById('passwort');
	if(pwort.value == 1877) {
		window.conState = 1;

		// Der Chat Button muss zunächste die "notif" class entfernt bekommen, damit sie neu hinzugefügt werden kann um die Animation neu zu starten
		document.getElementById("chatButton").className = "nav-buttons";
		document.getElementById("satName").className = "sat-name-connect";
		var firstDivContent = document.getElementById('display');
		var secondDivContent = document.getElementById('sats');
		secondDivContent.innerHTML = firstDivContent.innerHTML;
		setTimeout(function() 
		{
			document.getElementById("chatButton").className = "nav-buttons-notif";
    			document.getElementById("msg2").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Die Rakete bewget…  Jet9t …  noch einstelcrh, dass sie eir4n neuen Andockversuch starkq1. Die Rak2gp orientiert …  Sternenbildern. Du musst 3 verschiedmnb Sternenbilder angeben und …  Polastern makieren düqit … Den Polarstern makierst …  Ster6tgnäarte, klicke auf den blauen Knopf …  Dann musst ix ein Sternenbild au8 unserem Quadranten nehmen … einyi Nachbarquadranten. Das Dritte muss aos einem…  sein, dass kein Nachba… Außerdem …  erfüllt sayn:<br> - Genau 1 … mehr alz 8 Sternen<br> - Keim Sternzeichen …  Tier benannt ist<br> - Mindestens 1 Sternzeinfow mit weniger als 4 …<br> - Maximal 14 Sterne … Gesamten<br> … Glück!</p></div>';
		}, (1000));;
	} else {
		alert('Falsche PIN!');
	}
}

// Fehlermeldung wenn man mit einem der Connect Buttons auf dem Gerätepanel interagiert, welche keine Funktion brauchen im Rahmen des Escape Rooms
function connectRocketWrong()
{
	alert('Falsche PIN!');
}

// Fehlermeldung wenn man mit einem der Buttons interagiert, bevor man die PIN eingegeben hat bzw. im Falle der Buttons ohne benötigte Funktion wird gar nicht erst die PIN gecheckt, es kommt direkt die Fehlermeldung
function preConnect()
{
	alert('Bitte verbinde dich erst mit der PIN, bevor du mit diesem Gerät interagierst!');
}


// Funktion des "Launch" Buttons
function startRocket()
{
	var navQ = document.getElementById('nav_quad');
	var nahQ = document.getElementById('nah_quad');
	var ferQ = document.getElementById('fern_quad');

	// Kontrolle ob die PIN korrekt eingegeben wurde, sowie auf "Connect" geklickt wurde, wenn nein, Fehlermeldung
	if (window.conState === 0) {
		alert('Bitte verbinde dich erst mit der PIN, bevor du mit diesem Gerät interagierst!');

	// Kontrolle ob der Polarstern ausgewählt wurde, wenn nein, Fehlermeldung
	} else if (window.polState === 0) {
		alert('Bitte wähle den Polarstern aus, damit das Gerät den Standort bestimmen kann!');

	// Kontrolle ob die richtigen Quadranten ausgewählt sind, wenn nein, Fehlermeldung
	} else if (window.polState === 1 && (navQ.value != "sichel" || (nahQ.value != "heck" || nahQ.value != "kiel") || ferQ.value != "pumpe")) {
		alert('Die angegebenen Quadranten sind nicht ausreichend zur Orientierung!');

	// Wenn alles korrekt, setzte calState auf 5 für nächsten Schritt, Chat Button blinkt, nächste Nachricht
	} else {
		window.calState = 5
		document.getElementById("chatButton").className = "nav-buttons";
		setTimeout(function() 
		{
			document.getElementById("chatButton").className = "nav-buttons-notif";
    			document.getElementById("msg3").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Sie bewegt si12! Die Versorgungsralete … Ich denke sre dockt ln … Minutcx bei uns am. Währepö du … gesichert hast, habtz wir … für einvn Außenbordeinsatz vopbereibtt, um nrü Antenne zu repariebfe. Bevor … wissen wiy die Kabel za verbinden … Im Handbawr … Gedicht …  Ohne Sternenkarte mit Quadranten … nicht lösen, pl musst uns … Lösungsbegriff …</p></div>';
		}, (1000));;
	}

}

// Wer den Quellcode liest um zu schummeln ist ein nerdiger Spielverderber ☝️🤓

// Funktion zum Verwalten der Chatnachrichten, welche der Nutzer schreibt und die jewiligen Antworten
// Erklärung beispielhaft am ersten Fall (calState = 5), bis auf ein if-Statement (extra erwähnt) jeweils identsich
function sendMsg()
{

	// Fehlermeldung, wenn man auf den Sendenknopf drückt, bevor er verwendet werden soll
	if (window.calState === 0) {
		alert('Fehler 33x404:								Keine Verbindung möglich');
		document.getElementById("textField").value='';
	}

	// calState = 5, Nutzer muss "Oriosn Gürtel" eingeben als Antwort auf das Rätsel mit den Kabeln
	if (window.calState === 5) {
		const container = document.getElementById('textField');

		// Wenn richtige Lösung angegeben, Textfeld löschen und nächste Nachricht in das passende DIV kopieren
		if (container.value.toLowerCase().includes('orions gürtel')) {
			document.getElementById("msg3b").innerHTML='<div class="containerR"><img src="./pfp2.jpg" alt="Avatar"><p>Orions Gürtel</p></div>';
			document.getElementById("textField").value='';
			setTimeout(function()		
			{

				// calState inkrementieren, den Inhalt des Display DIV ins Chat DIV kopieren, um die neue Nachricht permanent zu speichern, statt nur temporär im Display DIV
    				document.getElementById("msg4").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Die Antenne ist repariert! Jetzt haben wir endlich ein stabiles Signal, aber momentan können wir den Kanal nicht wechseln, da die Antenne erst noch kallibriert werden muss. Ich gebe dir jetzt immer ein Datum, eine Uhrzeit und eine Himmelsrichtung. Du musst mir dann sagen welches Sternenbild dort zu sehen ist.</p></div>';
				window.calState = 1
				var firstDivContent = document.getElementById('display');
				var secondDivContent = document.getElementById('chat');
				secondDivContent.innerHTML = firstDivContent.innerHTML;
				setTimeout(function()		
				{

					// Nochmals eine neue Nachricht ins passende DIV, Display wird in Chat kopiert um die Nachricht permanent zu haben
    					// Diese extra Nachricht existiert nur bei diesem Schritt, in den späteren wurde alles in einem gelöst
					document.getElementById("msg5").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>10.08 2 Uhr, Norden</p></div>';
					var firstDivContent = document.getElementById('display');
					var secondDivContent = document.getElementById('chat');
					secondDivContent.innerHTML = firstDivContent.innerHTML;
				}, (5000));;
			}, (1000));;
		
		// Fehlermeldung, wenn die Nachricht nicht die gesuchte Antwort enthält
		} else {
			
			// Textfeld wird geleert, sowie das DIV für die Nachricht, damit auch bei einem zweiten falschen Lösungsversuch die Nachricht neu erscheint
			document.getElementById("textField").value='';
			document.getElementById("msg3b").innerHTML='';
			setTimeout(function()		
			{
				document.getElementById("msg3b").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Die Kabel ... falsch, ... kein besseres Signal ... nochmal</p></div>';
			}, (1000));;
		}
	}

	// Großer Wagen bzw Großer Bär bzw Große Bärin hat insgesamt 6 korrekte Antworten, da je nach Sternkarte das
	// gesuchte Sternbild anders heißt bzw geschrieben ist
	if (window.calState === 1) {
		const container = document.getElementById('textField');
		if (container.value.toLowerCase().includes('großer wagen')) {
			document.getElementById("msg5b").innerHTML='<div class="containerR"><img src="./pfp2.jpg" alt="Avatar"><p>Großer Wagen</p></div>';
			document.getElementById("textField").value='';
			setTimeout(function()		
			{
    				document.getElementById("msg6").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Okay das stimmt, als nächstes brauchen wir:<br> 10.09 6 Uhr, Süden</p></div>';
				window.calState = 2
				var firstDivContent = document.getElementById('display');
				var secondDivContent = document.getElementById('chat');
				secondDivContent.innerHTML = firstDivContent.innerHTML;
			}, (1000));;
		} else if (container.value.toLowerCase().includes('grosser wagen')) {
			document.getElementById("msg5b").innerHTML='<div class="containerR"><img src="./pfp2.jpg" alt="Avatar"><p>Grosser Wagen</p></div>';
			document.getElementById("textField").value='';
			setTimeout(function()		
			{
    				document.getElementById("msg6").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Okay das stimmt, als nächstes brauchen wir:<br> 10.09 6 Uhr, Süden</p></div>';
				window.calState = 2
				var firstDivContent = document.getElementById('display');
				var secondDivContent = document.getElementById('chat');
				secondDivContent.innerHTML = firstDivContent.innerHTML;
			}, (1000));;
		} else if (container.value.toLowerCase().includes('grosser bär')) {
			document.getElementById("msg5b").innerHTML='<div class="containerR"><img src="./pfp2.jpg" alt="Avatar"><p>Grosser Bär</p></div>';
			document.getElementById("textField").value='';
			setTimeout(function()		
			{
    				document.getElementById("msg6").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Okay das stimmt, als nächstes brauchen wir:<br> 10.09 6 Uhr, Süden</p></div>';
				window.calState = 2
				var firstDivContent = document.getElementById('display');
				var secondDivContent = document.getElementById('chat');
				secondDivContent.innerHTML = firstDivContent.innerHTML;
			}, (1000));;
		} else if (container.value.toLowerCase().includes('großer bär')) {
			document.getElementById("msg5b").innerHTML='<div class="containerR"><img src="./pfp2.jpg" alt="Avatar"><p>Großer Bär</p></div>';
			document.getElementById("textField").value='';
			setTimeout(function()		
			{
    				document.getElementById("msg6").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Okay das stimmt, als nächstes brauchen wir:<br> 10.09 6 Uhr, Süden</p></div>';
				window.calState = 2
				var firstDivContent = document.getElementById('display');
				var secondDivContent = document.getElementById('chat');
				secondDivContent.innerHTML = firstDivContent.innerHTML;
			}, (1000));;
		} else if (container.value.toLowerCase().includes('grosse bärin')) {
			document.getElementById("msg5b").innerHTML='<div class="containerR"><img src="./pfp2.jpg" alt="Avatar"><p>Grosse Bärin</p></div>';
			document.getElementById("textField").value='';
			setTimeout(function()		
			{
    				document.getElementById("msg6").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Okay das stimmt, als nächstes brauchen wir:<br> 10.09 6 Uhr, Süden</p></div>';
				window.calState = 2
				var firstDivContent = document.getElementById('display');
				var secondDivContent = document.getElementById('chat');
				secondDivContent.innerHTML = firstDivContent.innerHTML;
			}, (1000));;
		} else if (container.value.toLowerCase().includes('große bärin')) {
			document.getElementById("msg5b").innerHTML='<div class="containerR"><img src="./pfp2.jpg" alt="Avatar"><p>Große Bärin</p></div>';
			document.getElementById("textField").value='';
			setTimeout(function()		
			{
    				document.getElementById("msg6").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Okay das stimmt, als nächstes brauchen wir:<br> 10.09 6 Uhr, Süden</p></div>';
				window.calState = 2
				var firstDivContent = document.getElementById('display');
				var secondDivContent = document.getElementById('chat');
				secondDivContent.innerHTML = firstDivContent.innerHTML;
			}, (1000));;
		} else {
			document.getElementById("textField").value='';
			document.getElementById("msg5b").innerHTML='';
			setTimeout(function()		
			{
				document.getElementById("msg5b").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Nein, da stimmt etwas nicht. Probiere es bitte nochmal.</p></div>';
			}, (1000));;
		}
	}
	if (window.calState === 2) {
		const container = document.getElementById('textField');
		if (container.value.toLowerCase().includes('hase')) {
			document.getElementById("msg6b").innerHTML='<div class="containerR"><img src="./pfp2.jpg" alt="Avatar"><p>Hase</p></div>';
			document.getElementById("textField").value='';
			setTimeout(function()		
			{
    				document.getElementById("msg7").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Das passt.<br> 15.11 22 Uhr, Osten</p></div>';
				window.calState = 3
				var firstDivContent = document.getElementById('display');
				var secondDivContent = document.getElementById('chat');
				secondDivContent.innerHTML = firstDivContent.innerHTML;
			}, (1000));;
		} else {
			document.getElementById("textField").value='';
			document.getElementById("msg6b").innerHTML='';
			setTimeout(function()		
			{
				document.getElementById("msg6b").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Das System nimmt diese Antwort nicht an. Bitte probiere es nochmal.</p></div>';
			}, (1000));;
		}
	}
	if (window.calState === 3) {
		const container = document.getElementById('textField');
		if (container.value.toLowerCase().includes('kleiner hund')) {
			document.getElementById("msg7b").innerHTML='<div class="containerR"><img src="./pfp2.jpg" alt="Avatar"><p>Kleiner Hund</p></div>';
			document.getElementById("textField").value='';
			setTimeout(function()		
			{
    				document.getElementById("msg8").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>System ist zufrieden. Jetzt noch als letztes:<br> 22.07 21 Uhr, Westen</p></div>';
				window.calState = 4
				var firstDivContent = document.getElementById('display');
				var secondDivContent = document.getElementById('chat');
				secondDivContent.innerHTML = firstDivContent.innerHTML;
			}, (1000));;
		} else {
			document.getElementById("textField").value='';
			document.getElementById("msg7b").innerHTML='';
			setTimeout(function()		
			{
				document.getElementById("msg7b").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Nein, da stimmt etwas nicht. Probiere es bitte nochmal.</p></div>';
			}, (1000));;
			
		}
	}
	if (window.calState === 4) {
		const container = document.getElementById('textField');
		if (container.value.toLowerCase().includes('löwe')) {
			document.getElementById("msg8b").innerHTML='<div class="containerR"><img src="./pfp2.jpg" alt="Avatar"><p>Löwe</p></div>';
			document.getElementById("textField").value='';
			setTimeout(function()		
			{
    				document.getElementById("msg9").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Wir haben grünes Licht. Wortwörtlich, die Status Lampe ist gerade auf Grün gewechselt. Damit hast du uns gerettet Thorsten! Ich kann dir gar nicht genug danken!</p><input type="button" value="Escape Room beenden" class="end-button" onclick="endTimer();"></div>';
				var firstDivContent = document.getElementById('display');
				var secondDivContent = document.getElementById('chat');
				secondDivContent.innerHTML = firstDivContent.innerHTML;
			}, (1000));;
		} else {
			document.getElementById("textField").value='';
			document.getElementById("msg8b").innerHTML='';
			setTimeout(function()		
			{
				document.getElementById("msg8b").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Klappt nicht.</p></div>';
			}, (1000));;
			
		}
	}
}

// Öffnet den Win Screen, die Navigations Buttons werden disabled und der Timer wird in die Anzeige kopiert
function endTimer() 
{
	var seconds = document.getElementById('timer').value;
	var firstDivContent = document.getElementById('timeOut');
	firstDivContent.innerHTML = new Date(seconds * 1000).toISOString().substring(14, 19)
	var firstDivContent = document.getElementById('winDIV');
	var secondDivContent = document.getElementById('display');
	secondDivContent.innerHTML = firstDivContent.innerHTML;
	document.getElementById("chatButton").disabled = true;
	document.getElementById("geräteButton").disabled = true;
	document.getElementById("loginButton").disabled = true;
	document.getElementById("ressButton").disabled = true;
}

// Zeigt die Mondfakten
function mondFakten()
{
	var firstDivContent = document.getElementById('mondF');
	var secondDivContent = document.getElementById('ressShow');
	secondDivContent.innerHTML = firstDivContent.innerHTML;
}

// Zeigt die Marsfakten
function marsFakten()
{
	var firstDivContent = document.getElementById('marsF');
	var secondDivContent = document.getElementById('ressShow');
	secondDivContent.innerHTML = firstDivContent.innerHTML;
}

// Zeigt die Quadrantenkarte
function quandMap()
{
	document.getElementById("ressShow").innerHTML='<img src="./quadranten.png" alt="Quadranten Karte">';
}

// Zeigt die Sternenbilder mit Sternnamen
function sternBilder()
{
	document.getElementById("ressShow").innerHTML='<img src="./sternbild (1).png" alt="Sternenbild"><br><br><img src="./sternbild (2).png" alt="Sternenbild"><br><br><img src="./sternbild (3).png" alt="Sternenbild"><br><br><img src="./sternbild (4).png" alt="Sternenbild"><br><br><img src="./sternbild (5).png" alt="Sternenbild"><br><br><img src="./sternbild (6).png" alt="Sternenbild"><br><br><img src="./sternbild (7).png" alt="Sternenbild">';
}

// Zeigt das Kabelrätsel mit dem Gedicht
function wiresPoem()
{
	var firstDivContent = document.getElementById('wires');
	var secondDivContent = document.getElementById('ressShow');
	secondDivContent.innerHTML = firstDivContent.innerHTML;
}
window.onload = codeAddress;