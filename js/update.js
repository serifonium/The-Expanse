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
    if(hitboxFind(player.x, player.y) !== undefined) {
        if(hitboxFind(player.x, player.y).playerCollide !== "") {
            if(hitboxFind(player.x, player.y).playerCollide === "tpRoomLeft") {
                player.map = maps[1]
                if(hitboxFind(player.x, player.y).playerCollideSource === "Hz-892 Landing") {
                    player.x = 6*64+1
                    player.y = 2*64
                } else {
                    player.x = player.x + 7*64
                    player.y = 65
                }
                currentHitboxes = maps[1].hitboxes
            } if(hitboxFind(player.x, player.y).playerCollide === "tpCockpit") {
                player.map = maps[0]
                if(hitboxFind(player.x, player.y).playerCollideSource === "roomLeft") {
                    player.x = player.x - 7*64
                    player.y = 640-129
                }
                currentHitboxes = maps[0].hitboxes
            } if(hitboxFind(player.x, player.y).playerCollide === "Hz-892 Landing") {
                if(hitboxFind(player.x, player.y).playerCollideSource === "IceCliffside") {
                    loadMap(player.planet.rooms[0], player.x + 17*64, 640-129)
                } else {
                    player.map = player.planet.rooms[0]
                    player.x = 128
                    player.y = 128
                    currentHitboxes = player.planet.rooms[0].hitboxes
                }
            } if(hitboxFind(player.x, player.y).playerCollide === "IceCliffside1") {
                if(hitboxFind(player.x, player.y).playerCollideSource === "Frost Mines") {
                    player.map = player.planet.rooms[1]
                    player.x = 23*64
                    player.y = 5*64
                    currentHitboxes = player.planet.rooms[1].hitboxes
                    cx = -320
                } else if(hitboxFind(player.x, player.y).playerCollideSource === "Cold Woods") { 
                    
                    loadMap(player.planet.rooms[1], (2*64), 3*64)
                } 
                else {
                    loadMap(player.planet.rooms[1], player.x - 17*64, 65)
                }
            } else if(hitboxFind(player.x, player.y).playerCollide === "Frost Mines") {
                /*
                player.map = player.planet.rooms[2]
                player.x = 5*64
                player.y = 2*64
                cx = 0
                cy = 0
                currentHitboxes = player.planet.rooms[2].hitboxes
                */
                loadMap(player.planet.rooms[2], 5*64, 2*64)
            } if(hitboxFind(player.x, player.y).playerCollide === "Cold Woods") { 
                if(hitboxFind(player.x, player.y).playerCollideSource === "Lumber Shack") {
                    loadMap(player.planet.rooms[3], 10*64, 5*64)
                } else {
                    loadMap(player.planet.rooms[3], 1*64, 4*64)
                }
            }
        }
    } if(640 < player.x + 32 && player.x + 32 < (player.map.width * 64) - 640) {
        cx = (player.x - 640 + 32) * -1
    } 
    if(320 < player.y + 32 && player.y + 32 < (player.map.height * 64) - 320) {
        cy = (player.y - 320 + 32) * -1
    }
    if(player.planet.name === "Hz-892") {
        maps[1].grid[5][2].hitbox.playerCollide = "Hz-892 Landing"
    } else {
        maps[1].grid[5][2].hitbox.playerCollide = undefined
    }


    if (player.interfaceOpen !== undefined) {
        if(player.interfaceOpen.name === "shipNavigation") {
            if(mx !== null && my !== null) {
                let unSelected = 0
                for(let p of player.galaxy.planets) {
                    r = Math.floor(p.radius/16) + 1
                    if(player.equippedSpaceship.travelTime < 0) {
                        if(10*64 - r*4 + p.distance*16 <= mx && mx <= 10*64 - r*4 + p.distance*16 + r*8 
                            && 5*64 - r*4 <= my && my <= 5*64 - r*4 + r*8 ) {
                            player.interfaceOpen.planetSelected = p
                            mx = null
                            my = null
                            unSelected++
                            
                        } 
                    }
                }
                if(unSelected === 0) {
                    player.interfaceOpen.planetSelected = undefined
                    mx = null
                    my = null
                }
            }
        }
        if(player.interfaceOpen.name === "inventory") {
            if(mx !== null && my !== null && player.inventory.tab === 0) {
                for(let x = 0; x < 13; x++) {
                    if((x+1)*64 < mx && mx < (x+2)*64 && 2*64 < my && my < 3*64) {
                        
                        if(player.inventory.items[x] !== null && player.inventory.items[x] !== undefined) {
                            if(player.inventory.items[player.interfaceOpen.itemSelected] === null || player.inventory.items[player.interfaceOpen.itemSelected] === undefined || player.interfaceOpen.itemSelected === undefined) {
                                player.interfaceOpen.itemSelected = x
                            } /*else if(player.inventory.items[player.interfaceOpen.itemSelected].name === player.inventory.items[x].name && player.interfaceOpen.itemSelected !== undefined) {
                                console.log(player.interfaceOpen.itemSelected, x, player.inventory.items[player.interfaceOpen.itemSelected])
                                player.inventory.items[x].amount += player.inventory.items[player.interfaceOpen.itemSelected].amount
                                player.inventory.items[player.interfaceOpen.itemSelected] = undefined
                                player.interfaceOpen.itemSelected = undefined
                            }*/ else if(player.interfaceOpen.itemSelected !== x) {
                                let b = player.inventory.items[x]
                                player.inventory.items[x] = player.inventory.items[player.interfaceOpen.itemSelected]
                                player.inventory.items[player.interfaceOpen.itemSelected] = b
                                
                            } else {
                                player.interfaceOpen.itemSelected = undefined
                            } 
                        } else if(player.inventory.items[x] === null || player.inventory.items[x] === undefined ) {
                            
                            if(player.inventory.items[player.inventory.itemSelected] !== undefined) {
                                player.inventory.items[x] = player.inventory.items[player.interfaceOpen.itemSelected]
                                player.inventory.items[player.inventory.itemSelected] = null
                                player.interfaceOpen.itemSelected = undefined
                                mx = 0
                                my = 0
                                
                            }
                        }
                        console.log("IT: " + player.interfaceOpen.itemSelected + ", x: " + x)
                    }
                } for(let x = 0; x < 13; x++) {
                    if((x+5)*64 < mx && mx < (x+6)*64) {
                        if(player.inventory.items[x] !== undefined) { 
                            if(player.interfaceOpen.itemSelected === undefined) {
                                //player.interfaceOpen.itemSelected = player.inventory.items[x]
                            }
                        }

                    }
                } for(let x = 0; x < 18; x++) {

                } 
                mx = 0
                my = 0
            }
        } if(player.interfaceOpen.name === "Fishing") {
            if(player.interfaceOpen.catchtime >= 0) {
                player.interfaceOpen.catchtime -= 0.02
            } else {
                if(player.interfaceOpen.clicktime >= 0) {
                    if(player.interfaceOpen.clicked === true) {
                        console.log(player.interfaceOpen)
                        
                        inventoryAdd(player.interfaceOpen.catch)
                        player.skills.fishing.xp += player.interfaceOpen.catchxp
                        player.interfaceOpen.catchxp = 0
                        player.interfaceOpen.clicktime = 0
                        player.interfaceOpen.click = false
                        player.interfaceOpen.catchtime = 0
                        player.interfaceOpen.catch = undefined
                        player.interfaceOpen.clicked = false
                        player.interfaceOpen = undefined
                        
                    } else {
                        player.interfaceOpen.clicktime -= 0.02
                    }
                } else {
                    if(player.interfaceOpen.click === false) {
                    player.interfaceOpen.clicktime = 1.5
                    player.interfaceOpen.click = true
                    } else {
                        player.interfaceOpen.clicktime = 0
                        player.interfaceOpen.click = false
                        player.interfaceOpen.catchtime = 0
                        player.interfaceOpen.catch = undefined
                        player.interfaceOpen.clicked = false
                        player.interfaceOpen.catchxp = 0
                        player.interfaceOpen = undefined

                    }
                    
                }

            }
        }
        
    }
    for(let e of player.map.enemies) {
        e.update()
    }
    render()
}