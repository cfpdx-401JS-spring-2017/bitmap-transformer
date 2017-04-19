
function BitmapHeader(buffer){
  this.pixelOffset = buffer.readUInt32LE(10);
}

module.exports = BitmapHeader;