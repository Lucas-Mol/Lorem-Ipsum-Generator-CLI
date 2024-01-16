#!/usr/bin/env node

import { LoremIpsum } from "lorem-ipsum"
import { getNumberOfParagrahpsFromArgs } from "./utils.js"

const args = process.argv
const numberParagraphs = getNumberOfParagrahpsFromArgs(args)

const loremIpsum = new LoremIpsum()
console.log(loremIpsum.generateParagraphs(numberParagraphs))