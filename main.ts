basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showIcon(IconNames.Cow)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        `)
})
basic.forever(function () {
    basic.showIcon(IconNames.Butterfly)
})
basic.forever(function () {
    basic.showIcon(IconNames.Fabulous)
})
