function grayscale(obj) {
    const average = (obj.r + obj.g + obj.b) / 3;

    return {
        r: average,
        g: average,
        b: average
    };

}

module.exports = grayscale;