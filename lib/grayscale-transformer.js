function grayscale (rgbObj) {
    var num = (rgbObj.r + rgbObj.b + rgbObj.g) / 3;
    console.log(num);
    return {
        r:  num,
        g:  num,
        b:  num,
    };
}

module.exports = grayscale;