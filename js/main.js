let game = {
    size: 1,
    total: 0,
    gain: 1,
    // gain
    persec: 0,
    persec2: 0 //basically increases persec this amount per second.
}

function checkIfSufficientOrNot(selector, req, unoreverse = false) {
    if(!unoreverse) {
        if(req) {
            document.getElementById(selector).style.display = "block"
        }else{
            document.getElementById(selector).style.display = "none"
        }
    }else{
        if(req) {
            document.getElementById(selector).style.display = "none"
        }else{
            document.getElementById(selector).style.display = "block"
        }
    }
}

function checkSelectors() {
    checkIfSufficientOrNot('MSps', game.total >= 100)
    checkIfSufficientOrNot('MSps2', game.persec >= 1000)
}

setInterval(() => {
    document.getElementById("size").textContent = (game.size / (Math.pow(1000, (Math.floor(Math.log10(game.size)/3))))).toFixed(2);
    document.getElementById("illion").textContent = getSIprefixes(Math.floor(Math.log10(game.size)/3));
    game.size += game.persec/60
    game.total += game.persec/60
    game.persec += game.persec2/60
    checkSelectors()
},1000/60)