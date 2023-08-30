
import { writeFileSync, readFileSync } from 'fs'

const packageJSON = JSON.parse(readFileSync('./package.json').toString())
packageJSON.environment = process.argv[2]
packageJSON.adapter = "node"
writeFileSync('./package.json', JSON.stringify(packageJSON, null, 2))
