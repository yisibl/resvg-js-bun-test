const { promises } = require('fs')
const { join } = require('path')

const { Resvg } = require('@resvg/resvg-js')

const svg = `<svg width="10px" height="5px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect fill="red" x="0" y="0" width="5" height="5"></rect>
    <rect fill="green" x="5" y="0" width="5" height="5"></rect>
  </svg>`

const opts = {
    background: 'rgba(238, 235, 230, .9)',
    fitTo: {
        mode: 'width',
        value: 500,
    },
    font: {
        loadSystemFonts: false,
    },
}

async function main() {
    const resvg = new Resvg(svg, opts)
    const pngData = resvg.render()
    const pngBuffer = pngData.asPng()

    promises.writeFile(join(__dirname, './output.png'), pngBuffer)
}

main()
