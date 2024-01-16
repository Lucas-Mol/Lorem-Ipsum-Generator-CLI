#!/usr/bin/env node

import { argv, exit } from "process"
import { LoremIpsum } from "lorem-ipsum"

const numberParagraphs = getParagrahpsFromArgs()

const loremIpsum = new LoremIpsum()
console.log(loremIpsum.generateParagraphs(numberParagraphs))

function getParagrahpsFromArgs() {
    const argIndex = 2

    if(argv.length < argIndex + 1) return Number.parseInt(1)
    
    const numberParagraphs = argv[argIndex]
    
    if(isNaN(numberParagraphs)) {
        console.log("The provided argument is not a valid number is not a number")
        exit(1)
    }

    return Number.parseInt(numberParagraphs)
}