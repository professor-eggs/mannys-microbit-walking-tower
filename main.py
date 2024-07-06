def on_button_pressed_ab():
    global playing
    if playing:
        music.stop_melody(MelodyStopOptions.ALL)
        # Stop the music if it's playing
        playing = False
    else:
        music.play(music.string_playable(tetris_theme, 130),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        playing = True
input.on_button_pressed(Button.AB, on_button_pressed_ab)

playing = False
tetris_theme = ""
tetris_theme = "e5:3 :1 b4:2 c5:2 d5:3 :1 c5:2 b4:2 a4:3 :1 a4:2 c5:2 e5:3 :1 d5:2 c5:2 b4:3 :1 b4:1 :1 b4:2 d5:3 :1 e5:3 :1 c5:3 :1 a4:3 :1 a4:3 :7 a4:2 d5:2 f5:2 a5:3 :1 g5:2 f5:2 e5:3 :1 c5:2 d5:2 e5:3 :1 d5:2 c5:2 b4:3 :1 b4:2 c5:2 d5:3 :1 e5:3 :1 c5:3 :1 a4:2 :2 a4:2"

def on_forever():
    col = 0
    images.create_big_image("""
        . . # # # # # . . .
        . . # # # # # . . .
        . . # . . # . . . .
        . . # . . # . . . .
        . . # # . # # . . .
        """).show_image(col)
basic.forever(on_forever)
