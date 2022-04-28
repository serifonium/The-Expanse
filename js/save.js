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
    //player.x = file.player.x
    //player.y = file.player.y
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

player.interfaceOpen = new Interface("Loading", [new Button(window.innerWidth/2-320/2-8+128+2, window.innerHeight/5-8+128, 128, 64, true, function() {
    player.interfaceOpen.close()
}), new Button(window.innerWidth/2-320/2-8+128+2, window.innerHeight/5-8+128+200, 128, 64, true, function() {player.interfaceOpen.close()}), 
new Button(window.innerWidth/2-320/2-8+128+2, window.innerHeight/5-8+128+400, 128, 64, true, function() {player.interfaceOpen.close()})],
function() {
    ctx.textAlign = "center";
    ctx.fillStyle = "#4287f5";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "#000000";
    ctx.font = "12px Arial";
    ctx.fillText("welcome to game", window.innerWidth/2, window.innerHeight/6.5); //loadingText[Math.floor(Math.random()*loadingText.length)]
    ctx.font = "30px Arial";
    ctx.fillText("The Expanse", window.innerWidth/2, window.innerHeight/8);
    ctx.fillStyle = "#6b6b6b";
    ctx.fillRect(window.innerWidth/2-320/2-8, window.innerHeight/5-8, 320+16, 192*3+16+16);
    for (let i = 0; i < 3; i++) {
        ctx.fillStyle = "#dddddd";
        ctx.fillRect(window.innerWidth/2-320/2-8+8, window.innerHeight/5-8+8+i*200, 320, 192)
        ctx.fillStyle = "#6b6b6b";
        ctx.fillRect(window.innerWidth/2-320/2-8+128+8, window.innerHeight/5-8+8+i*200, 8, 192)
        ctx.drawImage(imgCache.startButton, window.innerWidth/2-320/2-8+128+26, window.innerHeight/5-8+128+i*200)
        if(localStorage.getItem("save"+i) === null) {
            ctx.fillStyle = "#000000"
            ctx.font = "32px Arial";
            ctx.fillText("New File", window.innerWidth/2-320/2+56, 8)
        } else {
            ctx.textAlign = "center";
            ctx.font = "32px Arial";
            ctx.fillStyle = "#000000"
            ctx.drawImage(imgCache.deleteSave, window.innerWidth/2-320/2-8+290, window.innerHeight/5-8+156+i*200)
            ctx.fillText("Save File "+(i+1), window.innerWidth/2-320/2-8+234, window.innerHeight/5+i*200+40)
            ctx.font = "16px Arial";
            ctx.textAlign = "start";
            ctx.fillText("name", window.innerWidth/2-320/2+145, window.innerHeight/5+80+i*200)
        }
    }
})