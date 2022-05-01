const serverURL = "https://expanse.venter.center";
//const serverURL = "http://localhost:5001";

const socket = io(serverURL, {
    withCredentials: false,
    
})


console.info("test");







var maps = []
var hitboxes = []
var notifications = []
var parties = []
var players = []









function askForUser() {
    var user = prompt("Please enter a username");
    if (user != null) {
        if (user == "" || user.length > 30) {
            alert("Username is too long or invaild")
            askForUser();
        } else {
            player.name = user;
            //fconsole.log("..." + socket.id)
            socket.emit("onPlayerConnect", { name : user, x: player.x, y: player.y, avatar: player.avatar })
        }
    } else {
        askForUser()
    }

}













socket.on('createExistingPlayers', (list) => {
    for (const prop in list) {
        const value = list[prop];
        console.log(value, socket.id)
        if(prop !== socket.id) {
            players.push(new Player(value.name, value.x, value.y, maps[0]))
            players[players.length - 1].id = prop
        }
        //console.log(socket.id, value); 

    }
})
socket.on('playerUpdate', function(data) {
    
    for (const prop in data) {
        
        const value = data[prop];
        
        for(let p in players) {
            let player_ = players[p]
            
            if(player_.id === prop) {
                //console.log(value)
                player_.x = value.x
                player_.y = value.y
            }
        }

    }
})
socket.on('removePlayer', (i) => {
    for(p in players) {
        let player = players[p]
        if(player.id === i) {
            players.splice(p, 1)
        }
    }
})
socket.on('createPlayer', (i, id) => {
    console.log("can confirm")
    if(socket.id !== id) {
        players.push(new Player(i.name, i.x, i.y, maps[0]))
        players[players.length - 1].id = id
        players[players.length - 1].avatar = i.avatar
    }
})
socket.on('universalNotification', (notification) => {
    notifications.push(notification)
    console.log("ok")
})
socket.on("updateMaps", (m) => {
    
    let maps_ = JSON.parse(m)
    for(let m_ in maps_) {
        let map = maps_[m_]
        let pMap = maps[m_]
        for(let x in pMap.grid) {
            for(let y in pMap.grid[x]) {
                maps[m_].grid[x][y].type = map.grid[x][y].type
                maps[m_].grid[x][y].decor = map.grid[x][y].decor
                if(map.grid[x][y].hits !== undefined) {
                    maps[m_].grid[x][y].hits = map.grid[x][y].hits
                } if(map.grid[x][y].cooldown !== undefined) {
                    maps[m_].grid[x][y].cooldown = map.grid[x][y].cooldown
                }
                maps[m_].grid[x][y].tags = map.grid[x][y].tags
            }
        }
    }
})
socket.on("addItem", (i) => {
    console.log(i)
    let item = new Item(i.name, i.type, i.amount)
    
    inventoryAdd(item)
})
socket.on("updateTile", (x, y, m, tile) => {
    console.info("updateTile")
    let t = maps[m].grid[x][y]
    if(tile.type != undefined) {
        t.type = tile.type
    } if(tile.decor != undefined) {
        t.decor = tile.decor
    } if(tile.hits != undefined) {
        t.hits = tile.hits
    } if(tile.cooldown != undefined) {
        t.cooldown = tile.cooldown
    } if(tile.collisionDetection != undefined) {
        t.tags.collisionDetection = tile.collisionDetection
    } 
    console.log(tile)
})