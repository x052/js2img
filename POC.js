const fs = require('fs')

module.exports = function JS2IMG(javascriptCode, bitmapImgFile) {
    const payload = Buffer.from('*/=null;' + javascriptCode)

    let inputImage = fs.readFileSync('input.bmp')
    inputImage.write('/*', 2)

    return Buffer.concat([inputImage, payload])
}