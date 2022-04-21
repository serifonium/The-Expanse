function saveGame() {
    localStorage.setItem("playerName", player.name)
    localStorage.setItem("playerX", player.x)
    localStorage.setItem("playerY", player.y)
    localStorage.setItem("playerItems", JSON.stringify(player.inventory.items))
} function loadGame() {
    //player.x = Number(localStorage.getItem("playerX"))
    //player.y = Number(localStorage.getItem("playerY"))
    player.name = localStorage.getItem("playerName")
    //player.inventory.items = localStorage.getItem("playerItems")
}