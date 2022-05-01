
//const serverURL = "https://expanse-node-deploy.herokuapp.com/";









let cx = 0
let cy = 0



currentHitboxes = []



/*
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.textAlign = "center"
*/

//draw map



function setupWorld() {
    function fillTilesType(x1, x2, y1, y2, map, type) {
        for (let y = y1; y < y2; y++) {
            for (let x = x1; x < x2; x++) {
                map.grid[x][y].type = type
            }
        }
    } function fillTilesDecor(x1, x2, y1, y2, map, decor) {
        for (let y = y1; y < y2; y++) {
            for (let x = x1; x < x2; x++) {
                map.grid[x][y].decor = decor
            }
        }
    }



    

    maps.push(mapUnString("3015cccccccccccddddccbbbbbbbbdddddcbbbbbbbbbdddddccbbbbbbbbbddddccbbbbbbbbbddddcbbbbbbbbbbbdddcbbbbbbbbbbbdddcbbbbbbbbbbbdddcbbbbbbbbbbbbddccbbbbbbbbbbbddccbbbbbbbbbbbbdcbbbbbbbbbbbbbccbbbbbbbbbbbbbccbbbbbbbbbbbbbccbbbbbbbbbbbbbccbbbbbbbbbbbbbccbbbbbbbbbbbbbccbbbbbbbbbbbbccccbbbbbbbbbbbbcccbbbbbbbbbbccccccbbbbbbbccccccccbbbbbbbccccccccbbbbbbbbcccccccbbbbbbbbbbcccccbbbbbbbbbbccccccbbbbbbbbbbcccccbbbbbbbbbbccccccbbbbbbbbcccccccccbbbbbccccccccccccccccccaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaabaaaaaaaaaaabaaaaaaaaaaaabaaaaaaaaaabaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaabaaaabaaaaaaaaaaaabaaaaaaaaaabaaaaaaaaaaabaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaacaaaaaaaaaabaaaaaaaaaaaaaaacacaaaaaaaaacaaaaaaaaaaaaaaacaacaacaaaaaacaaaaccacaaaaaaaaaacaacacaaaaaaacaacacccaaaaaaaaacaaacaaaaaaaaaaaaccaaaaaaaaaaaaaaaaaaa"))
    maps[0].name = "Starting Room"
    maps[0].grid[3][7].decor = ""
    maps[0].grid[5][0].decor = "tradersTent"
    maps[0].grid[5][1].tags.collisionDetection = true
    maps[0].grid[6][1].tags.collisionDetection = true
    maps[0].hitboxes.push(new Hitbox(5*64, 1*64, 2*64, 1*64, maps[0], function() {
        tradersTent.onInteract()
    }))
    
    
    //tpHitbox(20, 12, 1, 1, universe[0].planets[1].rooms[0], "Hz-892 Landing", "IceCliffside1")

    for (let y = 0; y < 15; y++) {
        for (let x = 0; x < 30; x++) {
            maps[0].grid[x][y].light = 0.92
            if (maps[0].grid[x][y].type === "ice" || maps[0].grid[x][y].type === "water1") {
                maps[0].grid[x][y].tags.collisionDetection = true
            }
            if (maps[0].grid[x][y].decor === "borealTree1") {
                maps[0].grid[x][y].tags.collisionDetection = true
                maps[0].grid[x][y].hits = 12
                maps[0].grid[x][y].cooldown = 0
            } else if (maps[0].grid[x][y].decor === "rock") {
                maps[0].grid[x][y].tags.collisionDetection = true
                maps[0].grid[x][y].hits = 5
                maps[0].grid[x][y].cooldown = 0
            }
            if (maps[0].grid[x][y].type === "ice") {
                maps[0].grid[x][y].tags.collisionDetection = true
            }
        }
    }
    for(let h of maps[0].hitboxes) {
        hitboxes.push(h)
    }

}
setupWorld()









/*

#b83275



*/
















var player = new Player("player", 128, 320, maps[0])
askForUser()














player.inventory.items[0] = new Item("Fractured Sword", "Sword")
player.inventory.items[1] = new Item("Fractured Axe", "Axe")
player.inventory.items[3] = new Item("Fractured Shovel", "Shovel")
player.inventory.items[2] = new Item("Fractured Pickaxe", "Pickaxe")
//player.inventory.items[3].interface = new Interface("Fishing")

let p = particleSetup()
let sp = spaceWarpSetup()

//player.inventory.items[0].texture = fracturedSword

setInterval(() => {
    /*
    if(save !== undefined) {
        saveGame(save)
    }
    */

}, 0.02 * 1000);



//player.inventory.items[4] = new Item("Iron Ore", "Resource", 4)
//player.inventory.items[4].texture = ironOre






/*
canvas.addEventListener('mousedown', function(e) {
    getCursorPosition(canvas, e)
})
var mx = null
var my = null
function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    var mx_ = event.clientX - rect.left
    var my_ = event.clientY - rect.top
    console.log(mx_, my_)
    mx = mx_ - 2
    my = my_
}
canvas.addEventListener('mousemove', function(e) {
    getMousePos(canvas, e)
})
var hx = null
var hy = null
function getMousePos(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    var mx_ = event.clientX - rect.left
    var my_ = event.clientY - rect.top
    hx = mx_ - 2
    hy = my_
}
*/
function particleSetup() {
    let particles = []
    let amount = Math.floor(Math.random() * 50 + 50)
    for (let i = 0; i < amount; i++) {
        let size = Math.floor(Math.random() * 4 + 1)
        let x = Math.floor(Math.random() * (player.map.width - 1) * 64 + 1)
        let y = Math.floor(Math.random() * (player.map.height - 1) * 64 + 1)
        let vx = Math.floor(Math.random() * 2000 - 1000) / 2000
        let vy = Math.floor(Math.random() * 2000 - 1000) / 2000
        if (player.map.grid[Math.floor(x / 64)][Math.floor(y / 64)].type === "space") {
            particles.push({ x: x, y: y, size: size, vx: vx, vy: vy })
        }

    }
    return particles
}
function spaceWarpSetup() {
    spp = []
    for (let i = 0; i < 20; i++) {

        spp.push({
            x: (Math.floor(Math.random() * 15 + 35) / 10) + i * 5,
            y: (Math.floor(Math.random() * 400) * -1),
            w: (Math.floor(Math.random() * 35 + 35) / 10),
            h: (Math.floor(Math.random() * 1200 + 800)),
            v: (Math.floor(Math.random() * 400 + 50) / 50)
        })
    }
}

function hitboxFind(x, y) {

    for (let i of currentHitboxes) {
        if (i.x <= x + 32 && x + 32 <= i.x + i.w && i.y <= y + 32 && y + 32 <= i.y + i.h) {
            return i

        } else {

            //return undefined
        }
    }
}





setInterval(() => {
    update()
}, 20);








































//drawTextBox("textboxes are very cool!, no, they really are!, what do you think about them?", "#000000")























/*



function logKey(e) {
    if(e.key === "w") {
        if(player.canMove) {
            player.vy = -player.speed
            player.rotation = 0
        }
    } if(e.key === "a") {
        if(player.canMove) {
            player.vx = -player.speed
            player.rotation = 1
        }
    } if(e.key === "s") {
        if(player.canMove) {
            player.vy = player.speed
            player.rotation = 2
        }
    } if(e.key === "d") {
        if(player.canMove) {
            player.vx = player.speed
            player.rotation = 3
        }
    } if(e.key === " ") {
        
        
        
        if(player.interfaceOpen !== undefined) {
            if(player.interfaceOpen.name === "shipNavigation") {
                if(player.interfaceOpen.planetSelected !== undefined && player.interfaceOpen.planetSelected !== player.planet) {
                    player.equippedSpaceship.travelDestination = player.interfaceOpen.planetSelected
                    player.interfaceOpen.planetSelected = undefined
                    let distance = player.planet.distance - player.equippedSpaceship.travelDestination.distance
                    if(distance < 0) {distance = distance * -1}
                    player.equippedSpaceship.travelTime = Math.floor((distance * 149597807) / (player.equippedSpaceship.speed * 1000000))
                    player.equippedSpaceship.speedGear = 3
                }
            } if(player.interfaceOpen.name === "Fishing") {
                if(player.interfaceOpen.catchtime <= 0 && player.interfaceOpen.clicktime > 0) {
                    player.interfaceOpen.clicked = true
                }
            } 
        }
        if(hitboxFind(player.interactTile.pos.x*64+32, player.interactTile.pos.y*64+32) !== undefined) {
            if(hitboxFind(player.interactTile.pos.x*64+32, player.interactTile.pos.y*64+32).interface !== undefined) {
                player.interfaceOpen = hitboxFind(player.interactTile.pos.x*64+32, player.interactTile.pos.y*64+32).interface
            } else if(hitboxFind(player.interactTile.pos.x*64+32, player.interactTile.pos.y*64+32).playerCollide !== undefined) {
                if(hitboxFind(player.interactTile.pos.x*64+32, player.interactTile.pos.y*64+32).playerCollide === "Lumber Shack") {
                    loadMap(universe[0].planets[1].rooms[4], 64*17, 64*8)
                }
            }
        }
        if(player.hotbar[player.itemSelected] !== undefined && player.hotbar[player.itemSelected] !== null && player.interfaceOpen === undefined) {
            if(player.hotbar[player.itemSelected].type === "Axe") {
                if(player.interactTile.decor === "borealTree1") {
                    if(player.itemCooldown === 0) {
                        player.itemCooldown = 16
                        player.interactTile.hits -= 1
                        player.interactTile.offsetcounter = 6
                        if(player.interactTile.hits <= 0) {
                            player.interactTile.decor = "borealTreeStump"
                            player.interactTile.hits = 4
                            player.skills.foraging.xp += 16
                            inventoryAdd(new Item("Wood", "Resource", Math.floor(Math.random() * 15 + 15)))
                        }
                        
                    }
                }
                if(player.interactTile.decor === "borealTreeStump") {
                    if(player.itemCooldown === 0) {
                        player.itemCooldown = 16
                        player.interactTile.hits -= 1
                        player.interactTile.offsetcounter = 6
                        if(player.interactTile.hits <= 0) {
                            player.interactTile.decor = ""
                            player.interactTile.tags.collisionDetection = false
                            player.skills.foraging.xp += 4
                            inventoryAdd(new Item("Wood", "Resource", Math.floor(Math.random() * 5 + 5)))
                        }
                        
                    }
                }
                if(player.interactTile.decor === "ironTree") {
                    if(player.skills.foraging.level >= 15) {
                        if(player.itemCooldown === 0) {
                            player.itemCooldown = 16
                            player.interactTile.hits -= 1
                            player.interactTile.offsetcounter = 6
                            if(player.interactTile.hits <= 0) {
                                player.interactTile.decor = "borealTreeStump"
                                player.interactTile.hits = 4
                                player.skills.foraging.xp += 128
                            }
                            
                        }
                    } else {
                        drawTextBox("you are not strong enough to break down this tree.", "#000000")
                    }
                }
            } if(player.hotbar[player.itemSelected].type === "Fishing Rod" && player.interfaceOpen === undefined) {
                if(player.interactTile.type === "water1") {
                    player.interfaceOpen = player.inventory.items[player.itemSelected].interface
                    function fishLoot() {
                        let catchNum = Math.random() * 1000
                        player.inventory.items[player.itemSelected].interface.catchtime = Math.floor(Math.random() * 10) + 5
                        if(catchNum < 500) {
                            player.inventory.items[player.itemSelected].interface.catch = new Item("Seaweed", "Resource", Math.floor(Math.random() * 3) + 1)
                            player.inventory.items[player.itemSelected].interface.catch.texture = seaweed
                            player.inventory.items[player.itemSelected].interface.catchxp = 1
                        } else if(catchNum < 900) {
                            player.inventory.items[player.itemSelected].interface.catch = new Item("Frost Minnow", "Fish", 1)
                            player.inventory.items[player.itemSelected].interface.catch.texture = frostMinnow
                            player.inventory.items[player.itemSelected].interface.catchxp = 3
                        } else if(catchNum < 1000) {
                            player.inventory.items[player.itemSelected].interface.catch = new Item("Iron Ore", "Resource", Math.floor(Math.random() * 4) + 2)
                            player.inventory.items[player.itemSelected].interface.catch.texture = ironOre
                            player.inventory.items[player.itemSelected].interface.catchxp = 7
                        } 
                        player.interfaceOpen.click = false
                        player.interfaceOpen.clicked = false
                        console.log(player.inventory.items[player.itemSelected].interface.catch)
                    }
                    fishLoot()
                }
            } if(player.hotbar[player.itemSelected].type === "Pickaxe") {
                if(player.interactTile.decor === "rock") {
                    player.interactTile.decor = ""
                    player.interactTile.tags.collisionDetection = false
                    inventoryAdd(new Item("Stone", "Resource", Math.floor(Math.random()*1.5+1)))
                    player.skills.mining.xp += 1
                }
            } if(player.hotbar[player.itemSelected].type === "Sword") {
                for (let e in player.map.enemies) {
                    if(player.interactTile.pos.x*64 < player.map.enemies[e].x+32 && player.map.enemies[e].x+32 < player.interactTile.pos.x*64+64 && player.interactTile.pos.y*64 < player.map.enemies[e].y+32 && player.map.enemies[e].y+32 < player.interactTile.pos.y*64+64) {
                        console.log("hit")
                        if(player.rotation === 0) {
                            player.map.enemies[e].y += -10
                        } if(player.rotation === 1) {
                            player.map.enemies[e].x += -10
                        } if(player.rotation === 2) {
                            player.map.enemies[e].y += 10
                        } if(player.rotation === 3) {
                            player.map.enemies[e].x += 10
                        }
                        player.map.enemies[e].health += -2
                        console.log(player.map.enemies[e].health)
                        if(player.map.enemies[e].health <= 0) {
                            for(let h in player.map.hitboxes) {
                                if(player.map.hitboxes[h] === player.map.enemies[e].hitbox) {
                                    player.map.hitboxes.splice(h, 1)
                                }
                            }
                            player.map.enemies.splice(e, 1)
                        }
                    }
                }
            }
            
        }
        if(player.interfaceOpen !== undefined) {
            if(player.interfaceOpen.name === "textbox") {
                if(player.interfaceOpen.finished !== undefined) {
                    if(player.interfaceOpen.finished === true) {
                        console.log(player.interfaceOpen)
                        player.interfaceOpen = undefined
                    
                    } else if(player.interfaceOpen.animframe >= 12) {
                        player.interfaceOpen.text = player.interfaceOpen.fulltext
                        player.interfaceOpen.finished = true
                    }
                }
            }
        }
        
        
    } if(e.key === "Escape") { 
        if(player.interfaceOpen !== undefined) {
            if(player.interfaceOpen.name === "shipNavigation") {
                player.interfaceOpen.planetSelected = undefined
                player.interfaceOpen = undefined
            } else if(player.interfaceOpen.name === "inventory") {
                player.interfaceOpen.tab = 0
                player.interfaceOpen.itemSelected = undefined
                player.interfaceOpen = undefined
            } else if(player.interfaceOpen.name === "Fishing") {
                player.interfaceOpen.clicktime = 0
                player.interfaceOpen.click = false
                player.interfaceOpen.catchtime = 0
                player.interfaceOpen.catch = undefined
                player.interfaceOpen.clicked = false
                player.interfaceOpen = undefined
            } else if(player.interfaceOpen.name === "Fishing") {
                player.interfaceOpen.clicktime = 0
                player.interfaceOpen.click = false
                player.interfaceOpen.catchtime = 0
                player.interfaceOpen.catch = undefined
                player.interfaceOpen.clicked = false
                player.interfaceOpen = undefined
            } else if(player.interfaceOpen.name === "textbox") {
                if(player.interfaceOpen.finished !== undefined) {
                    if(player.interfaceOpen.finished === true) {
                        player.interfaceOpen = undefined
                    }
                }
            } else {
                player.interfaceOpen = undefined
            }
            
            
        } else {
            player.interfaceOpen = player.inventory
        }
    } if(e.key === "1") {
        if(player.interfaceOpen === undefined) {
            player.itemSelected = 0
        } else if (player.interfaceOpen.name === "inventory") {
            player.interfaceOpen.tab = 0
        }
    } if(e.key === "2") {
        if(player.interfaceOpen === undefined) {
            player.itemSelected = 1
        } else if (player.interfaceOpen.name === "inventory") {
            player.interfaceOpen.tab = 1
        }
    } if(e.key === "3") {
        if(player.interfaceOpen === undefined) {
            player.itemSelected = 2
        } else if (player.interfaceOpen.name === "inventory") {
            player.interfaceOpen.tab = 2
        }
    } if(e.key === "4") {
        if(player.interfaceOpen === undefined) {
            player.itemSelected = 3
        } else if (player.interfaceOpen.name === "inventory") {
            player.interfaceOpen.tab = 3
        }
    } if(e.key === "5") {
        if(player.interfaceOpen === undefined) {
            player.itemSelected = 4
        } else if (player.interfaceOpen.name === "inventory") {
            player.interfaceOpen.tab = 4
        }
    }
    if(e.key === "e") {
        //inventoryAdd(new Item("Wood", "Resource", 3))
    }
}
function logDown(e) {
    if(e.key === "w") {
        player.vy = 0
    } if(e.key === "a") {
        player.vx = 0
    } if(e.key === "s") {
        player.vy = 0
    } if(e.key === "d") {
        player.vx = 0
    } if(e.key === "") {

    }
}
*/