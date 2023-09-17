
import { readFile, readdir, rm, rmdir, stat, writeFile } from 'fs/promises'
import prettify from '@liquify/prettify'
/**
 * recursively looks through a directory and performs all given operations when it finds a file
 * @param directory the directory to recursively read through
 * @param operations the operations to perform on each file
 */
async function recursivelyPerformOperations(directory: string[], operations: ((fileName: string) => Promise<void>) []) {
  for (const file of directory) {
    const stats = await stat(file)
    if (stats.isDirectory()) {
      const dir = await readdir(file)
      // recursively look down the whole tree
      await recursivelyPerformOperations(dir.map((innerFile) => `${file}/${innerFile}`), operations)
    } else {
      await Promise.all(operations.map(async (operation) => {
        await operation(file)
      }))
    }
  }
}

/**
 * the emoji found within the HTML build output
 */
const usedEmoji: string[] = []

await recursivelyPerformOperations(['./build'], [
  async (fileName: string) => {
    if (fileName.endsWith('__data.json')) {
      // do not need `__data.json` files because csr is globally disabled
      await rm(fileName)
      console.log(`🧹 Removed ${fileName} - unused because csr is disabled`)
    }
  },
  async (fileName: string) => {
    if (fileName.endsWith('.html')) {
      const file = (await readFile(fileName)).toString()
      // 🔍 look for emoji
      usedEmoji.push(...Array.from(file.matchAll(/emoji\/(mutantstd|twemoji)\/[^>]*?\.svg/g)).map(entry => entry[0]))
      // 💄 pretty print all my HTML
      await writeFile(fileName, (await prettify.format(file
                                                        .replace(/<!--[^>-]*?-->/g, '\r\n')
                                                        .replace(/<!-- [a-zA-Z0-9-_]*? -->/g, '\r\n')
                                                        .replace(/> </g, '>\r\n<')
                                                        .replace(/></g, '>\r\n<'), 
                                                        { 
                                                          language: 'html',
                                                          markup: {
                                                            attributeSort: true,
                                                            forceLeadAttribute: true
                                                          } 
                                                        })).replace(/^\s*\n/gm, ''))
      console.log(`💄 Pretty printed ${fileName}`)
    }
  }
])

// remove emoji that are unused from final build output
await recursivelyPerformOperations(['./build/emoji'], [
  async (fileName: string) => {
    if (usedEmoji.indexOf(fileName.replace('./build/', '')) === -1) {
      await rm(fileName)
      console.log(`🧹 Removed unused emoji: ${fileName}`)
    }
  }
])

// remove file formats that are unused from our thumbnails folder
await recursivelyPerformOperations(['./build/thumbnails'], [
  async (fileName: string) => {
    if (fileName.endsWith('.png')) {
      await rm(fileName)
      console.log(`🧹 Removed unused file type ${fileName}`)
    }
  }
])

// rename not found page
const notFoundHTML = await readFile('./build/not-found/index.html')
await writeFile('./build/404.html', notFoundHTML.toString().replaceAll(/href="\.\.\//g, 'href="'))
await rm('./build/not-found/index.html')
await rmdir('./build/not-found')
console.log('🚛 Moved not-found/index.html to 404.html')
