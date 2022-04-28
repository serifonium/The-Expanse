var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.textAlign = "center";



function render() {
    document.getElementById("myCanvas").width = window.innerWidth
    document.getElementById("myCanvas").height = window.innerHeight

    ctx.fillStyle = "#333333"

    for (let x in player.map.grid) {
        for (let y in player.map.grid[x]) {
            let tile = player.map.grid[x][y]
            let xOffset = x * 64 + cx
            let yOffset = y * 64 + cy
            if (tile.type === "snow") {
                ctx.drawImage(imgCache.snow, xOffset, yOffset)
            } if (tile.type === "ice") {
                ctx.drawImage(imgCache.ice1, xOffset, yOffset)
                ctx.fillStyle = "#eeeeee"
                if (tile.left !== undefined) {
                    if (tile.left.type !== "ice") {
                        ctx.fillRect(xOffset, yOffset, 4, 64)
                    }
                } if (tile.up !== undefined) {
                    if (tile.up.type !== "ice") {
                        ctx.fillRect(xOffset, yOffset, 64, 4)
                    }
                } if (tile.right !== undefined) {
                    if (tile.right.type !== "ice") {
                        ctx.fillRect(xOffset + 60, yOffset, 4, 64)
                    }
                } if (tile.down !== undefined) {
                    if (tile.down.type !== "ice") {
                        ctx.fillRect(xOffset, yOffset + 60, 64, 4)
                    }
                }
            } if (tile.type === "water1") {
                ctx.drawImage(imgCache.water1, xOffset, yOffset)
            }
        }
    }
    ctx.fillStyle = "#999999"
    playerRender("down")
    for (let x in player.map.grid) {
        for (let y in player.map.grid[x]) {
            let tile = player.map.grid[x][y]
            let xOffset = x * 64 + cx
            let yOffset = y * 64 + cy
            if (tile.decor === "borealTree1") {
                if (tile.cooldown !== undefined) {
                    if (tile.cooldown === 4) {
                        ctx.drawImage(imgCache.borealTree1, xOffset - 32 - 3, yOffset - 288)
                    } else if (tile.cooldown === 3) {
                        ctx.drawImage(imgCache.borealTree1, xOffset - 32 - 0, yOffset - 288)
                    } else if (tile.cooldown === 2) {
                        ctx.drawImage(imgCache.borealTree1, xOffset - 32 + 3, yOffset - 288)
                    } else if (tile.cooldown === 1) {
                        ctx.drawImage(imgCache.borealTree1, xOffset - 32 - 0, yOffset - 288)
                    } else {
                        ctx.drawImage(imgCache.borealTree1, xOffset - 32, yOffset - 288)
                    }
                } else {
                    ctx.drawImage(imgCache.borealTree1, xOffset - 32, yOffset - 288)
                }
            } else if (tile.decor === "rock") {
                if (tile.cooldown !== undefined) {
                    if (tile.cooldown === 4) {
                        ctx.drawImage(imgCache.rock, xOffset - 3, yOffset)
                    } else if (tile.cooldown === 3) {
                        ctx.drawImage(imgCache.rock, xOffset - 0, yOffset)
                    } else if (tile.cooldown === 2) {
                        ctx.drawImage(imgCache.rock, xOffset + 3, yOffset)
                    } else if (tile.cooldown === 1) {
                        ctx.drawImage(imgCache.rock, xOffset - 0, yOffset)
                    } else {
                        ctx.drawImage(imgCache.rock, xOffset, yOffset)
                    }
                } else {
                    ctx.drawImage(imgCache.rock, xOffset, yOffset)
                }
            }
        }
    }
    if (player.personalOptions.highlightInteract) {
        ctx.fillStyle = "#852513"
        ctx.fillRect(player.interactTile.pos.x * 64 + cx, player.interactTile.pos.y * 64 + cy, 64, 4)
        ctx.fillRect(player.interactTile.pos.x * 64 + cx, player.interactTile.pos.y * 64 + 60 + cy, 64, 4)
        ctx.fillRect(player.interactTile.pos.x * 64 + 60 + cx, player.interactTile.pos.y * 64 + cy, 4, 64)
        ctx.fillRect(player.interactTile.pos.x * 64 + cx, player.interactTile.pos.y * 64 + cy, 4, 64)
    }
    renderHotbar()
    if (player.interfaceOpen !== undefined) {
        player.interfaceOpen.render()
    }

}


function renderHotbar() {
    for (let i = 0; i < 5; i++) {
        if (player.inventory.items[i] !== null) {
            ctx.drawImage(player.inventory.items[i].texture, i * 64, window.innerHeight - 64);

        }
    }
    for (let i = 0; i < 5; i++) {
        ctx.drawImage(imgCache.hotbarSlot, i * 64, window.innerHeight - 64);
    }
    ctx.drawImage(imgCache.selectedHotbarSlot, player.itemSelected * 64, window.innerHeight - 64);
    for (let i = 0; i < 5; i++) {
        if (player.inventory.items[i] !== null) {
            if (player.inventory.items[i].amount > 1) {
                ctx.fillStyle = "#000000"
                ctx.font = "16px Arial";
                ctx.fillText(player.inventory.items[i].amount, i * 64 + 48, window.innerHeight - 10)
            }
        }
    }



}
