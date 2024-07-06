input.onButtonPressed(Button.A, function () {
    if (col < 7) {
        currentImage = myImageReverse
        col += 1
    } else {
        music.play(music.tonePlayable(165, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (playing) {
        music.stopMelody(MelodyStopOptions.All)
        // Stop the music if it's playing
        playing = false
    } else {
        music.play(music.stringPlayable(tetris_theme, 130), music.PlaybackMode.LoopingInBackground)
        playing = true
    }
})
input.onButtonPressed(Button.B, function () {
    if (col > -3) {
        currentImage = myImage
        col += -1
    } else {
        music.play(music.tonePlayable(165, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
    }
})
let playing = false
let col = 0
let currentImage: Image = null
let myImageReverse: Image = null
let myImage: Image = null
let tetris_theme = ""
tetris_theme = "e5:3 :1 b4:2 c5:2 d5:3 :1 c5:2 b4:2 a4:3 :1 a4:2 c5:2 e5:3 :1 d5:2 c5:2 b4:3 :1 b4:1 :1 b4:2 d5:3 :1 e5:3 :1 c5:3 :1 a4:3 :1 a4:3 :7 a4:2 d5:2 f5:2 a5:3 :1 g5:2 f5:2 e5:3 :1 c5:2 d5:2 e5:3 :1 d5:2 c5:2 b4:3 :1 b4:2 c5:2 d5:3 :1 e5:3 :1 c5:3 :1 a4:2 :2 a4:2"
myImage = images.createBigImage(`
    . . # # # # # . . .
    . . # # # # # # . .
    . . # . . # . . . .
    . . # . . # . . . .
    . . # # . # # . . .
    `)
myImageReverse = images.createBigImage(`
    . . # # # # # . . .
    . # # # # # # . . .
    . . . # . . # . . .
    . . . # . . # . . .
    . . # # . # # . . .
    `)
currentImage = myImage
col = 0
basic.forever(function () {
    currentImage.showImage(col)
})
