let spaceLock = false
document.addEventListener('keydown', logKey);
document.addEventListener('keyup', logUp);

var typing = false
var typingText = ""

function logKey(e) {
    if(typing === false) {
        if (e.key === "w") {
            if (player.canMove) {
                player.vy = -player.speed
                player.rotation = 0
            }
        } if (e.key === "a") {
            if (player.canMove) {
                player.vx = -player.speed
                player.rotation = 1
            }
        } if (e.key === "s") {
            if (player.canMove) {
                player.vy = player.speed
                player.rotation = 2
            }
        } if (e.key === "d") {
            if (player.canMove) {
                player.vx = player.speed
                player.rotation = 3
            }
        } if (e.key === " " && spaceLock !== true) {


            if (player.inventory.items[player.itemSelected].name === "Fractured Axe") {
                if (player.interactTile.decor === "borealTree1" && player.interactTile.cooldown === 0) {
                    
                    for(let m in maps) {
                        if(player.place === maps[m].name) {/*
                            console.log("yes")
                            socket.emit("updateMap", "hitTree", 
                                {x: player.interactTile.pos.x, y: player.interactTile.pos.y, map: Number(m)}
                            )
                            */
                            socket.emit("updateTiles", player.interactTile.pos.x, player.interactTile.pos.y, m, {hits: player.interactTile.hits - 1, cooldown: 4})
                            if(player.interactTile.hits < 1) {
                                socket.emit("updateTiles", player.interactTile.pos.x, player.interactTile.pos.y, m, {decor: "", collisionDetection: false} )
                                inventoryAdd(new Item("Wood", "Resource", Math.floor(Math.random() * 5 + 5)))
                            }
                        }
                    }

                }
            } else if (player.inventory.items[player.itemSelected].name === "Fractured Pickaxe") {
                if (player.interactTile.decor === "rock" && player.interactTile.cooldown === 0) {
                    for(let m in maps) {
                        if(player.place === maps[m].name) {
                            console.log("yes")
                            socket.emit("updateMap", "hitRock", 
                                {x: player.interactTile.pos.x, y: player.interactTile.pos.y, map: Number(m)}
                            )
                        }
                    }

                } else if(player.interactTile.decor === "" && player.interactTile.type === "dugSnow") {
                    for(let m in maps) {
                        if(player.place === maps[m].name) {
                            socket.emit("updateTiles", player.interactTile.pos.x, player.interactTile.pos.y, m, {type: "snow"})

                        }
                    }
                }
            } else if (player.inventory.items[player.itemSelected].name === "Fractured Shovel") {
                if (player.interactTile.decor === "") {
                    if(player.interactTile.type === "snow") {

                        for(let m in maps) {
                            if(player.place === maps[m].name) {
                                socket.emit("updateTiles", player.interactTile.pos.x, player.interactTile.pos.y, m, {type: "dugSnow"})

                            }
                        }
    
                    }
                    
                    
                }
            }

            for(let h of hitboxes) {
                if(overlapping(player.interactTile.pos.x*64+1, player.interactTile.pos.y*64+1, 62, 62, h.x, h.y, h.w, h.h)) {
                    h.onPlayerSpace()
                }
            }
            
            spaceLock = true




        } if (e.key === "Escape") {
            if (player.interfaceOpen !== undefined) {
                if (player.interfaceOpen === player.inventory) {
                    player.interfaceOpen = undefined
                }


            } else {
                player.interfaceOpen = player.inventory

            }
        } if (e.key === "1") {
            if (player.interfaceOpen === undefined) {
                player.itemSelected = 0
            } else if (player.interfaceOpen.name === "inventory") {
                player.interfaceOpen.tab = 0
            }
        } if (e.key === "2") {
            if (player.interfaceOpen === undefined) {
                player.itemSelected = 1
            } else if (player.interfaceOpen.name === "inventory") {
                player.interfaceOpen.tab = 1
            }
        } if (e.key === "3") {
            if (player.interfaceOpen === undefined) {
                player.itemSelected = 2
            } else if (player.interfaceOpen.name === "inventory") {
                player.interfaceOpen.tab = 2
            }
        } if (e.key === "4") {
            if (player.interfaceOpen === undefined) {
                player.itemSelected = 3
            } else if (player.interfaceOpen.name === "inventory") {
                player.interfaceOpen.tab = 3
            }
        } if (e.key === "5") {
            if (player.interfaceOpen === undefined) {
                player.itemSelected = 4
            } else if (player.interfaceOpen.name === "inventory") {
                player.interfaceOpen.tab = 4

            }
        }
        if (e.key === "e") {
            typing = true
        }
    } else {
        if (e.key === "Enter") {
            typing = false
            if(typingText !== "") {
                socket.emit("requestUniversalNotification", {time: 3, size: 32, colour: "#000000", text: player.name + ": " + typingText})
            }
            typingText = ""
        } else if(e.key === "Backspace") {
            typingText = typingText.slice(0, typingText.length - 1)
        } else if(e.key === "Escape" || e.key === "Control" || e.key === "Shift") {

        } else {
            typingText += e.key
        }
    }
}
function logUp(e) {
    if(typing === false) {
        if (e.key === "w") {
            player.vy = 0
        } if (e.key === "a") {
            player.vx = 0
        } if (e.key === "s") {
            player.vy = 0
        } if (e.key === "d") {
            player.vx = 0
        } if (e.key === " ") {
            spaceLock = false
        }
    }
}




document.addEventListener('click', function (e) {
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
    /*

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
    */
    if(player.interfaceOpen === player.inventory) {
        if(player.interfaceOpen.tab === 2) {
            for(p in players) {
                let xOffset = (window.innerWidth - 64 * 13) / 2 - 0
                let yOffset = (window.innerHeight - 64 * 7) / 2 - 0
                if(overlapping(clickX, clickY, 1, 1, xOffset+11*64+12, yOffset+p*64+12, 2*64-24, 1*64-24)) {
                    for(let l in parties) {
                        for(let x in parties[l]) {
                            if(players[p].id === parties[l][x].id) {

                            }
                        }
                    }
                    
                }
            }
        }
    }
}

document.addEventListener('mousemove', function (e) {
    getMousePos(e)
})
var hx = null
var hy = null
function getMousePos(event) {
    var mx_ = event.clientX
    var my_ = event.clientY
    hx = mx_
    hy = my_
    //document.getElementById("hover").style.left = String(hx) + "px"
    //document.getElementById("hover").style.top = String(hy) + "px"
}