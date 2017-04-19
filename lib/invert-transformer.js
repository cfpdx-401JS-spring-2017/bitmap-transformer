function invert (rgbObj){


    return {
        r:255-rgbObj.r,
        g:255-rgbObj.g,
        b:255-rgbObj.b
    };

};

module.exports = invert;