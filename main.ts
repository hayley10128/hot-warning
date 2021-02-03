if (input.temperature() < 30) {
    basic.showIcon(IconNames.Happy)
} else if (input.temperature() >= 30) {
    basic.showIcon(IconNames.Sad)
}
