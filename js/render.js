
/*

function render() {
    let tiles = player.map.grid

    //tiles rendering
    for(let x = 0; x < player.map.width; x++) {
        for(let y = 0; y < player.map.height; y++) {
            if(tiles[x][y].type === "void") {
                ctx.fillStyle = "#111111";
                ctx.fillRect(64*x+cx, 64*y+cy, 64, 64);
            } else if(tiles[x][y].type === "space") {
                ctx.fillStyle = "#000000";
                ctx.fillRect(64*x+cx, 64*y+cy, 64, 64);
            }
            else if(tiles[x][y].type === "wall1") {
                ctx.fillStyle = "#444444";
                ctx.fillRect(64*x+cx, 64*y+cy, 64, 64);
            }
            else if(tiles[x][y].type === "floor1") {
                ctx.drawImage(floor1, 64*x+cx, 64*y+cy);
            } else if(tiles[x][y].type === "floor2") {
                ctx.drawImage(floor2, 64*x+cx, 64*y+cy);
            } else if(tiles[x][y].type === "water1") {
                ctx.drawImage(water1, 64*x+cx, 64*y+cy);
            } else if(tiles[x][y].type === "stone") {
                ctx.fillStyle = "#666666";
                ctx.fillRect(64*x+cx, 64*y+cy, 64, 64);
            }

            else if(tiles[x][y].type === "snow") {
                ctx.fillStyle = "#f0f0f0";
                //ctx.fillRect(64*x, 64*y, 64, 64);
                ctx.drawImage(snow, 64*x+cx, 64*y+cy)
            } else if(tiles[x][y].type === "ice") {
                ctx.drawImage(ice1, 64*x+cx, 64*y+cy);
                if(tiles[x][y].up !== undefined) {
                    if (tiles[x][y].up.type !== "ice") {
                        ctx.fillStyle = "#f0f0f0";
                        ctx.fillRect(64*x+cx, 64*y+cy, 64, 4);
                    }
                } if(tiles[x][y].right !== undefined) {
                    if (tiles[x][y].right.type !== "ice") {
                        ctx.fillStyle = "#f0f0f0";
                        ctx.fillRect(64*x+60+cx, 64*y+cy, 4, 64);
                    }
                } if(tiles[x][y].down !== undefined) {
                    if (tiles[x][y].down.type !== "ice") {
                        ctx.fillStyle = "#f0f0f0";
                        ctx.fillRect(64*x+cx, 64*y+60+cy, 64, 4);
                    }
                } if(tiles[x][y].left !== undefined) {
                    if (tiles[x][y].left.type !== "ice") {
                        ctx.fillStyle = "#f0f0f0";
                        ctx.fillRect(64*x+cx, 64*y+cy, 4, 64);
                    }
                }
                
            } 
        }
    }
    for(let x = 0; x < player.map.width; x++) {
        for(let y = 0; y < player.map.height; y++) {
            if(tiles[x][y].type === "woodenPlankTile1") {
                ctx.drawImage(woodenPlankTile1, 64*x+cx, 64*y+cy);
                ctx.fillStyle = "#b37c6b"
                if(tiles[x][y].left !== undefined) {
                    if(tiles[x][y].left.type !== "woodenPlankWall1" && tiles[x][y].left.type !== "woodenPlankTile1") {
                        ctx.fillRect(64*x+cx-8, 64*y+cy, 8, 64)
                    }
                } if(tiles[x][y].right !== undefined) {
                    if(tiles[x][y].right.type !== "woodenPlankWall1" && tiles[x][y].right.type !== "woodenPlankTile1") {
                        ctx.fillRect(64*x+cx+64, 64*y+cy, 8, 64)
                    }
                } if(tiles[x][y].down !== undefined) {
                    if(tiles[x][y].down.type !== "woodenPlankWall1" && tiles[x][y].down.type !== "woodenPlankTile1") {
                        ctx.fillRect(64*x+cx, 64*y+cy +64, 64, 8)
                        if(tiles[x][y].left.type !== "woodenPlankWall1" && tiles[x][y].left.type !== "woodenPlankTile1") {
                            ctx.fillRect(64*x+cx-8, 64*y+cy +64, 8, 8)
                        } if(tiles[x][y].right.type !== "woodenPlankWall1" && tiles[x][y].right.type !== "woodenPlankTile1") {
                            ctx.fillRect(64*x+cx+64, 64*y+cy +64, 8, 8)
                        }
                    }
                } 
            }
            if(tiles[x][y].type === "woodenPlankWall1") {
                ctx.drawImage(woodenPlankWall1, 64*x+cx, 64*y+cy  -32);
                ctx.fillStyle = "#b37c6b"
                if(tiles[x][y].left !== undefined) {
                    if(tiles[x][y].left.type !== "woodenPlankWall1" && tiles[x][y].left.type !== "woodenPlankTile1") {
                        ctx.fillRect(64*x+cx-8, 64*y+cy-32, 8, 96)
                    }
                } if(tiles[x][y].right !== undefined) {
                    if(tiles[x][y].right.type !== "woodenPlankWall1" && tiles[x][y].right.type !== "woodenPlankTile1") {
                        ctx.fillRect(64*x+cx+64, 64*y+cy-32, 8, 96)
                    }
                }
            } 
            if(tiles[x][y].decor === "pebbles") {
                ctx.drawImage(pebbles, 64*x + cx, 64*y + cy);
            } if(tiles[x][y].decor === "bridge1") {
                ctx.drawImage(bridge1, 64*x + cx, 64*y + cy);
            }
        }
    }
    for(let x = 0; x < player.map.width; x++) {
        for(let y = 0; y < player.map.height; y++) {
            if(tiles[x][y].type === "woodenPlankWall1") {
                ctx.drawImage(woodenPlankWall1, 64*x+cx, 64*y+cy  -32);
            }
        }
    }
    ctx.fillStyle = "#888888"
    ctx.fillRect(player.x+cx, player.y+cy, 64, 64)
    //ctx.drawImage(playerForwardIdle, player.x+cx, player.y+cy-64)

    for(let e of player.map.enemies) {
        ctx.fillStyle = "#ff8888"
        ctx.fillRect(e.x + cx, e.y + cy, e.w, e.h)
    }
    
    //decor rendering
    for(let x = 0; x < player.map.width; x++) {
        for(let y = 0; y < player.map.height; y++) {
            if(tiles[x][y].decor === "shipComputer") {
                ctx.drawImage(shipComputer, 64*x+cx, 64*y+cy);
            } 
        }
    } for(let x = 0; x < player.map.width; x++) {
        for(let y = 0; y < player.map.height; y++) {
            if(tiles[x][y].decor === "borealTree1") {
                if(tiles[x][y].offsetcounter === 0) {tiles[x][y].offset = 0}
                else if(tiles[x][y].offsetcounter < 1) {tiles[x][y].offset = -2}
                else if(tiles[x][y].offsetcounter < 2) {tiles[x][y].offset = -4}
                else if(tiles[x][y].offsetcounter < 3) {tiles[x][y].offset = -2}
                else if(tiles[x][y].offsetcounter < 4) {tiles[x][y].offset = 0}
                else if(tiles[x][y].offsetcounter < 5) {tiles[x][y].offset = 2}
                else if(tiles[x][y].offsetcounter < 6) {tiles[x][y].offset = 4}
                ctx.drawImage(borealTree1, 64*x - 32 + tiles[x][y].offset + cx, 64*y - 32 - 4*64 + cy);
            } 
            if(tiles[x][y].decor === "rock") {
                ctx.drawImage(rock, 64*x+cx, 64*y+cy)
            }
        }
    } for(let x = 0; x < player.map.width; x++) {
        for(let y = 0; y < player.map.height; y++) {
            if(tiles[x][y].decor === "borealTreeStump") {
                if(tiles[x][y].offsetcounter === 0) {tiles[x][y].offset = 0}
                else if(tiles[x][y].offsetcounter < 1) {tiles[x][y].offset = -2}
                else if(tiles[x][y].offsetcounter < 2) {tiles[x][y].offset = -4}
                else if(tiles[x][y].offsetcounter < 3) {tiles[x][y].offset = -2}
                else if(tiles[x][y].offsetcounter < 4) {tiles[x][y].offset = 0}
                else if(tiles[x][y].offsetcounter < 5) {tiles[x][y].offset = 2}
                else if(tiles[x][y].offsetcounter < 6) {tiles[x][y].offset = 4}
                ctx.drawImage(borealTreeStump, 64*x - 32 + tiles[x][y].offset + cx, 64*y - 32 + cy);
            } 
        }
    } for(let x = 0; x < player.map.width; x++) {
        for(let y = 0; y < player.map.height; y++) {
            if(tiles[x][y].decor === "ironTree") {
                if(tiles[x][y].offsetcounter === 0) {tiles[x][y].offset = 0}
                else if(tiles[x][y].offsetcounter < 1) {tiles[x][y].offset = -2}
                else if(tiles[x][y].offsetcounter < 2) {tiles[x][y].offset = -4}
                else if(tiles[x][y].offsetcounter < 3) {tiles[x][y].offset = -2}
                else if(tiles[x][y].offsetcounter < 4) {tiles[x][y].offset = 0}
                else if(tiles[x][y].offsetcounter < 5) {tiles[x][y].offset = 2}
                else if(tiles[x][y].offsetcounter < 6) {tiles[x][y].offset = 4}
                ctx.drawImage(ironTree, 64*x - 32 + tiles[x][y].offset + cx, 64*y - 32 - 4*64 + cy);
            } 
        }
    } for(let x = 0; x < player.map.width; x++) {
        for(let y = 0; y < player.map.height; y++) {
            if(tiles[x][y].decor === "furnace") { 
                ctx.drawImage(furnace, 64*x + cx, 64*y + cy);
            }
            if(tiles[x][y].decor === "lumberShack") { 
                ctx.drawImage(lumberShack, 64*x + cx, 64*y + cy - 64*2);
            }
            
            
        }
    }
    

    //particle rendering
    //particleRender()
    
    function particleRender() {
        
        for (let particle of p) {
            particle.x = particle.x + particle.vx + Math.floor(Math.random() * 2000 - 1000)/10000
            particle.y = particle.y + particle.vy + Math.floor(Math.random() * 2000 - 1000)/10000
            if(particle.x < 0) {
                particle.x = player.map.width * 64 - 1
            } if(particle.x > player.map.width * 64) {
                particle.x = 1
            } if(particle.y < 0) {
                particle.y = player.map.height * 64 - 1
            } if(particle.y > player.map.height * 64) {
                particle.y = 1
            }
            if(player.map.grid[Math.floor(particle.x/64)][Math.floor(particle.y/64)].type === "space") {
                ctx.globalAlpha = 0.5
                ctx.fillStyle = "#FFFFFF"
                ctx.fillRect(particle.x, particle.y - particle.size, particle.size, particle.size * 3)
                ctx.fillRect(particle.x - particle.size, particle.y, particle.size * 3, particle.size)
                ctx.globalAlpha = 1
            }
            
        }
    }
    
    
    
    if(player.personalOptions.highlightInteract === true) {
        ctx.fillStyle = "#990000"
        if(player.interactTile !== undefined) {
            ctx.fillRect(player.interactTile.pos.x*64+cx, player.interactTile.pos.y*64+cy, 4, 64)
            ctx.fillRect(player.interactTile.pos.x*64+cx, player.interactTile.pos.y*64+cy, 64, 4)
            ctx.fillRect(player.interactTile.pos.x*64+cx, player.interactTile.pos.y*64+60+cy, 64, 4)
            ctx.fillRect(player.interactTile.pos.x*64+60+cx, player.interactTile.pos.y*64+cy, 4, 64)
        }
    }
    if(player.personalOptions.hitboxesHighlighted === true) {
        ctx.fillStyle = "#0066ff"
        for (let i of currentHitboxes) {
            ctx.fillRect(i.x+cx, i.y+cy, 4, i.h)
            ctx.fillRect(i.x+cx, i.y+cy, i.w, 4)
            ctx.fillRect(i.x+cx, i.y+i.h-4+cy, i.w, 4)
            ctx.fillRect(i.x+i.w-4+cx, i.y+cy, 4, i.h)
        }
    }
    for (let x in player.map.grid) {
        for (let y in player.map.grid[x]) {
            if (player.map.grid[x][y].onPlayerInteractActive) {
                player.map.grid[x][y].onPlayerInteractRender()
            }
        }
    }
    //render UI

    
    if(hx !== null && hy !== null) {
        ctx.fillStyle = "#000000"
        ctx.fillRect(hx-25, hy-25, 50, 50)
    }
    
    

    function hotbarRender() {
        ctx.fillStyle = "#333333"
        ctx.globalAlpha = 0.5
        ctx.fillRect(0, 604, 324, 36)
        ctx.globalAlpha = 1
        
        for(let i = 0; i < 5; i++) {
            ctx.fillStyle = "#cccccc"
            if(player.itemSelected === i) {
                ctx.fillStyle = "#21b2ff"
            }
            ctx.fillRect(i*64, 640-32, 4, 32)
            ctx.fillRect(i*64, 640-4, 64, 4)
            ctx.fillRect(i*64+60, 640-32, 4, 32)
            if(player.hotbar[i] !== undefined && player.hotbar[i] !== null ) {
                if(player.hotbar[i].texture !== undefined) {
                    ctx.drawImage(player.hotbar[i].texture, i*64, 640-64)
                    if(player.hotbar[i].amount > 1) {
                        ctx.fillStyle = "#ffffff"
                        ctx.font = "20px serif"
                        ctx.fillText(String(player.hotbar[i].amount), i*64+48, 640-8)
                    }
                }
            }
            
        } for(let b in player.effects) {
            ctx.globalAlpha = 1
            if(player.effects[b].duration < 6) {
                ctx.globalAlpha = 0.7
            } if(player.effects[b].duration < 4) {
                ctx.globalAlpha = 0.5
            } if(player.effects[b].duration < 2) {
                ctx.globalAlpha = 0.2
            }
            if(player.effects[b].name === "Coffee Shot") {
                ctx.drawImage(coffeeShotEffect, (b*64)+320, 640-64)
            } else if(player.effects[b].name === "Frostburn Affliction") {
                ctx.drawImage(frostburnEffect, (b*64)+320, 640-64)
            } else if(player.effects[b].name === "Rage") {
                ctx.drawImage(rageEffect, (b*64)+320, 640-64)
            }
            ctx.globalAlpha = 1
            
        }
        for(let b in player.effects) {
            if(hx > (b*64)+320 && hx < (b*64)+384 && hy > 640-64 && hy < 640) {
                drawBox(hx, hy-68, player.effects[b].name.length*16+4, 36+32)
                drawText(player.effects[b].name.toLowerCase(), hx+8, hy+8-68, 20, "#ffffff", false)
                drawText(secondsToTime(Math.floor(player.effects[b].duration)), hx+8, hy+8-36, 20, "#cccccc", false)
            }
        }
        for(let i in notifications) {
            if(notifications[i].frame > 100) {
                ctx.globalAlpha = 0.8
            } if(notifications[i].frame > 105) {
                ctx.globalAlpha = 0.6
            } if(notifications[i].frame > 110) {
                ctx.globalAlpha = 0.4
            } if(notifications[i].frame > 115) {
                ctx.globalAlpha = 0.2
            }
            ctx.fillStyle = "#bbbbbb"
            ctx.fillRect(28, 508-i*96, notifications[i].item.name.length*16+40+64, 1*64+8)
            ctx.fillStyle = "#6b6b6b"
            ctx.fillRect(32, 512-i*96, notifications[i].item.name.length*16+32+64, 1*64)
            
            drawText(notifications[i].item.name.toLowerCase() + " +" + notifications[i].item.amount, 32+16, 512-i*96+16, 20, "#ffffff", false)
            ctx.globalAlpha = 1
            notifications[i].frame++
            if(notifications[i].frame > 120) {
                notifications.splice(i, 1)
            }
        }
        
    }
    hotbarRender()
    if (player.interfaceOpen !== undefined) {
        if(player.interfaceOpen.name === "shipComputer") {
            //interfaceShipSetup()
            ctx.globalAlpha = 0.5
            ctx.fillStyle = "#000000"
            ctx.fillRect(0, 0, 1280, 640)
            ctx.globalAlpha = 1
            ctx.fillStyle = "#bbbbbb"
            ctx.fillRect(64, 64, 1152, 512)
            ctx.fillStyle = "#6b6b6b"
            ctx.fillRect(124, 124, 328, 328)
            ctx.fillStyle = "#bbbbbb"
            ctx.fillRect(132, 132, 312, 312)
            ctx.fillStyle = "#6b6b6b"
            for(let x = 2; x < 7; x++) {
                for (let y = 2; y < 7; y++) {
                    ctx.drawImage(slot1, x*64, y*64)
                }
            }
            ctx.fillRect(124, 452, 328, 64)
            ctx.fillStyle = "#dddddd"
            ctx.fillRect(132, 452, 312, 56)
            ctx.fillStyle = "#222222"
            ctx.font = "20px serif"
            ctx.fillText("Equipment Grid", 288, 484 + 2, 128)
            ctx.fillStyle = "#6b6b6b"
            ctx.fillRect(8*64-4, 2*64-4, 72+5*64, 72)
            ctx.drawImage(slot1, 8*64, 2*64)
            ctx.drawImage(nuclearFuel, 8*64, 2*64)
            ctx.fillStyle = "#bbbbbb"
            ctx.fillRect(9*64+4, 2*64+4, 312, 56)
            ctx.fillStyle = "#222222"
            ctx.fillText("Reactor Power: " + player.equippedSpaceship.fuel + "mJ", 11*64+25, 2*64+40)
            ctx.fillStyle = "#6b6b6b"
            ctx.fillRect(8*64-4, 4*64-4, 6*64+8, 4*64+8)
            ctx.fillStyle = "#bbbbbb"
            ctx.fillRect(8*64+4, 4*64+4, 6*64-8, 4*64-8)
            ctx.fillStyle = "#6b6b6b"
            ctx.fillRect(12*64-4, 4*64-4, 8, 4*64+8)
            ctx.fillStyle = "#222222"
            ctx.fillText("Speed:", 10*64+50, 4*64+40)
            ctx.fillText("Defense:", 10*64+35, 5*64+8)
            ctx.fillText("Damage:", 10*64+35, 5*64+40)
            ctx.fillText("Shields:", 10*64+40, 6*64+8)
            ctx.fillText("Agility:", 10*64+45, 6*64+40)
            ctx.fillText("Scanning:", 10*64+30, 7*64+8)
        
            ctx.fillText(player.equippedSpaceship.speed, 12*64+45, 4*64+40)
            ctx.fillText(player.equippedSpaceship.defense, 12*64+45, 5*64+8)
            ctx.fillText(player.equippedSpaceship.damage, 12*64+45, 5*64+40)
            ctx.fillText(player.equippedSpaceship.shields, 12*64+45, 6*64+8)
            ctx.fillText(player.equippedSpaceship.agility, 12*64+45, 6*64+40)
            ctx.fillText(player.equippedSpaceship.scanning, 12*64+45, 7*64+8)
            ctx.fillStyle = "#6b6b6b"
            ctx.fillRect(15*64-4, 2*64-4, 3*64+8, 6*64+8)
            ctx.fillStyle = "#bbbbbb"
            ctx.fillRect(15*64+4, 2*64+4, 3*64-8, 6*64-8)
            for(let x = 15; x < 18; x++) {
                for (let y = 2; y < 8; y++) {
                    ctx.drawImage(slot1, x*64, y*64)
                }
            }
            
        }
        if(player.interfaceOpen.name === "shipNavigation") {
            ctx.globalAlpha = 0.5
            ctx.fillStyle = "#000000"
            ctx.fillRect(0, 0, 1280, 640)
            ctx.globalAlpha = 1
            ctx.fillStyle = "#bbbbbb"
            ctx.fillRect(60, 60, 18*64+8, 8*64+8)
            ctx.fillStyle = "#000000"
            ctx.fillRect(64, 64, 18*64, 8*64)
            for(let p of player.galaxy.planets) {
                if(p.type === "Star") {
                    ctx.fillStyle = "#ff9457"
                } else {
                    ctx.fillStyle = "#ffffff"
                }
                r = Math.floor(p.radius/16) + 1
                ctx.fillRect(10*64 - r*4 + p.distance*16, 5*64 - r*4, 8*r, 8*r)
                ctx.fillStyle = "#ffffff"
                ctx.font = "15px serif"
                ctx.fillText(p.name, 10*64 + p.distance*16, 5*64 + r*4+24, 96)
                if(p === player.planet) {
                    ctx.fillStyle = "#dddddd"
                    ctx.fillRect(10*64 - r*4 - 8 + p.distance*16, 5*64 - r*4 - 8,       4, 4*r + 4)
                    ctx.fillRect(10*64 - r*4 - 8 + p.distance*16, 5*64 - r*4 - 8,       4*r + 4, 4)
                    
                    ctx.fillRect(10*64 + 4 + p.distance*16, 5*64 - r*4 - 8,             4*r + 4, 4)
                    ctx.fillRect(10*64 + r*4 + 4 + p.distance*16, 5*64 - r*4 - 8,       4, 4*r  + 4)

                    ctx.fillRect(10*64 - r*4 - 8 + p.distance*16, 5*64 + 4,             4, 4*r + 4)
                    ctx.fillRect(10*64 - r*4 - 8 + p.distance*16, 5*64 + r*4 + 4,       4*r + 4, 4)
                    
                    ctx.fillRect(10*64 + 4 + p.distance*16, 5*64 + r*4 + 4,             4*r, 4)
                    ctx.fillRect(10*64 + r*4 + 4 + p.distance*16, 5*64 + 4,             4, 4*r + 4)
                }
                if(player.interfaceOpen.planetSelected === p) {
                    ctx.fillStyle = "#ff0000"
                    ctx.fillRect(10*64 - r*4 - 8 + p.distance*16, 5*64 - r*4 - 8,       4, 4*r + 4)
                    ctx.fillRect(10*64 - r*4 - 8 + p.distance*16, 5*64 - r*4 - 8,       4*r + 4, 4)
                    
                    ctx.fillRect(10*64 + 4 + p.distance*16, 5*64 - r*4 - 8,             4*r + 4, 4)
                    ctx.fillRect(10*64 + r*4 + 4 + p.distance*16, 5*64 - r*4 - 8,       4, 4*r  + 4)

                    ctx.fillRect(10*64 - r*4 - 8 + p.distance*16, 5*64 + 4,             4, 4*r + 4)
                    ctx.fillRect(10*64 - r*4 - 8 + p.distance*16, 5*64 + r*4 + 4,       4*r + 4, 4)
                    
                    ctx.fillRect(10*64 + 4 + p.distance*16, 5*64 + r*4 + 4,             4*r, 4)
                    ctx.fillRect(10*64 + r*4 + 4 + p.distance*16, 5*64 + 4,             4, 4*r + 4)
                }
            }
            if (player.equippedSpaceship.travelTime > 0) {
                ctx.fillStyle = "#ffffff"
                ctx.font = "25px serif"
                
                drawText("eta travel time: " + String(Math.floor(player.equippedSpaceship.travelTime)), 10*64 , 8*64, 60, "#ffffff", true)
            }
        }
        if(player.interfaceOpen.name === "inventory") {
            ctx.globalAlpha = 0.5
            ctx.fillStyle = "#000000"
            ctx.fillRect(0, 0, 1280, 640)
            ctx.globalAlpha = 1
            ctx.fillStyle = "#bbbbbb"
            ctx.fillRect(60, 124, 18*64+8, 7*64+8)
            ctx.fillStyle = "#6b6b6b"
            ctx.fillRect(64, 128, 18*64, 7*64)
            for(let i = 0; i < 5; i++) {
                ctx.fillStyle = "#6b6b6b"
                ctx.fillRect(64*(i+1)+8, 124, 48, 4)
                if(player.inventory.tab === i) {
                    ctx.drawImage(interfaceTab, 64*(i+1), 64 - 4)
                } else {
                    ctx.drawImage(interfaceTab, 64*(i+1), 64 )
                }
            } 
            ctx.drawImage(inventorySymbol, 64, 64)
            ctx.drawImage(mapSymbol, 128, 64)
            ctx.drawImage(skillsSymbol, 192, 64)
            ctx.drawImage(friendshipSymbol, 256, 64)
            if(player.interfaceOpen.tab === 0) {
                for(let x = 1; x < 19; x++) {
                    for(let y = 2; y < 4; y++) {
                        ctx.drawImage(slot1, x*64, y*64)
                    }
                } for(let x = 1; x < 6; x++) {
                    ctx.drawImage(slot2, x*64, 2*64)
                } for(let y = 5; y < 8; y++) { 
                    ctx.drawImage(slot1, 1*64, y*64)
                    ctx.drawImage(slot1, 4*64, y*64)
                } 
                ctx.fillStyle = "#3b3b3b"
                ctx.fillRect(64*2+4, 64*5+4, 64*2-8, 64*3-8)
                ctx.fillRect(64*1+4, 64*8+4, 64*4-8, 64*1-8)
                ctx.fillStyle = "#ffffff"
                ctx.font = "20px serif"
                drawText(player.name.toLowerCase(), 64*3, 64*8+16, 60, "#ffffff", true)
                for(let x = 0; x < 18; x++) {
                    if(player.inventory.items[x] !== null) {    if(player.inventory.items[x].texture !== undefined) {
                        if(player.inventory.itemSelected !== x) {
                            ctx.drawImage(player.inventory.items[x].texture, (x+1)*64, 2*64)
                            if(player.inventory.items[x].amount > 1) {
                                ctx.fillStyle = "#000000"
                                ctx.font = "20px serif"
                                ctx.fillText(String(player.inventory.items[x].amount), (x+1)*64 + 32, 3*64 - 8)
                            }
                        } else {
                            ctx.drawImage(player.inventory.items[x].texture, hx, hy)
                        }
                    }} 
                    
                } for(let x = 0; x < 18; x++) {
                    if(player.inventory.items[x + 18] !== null) {    if(player.inventory.items[x + 18].texture !== undefined) {
                        if(player.inventory.itemSelected !== x) {
                            ctx.drawImage(player.inventory.items[x + 18].texture, (x+1)*64, 3*64)
                            if(player.inventory.items[x + 18].amount > 1) {
                                ctx.fillStyle = "#000000"
                                ctx.font = "15px serif"
                                //ctx.fillText(player.inventory.items[x + 18].amount, (x+1)*64 + 32, 4*64 - 8)
                                ctx.drawText(player.inventory.items[x + 18].amount, (x+1)*64 + 32, 4*64 - 8, 6, "#000000", true)
                            }
                        }

                    }}
                } 
                for(let x = 0; x < 18; x++) {
                    if(player.inventory.itemSelected === undefined) {
                        if(hx > (x+1)*64 && hx < (x+2)*64 && hy > 2*64 && hy < 3*64 && player.inventory.items[x] !== null) {
                            ctx.fillStyle = "#bbbbbb"
                            ctx.fillRect(hx, hy, player.inventory.items[x].name.length*16+8+4, (1+player.inventory.items[x].desc.length)*32+8+4)
                            ctx.fillStyle = "#6b6b6b"
                            ctx.fillRect(hx+4, hy+4, player.inventory.items[x].name.length*16+4, (1+player.inventory.items[x].desc.length)*32+4)
                            drawText(player.inventory.items[x].name.toLowerCase(), hx+8, hy+8, 30, "#ffffff", false)
                            for(let d in player.inventory.items[x].desc) {
                                drawText(player.inventory.items[x].desc[d].text.toLowerCase(), hx+8, hy+8+(Number(d)+1)*32, 30, player.inventory.items[x].desc[d].colour, false)
                            }
                        }
                    }
                }
                
            } if(player.interfaceOpen.tab === 1) {
                
            } if(player.interfaceOpen.tab === 2) {
                for(let i = 0; i < 6; i++) {
                    ctx.fillStyle = "#bbbbbb"
                    ctx.fillRect(64*1.5 - 4, 64*(i+3) - 36, 10*64+8, 1*64+8)
                    ctx.fillStyle = "#6b6b6b"
                    ctx.fillRect(64*1.5, 64*(i+3) - 32, 10*64, 1*64)
                    ctx.fillStyle = "#bbbbbb"
                    ctx.fillRect(64*7 - 32, 64*(i+3) - 32, 4, 1*64)

                    ctx.fillStyle = "#ff0000"
                    if(i === 0) {
                        ctx.fillRect(64*7-28, 64*(i+3)-32, 
                        Math.floor((player.skills.combat.xp / player.skills.combat.xpRequired)*79)*4, 
                        64)
                    } if(i === 1) {
                        ctx.fillRect(64*7-28, 64*(i+3)-32, 
                        Math.floor((player.skills.foraging.xp / player.skills.foraging.xpRequired)*79)*4, 
                        64)
                    } if(i === 2) {
                        ctx.fillRect(64*7-28, 64*(i+3)-32, 
                        Math.floor((player.skills.mining.xp / player.skills.mining.xpRequired)*79)*4, 
                        64)
                    } if(i === 3) {
                        ctx.fillRect(64*7-28, 64*(i+3)-32, 
                        Math.floor((player.skills.fishing.xp / player.skills.fishing.xpRequired)*79)*4, 
                        64)
                    }

                    ctx.fillStyle = "#bbbbbb"
                    ctx.fillRect(64*8 - 32, 64*(i+3) - 16, 4, 28)
                    ctx.fillRect(64*9 - 32, 64*(i+3) - 16, 4, 28)
                    ctx.fillRect(64*10 - 32, 64*(i+3) - 16, 4, 28)
                    ctx.fillRect(64*11 - 32, 64*(i+3) - 16, 4, 28)
                    
                }
                ctx.font = "20px serif"
                drawText("combat", 64*4, 64*(0+3) - 4,60, "#000000", true)
                drawText("foraging", 64*4, 64*(1+3) - 4,60, "#000000", true)
                drawText("mining", 64*4, 64*(2+3) - 4,60, "#000000", true)
                drawText("fishing", 64*4, 64*(3+3) - 4,60, "#000000", true)
                drawText("engineering", 64*4, 64*(4+3) - 4,60, "#000000", true)
                drawText("dungeoneering", 64*4, 64*(5+3) - 4,60, "#000000", true)
                

                ctx.font = "25px serif"
                ctx.fillText(player.skills.combat.level, 64*4.5 +116, 64*(0+3) -12)
                ctx.fillText(player.skills.foraging.level, 64*4.5 +116, 64*(1+3) -12)
                ctx.fillText(player.skills.mining.level, 64*4.5 +116, 64*(2+3) -12)
                ctx.fillText(player.skills.fishing.level, 64*4.5 +116, 64*(3+3) -12)
                ctx.fillText(player.skills.engineering.level, 64*4.5 +116, 64*(4+3) -12)
                ctx.fillText(player.skills.dungeoneering.level, 64*4.5 +116, 64*(5+3) -12)
            } if(player.interfaceOpen.tab === 3) {
                
            }
            
        }
        if(player.interfaceOpen.name === "Fishing") {
            if(player.interfaceOpen.catchtime <= 0) { 
                ctx.fillStyle = "#000000"
                ctx.fillRect(player.x + 28 + cx - 4, player.y - 64 + cy - 4, 16 + 8, 32 + 8)
                ctx.fillRect(player.x + 28 + cx - 4, player.y - 12 + cy - 4, 16 + 8, 16 + 8)
                ctx.fillStyle = "#e5ff54"
                ctx.fillRect(player.x + 28 + cx, player.y - 64 + cy, 16, 32)
                ctx.fillRect(player.x + 28 + cx, player.y - 12 + cy, 16, 16)
            }
            ctx.fillStyle = "#ff0000"
            ctx.fillRect(player.x + 32 + cx - 16, player.y + 96 + cy, 32, 16)
        }
        if(player.interfaceOpen.name === "textbox") {
            if(player.interfaceOpen.animframe < 12) {
                player.interfaceOpen.animframe++
                if(player.interfaceOpen.animframe < 3) {
                    ctx.fillStyle = "#bbbbbb"
                    ctx.fillRect(9*64 - 4, 8*64 - 4 + 128, 2*64 + 8, 1*64 + 8)
                    ctx.fillStyle = "#6b6b6b"
                    ctx.fillRect(9*64, 7*64 + 128, 2*64, 1*64)
                } else if(player.interfaceOpen.animframe < 6) {
                    ctx.fillStyle = "#bbbbbb"
                    ctx.fillRect(8*64 - 4, 6.5*64 - 4 + 64, 4*64 + 8, 2*64 + 8)
                    ctx.fillStyle = "#6b6b6b"
                    ctx.fillRect(8*64, 6.5*64 + 64, 4*64, 2*64)
                } else if(player.interfaceOpen.animframe < 9) {
                    ctx.fillStyle = "#bbbbbb"
                    ctx.fillRect(5*64 - 4, 6.25*64 - 4, 10*64 + 8, 2.5*64 + 8)
                    ctx.fillStyle = "#6b6b6b"
                    ctx.fillRect(5*64, 6.25*64, 10*64, 2.5*64)
                } else {
                    ctx.fillStyle = "#bbbbbb"
                    ctx.fillRect(1*64 - 4, 6*64 - 4, 18*64 + 8, 3*64 + 8)
                    ctx.fillStyle = "#6b6b6b"
                    ctx.fillRect(1*64, 6*64, 18*64, 3*64)
                }
            } else {
                if(player.interfaceOpen.text !== player.interfaceOpen.fulltext) {
                    if(player.interfaceOpen.cooldown >= 2) {
                        player.interfaceOpen.text = player.interfaceOpen.text.concat(player.interfaceOpen.fulltext[player.interfaceOpen.text.length])
                        
                        player.interfaceOpen.cooldown = 0
                        if(player.interfaceOpen.text === player.interfaceOpen.fulltext) {
                            player.interfaceOpen.finished = true
                        }
                    }
                    
                    player.interfaceOpen.cooldown++
                } 
                ctx.fillStyle = "#bbbbbb"
                ctx.fillRect(1*64 - 4, 6*64 - 4, 18*64 + 8, 3*64 + 8)
                ctx.fillStyle = "#6b6b6b"
                ctx.fillRect(1*64, 6*64, 18*64, 3*64)
                drawText(player.interfaceOpen.text, 1*64+4, 6*64+4, 60, player.textbox.colour, false)
                ctx.fillStyle = "#bbbbbb"
                //ctx.fillRect(16*64, 6*64, 4, 3*64)
                
            }
        }
        if(player.interfaceOpen.name === "furnace") {
            ctx.globalAlpha = 0.5
            ctx.fillStyle = "#000000"
            ctx.fillRect(0, 0, 1280, 640)
            ctx.globalAlpha = 1
            ctx.fillStyle = "#bbbbbb"
            ctx.fillRect(1*64 - 4, 1*64 - 4, 18*64 + 8, 8*64 + 8)
            ctx.fillStyle = "#6b6b6b"
            ctx.fillRect(1*64, 1*64, 18*64, 8*64)
            ctx.drawImage(slot1, 2*64, 7*64)
            ctx.drawImage(slot1, 2*64, 2*64)
            for(let x = 10; x < 19; x++) {
                for(let y = 2; y < 6; y++) {
                    ctx.drawImage(slot1, x*64, y*64)
                    if(player.inventory.items[(x-10)+((y-2)*9)] !== null) {    
                        if(player.inventory.items[(x-10)+((y-2)*9)].texture !== undefined) {
                            ctx.drawImage(player.inventory.items[(x-10)+((y-2)*9)].texture, x*64, y*64)
                            
                        }
                    }
                }
            } for(let x = 10; x < 15; x++) {
                for(let y = 2; y < 3; y++) {
                    ctx.drawImage(slot2, x*64, y*64)
                    if(player.inventory.items[(x-10)+((y-2)*9)] !== null) {    
                        if(player.inventory.items[(x-10)+((y-2)*9)].texture !== undefined) {
                            ctx.drawImage(player.inventory.items[(x-10)+((y-2)*9)].texture, x*64, y*64)
                            
                        }
                    }
                }
            }
        }
        if(player.interfaceOpen.name === "Lumber Shack Shop") {
            ctx.globalAlpha = 0.5
            ctx.fillStyle = "#000000"
            ctx.fillRect(0, 0, 1280, 640)
            ctx.globalAlpha = 1
            drawBox(60, 60, 64*18, 64*8)
            
            for(let t in player.interfaceOpen.shop.trades) {
                let trade = player.interfaceOpen.shop.trades[t]
                //console.log(trade.unlocked, player.interfaceOpen.shop.trades)
                if (trade.unlocked === true) {
                    
                    drawBox(60, 60+t*64, 64*8, 64*1)
                    drawBox(9*64-4, 1*64-4, 5*64-4, 8*64)
                    drawBox(14*64-4, 1*64-4, 5*64, 5*64)
                    ctx.drawImage(coin, 64*7, 64+t*64)
                    drawText(String(trade.cost), 64*8, 64+t*64+16, 4, "#ffffff", false)
                    drawText(String(trade.item.name.toLowerCase()), 64*2, 64+t*64+16, 20, "#ffffff", false)
                }
            }
            drawText(String(player.name.toLowerCase()), 64*9+8, 1*64+16, 20, "#ffffff", false)
            ctx.drawImage(coin, 64*9, 2*64)
            drawText(String(player.balance), 64*10, 2*64+16, 20, "#ffffff", false)
        }
    }
    //drawText("qwertyuiopasdfghjklzxcvbnm,.?'1234567890", 300, 300, 32, "#000000", false)
    
    
}

*/


function setupRender() {
    for(let x in player.map.grid) {
        for(let y in player.map.grid[x]) {
            let tile = player.map.grid[x][y]
            //console.log(String(x+(y*player.map.width)), Number(x), Number(y))
            if(tile.type === "snow") {
                drawIMG("images/snow.png", x*64, y*64, String(Number(x)+(Number(y)*player.map.width)), "game")
                
            } if(tile.type === "ice") {
                drawIMG("images/ice1.png", x*64, y*64, String(Number(x)+(Number(y)*player.map.width)), "game")
                if(tile.left !== undefined) {
                    if(tile.left.type !== "ice") {
                        drawRECT(x*64, y*64, 4, 64, "#f0f0f0", String(Number(x)+(Number(y)*player.map.width))+" left", "game")
                    }
                } if(tile.down !== undefined) {
                    if(tile.down.type !== "ice") {
                        drawRECT(x*64, y*64+60, 64, 4, "#f0f0f0", String(Number(x)+(Number(y)*player.map.width))+" down", "game")
                    }
                } if(tile.right !== undefined) {
                    if(tile.right.type !== "ice") {
                        drawRECT(x*64+60, y*64, 4, 64, "#f0f0f0", String(Number(x)+(Number(y)*player.map.width))+" right", "game")
                    }
                } if(tile.up !== undefined) {
                    if(tile.up.type !== "ice") {
                        drawRECT(x*64, y*64, 64, 4, "#f0f0f0", String(Number(x)+(Number(y)*player.map.width))+" up", "game")
                    }
                }
            } if(tile.type === "water1") {
                drawIMG("images/water1.png", x*64, y*64, String(Number(x)+(Number(y)*player.map.width)), "game")
            } 
        }
    }
        
    
    {
        let playerBox = document.createElement("div");
        playerBox.style = "position:absolute; left:" + player.x + "px; top:" + player.y + "px; height: " + 64 + "px; width: " + 64 + "px; margin-bottom: 15px; background-color: #999999"
        playerBox.id = "playerBox"
        let body = document.getElementById("game");
        body.appendChild(playerBox);
    }
    
    for(let x in player.map.grid) {
        for(let y in player.map.grid[x]) {
            if(player.map.grid[x][y].decor === "borealTree1") {
                drawIMG("images/borealTree1.png", x*64-32, y*64-288, String(Number(x)+(Number(y)*player.map.width))+" borealTree1", "game")
            } if(player.map.grid[x][y].decor === "rock") {
                drawIMG("images/rock.png", x*64, y*64, String(Number(x)+(Number(y)*player.map.width))+" rock", "game")
            }
        }
    } 
    for(let x in player.map.grid) {
        for(let y in player.map.grid[x]) {
            drawRECT(x*64, y*64, 64,64, "#000000", String(Number(x)+(Number(y)*player.map.width))+"light", "light")
            document.getElementById(String(Number(x)+(Number(y)*player.map.width))+"light").style.opacity = 1 - player.map.grid[x][y].light
        }
    } 

    if(player.personalOptions.hitboxesHighlighted === true) {
        for (let i of currentHitboxes) {
            drawRECT(i.x+cx, i.y+cy, 4, i.h, "#0066ff", "game")
            drawRECT(i.x+cx, i.y+cy, i.w, 4, "#0066ff", "game")
            drawRECT(i.x+cx, i.y+i.h-4+cy, i.w, 4, "#0066ff", "game")
            drawRECT(i.x+i.w-4+cx, i.y+cy, 4, i.h, "#0066ff", "game")
        }
    }
    if(player.personalOptions.highlightInteract === true) {
        drawRECT(player.interactTile.pos.x*64+cx, player.interactTile.pos.y*64+cy, 4, 64, "#990000", "interactionTile", "game")
        drawRECT(player.interactTile.pos.x*64+cx, player.interactTile.pos.y*64+cy, 64, 4, "#990000", "interactionTile1", "game")
        drawRECT(player.interactTile.pos.x*64+cx, player.interactTile.pos.y*64+60+cy, 64, 4, "#990000", "interactionTile2", "game")
        drawRECT(player.interactTile.pos.x*64+60+cx, player.interactTile.pos.y*64+cy, 4, 64, "#990000", "interactionTile3", "game")  
    }
    
    for(let i = 0; i < 5; i++) {
        drawIMG("images/hotbarSlot.png", i*64, CLIENT_HEIGHT-64, "HotbarSlot"+i, "UI")
        if(player.inventory.items[i] !== undefined && player.inventory.items[i] !== null) {
            drawIMG(player.inventory.items[i].texture, i*64, CLIENT_HEIGHT-64, "HotbarItem"+i, "UI")
        } else {
            drawIMG("images/empty.png", i*64, CLIENT_HEIGHT-64, "HotbarItem"+i, "UI")
        }
        drawTEXT(i*64+44, CLIENT_HEIGHT-44, "", "p", "HotbarAmount"+String(i), "UI")
    }
    drawIMG("images/selectedHotbarSlot.png", 0*64, CLIENT_HEIGHT-64, "selectedHotbarSlot", "UI")
    
    
    
}


function render() {
    function move(x, y, id) {
        document.getElementById(id).style.left = String(x) + "px";
        document.getElementById(id).style.top = String(y) + "px";
    }
    //document.getElementById("playerBox").style.left = String(player.x) + "px";
    //document.getElementById("playerBox").style.top = String(player.y) + "px";
    move(player.x, player.y, "playerBox")
    move(player.interactTile.pos.x*64, player.interactTile.pos.y*64, "interactionTile")
    move(player.interactTile.pos.x*64, player.interactTile.pos.y*64, "interactionTile1")
    move(player.interactTile.pos.x*64, player.interactTile.pos.y*64+60, "interactionTile2")
    move(player.interactTile.pos.x*64+60, player.interactTile.pos.y*64, "interactionTile3")
    
    
    if(player.x < CLIENT_WIDTH / 2) {
        document.getElementById("game").style.left = 0 + "px"
        document.getElementById("light").style.left = 0 + "px"
    } else if(player.x > (player.map.width * 64) - (CLIENT_WIDTH / 2)) {
        document.getElementById("game").style.left = -((player.map.width * 64) - CLIENT_WIDTH) + "px"
        document.getElementById("light").style.left = -((player.map.width * 64) - CLIENT_WIDTH) + "px"
    } else {
        document.getElementById("game").style.left = -(player.x - (CLIENT_WIDTH / 2)) + "px"
        document.getElementById("light").style.left = -(player.x - (CLIENT_WIDTH / 2)) + "px"
    }
    
    if(player.y < CLIENT_HEIGHT / 2) {
        document.getElementById("game").style.top = "0px"
        document.getElementById("light").style.top = "0px"
    } else if(player.y > (player.map.height * 64) - (CLIENT_HEIGHT / 2)) {
        document.getElementById("game").style.top = -((player.map.height * 64) - CLIENT_HEIGHT) + "px"
        document.getElementById("light").style.top = -((player.map.height * 64) - CLIENT_HEIGHT) + "px"
    } else {
        document.getElementById("game").style.top = -(player.y - (CLIENT_HEIGHT / 2)) + "px"
        document.getElementById("light").style.top = -(player.y - (CLIENT_HEIGHT / 2)) + "px"
    }
    
    document.getElementById("body").scrollTop = 20
    
}

function hotbarRender() {
    document.getElementById("selectedHotbarSlot").style.left = player.itemSelected*64 + "px"
}

