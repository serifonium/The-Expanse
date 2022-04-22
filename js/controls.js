let spaceLock = false
document.addEventListener('keydown', logKey);
document.addEventListener('keyup', logUp);
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
    } if(e.key === " " && spaceLock !== true) {
        
        
        if(player.inventory.items[player.itemSelected].name === "Fractured Axe") {
            if(player.interactTile.decor === "borealTree1" && player.interactTile.cooldown === 0) {
                player.interactTile.hits += -1
                player.interactTile.cooldown = 4
                if(player.interactTile.hits === 0) {
                    player.interactTile.decor = ""
                    player.interactTile.tags.collisionDetection = false
                    inventoryAdd(new Item("Wood", "Resource", Math.floor(Math.random()*5+5)))
                    document.getElementById(String(player.interactTile.pos.x + (player.interactTile.pos.y * player.map.width)) + " borealTree1").remove()
                }
            }
        } else if(player.inventory.items[player.itemSelected].name === "Fractured Pickaxe") {
            if(player.interactTile.decor === "rock" && player.interactTile.cooldown === 0) {
                player.interactTile.hits += -1
                player.interactTile.cooldown = 4
                if(player.interactTile.hits === 0) {
                    player.interactTile.decor = ""
                    player.interactTile.tags.collisionDetection = false
                    inventoryAdd(new Item("Stone", "Resource", Math.floor(Math.random()*2+1)))
                    document.getElementById(String(player.interactTile.pos.x + (player.interactTile.pos.y * player.map.width)) + " rock").remove()
                }
            }
        }
        spaceLock = true
        
        
        
        
    } if(e.key === "Escape") { 
        if(player.interfaceOpen !== undefined) {
            if(player.interfaceOpen === player.inventory) {
                player.interfaceOpen = undefined
                document.getElementById("darkBackground").hidden = true
                document.getElementById("inventory").hidden = true
            }
            
            
        } else {
            player.interfaceOpen = player.inventory
            document.getElementById("darkBackground").hidden = false
            document.getElementById("inventory").hidden = false
        }
    } if(e.key === "1") {
        if(player.interfaceOpen === undefined) {
            player.itemSelected = 0
            hotbarRender()
        } else if (player.interfaceOpen.name === "inventory") {
            player.interfaceOpen.tab = 0
        }
    } if(e.key === "2") {
        if(player.interfaceOpen === undefined) {
            player.itemSelected = 1
            hotbarRender()
        } else if (player.interfaceOpen.name === "inventory") {
            player.interfaceOpen.tab = 1
        }
    } if(e.key === "3") {
        if(player.interfaceOpen === undefined) {
            player.itemSelected = 2
            hotbarRender()
        } else if (player.interfaceOpen.name === "inventory") {
            player.interfaceOpen.tab = 2
        }
    } if(e.key === "4") {
        if(player.interfaceOpen === undefined) {
            player.itemSelected = 3
            hotbarRender()
        } else if (player.interfaceOpen.name === "inventory") {
            player.interfaceOpen.tab = 3
        }
    } if(e.key === "5") {
        if(player.interfaceOpen === undefined) {
            player.itemSelected = 4
            hotbarRender()
        } else if (player.interfaceOpen.name === "inventory") {
            player.interfaceOpen.tab = 4
        }
    }
    if(e.key === "e") {
        //inventoryAdd(new Item("Wood", "Resource", 3))
    }
}
function logUp(e) {
    if(e.key === "w") {
        player.vy = 0
    } if(e.key === "a") {
        player.vx = 0
    } if(e.key === "s") {
        player.vy = 0
    } if(e.key === "d") {
        player.vx = 0
    } if(e.key === " ") {
        spaceLock = false
    }
}




document.addEventListener('click', function(e) {
    getMouseClick(e)
})
var clickX = null
var clickY = null
function getMouseClick(event) {
    var mx_ = event.clientX
    var my_ = event.clientY
    clickX = mx_
    clickY = my_
    console.log(clickX, clickY)

    if(player.interfaceOpen !== undefined) {
        if(player.interfaceOpen.name === "inventory") {
            let item = undefined
            for(let i = 0; i < 13; i++) {
                for(let y = 0; y < 2; y++) {
                    //let xOffset = (window.innerWidth-64*13)/2 -0
                    //let yOffset = (window.innerHeight-64*7)/2 -0
                    let slot = document.getElementById("slot"+String(i+(y*13)))
                    //console.log(clickX, clickY, 1, 1, Number(slot.style.left.replace("px","")), Number(slot.style.top.replace("px","")), 64, 64)
                    if(overlapping(clickX, clickY, 1, 1, Number(slot.style.left.replace("px","")), Number(slot.style.top.replace("px","")), 64, 64)) {
                        item = i+(y*13)
                    }
                }
            }
            if(item !== undefined) {
                if(player.inventory.items[item] === null) {
                    if(player.inventory.items[player.inventory.itemSelected] !== undefined) {
                        player.inventory.items[item] = player.inventory.items[player.inventory.itemSelected]
                        player.inventory.items[player.inventory.itemSelected] = null
                        player.inventory.itemSelected = undefined
                    }
                    console.log("no")
                } else {
                    console.log("yes")
                    if(player.inventory.items[player.inventory.itemSelected] === undefined) {
                        player.inventory.itemSelected = item
                    } else {
                        let placeholder = player.inventory.items[item]
                        player.inventory.items[item] = player.inventory.items[player.inventory.itemSelected]
                        player.inventory.items[player.inventory.itemSelected] = placeholder
                        player.inventory.itemSelected = undefined
                    }
                }
            }
            //console.log(item, player.inventory.itemSelected, player.inventory.items)
            
            clickX = null
            clickY = null
        }
    }
}

document.addEventListener('mousemove', function(e) {
    getMousePos(e)
})
var hx = null
var hy = null
function getMousePos(event) {
    var mx_ = event.clientX
    var my_ = event.clientY
    hx = mx_
    hy = my_
    document.getElementById("hover").style.left = String(hx) + "px"
    document.getElementById("hover").style.top = String(hy) + "px"
}