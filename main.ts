controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.vehicle.roadVertical, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.over(false)
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`640008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000090b0b0a000000000f0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000004000000000000000000000000050600000000000f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000090b0b0b0b0b0b0b0b0a0000000000000400000004000000000000090b0b0b0b0b0b0b0b0b0a00000000000c0d00000000000f000000000400000000000000000000000004000000000004000000000000000000000000000000000400000400000000000005070707070707060000000000090b0b0b0b0b0b0b0a00000000000507070707070707060000000000000c0d04000000000f01020202020202020202020300000000010202020202020202020202020300000000010202020202020202020203000000000c0e0e0e0e0e0e0d000000000000050707070707060000000000000c0e0e0e0e0e0e0e0d0000000000000c0d090b0b0b0b0b08050707070707070707060808080808080507070707070707070707060808080808080507070707070707070608080808080c0e0e0e0e0e0e0d0808080808080c0e0e0e0e0e0d0808080808080c0e0e0e0e0e0e0e0d0808080808080c0e070707070707`, img`
    ....................................................................................................
    ....................................................................................................
    ...........................................................................................2222.....
    ............................................................................................22......
    .................................................2222222222.................22222222222.....22......
    ..................................................22222222.....222222222.....222222222......22......
    222222222222....22222222222222....222222222222....22222222......2222222......222222222......22222222
    .2222222222......222222222222......2222222222.....22222222......2222222......222222222......22222222
    `, [myTiles.transparency16,sprites.builtin.forestTiles21,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23,sprites.builtin.forestTiles0,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles6,sprites.dungeon.hazardWater,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.builtin.forestTiles2,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.builtin.forestTiles10,sprites.vehicle.roadVertical], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . f f f f f . . . 
    . . f f e e e e e f . . 
    . f f e e e e e e e f . 
    f f f f e e e e e e e f 
    f f f f f e e e 4 e e f 
    f f f f e e e 4 4 e e f 
    f f f f 4 4 4 4 4 e f f 
    f f 4 e 4 f f 4 4 e f f 
    . f 4 d 4 d d d d f f . 
    . f f f 4 d d b b f . . 
    . . f e e 4 4 4 e f . . 
    . . 4 d d e 1 1 1 f . . 
    . . e d d e 1 1 1 f . . 
    . . f e e f 6 6 6 f . . 
    . . . f f f f f f . . . 
    . . . . f f f . . . . . 
    `, SpriteKind.Player)
mySprite.ay = 400
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
