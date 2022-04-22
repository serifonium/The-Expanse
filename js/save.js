function saveGame() {
    localStorage.setItem("playerName", player.name)
    localStorage.setItem("playerX", player.x)
    localStorage.setItem("playerY", player.y)
    localStorage.setItem("playerItems", JSON.stringify(player.inventory.items))
} function loadGame(file) {
    //player.x = Number(localStorage.getItem("playerX"))
    //player.y = Number(localStorage.getItem("playerY"))
    //player.name = localStorage.getItem("playerName")
    //player.inventory.items = localStorage.getItem("playerItems")
}

function loadFile0() {
    if(localStorage.getItem("save0") !== null) {
        loadGame(0)
    } else {
        
    }
    document.getElementById("loading").hidden = true
}
function loadFile1() {
    if(localStorage.getItem("save1") !== null) {
        loadGame(2)
    } else {
        
    }
    document.getElementById("loading").hidden = true
}
function loadFile2() {
    if(localStorage.getItem("save2") !== null) {
        loadGame(2)
    } else {
        
    }
    document.getElementById("loading").hidden = true
}