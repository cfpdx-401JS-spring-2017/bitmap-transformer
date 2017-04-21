const BitmapHeader = require('./bitmap-header');

function BitmapTransformer(buffer) {
    this.transform = function (transformFn) {
        const header = new BitmapHeader(buffer);
        header
    };
}

module.exports = BitmapTransformer;