function update() {
    
    if(player.map.grid[Math.floor((player.x + player.vx + 32)/64)][Math.floor((player.y + 32) /64)].tags.collisionDetection === false) {
        player.x = player.x + player.vx
    } if(player.map.grid[Math.floor((player.x + 32)/64)][Math.floor((player.y + player.vy + 32) /64)].tags.collisionDetection === false) {
        player.y = player.y + player.vy
    } 
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
                    }
                }
            } 
        }
    }
    //findTileId(player.tx, player.ty, "light").style.opacity = 0
    /*
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
    */
    player.update()
    if (player.interfaceOpen !== undefined && player.interfaceOpen !== null ) {
        player.canMove = false
    } else {
        player.canMove = true
    } for(let g in universe) {
        
        for(let p in universe[g].planets) {
            
            for(let r in universe[g].planets[p].rooms) {
                
                universe[g].planets[p].rooms[r].update()
            }
        }
    }
    for(let y = 0; y < 2; y++) {
        for(let x = 0; x < 13; x++) {
            if(player.inventory.items[y*13+x] !== null) {
                document.getElementById("slot"+(y*13+x)+"item").src = player.inventory.items[y*13+x].texture
                if(player.inventory.items[y*13+x].amount > 1) {
                    document.getElementById("slot"+String(y*13+x)+"amount").textContent = String(player.inventory.items[y*13+x].amount)
                }
            }
        }
    }
    for(let x = 0; x < 5; x++) {
        if(player.inventory.items[x] !== null) {
            document.getElementById("HotbarItem"+String(x)).src = player.inventory.items[x].texture
            
            if(player.inventory.items[x].amount > 1) {
                document.getElementById("HotbarAmount"+String(x)).textContent = String(player.inventory.items[x].amount)
                console.log("yes")
            } else {
            document.getElementById("HotbarAmount"+String(x)).textContent = ""
            }
        }
    }


    if (player.interfaceOpen !== undefined) {
        
    }
    for(let e of player.map.enemies) {
        e.update()
    }
    render()
}