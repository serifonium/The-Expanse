function update() {
    /*
    
    for (let x in player.map.grid) {
        for (let y in player.map.grid[x]) {
            tile = player.map.grid[x][y]
            tile.update()
            findTileId(x, y, "light").style.opacity = 1 - tile.light
            //player.map.grid[tx][ty]
            
            if(player.map.grid[x][y].decor === "borealTree1") {
                if(player.map.grid[x][y].cooldown > 0) {
                    if(player.map.grid[x][y].cooldown === 4) {
                        let off = Number(findTileId(x, y, " borealTree1").style.left.replace('px',''))
                        findTileId(x, y, " borealTree1").style.left = String(off - 3) + "px"
                        player.map.grid[x][y].cooldown += -1
                    }
                    else if(player.map.grid[x][y].cooldown === 3) {
                        let off = Number(findTileId(x, y, " borealTree1").style.left.replace('px',''))
                        findTileId(x, y, " borealTree1").style.left = String(off + 3) + "px"
                        player.map.grid[x][y].cooldown += -1
                    }
                    else if(player.map.grid[x][y].cooldown === 2) {
                        let off = Number(findTileId(x, y, " borealTree1").style.left.replace('px',''))
                        findTileId(x, y, " borealTree1").style.left = String(off + 3) + "px"
                        player.map.grid[x][y].cooldown += -1
                    } 
                    else if(player.map.grid[x][y].cooldown === 1) {
                        let off = Number(findTileId(x, y, " borealTree1").style.left.replace('px',''))
                        findTileId(x, y, " borealTree1").style.left = String(off - 3) + "px"
                        player.map.grid[x][y].cooldown += -1
                    } else {
                        player.map.grid[x][y].cooldown += -1
                    }
                }
            } if(player.map.grid[x][y].decor === "rock") {
                if(player.map.grid[x][y].cooldown > 0) {
                    if(player.map.grid[x][y].cooldown === 4) {
                        let off = Number(findTileId(x, y, " rock").style.left.replace('px',''))
                        findTileId(x, y, " rock").style.left = String(off - 3) + "px"
                        player.map.grid[x][y].cooldown += -1
                    }
                    else if(player.map.grid[x][y].cooldown === 3) {
                        let off = Number(findTileId(x, y, " rock").style.left.replace('px',''))
                        findTileId(x, y, " rock").style.left = String(off + 3) + "px"
                        player.map.grid[x][y].cooldown += -1
                    }
                    else if(player.map.grid[x][y].cooldown === 2) {
                        let off = Number(findTileId(x, y, " rock").style.left.replace('px',''))
                        findTileId(x, y, " rock").style.left = String(off + 3) + "px"
                        player.map.grid[x][y].cooldown += -1
                    } 
                    else if(player.map.grid[x][y].cooldown === 1) {
                        let off = Number(findTileId(x, y, " rock").style.left.replace('px',''))
                        findTileId(x, y, " rock").style.left = String(off - 3) + "px"
                        player.map.grid[x][y].cooldown += -1
                    } else {
                        player.map.grid[x][y].cooldown += -1
                    }
                }
            } 
        }
    }
    //findTileId(player.tx, player.ty, "light").style.opacity = 0
    
    if(player.map.grid[player.tx][player.ty].left !== undefined) {findTileId(player.tx-1, player.ty, "light").style.opacity = (1-player.map.grid[player.tx][player.ty].left.light)/80*findPythDistance(player.x, player.y, (player.tx-1)*64+32, (player.ty)*64+32)
        if(player.map.grid[player.tx][player.ty].left.up !== undefined) {findTileId(player.tx-1, player.ty-1, "light").style.opacity = (1-player.map.grid[player.tx][player.ty].left.up.light)/2}
        if(player.map.grid[player.tx][player.ty].left.down !== undefined) {findTileId(player.tx-1, player.ty+1, "light").style.opacity = (1-player.map.grid[player.tx][player.ty].left.down.light)/2}
    } 
    if(player.map.grid[player.tx][player.ty].right !== undefined) {findTileId(player.tx+1, player.ty, "light").style.opacity = (1-player.map.grid[player.tx][player.ty].right.light)/70*findPythDistance(player.x, player.y, (player.tx)*64+32, (player.ty)*64+32)
        if(player.map.grid[player.tx][player.ty].right.up !== undefined) {findTileId(player.tx+1, player.ty-1, "light").style.opacity = (1-player.map.grid[player.tx][player.ty].right.up.light)/80*findPythDistance(player.x, player.y, (player.tx)*64+32, (player.ty-1)*64+32)}
        if(player.map.grid[player.tx][player.ty].right.down !== undefined) {findTileId(player.tx+1, player.ty+1, "light").style.opacity = (1-player.map.grid[player.tx][player.ty].right.down.light)/2}
    }
    if(player.map.grid[player.tx][player.ty].up !== undefined) {findTileId(player.tx, player.ty-1, "light").style.opacity = (1-player.map.grid[player.tx][player.ty].up.light)/2}
    if(player.map.grid[player.tx][player.ty].down !== undefined) {findTileId(player.tx, player.ty+1, "light").style.opacity = (1-player.map.grid[player.tx][player.ty].down.light)/2}
    
    player.update()
    if (player.interfaceOpen !== undefined && player.interfaceOpen !== null ) {
        player.canMove = false
    } else {
        player.canMove = true
    } 
    for(let y = 0; y < 2; y++) {
        for(let x = 0; x < 13; x++) {
            if(player.inventory.items[y*13+x] !== null) {
                document.getElementById("slot"+(y*13+x)+"item").src = player.inventory.items[y*13+x].texture
                if(player.inventory.items[y*13+x].amount > 0) {
                    if(player.inventory.items[y*13+x].amount > 1) {
                        document.getElementById("slot"+String(y*13+x)+"amount").textContent = String(player.inventory.items[y*13+x].amount)
                    } else {
                    document.getElementById("slot"+String(y*13+x)+"amount").textContent = ""
                    }
                }
            } else {
                document.getElementById("slot"+(y*13+x)+"item").src = "images/empty.png"
                document.getElementById("slot"+String(y*13+x)+"amount").textContent = ""
            }
        }
    }
    for(let x = 0; x < 5; x++) {
        if(player.inventory.items[x] !== null) {
            document.getElementById("HotbarItem"+String(x)).src = player.inventory.items[x].texture
            
            if(player.inventory.items[x].amount > 1) {
                document.getElementById("HotbarAmount"+String(x)).textContent = String(player.inventory.items[x].amount)
            } else {
            document.getElementById("HotbarAmount"+String(x)).textContent = ""
            }
        } else {
            document.getElementById("HotbarItem"+String(x)).src = "images/empty.png"
            document.getElementById("HotbarAmount"+String(x)).textContent = ""
        }
    }

    Setting0.active = false
    Setting1.active = false
    if (player.interfaceOpen !== undefined) {
        if(player.interfaceOpen.name === "inventory") {
            for(let i = 0; i < 5; i++) {
                if(player.inventory.tab === i) {
                    document.getElementById("InventoryTab"+i).style.top = "-60px"
                    document.getElementById("inventoryBackground"+i).hidden = false
                    
                } else {
                    document.getElementById("InventoryTab"+i).style.top = "-64px"
                    document.getElementById("inventoryBackground"+i).hidden = true
                }
            } if (player.inventory.tab === 4) {
                Setting0.active = true
                Setting1.active = true
            }
            
        }
    }
    */

    for(let no in notifications) {
        let n = notifications[no]
        if(n.time < 0) {
            notifications.splice(no, 1)
        } else {
            n.time += -0.02
        }
    }

    if (player.map.grid[Math.floor((player.x + player.vx + 32) / 64)][Math.floor((player.y + 32) / 64)].tags.collisionDetection === false) {
        player.x = player.x + player.vx
    } if (player.map.grid[Math.floor((player.x + 32) / 64)][Math.floor((player.y + player.vy + 32) / 64)].tags.collisionDetection === false) {
        player.y = player.y + player.vy
    }
    player.update()
    for (let x in player.map.grid) {
        for (let y in player.map.grid[x]) {
            tile = player.map.grid[x][y]
            tile.update()
            if (player.map.grid[x][y].decor === "borealTree1") {
                if (player.map.grid[x][y].cooldown > 0) {
                    player.map.grid[x][y].cooldown += -1
                }
            } if (player.map.grid[x][y].decor === "rock") {
                if (player.map.grid[x][y].cooldown > 0) {
                    player.map.grid[x][y].cooldown += -1
                }
            }
        }
    }
    updateOffset()
    function updateOffset() {
        if (player.x < window.innerWidth / 2) {
            cx = 0
        } else if (player.x > player.map.width * 64 - window.innerWidth / 2) {
            cx = -(player.map.width * 64 - window.innerWidth)
        } else {
            cx = -(player.x - window.innerWidth / 2)
        }
        if (player.y < window.innerHeight / 2) {
            cy = 0
        } else if (player.y > player.map.height * 64 - window.innerHeight / 2) {
            cy = -(player.map.height * 64 - window.innerHeight)
        } else {
            cy = -(player.y - window.innerHeight / 2)
        }
    }
    render()
}