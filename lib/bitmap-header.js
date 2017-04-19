const constance = require('../lib/bitmap-constants');

function BitmapHeader (buffer) {
    this.pixelOffset = buffer.readUInt32LE(constance.PIXEL_OFFSET);
    this.bitsPerPixel = buffer.readUInt32LE(constance.BITS_PER_PIXEL_OFFSET);
    this.fileSize = buffer.readUInt32LE(constance.FILE_SIZE_OFFSET);
}

module.exports = BitmapHeader;