function playerRender(direction, p) {
    let oX = p.x + cx
    let oY = p.y - 64 + cy
    function rect(x, y, w, h) {
        ctx.fillRect(oX + x * 4, oY + y * 4, w * 4, h * 4)
    }
    if (direction === "up") {

    } if (direction === "left") {

    } if (direction === "down") {
        ctx.fillStyle = "#000000"
        ctx.fillRect(oX + 3 * 4, oY + 1 * 4, 5 * 4, 1 * 4)
        ctx.fillRect(oX + 2 * 4, oY + 2 * 4, 1 * 4, 1 * 4)
        ctx.fillRect(oX + 7 * 4, oY + 2 * 4, 6 * 4, 1 * 4)
        ctx.fillRect(oX + 14 * 4, oY + 4 * 4, 1 * 4, 2 * 4)
        ctx.fillRect(oX + 13 * 4, oY + 3 * 4, 1 * 4, 1 * 4)
        ctx.fillRect(oX + 4 * 4, oY + 6 * 4, 4 * 4, 1 * 4)
        ctx.fillRect(oX + 7 * 4, oY + 6 * 4, 5 * 4, 1 * 4)
        ctx.fillRect(oX + 12 * 4, oY + 7 * 4, 2 * 4, 1 * 4)
        ctx.fillRect(oX + 14 * 4, oY + 8 * 4, 1 * 4, 1 * 4)
        ctx.fillRect(oX + 15 * 4, oY + 5 * 4, 1 * 4, 5 * 4)
        ctx.fillRect(oX + 1 * 4, oY + 3 * 4, 1 * 4, 3 * 4)
        ctx.fillRect(oX + 0 * 4, oY + 6 * 4, 1 * 4, 3 * 4)
        ctx.fillRect(oX + 2 * 4, oY + 6 * 4, 2 * 4, 1 * 4)
        ctx.fillRect(oX + 1 * 4, oY + 7 * 4, 1 * 4, 1 * 4)
        ctx.fillStyle = p.avatar.hairColour
        ctx.fillRect(oX + 2 * 4, oY + 3 * 4, 11 * 4, 3 * 4)
        ctx.fillRect(oX + 1 * 4, oY + 6 * 4, 1 * 4, 1 * 4)
        ctx.fillRect(oX + 12 * 4, oY + 6 * 4, 3 * 4, 1 * 4)
        ctx.fillRect(oX + 14 * 4, oY + 7 * 4, 1 * 4, 1 * 4)
        ctx.fillRect(oX + 13 * 4, oY + 4 * 4, 1 * 4, 2 * 4)
        ctx.fillRect(oX + 3 * 4, oY + 2 * 4, 4 * 4, 1 * 4)
        ctx.fillStyle = "#000000"


        //head
        ctx.fillRect(oX + 3 * 4, oY + 7 * 4, 1 * 4, 5 * 4)
        ctx.fillRect(oX + 4 * 4, oY + 12 * 4, 3 * 4, 1 * 4)
        ctx.fillRect(oX + 12 * 4, oY + 8 * 4, 1 * 4, 4 * 4)
        ctx.fillRect(oX + 9 * 4, oY + 12 * 4, 3 * 4, 1 * 4)
        ctx.fillStyle = p.avatar.skinColour
        ctx.fillRect(oX + 4 * 4, oY + 7 * 4, 8 * 4, 5 * 4)
        ctx.fillRect(oX + 7 * 4, oY + 12 * 4, 2 * 4, 3 * 4)
        ctx.fillRect(oX + 6 * 4, oY + 14 * 4, 4 * 4, 1 * 4)
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(oX + 5 * 4, oY + 8 * 4, 1 * 4, 2 * 4)
        ctx.fillRect(oX + 10 * 4, oY + 8 * 4, 1 * 4, 2 * 4)
        ctx.fillStyle = p.avatar.eyeColour
        ctx.fillRect(oX + 6 * 4, oY + 8 * 4, 1 * 4, 2 * 4)
        ctx.fillRect(oX + 9 * 4, oY + 8 * 4, 1 * 4, 2 * 4)
        ctx.fillStyle = "#000000"
        ctx.fillRect(oX + 6 * 4, oY + 13 * 4, 1 * 4, 1 * 4)
        ctx.fillRect(oX + 9 * 4, oY + 13 * 4, 1 * 4, 1 * 4)
        ctx.fillRect(oX + 10 * 4, oY + 14 * 4, 4 * 4, 1 * 4)
        ctx.fillRect(oX + 2 * 4, oY + 14 * 4, 4 * 4, 1 * 4)

        ctx.fillRect(oX + 1 * 4, oY + 15 * 4, 1 * 4, 9 * 4)
        ctx.fillRect(oX + 14 * 4, oY + 15 * 4, 1 * 4, 9 * 4)
        ctx.fillRect(oX + 6 * 4, oY + 15 * 4, 4 * 4, 1 * 4)
        ctx.fillRect(oX + 11 * 4, oY + 18 * 4, 1 * 4, 14 * 4)
        ctx.fillRect(oX + 4 * 4, oY + 18 * 4, 1 * 4, 14 * 4)
        ctx.fillRect(oX + 2 * 4, oY + 24 * 4, 2 * 4, 1 * 4)
        ctx.fillRect(oX + 12 * 4, oY + 24 * 4, 2 * 4, 1 * 4)
        ctx.fillRect(oX + 2 * 4, oY + 22 * 4, 2 * 4, 1 * 4)
        ctx.fillRect(oX + 12 * 4, oY + 22 * 4, 2 * 4, 1 * 4)
        ctx.fillRect(oX + 5 * 4, oY + 32 * 4, 2 * 4, 1 * 4)
        ctx.fillRect(oX + 9 * 4, oY + 32 * 4, 2 * 4, 1 * 4)
        ctx.fillRect(oX + 7 * 4, oY + 28 * 4, 2 * 4, 4 * 4)
        ctx.fillRect(oX + 5 * 4, oY + 25 * 4, 6 * 4, 1 * 4)
        ctx.fillRect(oX + 5 * 4, oY + 30 * 4, 6 * 4, 1 * 4)
        ctx.fillStyle = p.avatar.skinColour
        ctx.fillRect(oX + 5 * 4, oY + 31 * 4, 2 * 4, 1 * 4)
        ctx.fillRect(oX + 9 * 4, oY + 31 * 4, 2 * 4, 1 * 4)
        ctx.fillRect(oX + 2 * 4, oY + 23 * 4, 2 * 4, 1 * 4)
        ctx.fillRect(oX + 12 * 4, oY + 23 * 4, 2 * 4, 1 * 4)
        ctx.fillStyle = p.avatar.shirtColour
        ctx.fillRect(oX + 2 * 4, oY + 16 * 4, 12 * 4, 2 * 4)
        ctx.fillRect(oX + 2 * 4, oY + 15 * 4, 4 * 4, 1 * 4)
        ctx.fillRect(oX + 10 * 4, oY + 15 * 4, 4 * 4, 1 * 4)
        ctx.fillRect(oX + 2 * 4, oY + 18 * 4, 2 * 4, 4 * 4)
        ctx.fillRect(oX + 12 * 4, oY + 18 * 4, 2 * 4, 4 * 4)
        ctx.fillRect(oX + 5 * 4, oY + 18 * 4, 6 * 4, 7 * 4)
        ctx.fillStyle = p.avatar.leggingsColour
        ctx.fillRect(oX + 5 * 4, oY + 26 * 4, 6 * 4, 2 * 4)
        ctx.fillRect(oX + 5 * 4, oY + 28 * 4, 2 * 4, 2 * 4)
        ctx.fillRect(oX + 9 * 4, oY + 28 * 4, 2 * 4, 2 * 4)
        /**/

    } if (direction === "right") {

    }
}