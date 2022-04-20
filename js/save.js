function saveGame() {
    localStorage.setItem("player", JSON.stringify(player.toSerializable()))
}