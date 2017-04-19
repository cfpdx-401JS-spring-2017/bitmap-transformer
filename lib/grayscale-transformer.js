function grayScale(rgbObj) {
    const avg = (rgbObj.r + rgbObj.g + rgbObj.b) / 3;
    return {
        r: avg,
        g: avg,
        b: avg 
    };
}

module.exports = grayScale;