import { handleArgIsNaN } from "./errorHandler.js"

const FIRST_ARG_INDEX = 2

function getNumberOfParagrahpsFromArgs(args) {
    if(args.length < FIRST_ARG_INDEX + 1) return Number.parseInt(1)
    
    const numberParagraphs = args[FIRST_ARG_INDEX]
    
    handleArgIsNaN(numberParagraphs)

    return Number.parseInt(numberParagraphs)
}

export { getNumberOfParagrahpsFromArgs }