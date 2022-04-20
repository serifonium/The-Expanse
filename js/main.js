


























universe = []
universe.push(new Galaxy("Hk3015", 5, 8))
universe[0].planets[0] = new Planet("Hk3015", 0, "Star", 1392, 63)
universe[0].planets[1] = new Planet("Hz-892", 14, "Ice Mountains", -24, 14)

let cx = 0
let cy = 0
let notifications = []

hitboxes = []
currentHitboxes = []


/*
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.textAlign = "center"
*/

//draw map



function setupWorld() {
    universe[0].planets[1].rooms.push(new Map(23, 13, "Landing"))
    maps = [new Map(20, 10, "Cockpit")]
    for(let y = 2; y < 8; y++) {
        for(let x = 6; x < 13; x++) {
            maps[0].grid[x][y].type = "floor2"
        }
    } for(let y = 6; y < 8; y++) {
        for(let x = 4; x < 15; x++) {
            maps[0].grid[x][y].type = "floor2"
        }
    }
    maps[0].grid[5][5].type = "floor2"
    maps[0].grid[5][4].type = "floor2"
    maps[0].grid[13][5].type = "floor2"
    maps[0].grid[13][4].type = "floor2"
    for(let y = 8; y < 10; y++) {
        for(let x = 4; x < 6; x++) {
            maps[0].grid[x][y].type = "floor2"
        }
    } for(let y = 8; y < 10; y++) {
        for(let x = 13; x < 15; x++) {
            maps[0].grid[x][y].type = "floor2"
        }
    } for(let y = 8; y < 10; y++) {
        for(let x = 6; x < 13; x++) {
            maps[0].grid[x][y].type = "wall1"
        }
    }

    for(let y = 0; y < 10; y++) {
        for(let x = 0; x < 20; x++) {
            if(maps[0].grid[x][y].type === "wall1" || maps[0].grid[x][y].type === "space") {
                maps[0].grid[x][y].tags.collisionDetection = true
            }
        }
    }

    maps[0].grid[5][4].decor = "shipComputer"
    maps[0].grid[5][4].onPlayerInteract = function() {
        player.canMove = false
        player.vx = 0
        player.vy = 0
        maps[0].grid[5][4].onPlayerInteractActive = true
    } 
    maps[0].grid[8][2].hitbox = new Hitbox(8*64, 2*64, 64*3, 64)
    maps[0].hitboxes.push(maps[0].grid[8][2].hitbox)
    hitboxes.push(maps[0].grid[8][2].hitbox)
    maps[0].grid[8][2].hitbox.interface = new Interface("shipNavigation")

    
    maps[0].grid[5][4].hitbox = new Hitbox(5*64, 4*64, 64, 64)
    maps[0].hitboxes.push(maps[0].grid[5][4].hitbox)
    hitboxes.push(maps[0].grid[5][4].hitbox)
    maps[0].grid[5][4].hitbox.interface = new Interface("shipComputer")
    
    maps[0].grid[5][4].hitbox.interface.render = function() {
        
    
    }
    maps[0].grid[5][4].hitbox.interactFunction = function() {
        maps[0].grid[5][4].hitbox.interface.open = true
        player.interfaceOpen = maps[0].grid[5][4].hitbox.interface
    }
    

    maps[0].grid[4][9].hitbox = new Hitbox(4*64, 9*64, 2*64, 64)
    maps[0].hitboxes.push(maps[0].grid[4][9].hitbox)
    hitboxes.push(maps[0].grid[4][9].hitbox)
    maps[0].grid[4][9].hitbox.playerCollide = "tpRoomLeft"
    maps[0].grid[4][9].hitbox.playerCollideSource = "cockpit"
    
    //currentHitboxes = hitboxes
    
    maps.push(new Map(20, 10, "rightShip"))
    for(let y = 0; y < 10; y++) {
        for(let x = 0; x < 20; x++) {
            maps[1].grid[x][y].type = "void"
        }
    } for(let y = 0; y < 10; y++) {
        for(let x = 11; x < 13; x++) {
            maps[1].grid[x][y].type = "floor2"
        }
    } for(let y = 1; y < 10; y++) {
        for(let x = 6; x < 11; x++) {
            maps[1].grid[x][y].type = "floor2"
        }
    }
    maps[1].grid[5][2].type = "floor2"
    maps[1].grid[5][2].hitbox = new Hitbox(5*64, 2*64, 64, 64)
    maps[1].hitboxes.push(maps[1].grid[5][2].hitbox)
    maps[1].grid[5][2].hitbox.playerCollideSource = "roomLeft"

    maps[1].grid[11][0].hitbox = new Hitbox(11*64, 0*64, 2*64, 64)
    maps[1].hitboxes.push(maps[1].grid[11][0].hitbox)
    maps[1].grid[11][0].hitbox.playerCollide = "tpCockpit"
    maps[1].grid[11][0].hitbox.playerCollideSource = "roomLeft"

    maps[1].grid[12][2].decor = "furnace"
    maps[1].grid[12][2].hitbox = new Hitbox(12*64, 2*64, 64, 64)
    maps[1].hitboxes.push(maps[1].grid[12][2].hitbox)
    maps[1].grid[12][2].hitbox.interface = new Interface("furnace")

    for(let y = 0; y < 13; y++) {
        for(let x = 0; x < 23; x++) {
            universe[0].planets[1].rooms[0].grid[x][y].type = "ice"
        }
    } for(let y = 1; y < 12; y++) {
        for(let x = 1; x < 22; x++) {
            universe[0].planets[1].rooms[0].grid[x][y].type = "snow"
        }
    } for(let y = 1; y < 2; y++) {
        for(let x = 1; x < 4; x++) {
            universe[0].planets[1].rooms[0].grid[x][y].type = "ice"
        }
    } for(let y = 0; y < 2; y++) {
        for(let x = 2; x < 3; x++) {
            universe[0].planets[1].rooms[0].grid[x][y].type = "snow"
        }
    }
    function borealTreePlant(x, y, map) {
        map.grid[x][y].decor = "borealTree1"
        map.grid[x][y].tags.collisionDetection = true
        map.grid[x][y].offset = 0
        map.grid[x][y].offsetcounter = 0
        map.grid[x][y].hits = 16
    } function tpHitbox(x, y, w, h, map, source, location) {
        map.grid[x][y].hitbox = new Hitbox(x*64, y*64, w*64, h*64)
        map.hitboxes.push(map.grid[x][y].hitbox)
        map.grid[x][y].hitbox.playerCollide = location
        map.grid[x][y].hitbox.playerCollideSource = source
    } function ironTreePlant(x, y, map) {
        map.grid[x][y].decor = "ironTree"
        map.grid[x][y].tags.collisionDetection = true
        map.grid[x][y].offset = 0
        map.grid[x][y].offsetcounter = 0
        map.grid[x][y].hits = 16
    }
    borealTreePlant(5, 7, universe[0].planets[1].rooms[0])
    borealTreePlant(15, 6, universe[0].planets[1].rooms[0])
    borealTreePlant(2, 3, universe[0].planets[1].rooms[0])
    borealTreePlant(6, 5, universe[0].planets[1].rooms[0])
    borealTreePlant(9, 5, universe[0].planets[1].rooms[0])
    borealTreePlant(16, 6, universe[0].planets[1].rooms[0])
    borealTreePlant(14, 4, universe[0].planets[1].rooms[0])
    borealTreePlant(15, 3, universe[0].planets[1].rooms[0])
    borealTreePlant(4, 7, universe[0].planets[1].rooms[0])
    borealTreePlant(17, 8, universe[0].planets[1].rooms[0])
    universe[0].planets[1].rooms[0].grid[20][12].type = "snow"
    
    //tpHitbox(20, 12, 1, 1, universe[0].planets[1].rooms[0], "Hz-892 Landing", "IceCliffside1")

    for(let y = 0; y < 13; y++) {
        for(let x = 0; x < 23; x++) {
            if(universe[0].planets[1].rooms[0].grid[x][y].type === "ice") {
                universe[0].planets[1].rooms[0].grid[x][y].tags.collisionDetection = true
                
            }
            if(universe[0].planets[1].rooms[0].grid[x][y].decor === "borealTree1") {
                
            }
        }
    }
    function fillTilesType(x1, x2, y1, y2, map, type) {
        for(let y = y1; y < y2; y++) {
            for(let x = x1; x < x2; x++) {
                map.grid[x][y].type = type
            }
        }
    } function fillTilesDecor(x1, x2, y1, y2, map, decor) {
        for(let y = y1; y < y2; y++) {
            for(let x = x1; x < x2; x++) {
                map.grid[x][y].decor = decor
            }
        }
    }
    
    universe[0].planets[1].rooms.push(new Map(30, 35, "IceCliffside1"))
    for(let y = 0; y < 35; y++) {
        for(let x = 0; x < 30; x++) {
            universe[0].planets[1].rooms[1].grid[x][y].type = "ice"
        }
    } for(let y = 2; y < 34; y++) {
        for(let x = 1; x < 29; x++) {
            universe[0].planets[1].rooms[1].grid[x][y].type = "snow"
        }
    }
    fillTilesType(19, 30, 2, 16, universe[0].planets[1].rooms[1], "ice")
    fillTilesType(21, 30, 16, 23, universe[0].planets[1].rooms[1], "ice")
    fillTilesType(9, 12, 13, 15, universe[0].planets[1].rooms[1], "ice")
    fillTilesType(18, 21, 18, 21, universe[0].planets[1].rooms[1], "ice")
    fillTilesType(1, 7, 24, 35, universe[0].planets[1].rooms[1], "ice")
    fillTilesType(11, 14, 22, 31, universe[0].planets[1].rooms[1], "ice")
    fillTilesType(7, 11, 33, 34, universe[0].planets[1].rooms[1], "ice")
    fillTilesType(19, 20, 2, 16, universe[0].planets[1].rooms[1], "ice")
    fillTilesType(1, 8, 14, 24, universe[0].planets[1].rooms[1], "water1")
    
    fillTilesType(6, 7, 29, 32, universe[0].planets[1].rooms[1], "snow")
    fillTilesDecor(6, 7, 29, 32, universe[0].planets[1].rooms[1], "pebbles")
    fillTilesType(11, 12, 27, 28, universe[0].planets[1].rooms[1], "snow")
    fillTilesType(11, 12, 22, 24, universe[0].planets[1].rooms[1], "snow")
    
    fillTilesType(18, 21, 16, 18, universe[0].planets[1].rooms[1], "water1")
    fillTilesType(6, 8, 14, 19, universe[0].planets[1].rooms[1], "snow")
    fillTilesType(7, 8, 19, 21, universe[0].planets[1].rooms[1], "snow")
    fillTilesDecor(11, 12, 22, 24, universe[0].planets[1].rooms[1], "pebbles")
    fillTilesType(25, 30, 23, 35, universe[0].planets[1].rooms[1], "void")
    fillTilesDecor(23, 25, 29, 31, universe[0].planets[1].rooms[1], "pebbles")
    universe[0].planets[1].rooms[1].grid[24][31].decor = "pebbles"
    universe[0].planets[1].rooms[1].grid[25][28].decor = "bridge1"

    borealTreePlant(8, 5, universe[0].planets[1].rooms[1])
    borealTreePlant(15, 3, universe[0].planets[1].rooms[1])
    borealTreePlant(4, 7, universe[0].planets[1].rooms[1])
    borealTreePlant(17, 8, universe[0].planets[1].rooms[1])
    borealTreePlant(9, 29, universe[0].planets[1].rooms[1])
    borealTreePlant(18, 32, universe[0].planets[1].rooms[1])
    borealTreePlant(23, 27, universe[0].planets[1].rooms[1])
    borealTreePlant(17, 8, universe[0].planets[1].rooms[1])
    universe[0].planets[1].rooms[1].grid[1][0].type = "snow"
    universe[0].planets[1].rooms[1].grid[1][1].type = "snow"
    
    for(let y = 0; y < 35; y++) {
        for(let x = 0; x < 30; x++) {
            if(universe[0].planets[1].rooms[1].grid[x][y].type === "ice" || universe[0].planets[1].rooms[1].grid[x][y].type === "water1" ) {
                universe[0].planets[1].rooms[1].grid[x][y].tags.collisionDetection = true
                
            } if(universe[0].planets[1].rooms[1].grid[x][y].type === "snow") {
                universe[0].planets[1].rooms[1].grid[x][y].tags.canGrowTrees = true
            } if(universe[0].planets[1].rooms[1].grid[x][y].type === "void") {
                universe[0].planets[1].rooms[1].grid[x][y].tags.collisionDetection = true
            }
            if(universe[0].planets[1].rooms[1].grid[x][y].decor === "borealTree1") {
                universe[0].planets[1].rooms[1].grid[x][y].hits = 16
            }
            
        }
    }
    for(let y = 0; y < 35; y++) {
        for(let x = 0; x < 30; x++) {
            if(universe[0].planets[1].rooms[1].grid[x][y].decor === "bridge1") {
                for(let y1 = y+1; y1 < y+4; y1++) {
                    for(let x1 = x; x1 < x+5; x1++) {
                        universe[0].planets[1].rooms[1].grid[x1][y1].tags.collisionDetection = false
                    }
                }
            }
        }
    }
    universe[0].planets[1].rooms[1].grid[1][0].tags.canGrowTrees = false
    universe[0].planets[1].rooms[1].grid[1][1].tags.canGrowTrees = false
    universe[0].planets[1].rooms[1].grid[3][0].type = "snow"
    universe[0].planets[1].rooms[1].grid[3][1].type = "snow"
    universe[0].planets[1].rooms[1].grid[24][5].type = "snow"
    universe[0].planets[1].rooms[1].grid[24][5].tags.collisionDetection = false
    ironTreePlant(3, 1, universe[0].planets[1].rooms[1])
    tpHitbox(1, 0, 1, 1, universe[0].planets[1].rooms[1], "IceCliffside", "Hz-892 Landing")
    tpHitbox(24, 5, 1, 1, universe[0].planets[1].rooms[1], "IceCliffside", "Frost Mines")
    tpHitbox(29, 29, 1, 3, universe[0].planets[1].rooms[1], "IceCliffside", "Cold Woods")
    universe[0].planets[1].rooms.push(new Map(80, 40, "Frost Mines"))
    function rect(x1, x2, y1, y2, type, map) {
        for(let y = y1; y < y2; y++) {
            for(let x = x1; x < x2; x++) {
                map.grid[x][y].type = type
            }
        }
    }
    //rect(2, 9, 1, 14, "stone", universe[0].planets[1].rooms[2])
    for(let y = 1; y < 14; y++) {
        for(let x = 2; x < 9; x++) {
            universe[0].planets[1].rooms[2].grid[x][y].type = "stone"
            if(Math.random() < 0.5) {
                universe[0].planets[1].rooms[2].grid[x][y].decor = "rock"
            }
        }
    } universe[0].planets[1].rooms[2].grid[2][4].decor = ""
    universe[0].planets[1].rooms[2].grid[5][5].decor = ""
    tpHitbox(2,0,1,1.1,universe[0].planets[1].rooms[2], "Frost Mines", "IceCliffside1" )
    universe[0].planets[1].rooms[2].grid[5][2].decor = ""
    for(let y = 0; y < 40; y++) {
        for(let x = 0; x < 80; x++) {
            if(universe[0].planets[1].rooms[2].grid[x][y].decor === "rock" || universe[0].planets[1].rooms[2].grid[x][y].type === "space" ) {
                universe[0].planets[1].rooms[2].grid[x][y].tags.collisionDetection = true
            }
        }
    }
    universe[0].planets[1].rooms.push(new Map(80, 40, "Cold Woods"))

    fillTilesType(0, 80, 0, 40, universe[0].planets[1].rooms[3], "ice")
    fillTilesType(1, 79, 1, 39, universe[0].planets[1].rooms[3], "snow")
    fillTilesType(0, 1, 3, 6, universe[0].planets[1].rooms[3], "snow")
    tpHitbox(0, 3, 1, 3, universe[0].planets[1].rooms[3], "Cold Woods", "IceCliffside1")

    let focusMap = universe[0].planets[1].rooms[3]

    fillTilesType(11, 17, 1, 6, focusMap, "ice")
    fillTilesType(23, 80, 1, 2, focusMap, "ice")
    fillTilesType(26, 66, 2, 4, focusMap, "ice")
    fillTilesType(27, 59, 4, 7, focusMap, "ice")
    fillTilesType(27, 59, 4, 7, focusMap, "ice")
    fillTilesType(27, 30, 14, 16, focusMap, "ice")
    fillTilesType(1, 7, 12, 26, focusMap, "ice")
    fillTilesType(7, 9, 16, 23, focusMap, "ice")
    fillTilesType(9, 12, 17, 18, focusMap, "ice")
    fillTilesType(12, 17, 18, 19, focusMap, "ice")
    fillTilesType(17, 24, 19, 20, focusMap, "ice")
    fillTilesType(36, 56, 7, 8, focusMap, "ice")
    fillTilesType(38, 55, 8, 10, focusMap, "ice")
    fillTilesType(39, 52, 10, 12, focusMap, "ice")
    fillTilesDecor(17, 27, 6, 7, focusMap, "pebbles")
    fillTilesDecor(18, 26, 2, 4, focusMap, "pebbles")
    fillTilesDecor(17, 18, 2, 3, focusMap, "pebbles")
    fillTilesDecor(17, 23, 1, 2, focusMap, "pebbles")
    fillTilesDecor(22, 27, 4, 6, focusMap, "pebbles")
    fillTilesType(40, 47, 12, 15, focusMap, "ice")
    fillTilesType(22, 46, 20, 25, focusMap, "ice")
    borealTreePlant(4, 10, focusMap)
    borealTreePlant(9, 2, focusMap)
    borealTreePlant(11, 14, focusMap)
    borealTreePlant(8, 10, focusMap)
    borealTreePlant(2, 5, focusMap)
    borealTreePlant(5, 6, focusMap)
    borealTreePlant(2, 8, focusMap)
    borealTreePlant(8, 3, focusMap)
    borealTreePlant(7, 9, focusMap)
    borealTreePlant(3, 2, focusMap)
    borealTreePlant(5, 4, focusMap)

    borealTreePlant(16, 9, focusMap)
    borealTreePlant(24, 13, focusMap)
    borealTreePlant(30, 17, focusMap)
    borealTreePlant(27, 12, focusMap)
    borealTreePlant(19, 16, focusMap)
    borealTreePlant(38, 11, focusMap)
    borealTreePlant(19, 12, focusMap)
    borealTreePlant(32, 14, focusMap)
    borealTreePlant(37, 13, focusMap)
    borealTreePlant(17, 12, focusMap)
    borealTreePlant(28, 17, focusMap)
    borealTreePlant(32, 9, focusMap)
    fillTilesType(75, 76, 0, 2, focusMap, "snow")
    ironTreePlant(75, 1, focusMap)

    focusMap.grid[17][3].decor = "lumberShack"
    for(let y = 0; y < 40; y++) {
        for(let x = 0; x < 80; x++) {
            if(universe[0].planets[1].rooms[3].grid[x][y].type === "ice" || universe[0].planets[1].rooms[3].grid[x][y].type === "water1" ) {
                universe[0].planets[1].rooms[3].grid[x][y].tags.collisionDetection = true
                
            } if(universe[0].planets[1].rooms[3].grid[x][y].type === "snow") {
                universe[0].planets[1].rooms[3].grid[x][y].tags.canGrowTrees = true
            } if(universe[0].planets[1].rooms[3].grid[x][y].type === "void") {
                universe[0].planets[1].rooms[3].grid[x][y].tags.collisionDetection = true
            }
            if(universe[0].planets[1].rooms[3].grid[x][y].decor === "borealTree1") {
                universe[0].planets[1].rooms[3].grid[x][y].hits = 16
            } 
            
        }
    }
    tpHitbox(19, 5, 1, 1, universe[0].planets[1].rooms[3], "Cold Woods", "Lumber Shack")
    for(let y = 0; y < 40; y++) {
        for(let x = 0; x < 80; x++) {
            if(universe[0].planets[1].rooms[3].grid[x][y].decor === "lumberShack") {
                for(let y1 = y+0; y1 < y+3; y1++) {
                    for(let x1 = x; x1 < x+5; x1++) {
                        console.log(x1, y1)
                        universe[0].planets[1].rooms[3].grid[x1][y1].tags.collisionDetection = true
                    }
                }
            }
        }
    }
    universe[0].planets[1].rooms.push(new Map(20, 10, "Lumber Shack"))
    focusMap = universe[0].planets[1].rooms[4]
    fillTilesType(0, 20, 0, 10, focusMap, "void")
    fillTilesType(1, 19, 2, 9, focusMap, "woodenPlankTile1")
    fillTilesType(1, 19, 1, 2, focusMap, "woodenPlankWall1")
    fillTilesType(6, 7, 0, 7, focusMap, "void")
    focusMap.grid[17][9].type = "woodenPlankTile1" 
    fillTilesType(6, 7, 6, 7, focusMap, "woodenPlankWall1")
    for(let y = 0; y < 10; y++) {
        for(let x = 0; x < 20; x++) {
            if(focusMap.grid[x][y].type === "ice" || focusMap.grid[x][y].type === "water1" || focusMap.grid[x][y].type === "woodenPlankWall1" ) {
                focusMap.grid[x][y].tags.collisionDetection = true
                
            } if(focusMap.grid[x][y].type === "snow") {
                focusMap.grid[x][y].tags.canGrowTrees = true
            } if(focusMap.grid[x][y].type === "void") {
                focusMap.grid[x][y].tags.collisionDetection = true
            }
            if(focusMap.grid[x][y].decor === "borealTree1") {
                focusMap.grid[x][y].hits = 16
            } 
            
        }
    }
    tpHitbox(17, 9, 1, 1, universe[0].planets[1].rooms[4], "Lumber Shack", "Cold Woods")
    focusMap.grid[4][3].hitbox = new Hitbox(4*64, 3*64, 1*64, 1*64)
    focusMap.hitboxes.push(focusMap.grid[4][3].hitbox)
    focusMap.grid[4][3].hitbox.interface = new Interface("Lumber Shack Shop")
    focusMap.grid[4][3].hitbox.interface.shop = new Shop([
        {item: new Item("Cold Axe", "Axe", 1), cost: 260, unlocked: true},
        {item: new Item("Winter Plate", "Food", 1), cost: 20, unlocked: true}
    ])
    universe[0].planets[1].rooms.push(mapUnString("6550ccccccccccccccccccccccccccccccccccccccccccccccbbcccbbbbccccccccccccccccccccccccccbbbbbbbcccccbbbbbbcbbbbbbcccccccccccccccccccccccbbbbbbbbbbcccbbbbbbbcbbbbbbbccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccbbbbbbcccccccccbbbccccccccccbbbbbbbbbbbbbbbbbbbcccbbbbbbbbccccccbbbbbcccccccccbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbcccccccccbbccccccbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbcccccccccccccccccbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbcccccccbbcccccccbbbbbbbbccccccccbbbbbbbbbbbbbbbbbbbbccccbbbbcccccccbbbbbbbcccccccccbbbbbbbbbcbbbbbbbbbbccbbbbbbccccccbbbbbbbcccccccccbbbbbbbbcccbbbbbbbbbbbbbbbbbbccccccbbbbbbbccccccccbbbbbbbbcccbbbbbbbbbbbbbbbbbbbcccccbbbbbbbccccccccbbbbbbbcccccbbbbbbbbbbbbbbbbbbbcccccbbbbbbcccccccccbbbbbbccccccbbbbbbbbbbbbbbbbbbbccccbbbbbcccccccccccbbbbbbcccccbbbbbbbbbbbbbbbbbbbbcccbbbbbccccccccccccbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbccccbbbbcccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccccccccccccbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbcccbbbcccccccccccccccbbbbbbbbbbccccccbbbbbbbbbbbbbcccbbbcccccccccccccccbbbbbbbbbcccccccbbbbbbbbbbbbbcccbbbccccccccccccccccbbbbbbbbcbcbbbbbbbbbbbbbbbbccccbbbccccccccccccccccbbbbbbbbcbbbbbbcbbbbbbbbbbbcccbbbbccccccccccccccccbbbbbbbbcccbbbcccbbbbbbbbbbcccbbbbccccccccccccccccbbbbbbbbbcccbbcccbbbbbbbbbbcccbbbbcccccccccccccccbbbbbbbbbbcccbbccbbbbbbbbbbccccbbbbbccccccccbbcccbbbbbbbbbbbbcccccbbbbbbbbbbbccccbbbbbccccccbbbbbccbbbbbbbbbbbbcccccbbbbbbbbbbccccbbbbbbcccccbbbbbbbcbbbbbccbbbbbbccccbbbbbbbbbcccccbbbbbbccccbbbbbbbbbbbbbccccbbbbbccccbbbbbbbbbcccccbbbbbbccccbbbbbbbbbbbbbccccbbbbbcccbbbbbbbbbccccccbbbbbbccccbbbbbbbbbbbbbbbccbbbbbcccbbbbbbbbbccccccbbbbbbcccbbbbbbbbbbbbbbbbccbbbbbcbbbbbbbbbbbccccccbbbbbbcccbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbcccbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbcccbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbcccbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbcccbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbccccbbbbccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbcccccbbcccccccccbbbbbbbbbbbbbbbbbbbbbbbbccccccccbbbccccccccccccccccbbbbbbbbbbbbbbbbccccbbbbccccccbbbbccccccccccccccccbbbbbbbbbbbbbbbbcccccbbbcccccbbbbbccccccccccccccccbbbbccbbbbbbbbbbbccccbbbbcccbbbbbbccccccccccccccccbbbccbbbbbbbbbbbbbbbbbbbbcccbbbbbcccccccccccccccccbbbccbbbbbbbbbbbbbbbbbbbbccbbbbbbcccccccccccccccccbbccbbbbbbbbbbbbbbbbbbbbbbcbbbbbbccccccccccccccccbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbccccccccccccccccbbbbbbbbbbbbdddddddddddbbbbbbcccccccccccccccccccccbbbbbbbbbdddddddddddddddddddbccbbbbcccccccccccccccbbbbbbbbddddddddddddddddddddcbbbbbbcccccccccccccccbbbbbbbddddddddddddddddddddddbbbbbbcccccccccccccccbbbbbbdddddddddddddddddddddddbbbbbcccccccccccbbccbbbbbbddddddddddddddddddddddddbbbbbccccccccccbbbbcbbbbbdddddddddddddddddddddddddbbbbbbccccccccbbbbbbbbbbdddddddddddddccdddddddddddbbbbbbccccccccbbbbbbbbbbddddddddddddcccddddddddddddbbbbbcccccccccccbcbbbbdddddddddddddcccddddddddddddbbbbbbccccccccccccbbbbddddddddddddddddddddddddddddbbbbbbccccccccccccbbbdddddddddddddddddddddddddddddbbbbbcccccccccccccbbbdddddddddddddddddddddddddddddbbbbbccccccccccccbbbbddddddddddddddddddddddddddddddbbbbcaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaabaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaabaaabaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaabaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaabaabaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaababaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaabaaabaaaaaaaaaaabaabaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaabaaaaaaaaaaaaaaaabaaaaaaaaaaaaabaaaaaaaaaaaaaaabaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaababaaabaaaaaaaaaaaaabaaaaaabaaaaaaaaaaaaaaaaababaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaabaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaabaaaaaaabaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaababaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaabaaaabaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaabaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaababaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaabaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaabaabaaaaaaaaaaaabaaaaaaaaaaaaaaaaaabaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaabaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaabaaaaaaaaaaaaaaaaaabaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaabaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaabaaaabaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))
    focusMap = universe[0].planets[1].rooms[5]
    focusMap.name = "Cold Woods Lake"

    for(let y = 0; y < 50; y++) {
        for(let x = 0; x < 65; x++) {
            if(focusMap.grid[x][y].type === "ice" || focusMap.grid[x][y].type === "water1" || focusMap.grid[x][y].type === "woodenPlankWall1" ) {
                focusMap.grid[x][y].tags.collisionDetection = true
                
            } if(focusMap.grid[x][y].type === "snow") {
                focusMap.grid[x][y].tags.canGrowTrees = true
            } if(focusMap.grid[x][y].type === "void") {
                focusMap.grid[x][y].tags.collisionDetection = true
            }
            if(focusMap.grid[x][y].decor === "borealTree1") {
                focusMap.grid[x][y].hits = 16
                focusMap.grid[x][y].offsetcounter = 0
                focusMap.grid[x][y].tags.collisionDetection = true
            } 
            
        }
    }
    focusMap.grid[2][0].hitbox = new Hitbox(2*64, 0*64, 2*64, 1*64)
    focusMap.hitboxes.push(focusMap.grid[2][0].hitbox)
    
}
setupWorld()









/*

#b83275



*/
















player = new Player("jai", 128, 320, universe[0].planets[1].rooms[0])
player.planet = universe[0].planets[1]

universe[0].planets[1].rooms[2].enemies.push(new Enemy("miner", 2*64, 4*64, 64, 64, universe[0].planets[1].rooms[2], 1, 4))
universe[0].planets[1].rooms[2].hitboxes.push(universe[0].planets[1].rooms[2].enemies[0].hitbox)

//universe[0].planets[1].rooms[1].enemies.push(new Enemy("miner", 800, 550, 64, 64, universe[0].planets[1].rooms[1], 2, 4))
//universe[0].planets[1].rooms[1].hitboxes.push(universe[0].planets[1].rooms[1].enemies[1].hitbox)

currentHitboxes = player.map.hitboxes





player.inventory.items[0] = new Item("Fractured Sword", "Sword")
player.inventory.items[1] = new Item("Fractured Axe", "Axe")
player.inventory.items[2] = new Item("Basic Fishing Pole", "Fishing Rod")
player.inventory.items[3] = new Item("Fractured Pickaxe", "Pickaxe")
player.inventory.items[2].interface = new Interface("Fishing")

let p = particleSetup()
let sp = spaceWarpSetup()

//player.inventory.items[0].texture = fracturedSword

setInterval(() => {
    saveGame()
}, 2*1000);



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
        let vx = Math.floor(Math.random() * 2000 - 1000)/2000
        let vy = Math.floor(Math.random() * 2000 - 1000)/2000
        if (player.map.grid[Math.floor(x/64)][Math.floor(y/64)].type === "space") {
            particles.push({x: x, y: y, size: size, vx: vx, vy: vy})
        }
        
    }
    return particles
}
function spaceWarpSetup() {
    spp = []
    for(let i = 0; i < 20; i++) {

        spp.push({
            x: (Math.floor(Math.random()*15+35)/10) + i * 5,
            y: (Math.floor(Math.random()*400)*-1),
            w: (Math.floor(Math.random()*35+35)/10),
            h: (Math.floor(Math.random()*1200+800)),
            v: (Math.floor(Math.random()*400+50)/50)
        })
    }
}

function hitboxFind(x, y) {
            
    for(let i of currentHitboxes) {
        if(i.x <= x + 32 && x + 32 <= i.x + i.w && i.y <= y + 32 && y + 32 <= i.y + i.h) {
            return i
            
        } else {
            
            //return undefined
        }
    }
}














































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