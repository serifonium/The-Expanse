SERVER_PLAYERS = []
function change(id, values, player) {
    function check(req) {return id === req}
    if(check("changePlayerVelocity")) {
        if(values.x !== undefined) {player.vx = values.x}
        if(values.y !== undefined) {player.vy = values.y}
    } if(check("changePlayerRot")) {
        player.rotation = values.rotation
    }
}

function deliverPing(player, ping) {
    player.PING = ping
}
setInterval(() => {
    update()
}, 20);