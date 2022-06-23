function dados(){
    var dado = document.getElementById("dado1")
    dado.src = Math.floor((Math.random() * 6)+1) + ".png"
    dado = document.getElementById("dado2")
    dado.src = Math.floor((Math.random() * 6)+1) + ".png"
    dado = document.getElementById("dado3")
    dado.src = Math.floor((Math.random() * 6)+1) + ".png"
    dado = document.getElementById("dado4")
    dado.src = Math.floor((Math.random() * 6)+1) + ".png"
    dado = document.getElementById("dado5")
    dado.src = Math.floor((Math.random() * 6)+1) + ".png"
}