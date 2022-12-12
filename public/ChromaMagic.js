const buildPalette = (colorsList) => {
    const paletteContainer = document.getElementById("palette");
    const complementaryContainer = document.getElementById("complementary");
    // reset the HTML in case you load various images
    paletteContainer.innerHTML = "";
    complementaryContainer.innerHTML = "";

    const orderedByColor = orderByLuminance(colorsList);
    const hslColors = convertRGBtoHSL(orderedByColor);

    for (let i = 0; i < orderedByColor.length; i++) {
        const hexColor = rgbToHex1(orderedByColor[i]);

        const hexColorComplementary = hslToHex(hslColors[i]);

        if (i > 0) {
            const difference = calculateColorDifference(
                orderedByColor[i],
                orderedByColor[i - 1]
            );

            // if the distance is less than 120 we ommit that color
            // if (difference < 120) {
            //     continue;
            // }
        }

        // create the div and text elements for both colors & append it to the document
        const colorElement = document.createElement("div");
        var intColor = [orderedByColor[i].r, orderedByColor[i].g, orderedByColor[i].b, 255];
        colorElement.setAttribute('title', intColor)
        colorElement.onclick = function() {
            update_color_panel(this.title.split(","));
        };
        colorElement.style.backgroundColor = hexColor;
        colorElement.style.cursor = 'pointer';
        const pixel_data = munsellchips['convertPixelData'](intColor)
        const besthit = pixel_data[_0x125fa5(0x1b8)]
        // colorElement.appendChild(document.createTextNode(`${hexColor}`));
        colorElement.appendChild(document.createTextNode(`${besthit.huenamevalue} ${besthit.value}/${besthit.chroma}`));
        paletteContainer.appendChild(colorElement);
        // true when hsl color is not black/white/grey
        if (hslColors[i].h) {
            const complementaryElement = document.createElement("div");
            complementaryElement.style.backgroundColor = `hsl(${hslColors[i].h},${hslColors[i].s}%,${hslColors[i].l}%)`;
            console.log('data:',complementaryElement);
            complementaryElement.appendChild(
                document.createTextNode(hexColorComplementary)
            );
            // complementaryContainer.appendChild(complementaryElement);
        }
    }
};

//  Convert each pixel value ( number ) to hexadecimal ( string ) with base 16
const rgbToHex1 = (pixel) => {
    console.log(pixel)
    const componentToHex = (c) => {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };

    return (
        "#" +
        componentToHex(pixel.r) +
        componentToHex(pixel.g) +
        componentToHex(pixel.b)
    ).toUpperCase();
};

/**
 * Convert HSL to Hex
 * this entire formula can be found in stackoverflow, credits to @icl7126 !!!
 * https://stackoverflow.com/a/44134328/17150245
 */
const hslToHex = (hslColor) => {
    const hslColorCopy = {...hslColor
    };
    hslColorCopy.l /= 100;
    const a =
        (hslColorCopy.s * Math.min(hslColorCopy.l, 1 - hslColorCopy.l)) / 100;
    const f = (n) => {
        const k = (n + hslColorCopy.h / 30) % 12;
        const color = hslColorCopy.l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
};

/**
 * Convert RGB values to HSL
 * This formula can be
 * found here https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
 */
const convertRGBtoHSL = (rgbValues) => {
    return rgbValues.map((pixel) => {
        let hue,
            saturation,
            luminance = 0;

        // first change range from 0-255 to 0 - 1
        let redOpposite = pixel.r / 255;
        let greenOpposite = pixel.g / 255;
        let blueOpposite = pixel.b / 255;

        const Cmax = Math.max(redOpposite, greenOpposite, blueOpposite);
        const Cmin = Math.min(redOpposite, greenOpposite, blueOpposite);

        const difference = Cmax - Cmin;

        luminance = (Cmax + Cmin) / 2.0;

        if (luminance <= 0.5) {
            saturation = difference / (Cmax + Cmin);
        } else if (luminance >= 0.5) {
            saturation = difference / (2.0 - Cmax - Cmin);
        }

        /**
         * If Red is max, then Hue = (G-B)/(max-min)
         * If Green is max, then Hue = 2.0 + (B-R)/(max-min)
         * If Blue is max, then Hue = 4.0 + (R-G)/(max-min)
         */
        const maxColorValue = Math.max(pixel.r, pixel.g, pixel.b);

        if (maxColorValue === pixel.r) {
            hue = (greenOpposite - blueOpposite) / difference;
        } else if (maxColorValue === pixel.g) {
            hue = 2.0 + (blueOpposite - redOpposite) / difference;
        } else {
            hue = 4.0 + (greenOpposite - blueOpposite) / difference;
        }

        hue = hue * 60; // find the sector of 60 degrees to which the color belongs

        // it should be always a positive angle
        if (hue < 0) {
            hue = hue + 360;
        }

        // When all three of R, G and B are equal, we get a neutral color: white, grey or black.
        if (difference === 0) {
            return false;
        }

        return {
            h: Math.round(hue) + 180, // plus 180 degrees because that is the complementary color
            s: parseFloat(saturation * 100).toFixed(2),
            l: parseFloat(luminance * 100).toFixed(2),
        };
    });
};

/**
 * Using relative luminance we order the brightness of the colors
 * the fixed values and further explanation about this topic
 * can be found here -> https://en.wikipedia.org/wiki/Luma_(video)
 */
const orderByLuminance = (rgbValues) => {
    const calculateLuminance = (p) => {
        return 0.2126 * p.r + 0.7152 * p.g + 0.0722 * p.b;
    };

    return rgbValues.sort((p1, p2) => {
        return calculateLuminance(p2) - calculateLuminance(p1);
    });
};

const buildRgb = (imageData) => {
    const rgbValues = [];
    // note that we are loopin every 4!
    // for every Red, Green, Blue and Alpha
    for (let i = 0; i < imageData.length; i += 4) {
        if(imageData[i] !== 0 || imageData[i+1] !== 0 || imageData[i+2] !== 0) {
            const rgb = {
                r: imageData[i],
                g: imageData[i + 1],
                b: imageData[i + 2],
            };
    
            rgbValues.push(rgb);
        }
    }

    return rgbValues;
};

/**
 * Calculate the color distance or difference between 2 colors
 *
 * further explanation of this topic
 * can be found here -> https://en.wikipedia.org/wiki/Euclidean_distance
 * note: this method is not accuarate for better results use Delta-E distance metric.
 */
const calculateColorDifference = (color1, color2) => {
    const rDifference = Math.pow(color2.r - color1.r, 2);
    const gDifference = Math.pow(color2.g - color1.g, 2);
    const bDifference = Math.pow(color2.b - color1.b, 2);

    return rDifference + gDifference + bDifference;
};

// returns what color channel has the biggest difference
const findBiggestColorRange = (rgbValues) => {
    /**
     * Min is initialized to the maximum value posible
     * from there we procced to find the minimum value for that color channel
     *
     * Max is initialized to the minimum value posible
     * from there we procced to fin the maximum value for that color channel
     */
    let rMin = Number.MAX_VALUE;
    let gMin = Number.MAX_VALUE;
    let bMin = Number.MAX_VALUE;

    let rMax = Number.MIN_VALUE;
    let gMax = Number.MIN_VALUE;
    let bMax = Number.MIN_VALUE;

    rgbValues.forEach((pixel) => {
        rMin = Math.min(rMin, pixel.r);
        gMin = Math.min(gMin, pixel.g);
        bMin = Math.min(bMin, pixel.b);

        rMax = Math.max(rMax, pixel.r);
        gMax = Math.max(gMax, pixel.g);
        bMax = Math.max(bMax, pixel.b);
    });

    const rRange = rMax - rMin;
    const gRange = gMax - gMin;
    const bRange = bMax - bMin;

    // determine which color has the biggest difference
    const biggestRange = Math.max(rRange, gRange, bRange);
    if (biggestRange === rRange) {
        return "r";
    } else if (biggestRange === gRange) {
        return "g";
    } else {
        return "b";
    }
};

/**
 * Median cut implementation
 * can be found here -> https://en.wikipedia.org/wiki/Median_cut
 */
const quantization = (rgbValues, count) => {
    const componentToSortBy = findBiggestColorRange(rgbValues);
    rgbValues.sort((p1, p2) => {
        return p1[componentToSortBy] - p2[componentToSortBy];
    });
    var arrays = [];
    if (rgbValues.length % count === 0) {
        var division = rgbValues.length / count;
    } else {
        var division = Math.round(rgbValues.length / count);
    }
    while (rgbValues.length > 0) {
        if (rgbValues.length > division && rgbValues.length < division * 1.5) {
            var subArray = rgbValues.splice(0);
        } else {
                var subArray = rgbValues.splice(0, division);
            }
            // var subArray = rgbValues.splice(0, division);
            // var subArray = rgbValues.splice(0)
        const color = subArray.reduce(
            (prev, curr) => {
                prev.r += curr.r;
                prev.g += curr.g;
                prev.b += curr.b;

                return prev;
            }, {
                r: 0,
                g: 0,
                b: 0,
            }
        );

        color.r = Math.round(color.r / subArray.length);
        color.g = Math.round(color.g / subArray.length);
        color.b = Math.round(color.b / subArray.length);
        arrays.push(color)
    }
    return arrays;
};
const refresh = () => {
    var count = $('#count').val();
    const canvas = document.getElementById("genimg");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const rgbArray = buildRgb(imageData.data);
        const quantColors = quantization(rgbArray, count);

        buildPalette(quantColors);
    }
    console.log('');
}

// ******************************************************
var canvasDiv = document.getElementById('canvasDiv');
canvasEle = document.createElement('canvas');
canvasEle.setAttribute('width', 500);
canvasEle.setAttribute('height', 500);
canvasEle.setAttribute('id', 'canvas');
$(canvasDiv).prepend(canvasEle);
if (typeof G_vmlCanvasManager != 'undefined') {
    canvasEle = G_vmlCanvasManager.initElement(canvasEle);
}

var context = canvasEle.getContext('2d');
var imageObj = new Image();
// imageObj.crossOrigin = "Anonymous";
imageObj.onload = function() {
    $(canvasEle).attr({
        width: this.width,
        height: this.height
    });
    context.drawImage(imageObj, 0, 0);
    // alert('image loading ...');
    // const originalCanvas = document.getElementById("image_canvas");
    // imageObj.src = originalCanvas.toDataURL();
};
// imageObj.src = './public/darth-vader.jpg';
imageObj.src = "data:image/png;base64,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";
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging) {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
}
let imgRendered = false;

function redraw() {
    canvasEle.width = canvasEle.width; // Clears the canvas 

    context.drawImage(imageObj, 0, 0);

    context.strokeStyle = "#df4b26";
    context.lineJoin = "round";
    context.lineWidth = 5;

    for (var i = 0; i < clickX.length; i++) {
        context.beginPath();
        context.arc(clickX[i], clickY[i], 3, 0, 2 * Math.PI, false);
        context.fillStyle = '#ffffff';
        context.fill();
        context.lineWidth = 5;
        context.stroke();
    }
}

$('#canvas').click(function(e) {
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;

    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
    redraw();
});

$('#process_img').click(function(e) {
    const originalCanvas = document.getElementById("image_canvas");
    if (originalCanvas) {
        imageObj.src = originalCanvas.toDataURL();
    }
});

$('#generate').click(async function() {
    $(".clipParent").empty();
    const originalCanvas = document.getElementById("image_canvas");
    $(".clipParent").prepend(`<img src="${originalCanvas.toDataURL()}" id="genimg" />`);
    var arr = [];
    for (var i = 0; i < clickX.length; i++) {
        arr.push(clickX[i]);
        arr.push(clickY[i]);
    }
    $("#genimg")[0].setAttribute("data-polyclip", arr.join(", "));
    clickX = [];
    clickY = [];
    redraw();
    await polyClip.init();
    subArea();
    setTimeout(() => {
        refresh();
    }, 1500);
});

function subArea() {

}