

function BitmapHeader(buffer) {
    this.pixelOffset = buffer.readUInt32LE(10, 4);


}

module.exports = BitmapHeader;