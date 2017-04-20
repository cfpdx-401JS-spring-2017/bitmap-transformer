const constant = require('../lib/bitmap-constants');

function BitmapHeader(buffer) {
    this.pixelOffset = buffer.readUInt32LE(constant.PIXEL_OFFSET);
    this.bitsPerPixel = buffer.readUInt16LE(constant.BITS_PER_PIXEL_OFFSET);
    this.fileSize = buffer.readUInt32LE(constant.FILE_SIZE_OFFSET);
}

module.exports = BitmapHeader;