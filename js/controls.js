document.addEventListener('keydown', logKey);
        document.addEventListener('keyup', logDown);
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
                if(player.inventory.items[player.itemSelected].name === "Fractured Axe") {
                    if(player.interactTile.decor === "borealTree1" && player.interactTile.cooldown === 0) {
                        player.interactTile.hits += -1
                        player.interactTile.cooldown = 4
                        if(player.interactTile.hits === 0) {
                            player.interactTile.decor = ""
                            player.interactTile.tags.collisionDetection = false
                            
                            document.getElementById(String(player.interactTile.pos.x + (player.interactTile.pos.y * player.map.width)) + " borealTree1").remove()
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