function update() {
    
    if(player.map.grid[Math.floor((player.x + player.vx + 32)/64)][Math.floor((player.y + 32) /64)].tags.collisionDetection === false) {
        player.x = player.x + player.vx
    } if(player.map.grid[Math.floor((player.x + 32)/64)][Math.floor((player.y + player.vy + 32) /64)].tags.collisionDetection === false) {
        player.y = player.y + player.vy
    } 
    for (let x in player.map.grid) {
        for (let y in player.map.grid[x]) {
            player.map.grid[x][y].update()
            if(player.map.grid[x][y].decor === "borealTree1") {
                if(player.map.grid[x][y].cooldown > 0) {
                    if(player.map.grid[x][y].cooldown === 4) {
                        let off = Number(findTileId(x, y, " borealTree1").style.left.replace('px',''))
                        findTileId(x, y, " borealTree1").style.left = String(off - 2) + "px"
                        player.map.grid[x][y].cooldown += -1
                        console.log(off)
                    }
                    else if(player.map.grid[x][y].cooldown === 3) {
                        let off = Number(findTileId(x, y, " borealTree1").style.left.replace('px',''))
                        findTileId(x, y, " borealTree1").style.left = String(off + 2) + "px"
                        player.map.grid[x][y].cooldown += -1
                    }
                    else if(player.map.grid[x][y].cooldown === 2) {
                        let off = Number(findTileId(x, y, " borealTree1").style.left.replace('px',''))
                        findTileId(x, y, " borealTree1").style.left = String(off + 2) + "px"
                        player.map.grid[x][y].cooldown += -1
                    } 
                    else if(player.map.grid[x][y].cooldown === 1) {
                        let off = Number(findTileId(x, y, " borealTree1").style.left.replace('px',''))
                        findTileId(x, y, " borealTree1").style.left = String(off - 2) + "px"
                        player.map.grid[x][y].cooldown += -1
                    }
                }
            } if(player.map.grid[x][y].decor === "rock") {
                if(player.map.grid[x][y].cooldown > 0) {
                    if(player.map.grid[x][y].cooldown === 4) {
                        let off = Number(findTileId(x, y, " rock").style.left.replace('px',''))
                        findTileId(x, y, " rock").style.left = String(off - 2) + "px"
                        player.map.grid[x][y].cooldown += -1
                        console.log(off)
                    }
                    else if(player.map.grid[x][y].cooldown === 3) {
                        let off = Number(findTileId(x, y, " rock").style.left.replace('px',''))
                        findTileId(x, y, " rock").style.left = String(off + 2) + "px"
                        player.map.grid[x][y].cooldown += -1
                    }
                    else if(player.map.grid[x][y].cooldown === 2) {
                        let off = Number(findTileId(x, y, " rock").style.left.replace('px',''))
                        findTileId(x, y, " rock").style.left = String(off + 2) + "px"
                        player.map.grid[x][y].cooldown += -1
                    } 
                    else if(player.map.grid[x][y].cooldown === 1) {
                        let off = Number(findTileId(x, y, " rock").style.left.replace('px',''))
                        findTileId(x, y, " rock").style.left = String(off - 2) + "px"
                        player.map.grid[x][y].cooldown += -1
                    }
                }
            }
        }
    }
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
    
    


    if (player.interfaceOpen !== undefined) {
        
    }
    for(let e of player.map.enemies) {
        e.update()
    }
    render()
}