const sharp = require('sharp')
const fs = require('fs')

async function main() {
    const pngBuffer = await sharp('text.svg').flatten({ background: '#eeebe6' }).resize(1200).toBuffer()
    fs.writeFileSync('text.png', pngBuffer)
    console.info('pngBuffer', pngBuffer)
}

main()
