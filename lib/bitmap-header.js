const constants = require('./bitmap-constants');
function bitMapHeader (buffer) {
    this.pixelOffset = buffer.readUInt32LE(constants.PIXEL_OFFSET);
    this.bitsPerPixel = buffer.readUInt16LE(constants.BITS_PER_PIXEL_OFFSET);
    this.fileSize = buffer.readUInt32LE(constants.FILE_SIZE_OFFSET);
}

module.exports = bitMapHeader;