
import { writeFileSync, readFileSync } from 'fs'

const packageJSON = JSON.parse(readFileSync('./package.json').toString())
packageJSON.domain = process.argv[2]
writeFileSync('./package.json', JSON.stringify(packageJSON, null, 2))
