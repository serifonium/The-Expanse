var save = undefined;
function saveGame(file) {
    //maps.map(m => console.log(m))
    let savemaps = []
    //for(let m of maps) {
        //savemaps.push(m.toSerializable)
    //}
    localStorage.setItem("save"+file, 
        JSON.stringify({
            //maps: savemaps,
            player: player.toSerializable()
        })
        
    )
    
} function loadGame(f) {
    
    let file = JSON.parse(localStorage.getItem("save"+f))
    //maps = file.maps
    player.name = file.player.name
    player.balance = file.player.balance
    player.baseSpeed = file.player.baseSpeed
    player.baseStrength = file.player.baseStrength
    player.collections = file.player.collections
    player.health = file.player.health
    player.maxHealth = file.player.maxHealth
    player.inventory.items = file.player.inventory
    player.skills = file.player.skills
    player.x = file.player.x
    player.y = file.player.y
    console.log(file)
}

function loadFile0() {
    if(localStorage.getItem("save0") !== null) {
        
        loadGame(0)
    } else {
        
    }
    save = 0
    
    document.getElementById("loading").hidden = true
    playRandomSong();
}
function loadFile1() {
    if(localStorage.getItem("save1") !== null) {
        
        loadGame(1)
    } else {
        
    }
    save = 1
    document.getElementById("loading").hidden = true
    playRandomSong();
}
function loadFile2() {
    if(localStorage.getItem("save2") !== null) {
        
        loadGame(2)
    } else {
        
    }
    save = 2
    
    document.getElementById("loading").hidden = true
    playRandomSong();
}