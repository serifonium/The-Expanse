document.addEventListener('keydown', logKey);
        document.addEventListener('keyup', logDown);
        function logKey(e) {
            if(e.key === "w") {
                if(player.canMove) {
                    change("changePlayerVelocity", {x: undefined, y: -player.speed}, player)
                    change("changePlayerRot", {rotation: 0}, player)
                }
            } if(e.key === "a") {
                if(player.canMove) {
                    change("changePlayerVelocity", {x: -player.speed, y: undefined}, player)
                    change("changePlayerRot", {rotation: 1}, player)
                }
            } if(e.key === "s") {
                if(player.canMove) {
                    change("changePlayerVelocity", {x: undefined, y: player.speed}, player)
                    change("changePlayerRot", {rotation: 2}, player)
                }
            } if(e.key === "d") {
                if(player.canMove) {
                    change("changePlayerVelocity", {x: player.speed, y: undefined}, player)
                    change("changePlayerRot", {rotation: 3}, player)
                }
            } if(e.key === " ") {
                
                
                
              
                
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
                change("changePlayerVelocity", {x: undefined, y: 0}, player)
            } if(e.key === "a") {
                change("changePlayerVelocity", {x: 0, y: undefined}, player)
            } if(e.key === "s") {
                change("changePlayerVelocity", {x: undefined, y: 0}, player)
            } if(e.key === "d") {
                change("changePlayerVelocity", {x: 0, y: undefined}, player)
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