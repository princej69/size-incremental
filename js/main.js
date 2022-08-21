let game = {
    size: 1,
    gain: 1
}

setInterval(() => {
    document.getElementById("size").textContent = (game.size / (Math.pow(1000, (Math.floor(Math.log10(game.size)/3))))).toFixed(2);
    document.getElementById("illion").textContent = getSIprefixes(Math.floor(Math.log10(game.size)/3));
})