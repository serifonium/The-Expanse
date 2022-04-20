class List {
    constructor() {
        this.values = []
    }
    search(x) {
        for (let i of this.values) {
            if (x === i) {
                return i
            }
            return null
        }
    }
    add(x) {
        this.values.push(x)
    }

}
class Tile {
    constructor(x, y) {
        this.type = "space"
        this.decor = ""
        this.pos = {x: x, y: y}
        this.onPlayerInteractActive = false
        this.onPlayerInteractRender = function() {}
        this.tags = {collisionDetection: false,
        canGrowTrees: false}
        this.hitbox = null
    }
    update() {
        if (this.onPlayerInteractActive === true) {
            this.onPlayerInteractRender()
        }
    } 
    orientate(map) {
        if(this.pos.y - 1 >= 0) {
            map.grid[this.pos.x][this.pos.y].up = map.grid[this.pos.x][this.pos.y - 1]
        } else {map.grid[this.pos.x][this.pos.y].up = undefined}
        if(this.pos.x + 1 < map.width) {
            map.grid[this.pos.x][this.pos.y].right = map.grid[this.pos.x + 1][this.pos.y]
        } else {map.grid[this.pos.x][this.pos.y].right = undefined}
        if(this.pos.y + 1 < map.height) {
            map.grid[this.pos.x][this.pos.y].down = map.grid[this.pos.x][this.pos.y + 1]
        } else {map.grid[this.pos.x][this.pos.y].down = undefined}
        if(this.pos.x - 1 >= 0) {
            map.grid[this.pos.x][this.pos.y].left = map.grid[this.pos.x - 1][this.pos.y]
        } else {map.grid[this.pos.x][this.pos.y].left = undefined}
    }
    toSerializable(){
        return {
            type: this.type,
            decor: this.decor,
            pos: this.pos,
            tags: this.tags,
            
        } 
    }
}
class Map {
    constructor(w, h, name) {
        this.name = name
        this.height = h
        this.width = w
        this.grid = []
        this.hitboxes = []
        this.enemies = []
        this.timeSinceLastVisit = 0
        for (let a = 0; a !== w; a++) {
            this.grid[a] = []
            for (let b = 0; b !== h; b++) {
                this.grid[a].push(new Tile(a, b))
            }
        } for (let a = 0; a !== w; a++) {
            for (let b = 0; b !== h; b++) {
                this.grid[a][b].orientate(this)
            }
        }
        this.building = false
    }
    update() {
        this.timeSinceLastVisit += 0.02
    }
    toSerializable(){
        return {
            name: this.name,
            height: this.height,
            width: this.width,
            grid: this.grid.map(g => g.map(t => t.toSerializable())),
            hitboxes: this.hitboxes.map(h => h.toSerializable()),
            building: this.building
        } 
    }
}
class Player {
    constructor(name, x, y, map) {
        this.name = name
        this.map = map 
        this.x = x
        this.y = y
        this.galaxy = universe[0]
        this.planet = universe[0].planets[1]
        this.tx = Math.floor((this.x + 25)/64)
        this.ty = Math.floor((this.y + 25)/64)
        this.vx = 0
        this.vy = 0
        this.rotation = 0
        this.canMove = true
        this.interfaceOpen

        this.baseSpeed = 5
        this.baseStrength = 0

        this.speed = this.baseSpeed
        this.strength = this.baseStrength
        
        this.interactTile
        this.hotbar = []
        this.itemSelected = 0
        this.itemCooldown = 0

        this.balance = 40
        this.health = 20
        this.maxHealth = 20
        this.skills = {
            combat: {
                level: 0,
                xp: 0,
                xpRequired: 10,
            },
            foraging: {
                level: 0,
                xp: 0,
                xpRequired: 10,
            },
            mining: {
                level: 0,
                xp: 0,
                xpRequired: 10,
            },
            fishing: {
                level: 0,
                xp: 0,
                xpRequired: 10,
            },
            hunter: {
                level: 0,
                xp: 0,
                xpRequired: 10,
            },
            dungeoneering: {
                level: 0,
                xp: 0,
                xpRequired: 10,
            },
            engineering: {
                level: 0,
                xp: 0,
                xpRequired: 10,
            }
        }
        this.effects = [
            /*
            {name: "Coffee Shot", duration: 75},
            {name: "Frostburn Affliction", duration: 25},
            {name: "Rage", duration: 60}
            */
        ]

        this.textbox = new Interface("textbox")
        this.inventory = new Interface("inventory")
        this.inventory.tab = 0
        this.inventory.itemSelected = undefined
        this.inventory.itemSelectedSource = undefined
        this.inventory.itemSelectedSourceType = undefined
        this.inventory.items = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
        this.inventory.size = 31
        //this.inventory
        this.contacts = []
        this.recipes = [
            {
                name: "Wooden Plank",
                Ingredients: [new Item("Wood", "Resource", 5)],
                Products: [new Item("Wooden Plank", "Resource", 2)],
                Processing: "hand"
            },{
                name: "Wooden Shield",
                Ingredients: [new Item("Wooden Plank", "Resource", 15)],
                Products: [new Item("Wooden Shield", "Shield", 1)],
                Processing: "equipment table"
            },{
                name: "Wooden Helmet",
                Ingredients: [new Item("Wooden Plank", "Resource", 15)],
                Products: [new Item("Wooden Helmet", "Helmet", 1)],
                Processing: "equipment table"
            },{
                name: "Basic Armour Speed Module",
                Ingredients: [new Item("Iron Plating", "Resource", 15), new Item("Iron Plating", "Resource", 15)],
                Products: [new Item("Basic Armour Speed Module", "Module", 1)],
                Processing: "module bench"
            },{
                name: "Iron Refining",
                Ingredients: [new Item("Iron Ore", "Resource", 5)],
                Products: [new Item("Iron Bar", "Resource", 1)],
                Processing: "furnace"
            }
        ]

        this.collections = {
            goldenStatueFragments: {
                foundation: 0,
                statue: 0,
                sword: 0
            }, fishCaught: {
                frostMinnow: false,
                bass: false
            }, foragingObtained: {
                wood: false
            }, spireFragments: {
                statue: false,
                fishCaught: false,
                foragingObtained: false
            }
        }
        this.textures = {
            head: undefined,
            body: undefined,
            legs: undefined
        }

        this.equippedSpaceship = new Spaceship("Lightwing", 4, 0)

        this.personalOptions = {
            highlightInteract: true,
            hitboxesHighlighted: true
        }

        if(this.rotation === 0) {
            this.interactTile = this.map.grid[this.tx][this.ty].up
        } else if(this.rotation === 3) {
            this.interactTile = this.map.grid[this.tx][this.ty].right
        } else if(this.rotation === 2) {
            this.interactTile = this.map.grid[this.tx][this.ty].down
        } else if(this.rotation === 1) {
            this.interactTile = this.map.grid[this.tx][this.ty].left
        }




        this.PING = 20
    } 
    update() {
        this.tx = Math.floor((this.x + 32)/64)
        this.ty = Math.floor((this.y + 32)/64)
        if(this.rotation === 0) {
            this.interactTile = this.map.grid[this.tx][this.ty].up
        } else if(this.rotation === 3) {
            this.interactTile = this.map.grid[this.tx][this.ty].right
        } else if(this.rotation === 2) {
            this.interactTile = this.map.grid[this.tx][this.ty].down
        } else if(this.rotation === 1) {
            this.interactTile = this.map.grid[this.tx][this.ty].left
        }
        this.equippedSpaceship.update()
        if(this.itemCooldown !== 0) {
            this.itemCooldown -= 1
        } if(this.canMove === false) {
            this.vx = 0
            this.vy = 0
        }
        if(this.skills.combat.xp >= this.skills.combat.xpRequired) {
            this.skills.combat.xp = this.skills.combat.xp - this.skills.combat.xpRequired
            this.skills.combat.level++
            this.skills.combat.xpRequired = Math.floor(this.skills.combat.xpRequired * 1.5)
        } if(this.skills.foraging.xp >= this.skills.foraging.xpRequired) {
            this.skills.foraging.xp = this.skills.foraging.xp - this.skills.foraging.xpRequired
            this.skills.foraging.level++
            this.skills.foraging.xpRequired = Math.floor(this.skills.foraging.xpRequired * 1.5)
            this.strength++
        } if(this.skills.mining.xp >= this.skills.mining.xpRequired) {
            this.skills.mining.xp = this.skills.mining.xp - this.skills.mining.xpRequired
            this.skills.mining.level++
            this.skills.mining.xpRequired = Math.floor(this.skills.mining.xpRequired * 1.5)
        } if(this.skills.fishing.xp >= this.skills.fishing.xpRequired) {
            this.skills.fishing.xp = this.skills.fishing.xp - this.skills.fishing.xpRequired
            this.skills.fishing.level++
            this.skills.fishing.xpRequired = Math.floor(this.skills.fishing.xpRequired * 1.5)
        }
        for(let i = 0; i < 5; i++) {
            this.hotbar[i] = this.inventory.items[i]
        }
        this.speed = this.baseSpeed
        for(let b in this.effects) {
            let effect = this.effects[b]
            if(effect.name === "Coffee Shot") {
                this.speed = this.speed + 1
                
            } if(effect.name === "Rage") {
                this.speed = this.speed + 2
                
            }
            effect.duration += -0.02
            if(effect.duration < 0) {
                this.effects.splice(b, 1)
                
            }
        }
    }

    toSerializable(){
        return {
            name : this.name,
            x : this.x,
            y : this.y,
            galaxy: this.galaxy.toSerializable(),
            map: this.map.toSerializable(),
            planet: this.planet.toSerializable(),

            baseSpeed: this.baseSpeed,
            baseStrength: this.baseStrength,

            balance: this.balance = 40,
            health: this.health = 20,
            maxHealth: this.maxHealth = 20,
            skills: this.skills,
            //effects: this.effects,
            collections: this.collections,
            //inventory: this.inventory
        }
    }

    deserialize(jsonString){
        var deserilized = JSON.parse(jsonString);
        this.name = deserilized.name;
        this.x = deserilized.x;
        this.y = deserilized.y;
        this.galaxy = deserilized.galaxy;
    }

}
class NPC {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.friendship = 0
        this.gifts = {
            loved: [],
            liked: [],
            disliked: [],
            hated: []
        }
        this.lines = {
            regular: []

        }
    }
    gift(item) {
        for(let i of this.gifts.loved) {
            if(item.name === i) {
                return 60
            }
        } for(let i of this.gifts.liked) {
            if(item.name === i) {
                return 30
            }
        } for(let i of this.gifts.disliked) {
            if(item.name === i) {
                return -30
            }
        } for(let i of this.gifts.hated) {
            if(item.name === i) {
                return -60
            }
        } 
    }
}
class Hitbox {
    constructor(x, y, w, h) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.interactFunction = null
        this.playerCollide = ""
    }
    update(x, y) {
        this.x = x
        this.y = y
    }
    toSerializable(){
        return {
            x: this.x,
            y: this.y,
            h: this.h,
            w: this.w,
            playerCollide: this.playerCollide
        }
    }
}


class Galaxy {
    constructor(name, x, y) {
        this.name = name
        this.x = x
        this.y = y
        this.planets = []
    }

    fromSerliazable(serlialableObject){
        this.name = serlialableObject.name;
        this.x = serlialableObject.x;
        this.y = serlialableObject.y;
        this.planets = serlialableObject.planets.map(p => new Planet().fromSerliazable(p))
    }

    toSerializable(){
        return {
            name: this.name,
            x: this.x,
            y: this.y,
            planets: this.planets.map(p => p.toSerializable())
        } 
        /*
        {
            name: "whatever",
            x: 123,
            y: "123"
            planets : [
                { 
                    name : "planet 1",
                    type : "wasd"
                },
                 { 
                    name : "planet 1",
                    type : "wasd"
                }
            ]
        }
        */
    }
    serialize(){
        // return JSON.stringify( {
        //     name: this.name,
        //     x: this.x,
        //     y: this.y,
        //     planets: [
                
        //     ]
        // } )
    }
}
class Planet {
    constructor(name, distance, type, temperature, radius) {
        this.name = name
        if(name === undefined) {this.name = "Undiscovered"}
        this.distance = distance // AU
        if(distance === undefined) {this.distance = Math.floor(Math.random() * 30 + 5)}
        this.type = type
        this.temperature = temperature // Celsius
        this.radius = radius // km * 1000
        this.area = Math.floor(4 * 3.14 * radius * radius)
        this.orbits = []
        this.tags = {}
        this.rooms = []
    }

    toSerializable(){
        return {
            name: this.name,
            distance: this.distance,
            type: this.type,
            temperature: this.temperature,
            radius: this.radius,
            area: this.area,
            orbits: this.orbits.map(p => p.toSerializable()),
            tags: this.tags,
            rooms: this.rooms.map(m => m.toSerializable())
        } 
    }

    fromSerliazable(sssss){
        this.name  = sssss.name;
    }
} class Interface {
    constructor(name) {
        this.name = name
        if(name === null) {
            this.name = ""
        }
        this.render = function() {}
        this.mode = 0
        this.open = false
    }
}

class Spacecraft {
    constructor() {
        this.name
        this.distance
    }
} class Spaceship {
    constructor(name, rarity, stars) {
        this.name = name
        this.rarity = rarity
        this.stars = stars
        this.acceleration = function(x) {return (x * 2) ^ 2}
        this.speed = 10
        this.defense = 400
        this.damage = 25
        this.shields = 60
        this.agility = 75
        this.scanning = 4.5
        this.fuel = 438
        this.fuelConsumptionRate = 5    //  x/s

        this.speedGear = 0
        this.travelTime = -0.1
        this.travelDestination
    }
    update() {
        if(this.travelTime > 0.1) {
            this.travelTime = this.travelTime - 2
            if(this.travelTime < 0) {
                player.planet = this.travelDestination
                this.speedGear = 0
            }
        }
    }
} class Item {
    constructor(name, type, amount) {
        this.name = name
        this.type = type
        this.desc = [
            
        ] 
        this.enchantments = [

        ]
        if(amount === undefined) {
            this.amount = 1
        } else {
            this.amount = amount
        } 
        if(name === "Wood") {
            this.texture = wood
        } else if (name === "Stone") {
            this.texture = stone
        } else if (name === "Fractured Sword") {
            this.texture = "images/items/fracturedSword.png"
            this.attack = 3
            this.speed = 1.1
            this.desc = [
                {text: "attack:" + this.attack, colour: "#94090e"},
                {text: "speed:" + this.speed, colour: "#94090e"}
            ]
            //console.log(this)
        } else if (name === "Fractured Pickaxe") {
            this.texture = "images/items/fracturedPickaxe.png"
        } else if (name === "Fractured Axe") {
            this.texture = "images/items/fracturedAxe.png"
        } else if (name === "Basic Fishing Pole") {
            this.texture = "images/items/Basic Fishing Pole.png"
        } else {
            this.texture = undefined
        }
    }
} class Enemy {
    constructor(name, x, y, w, h, map, speed, dmg) {
        this.name = name
        
        this.x = x
        this.y = y
        this.w = w
        this.h = h

        this.vx = 0
        this.vy = 0
        this.map = map
        this.speed = speed
        this.dmg = dmg
        this.health = 80

        this.detectionRange = 128

        this.hitbox = new Hitbox(x, y, w, h)

        this.wandering = {
            x: {
                rnd: Math.random()*4,
                duration: Math.random()*450+50,
                durLeft: 0 
                
            }, 
            y: {
                rnd: Math.random()*4,
                duration: Math.random()*450+50,
                durLeft: 0 
            }
        }

    }
    update() {
        if(player.x > this.x - this.detectionRange && player.x < this.x + this.detectionRange && player.y > this.y - this.detectionRange && player.y < this.y + this.detectionRange) {
            if(player.x < this.x) {
                this.vx = -1 * this.speed
            } else if(player.x > this.x) {
                this.vx = 1 * this.speed
            } else {
                this.vx = 0
            } if(player.y < this.y) {
                this.vy = -1 * this.speed
            } else if(player.y > this.y) {
                this.vy = 1 * this.speed
            } else {
                this.vy = 0
            }
        } else {
            this.vy = 0
            this.vx = 0
            if(this.wandering.x.durLeft >= this.wandering.x.duration) {
                this.wandering.x.rnd = Math.random()*5
                this.wandering.x.duration = Math.random()*450+50
                if(this.wandering.x.rnd < 1.5) {
                    this.vx = -1 * this.speed
                    this.wandering.x.durLeft = 0
                } else if(this.wandering.x.rnd > 3.5) {
                    this.vx = 1 * this.speed
                    this.wandering.x.durLeft = 0
                } else {
                    this.vx = 0
                    this.wandering.x.durLeft = 0
                }
            } else {
                this.wandering.x.durLeft++
                if(this.wandering.x.rnd < 1) {
                    this.vx = -1 * this.speed
                } else if(this.wandering.x.rnd > 4) {
                    this.vx = 1 * this.speed
                }
            }
            if(this.wandering.y.durLeft >= this.wandering.y.duration) {
                this.wandering.y.rnd = Math.random()*5
                this.wandering.y.duration = Math.random()*450+50
                if(this.wandering.y.rnd < 1.5) {
                    this.vy = -1 * this.speed
                    this.wandering.y.durLeft = 0
                } else if(this.wandering.y.rnd > 3.5) {
                    this.vy = 1 * this.speed
                    this.wandering.y.durLeft = 0
                } else {
                    this.vy = 0
                    this.wandering.y.durLeft = 0
                }
            } else {
                this.wandering.y.durLeft++
                if(this.wandering.y.rnd < 1) {
                    this.vy = -1 * this.speed
                } else if(this.wandering.y.rnd > 4) {
                    this.vy = 1 * this.speed
                }
            }
        }
        if(this.map.grid[Math.floor((this.x + this.vx + 32)/64)][Math.floor((this.y + 32) /64)].tags.collisionDetection === false) {
            this.x = this.x + this.vx
        } if(this.map.grid[Math.floor((this.x + 32)/64)][Math.floor((this.y  + this.vy + 32) /64)].tags.collisionDetection === false) {
            this.y = this.y + this.vy
        } 
        
        this.hitbox.x = this.x
        this.hitbox.y = this.y
    }
    toSerializable(){
        return {
            name: this.name,
        
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h,

            map: this.map.toSerializable(),
            speed: this.speed,
            dmg: this.dmg,
            health: this.health,

            detectionRange: this.detectionRange,

            hitbox: this.hitbox.toSerializable
        }
    }
} class Animation {
    constructor(f, i) {
        framesNum = f
        frameInterval = i
        frames = []
    }
} class Shop {
    constructor(trades) {
        this.trades = trades
    }
}
