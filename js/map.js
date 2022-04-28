class Map {
    constructor(w, h, name) {
        this.name = name
        this.height = h
        this.width = w
        this.grid = []
        this.hitboxes = []
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
    toSerializable() {
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
class Tile {
    constructor(x, y) {
        this.type = "space"
        this.decor = ""
        this.pos = { x: x, y: y }
        this.onPlayerInteractActive = false
        this.onPlayerInteractRender = function () { }
        this.tags = {
            collisionDetection: false,
            canGrowTrees: false
        }
        this.hitbox = null
        this.light = 1
    }
    update() {
        if (this.onPlayerInteractActive === true) {
            this.onPlayerInteractRender()
        }
    }
    orientate(map) {
        if (this.pos.y - 1 >= 0) {
            map.grid[this.pos.x][this.pos.y].up = map.grid[this.pos.x][this.pos.y - 1]
        } else { map.grid[this.pos.x][this.pos.y].up = undefined }
        if (this.pos.x + 1 < map.width) {
            map.grid[this.pos.x][this.pos.y].right = map.grid[this.pos.x + 1][this.pos.y]
        } else { map.grid[this.pos.x][this.pos.y].right = undefined }
        if (this.pos.y + 1 < map.height) {
            map.grid[this.pos.x][this.pos.y].down = map.grid[this.pos.x][this.pos.y + 1]
        } else { map.grid[this.pos.x][this.pos.y].down = undefined }
        if (this.pos.x - 1 >= 0) {
            map.grid[this.pos.x][this.pos.y].left = map.grid[this.pos.x - 1][this.pos.y]
        } else { map.grid[this.pos.x][this.pos.y].left = undefined }
    }
    toSerializable() {
        return {
            type: this.type,
            //decor: this.decor,
            pos: this.pos,
            tags: this.tags,

        }
    }
}


class Tree {
    constructor(img, hits, callback) {
        this.img = img

        this.hits = hits

        this.callback = callback
    }
}