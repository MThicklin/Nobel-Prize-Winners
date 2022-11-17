async function testWinners() {
    let url = 'https://api.nobelprize.org/2.0/laureates?nobelPrizeYear=' + document.getElementById("year").value;
    console.log("url: ", url)
    let res = await fetch(url);
    let result = await res.json();
    winnerCount = result.laureates.length;
    document.getElementById("display").innerHTML = "In " + document.getElementById("year").value + " there were " + winnerCount + " winners.";
    for (x in result.laureates) {
        let container = document.createElement("div");
        container.className = "winner";
        for (y in result.laureates[x].nobelPrizes) {
            container.innerHTML = result.laureates[x].fullName.en + ' - <a href=' + result.laureates[x].wikipedia.english + '>Wikipedia</a>';
        document.getElementById("testDisplay").appendChild(container);
        }
    }
}