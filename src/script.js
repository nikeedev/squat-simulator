
/** @type {HTMLImageElement} */
var squater = document.getElementById("squater");

var counter = document.getElementById("counter");
var count = 0;


window.onload = () => {
    loadGame();
    squater.style.content = "url(src/squat-up.png)";
    document.title = "Squat Simulator - Squats: " + count;
    counter.innerHTML = "Squats: <br>" + count;
}

squater.onclick = () => {
    squater.style.content = "url(src/squat-down.png)";
    setInterval(() => {squater.style.content = "url(src/squat-up.png)";}, 1000);
    count += 1; 
}


function loadGame() {
	var savedGame = JSON.parse(localStorage.getItem("gameSave"));
	if (localStorage.getItem("gameSave") !== null) {
		if (typeof savedGame.count !== "undefined") {
            count = savedGame.count;
        }   
    }
}

function saveGame() {
	var gameSave = {
		count: count
	};
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}


setInterval(() => {
    saveGame();
    document.title = "Squat Simulator - Squats: " + count;
    counter.innerHTML = "Squats: <br>" + count;
}, 0)