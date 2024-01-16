function _exitProgramWithMessage(message) {
    console.log(message)
    exit(1)
}

function handleArgIsNaN(arg) {
    if(isNaN(arg)) {
        _exitProgramWithMessage("The provided argument is not a valid number")
    }
}

export { handleArgIsNaN }