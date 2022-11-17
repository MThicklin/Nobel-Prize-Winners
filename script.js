async function getNPPWinners() {
    let url = 'https://api.nobelprize.org/2.0/laureates?nobelPrizeYear=' + document.getElementById("year").value;
    console.log("url: ", url)
    try {
        let res = await fetch(url);
        let result = await res.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}

async function renderWinners() {
    let winners = await getNPPWinners();
    console.log(winners.laureates)
    winnerCount = winners.laureates.length;
    document.getElementById("display").innerHTML = "In " + document.getElementById("year").value + " there were " + winnerCount +  "winners";
    for (x in winners.laureates) {
        let container = document.createElement("div");
        container.className = "winner";
        container.innerHTML = winners.laureates[x].fullName.en + ' - <a href=' + winners.laureates[x].wikipedia.english + '>Wikipedia</a>';
        document.getElementById("display").appendChild(container);
    }
}