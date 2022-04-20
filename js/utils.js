function drawText(text, x_, y_, maxLineLength, colour, central) {
    function cube(x1, y1) {
        ctx.fillRect(x1*4 + x, y1*4 + y, 4, 4)
    } function rect(x1, y1, w, h) {
        ctx.fillRect(x1*4 + x, y1*4 + y, 4*w, 4*h)
    }
    ctx.fillStyle = colour
    let i = 0
    let x = x_
    if(central === true) {
        x = x_ - text.length*8
    }
    
    let y = y_
    for(let letter in text) {
        if(text[letter] === "a") {
            rect(0,0,1,7)
            rect(2,0,1,7)
            cube(1,0)
            cube(1,3)
        } if(text[letter] === "b") {
            rect(0,0,1,7)
            rect(2,0,1,3)
            rect(2,4,1,3)
            cube(1,0)
            cube(1,6)
            cube(1,3)
        } if(text[letter] === "c") {
            rect(0,0,1,7)
            rect(1,0,2,1)
            rect(1,6,2,1)
        } if(text[letter] === "d") {
            rect(0,0,1,7)
            rect(2,1,1,5)
            cube(1,0)
            cube(1,6)
        } if(text[letter] === "e") {
            rect(0,0,1,7)
            rect(1,0,2,1)
            rect(1,3,2,1)
            rect(1,6,2,1)
        } if(text[letter] === "f") {
            rect(0,0,1,7)
            rect(1,0,2,1)
            rect(1,3,2,1)
        } if(text[letter] === "g") {
            rect(0,0,1,7)
            rect(1,0,2,1)
            rect(1,6,2,1)
            rect(2,4,1,2)
        } if(text[letter] === "h") {
            rect(0,0,1,7)
            rect(2,0,1,7)
            cube(1,3)
        } if(text[letter] === "i") {
            rect(1,1,1,5)
            rect(0,0,3,1)
            rect(0,6,3,1)
        } if(text[letter] === "j") {
            rect(1,1,1,5)
            rect(0,0,3,1)
            rect(0,6,2,1)
        } if(text[letter] === "k") {
            rect(0,0,1,7)
            cube(1,3)
            rect(2,0,1,3)
            rect(2,4,1,3)
        } if(text[letter] === "l") {
            rect(0,0,1,7)
            rect(1,6,2,1)
        } if(text[letter] === "m") {
            rect(0,0,1,7)
            rect(2,0,1,7)
            cube(1,1)
        } if(text[letter] === "n") {
            rect(0,0,1,7)
            rect(2,0,1,7)
            cube(1,0)
        } if(text[letter] === "o") {
            rect(0,0,1,7)
            rect(2,0,1,7)
            cube(1,0)
            cube(1,6)
        } if(text[letter] === "p") {
            rect(0,0,1,7)
            rect(1,0,2,1)
            rect(1,2,2,1)
            cube(2,1)
        } if(text[letter] === "q") {
            rect(2,0,1,6)
            rect(0,0,2,1)
            rect(0,2,2,1)
            cube(0,1)
            cube(1,6)
        } if(text[letter] === "r") {
            rect(0,0,1,7)
            rect(1,0,2,1)
            rect(1,2,2,1)
            cube(2,1)
            cube(1,3)
            rect(2,4,1,3)
        } if(text[letter] === "s") {
            rect(0,0,1,4)
            rect(2,3,1,4)
            rect(1,0,2,1)
            rect(0,6,2,1)
            cube(1,3)
        } if(text[letter] === "t") {
            rect(0,0,3,1)
            rect(1,1,1,6)
        } if(text[letter] === "u") {
            rect(0,0,1,7)
            rect(2,0,1,7)
            cube(1,6)
        } if(text[letter] === "v") {
            rect(0,0,1,6)
            rect(2,0,1,6)
            cube(1,6)
        } if(text[letter] === "w") {
            rect(0,0,1,7)
            rect(2,0,1,7)
            cube(1,5)
        } if(text[letter] === "x") {
            rect(0,0,1,3)
            rect(2,0,1,3)
            rect(0,4,1,3)
            rect(2,4,1,3)
            cube(1,3)
        } if(text[letter] === "y") {
            cube(0,0)
            cube(2,0)
            rect(1,1,1,6)
        } if(text[letter] === "z") {
            rect(0,0,3,1)
            rect(2,1,1,2)
            rect(0,6,3,1)
            rect(0,4,1,2)
            cube(1,3)
        } if(text[letter] === "0") {
            rect(0,0,1,7)
            rect(2,0,1,7)
            cube(1,0)
            cube(1,6)
        } if(text[letter] === "1") {
            rect(1,1,1,5)
            rect(0,0,2,1)
            rect(0,6,3,1)
        } if(text[letter] === "2") {
            rect(2,0,1,4)
            rect(0,3,1,4)
            rect(0,0,2,1)
            rect(1,6,2,1)
            cube(1,3)
        } if(text[letter] === "3") {
            rect(2,0,1,7)
            rect(0,0,2,1)
            rect(0,6,2,1)
            cube(1,3)
        } if(text[letter] === "4") {
            rect(0,0,1,4)
            rect(2,1,1,6)
            rect(0,3,2,1)
        } if(text[letter] === "5") {
            rect(0,0,1,4)
            rect(2,3,1,4)
            rect(1,0,2,1)
            rect(0,6,2,1)
            cube(1,3)
        } if(text[letter] === "6") {
            rect(0,0,1,7)
            rect(1,0,2,1)
            rect(1,3,2,1)
            rect(2,4,1,2)
            rect(1,6,2,1)
        } if(text[letter] === "7") {
            rect(0,0,2,1)
            rect(2,0,1,7)
        } if(text[letter] === "8") {
            rect(0,0,1,7)
            rect(2,0,1,7)
            cube(1,0)
            cube(1,3)
            cube(1,6)
        } if(text[letter] === "9") {
            rect(2,0,1,6)
            rect(0,0,2,1)
            rect(0,3,2,1)
            rect(0,1,1,2)
            rect(0,6,3,1)
        } if(text[letter] === ".") {
            cube(0,6)
        } if(text[letter] === ",") {
            rect(1,4,1,2)
            cube(0,6)
        } if(text[letter] === "!") {
            rect(0,0,1,5)
            cube(0,6)
        } if(text[letter] === "?") {
            rect(0,2,1,3)
            rect(0,0,2,1)
            rect(1,2,2,1)
            rect(2,0,1,2)
            cube(0,6)
        } if(text[letter] === "$") {
            rect(0,1,3,1)
            rect(0,3,3,1)
            rect(0,5,3,1)
            rect(1,0,1,7)
            cube(2,2)
            cube(0,4)
        } if(text[letter] === ":") {
            cube(0,1)
            cube(0,5)
        } if(text[letter] === "[") {
            rect(0,0,1,6)
            rect(0,0,3,1)
            rect(0,6,3,1)
        } if(text[letter] === "]") {
            rect(2,0,1,6)
            rect(0,0,3,1)
            rect(0,6,3,1)
        } if(text[letter] === "+") {
            rect(1,2,1,3)
            cube(0,3)
            cube(2,3)
        } 
        x += 16
        i++
        if(i === maxLineLength) {
            y += 32
            x = x_
            if(central === true) {
                x = x_ - text.length*8
            }
            i = 0
        }
        
    }
}

function drawTextBox(text, colour) {
    player.textbox.fulltext = text
    player.textbox.text = ""
    player.textbox.colour = colour
    player.textbox.animframe = 0
    player.textbox.finished = false
    player.interfaceOpen = player.textbox
    player.textbox.cooldown = 0
}

function inventoryAdd(item) {
    let a = false
    let b = undefined
    for(let i of player.inventory.items) {
        if (i !== null && a === false) {
            if(i.name === item.name) {
                i.amount += item.amount
                a = true
                notifications.push(
                    {item: item, frame: 0}
                )
            }
            
        }
        
    } 
    if (a === false) {
        for (let o in player.inventory.items) {
            i = player.inventory.items[o]
            if(i === null && a === false) {
                a = true
                b = o
                player.inventory.items[b] = item
                notifications.push(
                    {item: player.inventory.items[b], frame: 0}
                )
            }
        }
    }
}

function loadMap(map, x, y) {
    player.map = map
    player.x = x
    player.y = y
    currentHitboxes = map.hitboxes
    cx = 0
    cy = 0
    let p = Math.floor(map.timeSinceLastVisit)
    
    for(let x = 0; x < map.width; x++) {
        
        for(let y = 0; y < map.height; y++) {
            let tile = map.grid[x][y]
            
            for(let i = 0; i < p; i++) {
                
                if(tile.tags.canGrowTrees === true) {
                    
                    if(Math.random() < 0.00001) {
                        
                        map.grid[x][y].decor = "borealTree1"
                        map.grid[x][y].offsetcounter = 0
                        map.grid[x][y].tags.collisionDetection = true
                        map.grid[x][y].hits = 16
                        map.timeSinceLastVisit = 0
                        console.log("worked", tile)
                    }
                }
            }
        }
    }
}

function drawBox(x, y, w, h) {
    ctx.fillStyle = "#bbbbbb"
    ctx.fillRect(x, y, w+8, h+8)
    ctx.fillStyle = "#6b6b6b"
    ctx.fillRect(x+4, y+4, w, h)
}
function secondsToTime(n) {
    
    let time = ""
    let e = Math.floor(n/60)
    time += (String(Math.floor(n/60)))
    time += (":")
    if((String(n - e*60)).length === 2) {
        time += (String(n - e*60))
    } else {
        time += "0"
        time += (String(n - e*60))
    }
    
    
    return time
}

function mapUnString(string) {
    let map = new Map(Number(string[0]+string[1]), Number(string[2]+string[3]))
    for(let x = 0; x < map.height; x++) {
        for(let y = 0; y < map.width; y++) {
            let tile = map.grid[y][x]
            if(string[x+(y*map.height)+4] === "a") {
                tile.type = "void"
            } else if(string[x+(y*map.height)+4] === "b") {
                tile.type = "snow"
            } else if(string[x+(y*map.height)+4] === "c") {
                tile.type = "ice"
            } else if(string[x+(y*map.height)+4] === "d") {
                tile.type = "water1"
            }
        }
    } for(let x = 0; x < map.height; x++) {
        for(let y = 0; y < map.width; y++) {
            let tile = map.grid[y][x]
            if(string[x+(y*map.height)+4+(map.width*map.height)] === "a") {
                tile.decor = ""
            } else if(string[x+(y*map.height)+4+(map.width*map.height)] === "b") {
                tile.decor = "borealTree1"
            }
        }
    }
    return map
}






function drawIMG(img, x, y, id) {
    let image = document.createElement("img");
    image.src = img;
    if(id !== undefined) {
        image.id = id
    }
    image.draggable = false
    image.style = "position:absolute; left:" + String(x) + "px; top:" + String(y) + "px;"
    let body = document.getElementById("body");
    body.appendChild(image);
} function drawRECT(x, y, w, h, colour, id) {
    let box = document.createElement("div");
    if(id !== undefined) {
        box.id = id
    }
    box.style = "position:absolute; left:" + String(x) + "px; top:" + String(y) + "px; height: "+String(h)+"px; width: "+String(w)+"px; margin-bottom: 15px; background-color:" + colour
    let body = document.getElementById("body");
    body.appendChild(box);
} function drawTEXT(x, y, text, type, id) {
    let textbox = document.createElement(type);
    if(id !== undefined) {
        textbox.id = id
    }
    textbox.style = "position:absolute; left:" + String(x) + "px; top:" + String(y) + "px;"
    let node = document.createTextNode(text);
    let body = document.getElementById("body");
    textbox.appendChild(node);
    
    body.appendChild(textbox);
}