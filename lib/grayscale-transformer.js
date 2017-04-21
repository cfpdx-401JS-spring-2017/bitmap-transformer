function grayscale (rgbObj) {
    var avg = (rgbObj.r + rgbObj.b + rgbObj.g) / 3;
    return {
        r:  avg,
        g:  avg,
        b:  avg,
    };
}

module.exports = grayscale;