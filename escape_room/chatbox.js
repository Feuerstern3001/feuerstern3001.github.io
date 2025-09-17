function codeAddress() 
{
	setTimeout(function() 
	{
    		document.getElementById("msg1").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Da bist du ja! Se.. gut. Thorsten wir habib …  großes Problem, unsere Versorgungs Rakete hsrte beim Andocken …  Fehler, hat die Luke verfehlt ud7 unsere Antenne abgebroch…  Wir haben nur noch wenige …  und können niemanden kontaktieren! Zum Glück ist …  alten Kommunikationssatelliten ns der Nähe, so könn9e wir… dpch kontakierrn aber nicht … lange! Das Signal pe? bereits sch8n schwach. Du musst uns helf… , verbinde dich … 8i der Versorgungsrakete und docke …  an. Wir zählen a..  dich! Die Rakete heißt: A… T_6… , wie die Sterne der Zwillinge und … vom Mars. Vergiss den PIN nicht, … das Jahr in… Monde.</p></div>';
		showLogin();
		document.getElementById("chatButton").disabled = true;
		document.getElementById("geräteButton").disabled = true;
	}, (1));;
}

function adminLogin()
{
			document.getElementById("chatButton").disabled = false;
			document.getElementById("geräteButton").disabled = false;
}

function login()
{
	eingabe1 = document.getElementById('zahl1');
	eingabe2 = document.getElementById('zahl2');
	eingabe3 = document.getElementById('zahl3');
	eingabe4 = document.getElementById('zahl4');
	eingabe5 = document.getElementById('zahl5');
	eingabe6 = document.getElementById('zahl6');
	eingabe7 = document.getElementById('zahl7');
	eingabe8 = document.getElementById('zahl8');
	eingabe9 = document.getElementById('zahl9');
	eingabe10 = document.getElementById('zahl10');
	eingabe11 = document.getElementById('zahl11');
	eingabe12 = document.getElementById('zahl12');
	eingabe13 = document.getElementById('zahl13');
	eingabe14 = document.getElementById('zahl14');
	if(eingabe1.value == 1 && eingabe2.value == 9 && eingabe3.value == 6 && eingabe4.value == 9 &&
	   eingabe5.value == 3 && eingabe6.value == 8 && eingabe7.value == 4 && eingabe8.value == 0 &&
	   eingabe9.value == 0 && eingabe10.value == 0 && eingabe11.value == 3 && eingabe12.value == 7 &&
	   eingabe13.value == 0 && eingabe14.value == 0)
	{
		var quadWahl = document.getElementById("quad");
		if (quadWahl.value == "lime")
		{
			alert('Korrekt');
			document.getElementById("chatButton").disabled = false;
			document.getElementById("geräteButton").disabled = false;
		} else {
			alert('Bitte wähle einen Quadranten aus um dich mit diesem zu verbinden');
		}
	}
	else
	{
		alert('Falsches Passwort! Bitte versuche es erneut.');
	}
}

function connectRocket()
{
	pwort = document.getElementById('passwort');
	if(pwort.value == 1877) {
		window.conState = 1;
		setTimeout(function() 
		{
    			document.getElementById("msg2").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Die Rakete bewget…  Jet9t …  noch einstelcrh, dass sie eir4n neuen Andockversuch starkq1. Die Rak2gp orientiert …  Sternenbildern. Du musst 3 verschiedmnb Sternenbilder angeben und …  Polastern makieren düqit … Den Polarstern makierst …  Ster6tgnäarte, klicke auf den blauen Knopf …  Dann musst ix ein Sternenbild au8 unserem Quadranten nehmen … einyi Nachbarquadranten. Das Dritte muss aos einem…  sein, dass kein Nachba…  und es darf maximal ein Sternzeichen pro Quadrant…  Außerdem …  erfüllt sayn:<br> - Genau 1 … mehr alz 8 Sternen<br> - Keim Sternzeichen …  Tier benannt ist<br> - Mindestens 1 Sternzeinfow mit weniger als 4 …<br> - Maximal 14 Sterne … Gesamten<br> … Glück!</p></div>';
		}, (1000));;
	} else {
		alert('Falsche PIN!');
	}
}

function connectRocketWrong()
{
	alert('Falsche PIN!');
}

function preConnect()
{
	alert('Bitte verbinde dich erst mit der PIN, bevor du mit diesem Gerät interagierst!');
}

function startRocket()
{
	var navQ = document.getElementById('nav_quad');
	var nahQ = document.getElementById('nah_quad');
	var ferQ = document.getElementById('fern_quad');
	if (window.conState === 0) {
		alert('Bitte verbinde dich erst mit der PIN, bevor du mit diesem Gerät interagierst!');
	} else if (window.polState === 0) {
		alert('Bitte wähle den Polarstern aus, damit das Gerät den Standort bestimmen kann!');
	} else if (window.polState === 1 && (navQ.value != "sichel" || nahQ.value != "heck" || ferQ.value != "pumpe")) {
		alert('Die angegebenen Quadranten sind nicht ausreichend zur Orientierung!');
	} else {
		window.calState = 5
		setTimeout(function() 
		{
    			document.getElementById("msg3").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Sie bewegt si12! Die Versorgungsralete … Ich denke sre dockt ln … Minutcx bei uns am. Währepö du … gesichert hast, habtz wir … für einvn Außenbordeinsatz vopbereibtt, um nrü Antenne zu repariebfe. Bevor … wissen wiy die Kabel za verbinden … Im Handbawr … Gedicht …  Ohne Sternenkarte mit Quadranten … nicht lösen, pl musst uns … Lösungsbegriff …</p></div>';
		}, (1000));;
	}

}

function saveSats()
{
	if (window.conState === 1) {
		var firstDivContent = document.getElementById('display');
		var secondDivContent = document.getElementById('saveSatsDiv');
		var thirdDivContent = document.getElementById('sternKarte');
		secondDivContent.innerHTML = firstDivContent.innerHTML;
		firstDivContent.innerHTML = thirdDivContent.innerHTML;
	} else {
		alert('Bitte verbinde dich erst mit der PIN, bevor du mit diesem Gerät interagierst!');
	}
}

function showLogin()
{
	var firstDivContent = document.getElementById('login');
	var secondDivContent = document.getElementById('display');
	secondDivContent.innerHTML = firstDivContent.innerHTML;
}

function showChat()
{
	var firstDivContent = document.getElementById('chat');
	var secondDivContent = document.getElementById('display');
	secondDivContent.innerHTML = firstDivContent.innerHTML;
}

function showGeräte()
{
	var firstDivContent = document.getElementById('sats');
	var secondDivContent = document.getElementById('display');
	secondDivContent.innerHTML = firstDivContent.innerHTML;
}

function reloadSats()
{
	var firstDivContent = document.getElementById('display');
	var secondDivContent = document.getElementById('saveSatsDiv');
	firstDivContent.innerHTML = secondDivContent.innerHTML;
	window.polState = 0
}

function polFound()
{
	reloadSats();
	setTimeout(function()		
	{
		window.polState = 1
		document.getElementById("polSelect").value='✅';
	}, (10));;
}

function sendMsg()
{
	if (window.calState === 0) {
		alert('Fehler 33x404:								Keine Verbindung möglich');
		document.getElementById("textField").value='';
	}
	if (window.calState === 5) {
		const container = document.getElementById('textField');
		if (container.value.includes('Orions Gürtel')) {
			document.getElementById("msg3b").innerHTML='<div class="container"><img src="./pfp2.jpg" alt="Avatar"><p>Orions Gürtel</p></div>';
			document.getElementById("textField").value='';
			setTimeout(function()		
			{
    				document.getElementById("msg4").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Die Antenne ist repariert! Jetzt haben wir endlich ein stabiles Signal, aber momentan können wir den Kanal nicht wechseln, da die Antenne erst noch kallibriert werden muss. Ich gebe dir jetzt immer ein Datum, eine Uhrzeit und eine Himmelsrichtung. Du musst mir dann sagen welches Sternenbild dort zu sehen ist.</p></div>';
				window.calState = 1
				var firstDivContent = document.getElementById('display');
				var secondDivContent = document.getElementById('chat');
				secondDivContent.innerHTML = firstDivContent.innerHTML;
				setTimeout(function()		
				{
    					document.getElementById("msg5").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>10.08 2 Uhr, Norden</p></div>';
					var firstDivContent = document.getElementById('display');
					var secondDivContent = document.getElementById('chat');
					secondDivContent.innerHTML = firstDivContent.innerHTML;
				}, (5000));;
			}, (1000));;
		} else {
			document.getElementById("textField").value='';
			document.getElementById("msg3b").innerHTML='';
			setTimeout(function()		
			{
				document.getElementById("msg3b").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Die Kabel ... falsch, ... kein besseres Signal ... nochmal</p></div>';
			}, (1000));;
		}
	}
	if (window.calState === 1) {
		const container = document.getElementById('textField');
		if (container.value.includes('Großer Wagen')) {
			document.getElementById("msg5b").innerHTML='<div class="container"><img src="./pfp2.jpg" alt="Avatar"><p>Großer Wagen</p></div>';
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
		if (container.value.includes('Hase')) {
			document.getElementById("msg6b").innerHTML='<div class="container"><img src="./pfp2.jpg" alt="Avatar"><p>Hase</p></div>';
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
		if (container.value.includes('Kleiner Hund')) {
			document.getElementById("msg7b").innerHTML='<div class="container"><img src="./pfp2.jpg" alt="Avatar"><p>Kleiner Hund</p></div>';
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
		if (container.value.includes('Löwe')) {
			document.getElementById("msg8b").innerHTML='<div class="container"><img src="./pfp2.jpg" alt="Avatar"><p>Löwe</p></div>';
			document.getElementById("textField").value='';
			setTimeout(function()		
			{
    				document.getElementById("msg9").innerHTML='<div class="container"><img src="./pfp.jpg" alt="Avatar"><p>Wir haben grünes Licht. Wortwörtlich, die Status Lampe ist gerade auf Grün gewechselt. Damit hast du uns gerettet Thorsten! Ich kann dir gar nicht genug danken!</p></div>';
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

window.onload = codeAddress;
window.calState = 0;
window.conState = 0;
window.polState = 0;