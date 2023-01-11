
import packageJSON from '../../package.json'
import { writeFileSync } from 'fs'

packageJSON.environment = process.argv[2]
writeFileSync('./package.json', JSON.stringify(packageJSON, null, 2))
