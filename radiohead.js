function songlist(i) {
	//var fileDisplayArea = document.getElementById('fileDisplayArea');
	var album = [
		"Pick an Album;|;|;|;|;|;|;|;|;|;|;|;|;|;|;",
		"Pablo Honey;22 February 1993|You;3:29|Creep;3:56|How Do You?;2:12|Stop Whispering;5:26|Thinking About You;2:41|Anyone Can Play Guitar;3:38|Ripcord;3:10|Vegetable;3:13|Prove Yourself;2:25|I Can't;4:13|Lurgee;3:08|Blow Out;4:40",
		"The Bends;13 March 1995|Planet Telex;4:19|The Bends;4:06|High and Dry;4:17|Fake Plastic Trees;4:50|Bones;3:09|(Nice Dream);3:53|Just;3:54|My Iron Lung;4:36|Bullet Proof..I Wish I Was;3:28|Black Star;4:07|Sulk;3:42|Street Spirit (Fade Out);4:12",
		"OK Computer;16 June 1997|Airbag;4:44|Paranoid Android;6:23|Subterranean Homesick Alien;4:27|Exit Music (For a Film);4:24|Let Down;4:59|Karma Police;4:21|Fitter Happier;1:57|Electioneering;3:50|Climbing Up the Walls;4:45|No Surprises;3:48|Lucky;4:19|The Tourist;5:24",
		"Kid A;2 October 2000|Everything in Its Right Place;4:11|Kid A;4:44|The National Anthem;5:51|How to Disappear Completely;5:56|Treefingers;3:42|Optimistic;5:15|In Limbo;3:31|Idioteque;5:09|Morning Bell;4:35|Motion Picture Soundtrack;7:00",
		"Amnesiac;4 June 2001|Packt Like Sardines in a Crushd Tin Box;4:00|Pyramid Song;4:49|Pulk/Pull Revolving Doors;4:07|You and Whose Army?;3:11|I Might Be Wrong;4:54|Knives Out;4:15|Morning Bell/Amnesiac;3:14|Dollars and Cents;4:52|Hunting Bears;2:01|Like Spinning Plates;3:57|Life in a Glasshouse;4:34",
		"Hail to the Thief;9 June 2003|2 + 2 = 5;3:19|Sit down. Stand up.;4:19|Sail to the Moon;4:18|Backdrifts;5:22|Go to Sleep;3:21|Where I End and You Begin;4:29|We suck Young Blood;4:56|The Gloaming;3:32|There there.;5:25|I Will.;1:59|A Punchup at a Wedding;4:57|Myxomatosis;3:52|Scatterbrain;3:21|A Wolf at the Door;3:21",
		"In Rainbows;10 October 2007|15 Step;3:58|Bodysnatchers;4:02|Nude;4:15|Weird Fishes/Arpeggi;5:18|All I Need;3:49|Faust Arp;2:10|Reckoner;4:50|House of Cards;5:28|Jigsaw Falling into Place;4:09|Videotape;4:40",
		"The King of Limbs;18 February 2011|Bloom;5:15|Morning Mr Magpie;4:41|Little by Little;4:27|Feral;3:13|Lotus Flower;5:01|Codex;4:47|Give Up the Ghost;4:50|Separator;5:20",
		"A Moon Shaped Pool;8 May 2016|Burn the Witch;3:40|Daydreaming;6:24|Decks Dark;4:41|Desert Island Disk;3:44|Ful Stop;6:07|Glass Eyes;2:52|Identikit;4:26|The Numbers;5:45|Present Tense;5:06|Tinker Tailor Soldier Sailor Rich Man Poor Man Beggar Man Thief;5:03|True Love Waits;4:43"
	];
	var lines = album[i].split("|");
	var snip = lines[0].split(";");
	var htmlList = "<div class=\"trackHeaderLeft\">" + snip[0] + "</div><div class=\"trackHeaderRight\">" + snip[1] + "</div>\n";
	for (var l = 1; l < lines.length; l++) {
		snip = lines[l].split(";");
		if (isOdd(l) === 1) {
			htmlList += "<div class=\"trackItemOddLeft\">";
			if (i > 0) {
				htmlList += "<button class=\"audioButton\" onclick=\"javascript:loadAudio(" + i + ", " + l + ");\"> play </button>";
			}
			htmlList += "</div><div class=\"trackItemOddMiddle\">";
			if (i > 0) {
				htmlList += "<button class=\"trackButton\" onclick=\"javascript:loadLyrics(" + i + ", " + l + ");\">" + snip[0] + "</button>";
			}
			htmlList += "</div><div class=\"trackItemOddRight\">" + snip[1] + "</div>\n";
		} else {
			htmlList += "<div class=\"trackItemEvenLeft\">";
			if (i > 0) {
				htmlList += "<button class=\"audioButton\" onclick=\"javascript:loadAudio(" + i + ", " + l + ");\"> play </button>";
			}
			htmlList += "</div><div class=\"trackItemEvenMiddle\">";
			if (i > 0) {
				htmlList += "<button class=\"trackButton\" onclick=\"javascript:loadLyrics(" + i + ", " + l + ");\">" + snip[0] + "</button>";
			}
			htmlList += "</div><div class=\"trackItemEvenRight\">" + snip[1] + "</div>\n";
		}
	}
	for (var x = 1; x < 10; x++) {
		if (x === i) {
			//document.getElementById('album' + x).style.border = "2px solid rgb(220, 130, 160)";
			document.getElementById('album' + x).style.boxShadow = "1px 1px 2px 1px rgba(255, 130, 150, 1.000)";
			document.getElementById('album' + x).style.webkitBoxShadow = "1px 1px 2px 1px rgba(255, 130, 150, 1.000)";
			document.getElementById('album' + x).style.mozBoxShadow = "1px 1px 2px 1px rgba(255, 130, 150, 1.000)";
			document.getElementById('album' + x).style.opacity = 1.000;
		} else {
			if (document.getElementById('album' + x).style.boxShadow != "1px 1px 2px 1px rgba(135, 130, 150, 1.000)") {
				document.getElementById('album' + x).style.boxShadow = "1px 1px 2px 1px rgba(135, 130, 150, 1.000)";
			}
			if (document.getElementById('album' + x).style.webkitBoxShadow != "1px 1px 2px 1px rgba(135, 130, 150, 1.000)") {
				document.getElementById('album' + x).style.webkitBoxShadow = "1px 1px 2px 1px rgba(135, 130, 150, 1.000)";
			}
			if (document.getElementById('album' + x).style.mozBoxShadow != "1px 1px 2px 1px rgba(135, 130, 150, 1.000)") {
				document.getElementById('album' + x).style.mozBoxShadow = "1px 1px 2px 1px rgba(135, 130, 150, 1.000)";
			}
			document.getElementById('album' + x).style.opacity = 0.875;
		}
	}
	document.getElementById('albumcover').innerHTML = "<img src=\"./albums/" + i + ".jpg\">";
	document.getElementById('songlist').innerHTML = htmlList;
}

function clearlist(i) {
	document.getElementById('songlist').innerHTML = "<div style=\"width: 100%; height: 100%;\" onclick=\"javascript:songlist(" + i + ");\"></div>";
}

function loadAudio(i, j) {
	var ajs = document.getElementById('ajs');
    ajs.src = "./mp3/" + i + "/" + j + ".mp3";
    ajs.load[0];
	//var ajs_wrapper = ajs.parentElement;
	//ajs.autoplay = "true";
}

function loadLyrics(i, j) {
	document.getElementById('songlyrics').src = "./lyrics/" + i + "/" + j + ".html";
}

function isOdd(n) { return n % 2;}