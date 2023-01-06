input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showNumber(input.temperature())
        basic.pause(2000)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
    basic.pause(2000)
})
basic.showIcon(IconNames.Yes)
basic.forever(function () {
	
})
