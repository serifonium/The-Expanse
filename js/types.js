

class Player {
    constructor(name, x, y, map) {
        this.name = name
        this.map = map
        this.x = x
        this.y = y
        this.tx = Math.floor((this.x + 25) / 64)
        this.ty = Math.floor((this.y + 25) / 64)
        this.vx = 0
        this.vy = 0
        this.rotation = 0
        this.canMove = true
        this.interfaceOpen
        this.place = "Starting Room"

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

        this.quests = [
        ]

        this.avatar = {
            hairColour: "#08196e",
            eyeColour: "#ff6254",
            skinColour: "#e09089",
            shirtColour: "#77f255",
            leggingsColour: "#37961d"
        }
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
        this.inventory = new Interface("inventory", [], function () {
            let xOffset = (window.innerWidth - 64 * 13) / 2 - 0
            let yOffset = (window.innerHeight - 64 * 7) / 2 - 0

            function drawBorder(x, y, w, h) {
                ctx.fillStyle = "#6b6b6b"
                ctx.fillRect(x, y, w, h)
                ctx.fillStyle = "#dddddd"
                ctx.fillRect(x + 4, y + 4, w - 8, h - 8)
            }

            ctx.globalAlpha = 0.5
            ctx.fillStyle = "#000000"
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
            ctx.globalAlpha = 1
            ctx.fillStyle = "#6b6b6b"
            ctx.fillRect(xOffset - 8, yOffset - 8, 64 * 13 + 16, 64 * 7 + 16)
            ctx.fillStyle = "#dddddd"
            ctx.fillRect(xOffset, yOffset+1, 64 * 13, 64 * 7)
            if(player.inventory.tab !== undefined) {
                if(player.inventory.tab === 0) {
                    for (let x = 0; x < 13; x++) {
                        for (let y = 0; y < 2; y++) {
                            if (x < 5 && y === 0) {
                                ctx.drawImage(imgCache.slot2, xOffset + x * 64, yOffset + y * 64 - 1)
                            } else {
                                ctx.drawImage(imgCache.slot1, xOffset + x * 64, yOffset + y * 64 - 1)
                            }
                            if(player.inventory.items[y*13+x] !== null) {
                                ctx.drawImage(player.inventory.items[y*13+x].texture, xOffset + x * 64, yOffset + y * 64 - 1)
                                if(player.inventory.items[y*13+x].amount > 1) {
                                    ctx.fillStyle = "#000000"
                                    ctx.font = "20px Arial";
                                    ctx.fillText(player.inventory.items[y*13+x].amount, xOffset + x * 64 + 40, yOffset + y * 64 + 56)
                                }
                            }
                        }
                    }
                    
                    drawBorder(xOffset+1*64, yOffset+2*64-1, 2*64, 3*64+1)
                    drawBorder(xOffset+0*64, yOffset+5*64-1, 4*64, 1*64+1)
                    drawBorder(xOffset+0*64, yOffset+6*64-1, 4*64, 1*64+2)
                    ctx.drawImage(imgCache.coin, xOffset+0*64, yOffset+6*64)
                    ctx.fillStyle = "#000000"
                    ctx.font = "32px Arial";
                    ctx.fillText(player.balance, xOffset+1*64+16, yOffset+6*64+42)
                } else if(player.inventory.tab === 1) {
                    for(let q in player.quests) {
                        let quest = player.quests[q]
                        drawBorder(xOffset+0*64, yOffset+(q*2)*64-1, 6*64, 2*64+2)
                        ctx.fillStyle = "#000000"
                        ctx.font = "16px Arial";
                        ctx.fillText(quest.name, xOffset+0*64+16, yOffset+(q*2)*64+40)
                        ctx.font = "12px Arial";
                        ctx.fillText(quest.desc, xOffset+0*64+16, yOffset+(q*2+1)*64+0)
                    }
                } else if(player.inventory.tab === 2) {
                    for(p in players) {
                        let player_ = players[p]
                        drawBorder(xOffset+6*64, yOffset+p*64, 7*64, 1*64)
                        ctx.fillStyle = "#000000"
                        ctx.font = "24px Arial";
                        ctx.fillText(player_.name, xOffset+6*64+16, yOffset+p*64+40)
                        drawBorder(xOffset+11*64+12, yOffset+p*64+12, 2*64-24, 1*64-24)
                        ctx.font = "12px Arial";
                        ctx.fillStyle = "#000000"
                        ctx.fillText("Invite to Party", xOffset+11*64+16, yOffset+p*64+38)
                    }
                }
            }

        })
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
            }, {
                name: "Wooden Shield",
                Ingredients: [new Item("Wooden Plank", "Resource", 15)],
                Products: [new Item("Wooden Shield", "Shield", 1)],
                Processing: "equipment table"
            }, {
                name: "Wooden Helmet",
                Ingredients: [new Item("Wooden Plank", "Resource", 15)],
                Products: [new Item("Wooden Helmet", "Helmet", 1)],
                Processing: "equipment table"
            }, {
                name: "Basic Armour Speed Module",
                Ingredients: [new Item("Iron Plating", "Resource", 15), new Item("Iron Plating", "Resource", 15)],
                Products: [new Item("Basic Armour Speed Module", "Module", 1)],
                Processing: "module bench"
            }, {
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


        this.personalOptions = {
            highlightInteract: true,
            hitboxesHighlighted: true,
            musicVolume: 0.5
        }

        if (this.rotation === 0) {
            this.interactTile = this.map.grid[this.tx][this.ty].up
        } else if (this.rotation === 3) {
            this.interactTile = this.map.grid[this.tx][this.ty].right
        } else if (this.rotation === 2) {
            this.interactTile = this.map.grid[this.tx][this.ty].down
        } else if (this.rotation === 1) {
            this.interactTile = this.map.grid[this.tx][this.ty].left
        }





    }
    update() {
        this.tx = Math.floor((this.x + 32) / 64)
        this.ty = Math.floor((this.y + 32) / 64)
        if (this.rotation === 0) {
            this.interactTile = this.map.grid[this.tx][this.ty].up
        } else if (this.rotation === 3) {
            this.interactTile = this.map.grid[this.tx][this.ty].right
        } else if (this.rotation === 2) {
            this.interactTile = this.map.grid[this.tx][this.ty].down
        } else if (this.rotation === 1) {
            this.interactTile = this.map.grid[this.tx][this.ty].left
        }
        if (this.itemCooldown !== 0) {
            this.itemCooldown -= 1
        } if (this.canMove === false) {
            this.vx = 0
            this.vy = 0
        }
        if (this.skills.combat.xp >= this.skills.combat.xpRequired) {
            this.skills.combat.xp = this.skills.combat.xp - this.skills.combat.xpRequired
            this.skills.combat.level++
            this.skills.combat.xpRequired = Math.floor(this.skills.combat.xpRequired * 1.5)
        } if (this.skills.foraging.xp >= this.skills.foraging.xpRequired) {
            this.skills.foraging.xp = this.skills.foraging.xp - this.skills.foraging.xpRequired
            this.skills.foraging.level++
            this.skills.foraging.xpRequired = Math.floor(this.skills.foraging.xpRequired * 1.5)
            this.strength++
        } if (this.skills.mining.xp >= this.skills.mining.xpRequired) {
            this.skills.mining.xp = this.skills.mining.xp - this.skills.mining.xpRequired
            this.skills.mining.level++
            this.skills.mining.xpRequired = Math.floor(this.skills.mining.xpRequired * 1.5)
        } if (this.skills.fishing.xp >= this.skills.fishing.xpRequired) {
            this.skills.fishing.xp = this.skills.fishing.xp - this.skills.fishing.xpRequired
            this.skills.fishing.level++
            this.skills.fishing.xpRequired = Math.floor(this.skills.fishing.xpRequired * 1.5)
        }
        for (let i = 0; i < 5; i++) {
            this.hotbar[i] = this.inventory.items[i]
        }
        this.speed = this.baseSpeed
        for (let b in this.effects) {
            let effect = this.effects[b]
            if (effect.name === "Coffee Shot") {
                this.speed = this.speed + 1

            } if (effect.name === "Rage") {
                this.speed = this.speed + 2

            }
            effect.duration += -0.02
            if (effect.duration < 0) {
                this.effects.splice(b, 1)

            }
        }
    }

    toSerializable() {
        return {
            name: this.name,
            x: this.x,
            y: this.y,
            map: this.map.name,

            baseSpeed: this.baseSpeed,
            baseStrength: this.baseStrength,

            balance: this.balance = 40,
            health: this.health = 20,
            maxHealth: this.maxHealth = 20,
            skills: this.skills,
            collections: this.collections,
            inventory: this.inventory.items
        }
    }

    deserialize(jsonString) {
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
        for (let i of this.gifts.loved) {
            if (item.name === i) {
                return 60
            }
        } for (let i of this.gifts.liked) {
            if (item.name === i) {
                return 30
            }
        } for (let i of this.gifts.disliked) {
            if (item.name === i) {
                return -30
            }
        } for (let i of this.gifts.hated) {
            if (item.name === i) {
                return -60
            }
        }
    }
}
class Hitbox {
    constructor(x, y, w, h, map, onPlayerSpace) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.interactFunction = null
        this.playerCollide = ""
        this.map = map
        //this.map.hitboxes.push(this)
        this.onPlayerSpace = onPlayerSpace
    }
    update(x, y) {
        this.x = x
        this.y = y
    }
    toSerializable() {
        return {
            x: this.x,
            y: this.y,
            h: this.h,
            w: this.w,
            playerCollide: this.playerCollide
        }
    }
}


class Interface {
    constructor(name, buttons, render) {
        this.name = name
        if (name === null) {
            this.name = ""
        }
        this.render = render
        this.mode = 0
        this.open = open
        this.buttons = buttons

    }
    close() {
        player.interfaceOpen = undefined
        for (let b of this.buttons) {
            b.active = false
        }
    }
}

class Item {
    constructor(name, type, amount) {
        this.name = name
        this.type = type
        this.desc = [

        ]
        this.enchantments = [

        ]
        if (amount === undefined) {
            this.amount = 1
        } else {
            this.amount = amount
        }
        if (name === "Wood") {
            this.texture = imgCache.wood
        } else if (name === "Stone") {
            this.texture = imgCache.stone
        } else if (name === "Fractured Sword") {
            this.texture = imgCache.fracturedSword
            this.attack = 3
            this.speed = 1.1
            this.desc = [
                { text: "attack:" + this.attack, colour: "#94090e" },
                { text: "speed:" + this.speed, colour: "#94090e" }
            ]
            //console.log(this)
        } else if (name === "Fractured Pickaxe") {
            this.texture = imgCache.fracturedPickaxe
        } else if (name === "Fractured Axe") {
            this.texture = imgCache.fracturedAxe
        } else if (name === "Basic Fishing Pole") {
            this.texture = imgCache.basicFishingPole
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
                rnd: Math.random() * 4,
                duration: Math.random() * 450 + 50,
                durLeft: 0

            },
            y: {
                rnd: Math.random() * 4,
                duration: Math.random() * 450 + 50,
                durLeft: 0
            }
        }

    }
    update() {
        if (player.x > this.x - this.detectionRange && player.x < this.x + this.detectionRange && player.y > this.y - this.detectionRange && player.y < this.y + this.detectionRange) {
            if (player.x < this.x) {
                this.vx = -1 * this.speed
            } else if (player.x > this.x) {
                this.vx = 1 * this.speed
            } else {
                this.vx = 0
            } if (player.y < this.y) {
                this.vy = -1 * this.speed
            } else if (player.y > this.y) {
                this.vy = 1 * this.speed
            } else {
                this.vy = 0
            }
        } else {
            this.vy = 0
            this.vx = 0
            if (this.wandering.x.durLeft >= this.wandering.x.duration) {
                this.wandering.x.rnd = Math.random() * 5
                this.wandering.x.duration = Math.random() * 450 + 50
                if (this.wandering.x.rnd < 1.5) {
                    this.vx = -1 * this.speed
                    this.wandering.x.durLeft = 0
                } else if (this.wandering.x.rnd > 3.5) {
                    this.vx = 1 * this.speed
                    this.wandering.x.durLeft = 0
                } else {
                    this.vx = 0
                    this.wandering.x.durLeft = 0
                }
            } else {
                this.wandering.x.durLeft++
                if (this.wandering.x.rnd < 1) {
                    this.vx = -1 * this.speed
                } else if (this.wandering.x.rnd > 4) {
                    this.vx = 1 * this.speed
                }
            }
            if (this.wandering.y.durLeft >= this.wandering.y.duration) {
                this.wandering.y.rnd = Math.random() * 5
                this.wandering.y.duration = Math.random() * 450 + 50
                if (this.wandering.y.rnd < 1.5) {
                    this.vy = -1 * this.speed
                    this.wandering.y.durLeft = 0
                } else if (this.wandering.y.rnd > 3.5) {
                    this.vy = 1 * this.speed
                    this.wandering.y.durLeft = 0
                } else {
                    this.vy = 0
                    this.wandering.y.durLeft = 0
                }
            } else {
                this.wandering.y.durLeft++
                if (this.wandering.y.rnd < 1) {
                    this.vy = -1 * this.speed
                } else if (this.wandering.y.rnd > 4) {
                    this.vy = 1 * this.speed
                }
            }
        }
        if (this.map.grid[Math.floor((this.x + this.vx + 32) / 64)][Math.floor((this.y + 32) / 64)].tags.collisionDetection === false) {
            this.x = this.x + this.vx
        } if (this.map.grid[Math.floor((this.x + 32) / 64)][Math.floor((this.y + this.vy + 32) / 64)].tags.collisionDetection === false) {
            this.y = this.y + this.vy
        }

        this.hitbox.x = this.x
        this.hitbox.y = this.y
    }
    toSerializable() {
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



class ToggleableButton {
    constructor(x, y, w, h, active, callback) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.active = active;
        this.toggle = false;
        let that = this;

        document.addEventListener("mousedown", function (e) {
            if (overlapping(that.x, that.y, that.w, that.h, e.clientX, e.clientY, 1, 1) === true) {

                if (that.active === true) {
                    that.toggle = !that.toggle;
                    callback(that)
                }
            }

        })
    }
} class Button {
    constructor(x, y, w, h, active, callback) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.active = active;
        let that = this;
        document.addEventListener("mousedown", function (e) {
            if (overlapping(that.x, that.y, that.w, that.h, e.clientX, e.clientY, 1, 1) === true) {

                if (that.active === true) {
                    callback(that)
                }
            }

        })
    }
}