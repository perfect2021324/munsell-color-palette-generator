var _0x125fa5 = _0x12bc;
(function(_0x3a9382, _0x182964) {
        var _0x2577b3 = _0x12bc,
            _0xd7423c = _0x3a9382();
        while (!![]) {
            try {
                var _0x12322c = parseInt(_0x2577b3(0x1e1)) / 0x1 + parseInt(_0x2577b3(0x1e6)) / 0x2 + parseInt(_0x2577b3(0x1ec)) / 0x3 * (-parseInt(_0x2577b3(0x1ea)) / 0x4) + parseInt(_0x2577b3(0x178)) / 0x5 + -parseInt(_0x2577b3(0x1c4)) / 0x6 + parseInt(_0x2577b3(0x181)) / 0x7 + parseInt(_0x2577b3(0x19a)) / 0x8 * (parseInt(_0x2577b3(0x1cb)) / 0x9);
                if (_0x12322c === _0x182964)
                    break;
                else
                    _0xd7423c['push'](_0xd7423c['shift']());
            } catch (_0x5c1dbb) {
                _0xd7423c['push'](_0xd7423c['shift']());
            }
        }
    }(_0x4596, 0x484b9),
    image_loaded = 0x0,
    debug = ![],
    img = null,
    imgwidth = null,
    imgheight = null,
    munsellchips = MunsellChipsRGB(),
    munsellchips[_0x125fa5(0x211)](),
    center_ix = null,
    center_iy = null,
    cx = null,
    cy = null,
    prev_cx = null,
    prev_cy = null,
    src_x = null,
    src_y = null,
    offsetx = 0x14,
    offsety = 0x14,
    besthit = null,
    hex = null,
    hex2 = null,
    p = null,
    str = '',
    show_nearest_chips = ![],
    show_lowchroma_chips = ![],
    lowchroma_value = '5',
    zoom_width = 0x190,
    mouse_down = ![],
    dragged_pixels = [],
    dragged_chips = {},
    window['onload'] = function() {
        var _0xa5e793 = _0x125fa5;
        window['onresize'] = resize;
        var _0xee6887 = document[_0xa5e793(0x1a5)](_0xa5e793(0x1ee)),
            _0x595deb = document[_0xa5e793(0x1a5)](_0xa5e793(0x18d));
        _0x595deb[_0xa5e793(0x17c)] = function() {
                _0xee6887['click']();
            },
            _0xee6887[_0xa5e793(0x1f1)] = function(_0x5410be) {
                onFileSelected(_0x5410be);
            };
        var _0x54dfbc = document[_0xa5e793(0x1a5)](_0xa5e793(0x1a6)),
            _0x17aca7 = document['getElementById'](_0xa5e793(0x224));
        _0x54dfbc[_0xa5e793(0x17d)](_0xa5e793(0x1f5), zoom_canvas_crosshair_mouseup),
            _0x17aca7['addEventListener'](_0xa5e793(0x1f5), image_canvas_mouseup),
            _0x17aca7[_0xa5e793(0x17d)](_0xa5e793(0x21b), function(_0x442fb5) {
                mouse_down = !![],
                    dragged_pixels = [],
                    dragged_chips = {};
            }),
            document['ontouchmove'] = _0x2efeee => {
                _0x2efeee['preventDefault']();
            },
            document['onkeypress'] = function(_0x5223cc) {
                var _0x116871 = _0xa5e793;
                _0x5223cc = _0x5223cc || window['event'];
                var _0xb70a8d = String[_0x116871(0x1e3)](_0x5223cc[_0x116871(0x1a2)]);
                _0xb70a8d == 'n' && (show_lowchroma_chips = ![],
                        show_nearest_chips = !show_nearest_chips,
                        redraw_munsell_card()),
                    _0xb70a8d == 'l' && (show_nearest_chips = ![],
                        show_lowchroma_chips = !show_lowchroma_chips,
                        redraw_munsell_card()),
                    isNumber(_0xb70a8d) && (lowchroma_value = _0xb70a8d,
                        redraw_munsell_card());
            },
            window[_0xa5e793(0x17d)]('click', function(_0x53fd32) {
                _0x53fd32['detail'] === 0x3 && (debug = !debug);
            });
        var _0x2df877 = document[_0xa5e793(0x1a5)](_0xa5e793(0x195));
        if (_0x2df877) {
            var _0x6e2ac5 = _0x2df877[_0xa5e793(0x18a)],
                _0x47cdef = new XMLHttpRequest();
            _0x47cdef['open']('GET', _0x6e2ac5, !![]),
                _0x47cdef[_0xa5e793(0x18e)] = 'blob',
                _0x47cdef[_0xa5e793(0x189)] = function() {
                    var _0x4f2b06 = _0xa5e793,
                        _0x183042 = new FileReader();
                    _0x183042[_0x4f2b06(0x1a0)](_0x47cdef[_0x4f2b06(0x215)]),
                        _0x183042[_0x4f2b06(0x189)] = function(_0x554554) {
                            var _0x238ae2 = _0x4f2b06;
                            img = new Image(),
                                img[_0x238ae2(0x20c)] = _0x554554['target'][_0x238ae2(0x21e)],
                                loadImage(img);
                        };
                },
                _0x47cdef[_0xa5e793(0x196)]();
        }
    }
);

function resizeImage(_0x499fd6, _0x4fb150, _0x20fa1f) {
    var _0x39a57a = _0x125fa5,
        _0x24974c = document['createElement'](_0x39a57a(0x1b2)),
        _0x1abde6 = _0x24974c[_0x39a57a(0x1e7)]('2d');
    _0x1abde6[_0x39a57a(0x1ca)](_0x499fd6, 0x0, 0x0);
    var _0x30d5b0 = _0x499fd6[_0x39a57a(0x1f4)],
        _0x41bf55 = _0x499fd6[_0x39a57a(0x19c)];
    _0x30d5b0 / _0x4fb150 < _0x41bf55 / _0x20fa1f ? _0x30d5b0 < _0x4fb150 && (_0x41bf55 *= _0x4fb150 / _0x30d5b0,
        _0x30d5b0 = _0x4fb150) : _0x41bf55 < _0x20fa1f && (_0x30d5b0 *= _0x20fa1f / _0x41bf55,
        _0x41bf55 = _0x20fa1f);
    _0x24974c['width'] = _0x30d5b0,
        _0x24974c[_0x39a57a(0x19c)] = _0x41bf55;
    var _0x1abde6 = _0x24974c[_0x39a57a(0x1e7)]('2d');
    _0x1abde6[_0x39a57a(0x1ca)](_0x499fd6, 0x0, 0x0, _0x30d5b0, _0x41bf55);
    var _0x43c6ca = new Image();
    return _0x43c6ca[_0x39a57a(0x20c)] = _0x24974c[_0x39a57a(0x20a)](_0x39a57a(0x1aa)),
        _0x43c6ca;
}

function onFileSelected(_0x4f632d) {
    var _0x4ec409 = _0x125fa5,
        _0x22f00b = _0x4f632d[_0x4ec409(0x1fa)][_0x4ec409(0x1d1)][0x0],
        _0x3ae9e6 = new FileReader();
    _0x3ae9e6[_0x4ec409(0x189)] = function(_0x56faa4) {
            var _0x20966a = _0x4ec409;
            img = new Image(),
                img[_0x20966a(0x20c)] = _0x56faa4[_0x20966a(0x1fa)][_0x20966a(0x21e)],
                loadImage(img);
        },
        _0x3ae9e6[_0x4ec409(0x1a0)](_0x22f00b);
}

function loadImage(_0x2fb11d) {
    var _0x1a6ec8 = _0x125fa5;
    _0x2fb11d[_0x1a6ec8(0x189)] = function() {
        var _0xaba91 = _0x1a6ec8;
        image_loaded = 0x1,
            img = resizeImage(_0x2fb11d, 0x7d0, 0x7d0),
            img[_0xaba91(0x189)] = function() {
                var _0x4359d6 = _0xaba91,
                    _0x246b63 = document[_0x4359d6(0x1a5)](_0x4359d6(0x1e5)),
                    _0x3bafd8 = document[_0x4359d6(0x1a5)]('image_canvas'),
                    _0x3683c7 = _0x246b63['getBoundingClientRect']();
                img_width = img['naturalWidth'],
                    img_height = img[_0x4359d6(0x1a7)],
                    redraw_image(),
                    center_ix = Math[_0x4359d6(0x17f)](img_width / 0x2),
                    center_iy = Math[_0x4359d6(0x17f)](img_height / 0x2),
                    cx = _0x3bafd8[_0x4359d6(0x1f4)] / 0x2,
                    cy = _0x3bafd8[_0x4359d6(0x19c)] / 0x2;
                var _0x1343db = image_canvas[_0x4359d6(0x1e7)]('2d');
                const rgbArray = buildRgb(_0x1343db.getImageData(0, 0, image_canvas.width, image_canvas.height).data)

                const quantColors = quantization(rgbArray, $('#count').val());

                // Create the HTML structure to show the color palette
                buildPalette(quantColors);
                p = _0x1343db['getImageData'](_0x3bafd8[_0x4359d6(0x1f4)] / 0x2, _0x3bafd8[_0x4359d6(0x19c)] / 0x2, 0x1, 0x1)[_0x4359d6(0x209)],
                    update_color_panel(p),
                    redraw_zoomcanvas();
            };
    };
}

function redraw_image() {
    if (img == null)
        return;
    resize_image_canvas(),
        resize_zoom_canvas(),
        redraw_image_canvas();
}

function redraw_image_canvas() {
    var _0x276309 = _0x125fa5,
        _0x3492b0 = document[_0x276309(0x1a5)](_0x276309(0x224)),
        _0x552729 = _0x3492b0[_0x276309(0x1e7)]('2d');
    _0x552729[_0x276309(0x1ca)](img, 0x0, 0x0, _0x3492b0[_0x276309(0x1f4)], _0x3492b0['height']);
}

function redraw_zoomcanvas() {
    var _0x5ae1d2 = _0x125fa5,
        _0x30c422 = document[_0x5ae1d2(0x1a5)](_0x5ae1d2(0x220)),
        _0x2c2d51 = _0x30c422[_0x5ae1d2(0x1a1)](),
        _0x1ecf1f = document[_0x5ae1d2(0x1a5)](_0x5ae1d2(0x17e)),
        _0x51c6bf = _0x1ecf1f['getBoundingClientRect'](),
        _0x3a348a = _0x30c422[_0x5ae1d2(0x1e7)]('2d');
    _0x3a348a[_0x5ae1d2(0x187)](0x0, 0x0, _0x2c2d51[_0x5ae1d2(0x1f4)], _0x2c2d51['height']),
        zoom_height = zoom_width * _0x2c2d51['height'] / _0x2c2d51[_0x5ae1d2(0x1f4)],
        src_x = Math[_0x5ae1d2(0x17f)](center_ix - zoom_width / 0x2),
        src_y = Math[_0x5ae1d2(0x17f)](center_iy - zoom_width * _0x2c2d51[_0x5ae1d2(0x19c)] / (0x2 * _0x2c2d51[_0x5ae1d2(0x1f4)])),
        end_x = src_x + 0x190,
        end_y = src_y + zoom_height;
    src_x < 0x0 && (src_x = 0x0);
    src_y < 0x0 && (src_y = 0x0);
    _0x3a348a[_0x5ae1d2(0x1ca)](img, src_x, src_y, zoom_width, zoom_height, 0x0, 0x0, _0x2c2d51[_0x5ae1d2(0x1f4)], _0x2c2d51[_0x5ae1d2(0x19c)]),
        redraw_zoom_crosshairs();
    if (debug) {
        var _0xa44549 = document['getElementById'](_0x5ae1d2(0x1c1)),
            _0x5e2025 = _0xa44549[_0x5ae1d2(0x1e7)]('2d'),
            _0x54f2f8 = document['getElementById'](_0x5ae1d2(0x1f8)),
            _0x2c2d51 = _0x54f2f8[_0x5ae1d2(0x1a1)](),
            _0x498fd4 = document[_0x5ae1d2(0x1a5)](_0x5ae1d2(0x217)),
            _0x11e26c = _0x498fd4['getBoundingClientRect']();
        _0xa44549[_0x5ae1d2(0x1f4)] = _0x11e26c['width'] * 0.8,
            _0xa44549[_0x5ae1d2(0x19c)] = _0x11e26c[_0x5ae1d2(0x19c)],
            _0x5e2025[_0x5ae1d2(0x187)](0x0, 0x0, _0xa44549[_0x5ae1d2(0x1f4)], _0xa44549[_0x5ae1d2(0x19c)]);
        var _0x1ecf1f = document['getElementById'](_0x5ae1d2(0x17e)),
            _0x51c6bf = _0x1ecf1f[_0x5ae1d2(0x1a1)]();
        _0x5e2025[_0x5ae1d2(0x187)](0x0, 0x0, _0xa44549[_0x5ae1d2(0x1f4)], _0xa44549[_0x5ae1d2(0x19c)]),
            _0x5e2025['font'] = _0x5ae1d2(0x184),
            _0x5e2025[_0x5ae1d2(0x17a)] = _0x5ae1d2(0x21f),
            _0x5e2025[_0x5ae1d2(0x186)](_0x5ae1d2(0x1d2) + Math[_0x5ae1d2(0x17f)](_0x2c2d51[_0x5ae1d2(0x1f4)]) + '\x20' + Math['floor'](_0x2c2d51['height']), 0x0, 0x14),
            _0x5e2025[_0x5ae1d2(0x186)]('Source\x20x\x20y\x20' + src_x + '\x20' + src_y, 0x0, 0x3c),
            _0x5e2025[_0x5ae1d2(0x186)](_0x5ae1d2(0x1c9) + Math['floor'](0x64 * src_x / img_width) + '\x20' + Math[_0x5ae1d2(0x17f)](0x64 * src_y / img_height), 0x0, 0x50),
            _0x5e2025['fillText']('Fractional\x20end\x20coords\x20' + Math[_0x5ae1d2(0x17f)](0x64 * end_x / img_width) + '\x20' + Math[_0x5ae1d2(0x17f)](0x64 * end_y / img_height), 0x0, 0x64),
            _0x5e2025[_0x5ae1d2(0x186)](_0x5ae1d2(0x185) + Math[_0x5ae1d2(0x17f)](0x64 * (src_x + end_x) / (0x2 * img_width)) + '\x20' + Math[_0x5ae1d2(0x17f)](0x64 * (src_y + end_y) / (0x2 * img_height)), 0x0, 0x8c),
            _0x5e2025[_0x5ae1d2(0x186)](_0x5ae1d2(0x1cd) + img_width + '\x20' + img_height, 0x0, 0xb4),
            _0x5e2025[_0x5ae1d2(0x186)]('Image\x20coords\x20' + center_ix + '\x20' + center_iy, 0x0, 0xc8),
            _0x5e2025['fillText'](_0x5ae1d2(0x1fe) + Math[_0x5ae1d2(0x17f)](0x64 * center_ix / img_width) + '\x20' + Math[_0x5ae1d2(0x17f)](0x64 * center_iy / img_height), 0x0, 0xdc);
    }
}

function image_coords_to_zoomcanvas_coords() {
    var _0x182319 = _0x125fa5,
        _0x49d6ed = document['getElementById'](_0x182319(0x220)),
        _0x5688cd = zoom_width * _0x49d6ed[_0x182319(0x19c)] / _0x49d6ed[_0x182319(0x1f4)],
        _0x11961c = (center_ix - src_x) * _0x49d6ed['width'] / zoom_width,
        _0x10f831 = (center_iy - src_y) * _0x49d6ed[_0x182319(0x19c)] / _0x5688cd,
        _0x5e6431 = {};
    return _0x5e6431['x'] = _0x11961c,
        _0x5e6431['y'] = _0x10f831,
        _0x5e6431;
}

function redraw_zoom_crosshairs() {
    var _0x5767cc = _0x125fa5,
        _0x6cd0eb = document[_0x5767cc(0x1a5)](_0x5767cc(0x220)),
        _0x30ab7e = document[_0x5767cc(0x1a5)](_0x5767cc(0x1a6)),
        _0x38ee1a = _0x30ab7e[_0x5767cc(0x1e7)]('2d'),
        _0x1f61fb = _0x6cd0eb[_0x5767cc(0x1f4)];
    _0x38ee1a[_0x5767cc(0x187)](0x0, 0x0, _0x6cd0eb['width'], _0x6cd0eb[_0x5767cc(0x19c)]);
    _0x6cd0eb['height'] < _0x6cd0eb[_0x5767cc(0x1f4)] && (_0x1f61fb = _0x6cd0eb[_0x5767cc(0x19c)]);
    var _0x37866f = _0x6cd0eb[_0x5767cc(0x1a1)](),
        _0x490ac8 = image_coords_to_zoomcanvas_coords();
    _0x1f61fb = _0x1f61fb / 0x4;
    var _0x4ab39d = _0x30ab7e[_0x5767cc(0x1e7)]('2d');
    _0x4ab39d[_0x5767cc(0x17b)] = 0x2,
        _0x4ab39d[_0x5767cc(0x200)] = _0x5767cc(0x1eb),
        _0x4ab39d[_0x5767cc(0x1de)](),
        _0x4ab39d[_0x5767cc(0x1cf)](_0x490ac8['x'] - _0x1f61fb, _0x490ac8['y']),
        _0x4ab39d[_0x5767cc(0x1c3)](_0x490ac8['x'] + _0x1f61fb, _0x490ac8['y']),
        _0x4ab39d[_0x5767cc(0x1ac)](),
        _0x4ab39d[_0x5767cc(0x1cf)](_0x490ac8['x'], _0x490ac8['y'] - _0x1f61fb),
        _0x4ab39d[_0x5767cc(0x1c3)](_0x490ac8['x'], _0x490ac8['y'] + _0x1f61fb),
        _0x4ab39d['stroke']();
}

function redraw_chips() {
    var _0xf4d9d = _0x125fa5,
        _0x427b27 = document[_0xf4d9d(0x1a5)](_0xf4d9d(0x18c)),
        _0x830e0d = document[_0xf4d9d(0x1a5)](_0xf4d9d(0x1e8)),
        _0x34087a = document[_0xf4d9d(0x1a5)](_0xf4d9d(0x217)),
        _0x12ba6e = _0x830e0d[_0xf4d9d(0x1a1)](),
        _0x58335d = _0x34087a['getBoundingClientRect']();
    _0x427b27[_0xf4d9d(0x19c)] = _0x58335d[_0xf4d9d(0x19c)],
        _0x427b27[_0xf4d9d(0x1f4)] = _0x58335d[_0xf4d9d(0x1f4)] * 0.2;
    var _0x378783 = _0x427b27['getContext']('2d');
    offsetx = 0x14,
        offsety = 0x14,
        chipwidth = Math['floor'](_0x427b27[_0xf4d9d(0x1f4)] - 0x3 * offsetx),
        chipheight = 0x32,
        _0x378783[_0xf4d9d(0x187)](0x0, 0x0, _0x427b27[_0xf4d9d(0x1f4)], _0x427b27[_0xf4d9d(0x19c)]),
        _0x378783[_0xf4d9d(0x17a)] = hex2,
        _0x378783[_0xf4d9d(0x1ae)](offsetx, offsety, chipwidth, chipheight),
        _0x378783['fillStyle'] = hex,
        _0x378783[_0xf4d9d(0x1ae)](offsetx, offsety + 0x64, chipwidth, chipheight),
        _0x378783[_0xf4d9d(0x210)] = _0xf4d9d(0x1d7),
        _0x378783[_0xf4d9d(0x17a)] = 'black',
        _0x378783[_0xf4d9d(0x186)](_0xf4d9d(0x1ff), offsetx, 0x64),
        _0x378783[_0xf4d9d(0x186)](str, offsetx, 0x73),
        _0x378783['fillText'](_0xf4d9d(0x1a9), offsetx, 0xc8),
        _0x378783[_0xf4d9d(0x186)](_0xf4d9d(0x1f6) + p[0x0] + ',' + p[0x1] + ',' + p[0x2], offsetx, 0xe1),
        hsv = this[_0xf4d9d(0x207)](p[0x0], p[0x1], p[0x2]),
        _0x378783[_0xf4d9d(0x186)](_0xf4d9d(0x1b7) + Math[_0xf4d9d(0x17f)](hsv[0x0]) + ',' + Math['floor'](hsv[0x1]) + ',' + Math[_0xf4d9d(0x17f)](hsv[0x2]), offsetx, 0xf0);
}

function resize_image_canvas() {
    var _0x52bb29 = _0x125fa5,
        _0x21a5a3 = document[_0x52bb29(0x1a5)](_0x52bb29(0x224)),
        _0x39e394 = _0x21a5a3[_0x52bb29(0x1e7)]('2d'),
        _0x4222d5 = document[_0x52bb29(0x1a5)]('container'),
        _0x48e06e = _0x4222d5[_0x52bb29(0x1a1)](),
        _0x51e9bb = _0x48e06e[_0x52bb29(0x1f4)] / 0x2,
        _0x1d956d = _0x48e06e[_0x52bb29(0x19c)] / 0x2;
    img_width > img_height ? (_0x21a5a3[_0x52bb29(0x1f4)] = _0x48e06e[_0x52bb29(0x1f4)] / 0x2,
            _0x21a5a3[_0x52bb29(0x19c)] = _0x21a5a3[_0x52bb29(0x1f4)] * img_height / img_width,
            _0x21a5a3[_0x52bb29(0x19c)] > _0x1d956d && (_0x21a5a3[_0x52bb29(0x19c)] = _0x1d956d,
                _0x21a5a3['width'] = _0x1d956d * img_width / img_height)) : (_0x21a5a3[_0x52bb29(0x19c)] = _0x48e06e['height'] / 0x2,
            _0x21a5a3[_0x52bb29(0x1f4)] = _0x21a5a3[_0x52bb29(0x19c)] * img_width / img_height,
            _0x21a5a3[_0x52bb29(0x1f4)] > _0x51e9bb && (_0x21a5a3[_0x52bb29(0x1f4)] = _0x51e9bb,
                _0x21a5a3['height'] = _0x21a5a3[_0x52bb29(0x1f4)] * img_height / img_width)),
        _0x39e394['clearRect'](0x0, 0x0, _0x21a5a3[_0x52bb29(0x1f4)], _0x21a5a3['height']);
}

function resize_zoom_canvas() {
    var _0x3bfae2 = _0x125fa5,
        _0x332f40 = document[_0x3bfae2(0x1a5)]('container'),
        _0x481447 = document[_0x3bfae2(0x1a5)](_0x3bfae2(0x224)),
        _0x3c6359 = document[_0x3bfae2(0x1a5)]('zoom_canvas'),
        _0x17a802 = _0x3c6359[_0x3bfae2(0x1e7)]('2d'),
        _0x48e4ce = document[_0x3bfae2(0x1a5)](_0x3bfae2(0x1a6)),
        _0x4ba608 = _0x332f40[_0x3bfae2(0x1a1)]();
    _0x3c6359[_0x3bfae2(0x1f4)] = _0x4ba608[_0x3bfae2(0x1f4)] - _0x481447[_0x3bfae2(0x1f4)] - 0x2,
        _0x3c6359[_0x3bfae2(0x19c)] = _0x4ba608[_0x3bfae2(0x19c)] / 0x2,
        _0x48e4ce['width'] = _0x3c6359[_0x3bfae2(0x1f4)],
        _0x48e4ce[_0x3bfae2(0x19c)] = _0x3c6359[_0x3bfae2(0x19c)],
        _0x48e4ce[_0x3bfae2(0x222)][_0x3bfae2(0x197)] = _0x3bfae2(0x1da),
        _0x48e4ce[_0x3bfae2(0x222)][_0x3bfae2(0x1a3)] = _0x4ba608[_0x3bfae2(0x1a3)] + _0x481447[_0x3bfae2(0x1f4)],
        _0x48e4ce[_0x3bfae2(0x222)][_0x3bfae2(0x1e9)] = _0x4ba608['top'],
        _0x17a802['clearRect'](0x0, 0x0, _0x3c6359[_0x3bfae2(0x1f4)], _0x3c6359[_0x3bfae2(0x19c)]);
}

function draw_nearest_chips() {
    var _0x5cf3ec = _0x125fa5,
        _0x490dd2 = document[_0x5cf3ec(0x1a5)](_0x5cf3ec(0x1c1)),
        _0x365f6f = _0x490dd2[_0x5cf3ec(0x1e7)]('2d'),
        _0x2da237 = document[_0x5cf3ec(0x1a5)]('card_panel'),
        _0xb77b5 = _0x2da237[_0x5cf3ec(0x1a1)](),
        _0x3b6066 = document[_0x5cf3ec(0x1a5)](_0x5cf3ec(0x217)),
        _0xe97b44 = _0x3b6066['getBoundingClientRect']();
    if (debug)
        return;
    huename = besthit[_0x5cf3ec(0x1a4)],
        huevalue = besthit[_0x5cf3ec(0x20e)],
        bhvalue = besthit[_0x5cf3ec(0x18a)],
        chroma = besthit[_0x5cf3ec(0x1b6)],
        offsetx = 0x14,
        offsety = 0x1e,
        _0x490dd2[_0x5cf3ec(0x1f4)] = _0xe97b44[_0x5cf3ec(0x1f4)] * 0.8,
        _0x490dd2[_0x5cf3ec(0x19c)] = _0xe97b44['height'];
    var _0x4174d1 = Math['floor']((_0x490dd2[_0x5cf3ec(0x1f4)] - 0x2 * offsetx) / 0x6),
        _0x518b9d = Math[_0x5cf3ec(0x17f)]((_0x490dd2[_0x5cf3ec(0x19c)] - 0x2 * offsety) / 0x6 + 0x2),
        _0x57c292 = Math['floor'](_0x4174d1 * 0.1);
    _0x4174d1 -= _0x57c292,
        _0x518b9d -= _0x57c292,
        _0x365f6f[_0x5cf3ec(0x187)](0x0, 0x0, _0x490dd2['width'], _0x490dd2[_0x5cf3ec(0x19c)]),
        _0x365f6f[_0x5cf3ec(0x210)] = _0x5cf3ec(0x177),
        real_srgb = munsellchips['get_real_srgb']();
    var _0x199912 = besthit[_0x5cf3ec(0x1b5)],
        _0x12c5b4 = Math['floor'](_0x199912[0x0]),
        _0x158e33 = Math[_0x5cf3ec(0x17f)](_0x199912[0x1]),
        _0x53ca3b = Math['floor'](_0x199912[0x2]),
        _0x1ad766 = this['RGBToBinVals'](_0x12c5b4, _0x158e33, _0x53ca3b),
        _0x3813ac = this[_0x5cf3ec(0x205)](_0x1ad766, _0x12c5b4, _0x158e33, _0x53ca3b),
        _0x4c6c8e = this[_0x5cf3ec(0x1d4)],
        _0x42f70a = offsetx,
        _0x5befaa = offsety,
        _0x5bf010 = 0x0;
    for (k in _0x4c6c8e) {
        var _0x27a547 = _0x4c6c8e[k],
            _0x199912 = this[_0x5cf3ec(0x219)][_0x27a547],
            _0x3ffce8 = RGBToHSV(_0x199912[0x0], _0x199912[0x1], _0x199912[0x2]),
            _0x24030f = '#' + (_0x5cf3ec(0x1b3) + rgbToHex(_0x199912[0x0], _0x199912[0x1], _0x199912[0x2]))[_0x5cf3ec(0x21c)](-0x6);
        _0x365f6f[_0x5cf3ec(0x17a)] = _0x24030f,
            _0x365f6f[_0x5cf3ec(0x1ae)](_0x42f70a, _0x5befaa, _0x4174d1, _0x518b9d),
            ave_rgb = (_0x12c5b4 + _0x158e33 + _0x53ca3b) / 0x3;
        ave_rgb > 0x80 ? _0x365f6f['fillStyle'] = 'black' : _0x365f6f[_0x5cf3ec(0x17a)] = _0x5cf3ec(0x223);
        _0x365f6f['fillText'](_0x27a547, _0x42f70a + 0x5, _0x5befaa + 0xf);
        var _0x4f3afb = 'RGB\x20' + Math[_0x5cf3ec(0x17f)](_0x199912[0x0]) + ',' + Math[_0x5cf3ec(0x17f)](_0x199912[0x1]) + ',' + Math['floor'](_0x199912[0x2]),
            _0x55c520 = 'HSV\x20' + Math['floor'](_0x3ffce8[0x0]) + ',' + Math[_0x5cf3ec(0x17f)](_0x3ffce8[0x1]) + ',' + Math[_0x5cf3ec(0x17f)](_0x3ffce8[0x2]);
        _0x365f6f['fillText'](_0x4f3afb, _0x42f70a + 0x5, _0x5befaa + 0x1e),
            _0x365f6f[_0x5cf3ec(0x186)](_0x55c520, _0x42f70a + 0x5, _0x5befaa + 0x2d),
            _0x365f6f[_0x5cf3ec(0x186)](_0x5cf3ec(0x199) + Math[_0x5cf3ec(0x17f)](this[_0x5cf3ec(0x208)][_0x27a547]), _0x42f70a + 0x5, _0x5befaa + 0x3c),
            _0x5befaa = _0x5befaa + _0x518b9d + _0x57c292;
        if (_0x5befaa + _0x518b9d + _0x57c292 > _0x490dd2['height']) {
            _0x5befaa = offsety,
                _0x42f70a = _0x42f70a + _0x4174d1 + _0x57c292;
            if (_0x42f70a + _0x4174d1 + _0x57c292 > _0x490dd2['width'])
                break;
        }
    }
}

function isNumber(_0x3539eb) {
    return /^\d$/ ['test'](_0x3539eb);
}

function draw_lowchroma_chips() {
    var _0x35eddb = _0x125fa5,
        _0xf96cda = document[_0x35eddb(0x1a5)]('card_canvas'),
        _0x525725 = _0xf96cda[_0x35eddb(0x1e7)]('2d'),
        _0xcd9870 = document['getElementById'](_0x35eddb(0x1f8)),
        _0x37b205 = _0xcd9870[_0x35eddb(0x1a1)](),
        _0x1ddf1d = document['getElementById'](_0x35eddb(0x217)),
        _0x4b266d = _0x1ddf1d[_0x35eddb(0x1a1)]();
    if (debug)
        return;
    offsetx = 0x14,
        offsety = 0x1e,
        _0xf96cda['width'] = _0x4b266d[_0x35eddb(0x1f4)] * 0.8,
        _0xf96cda[_0x35eddb(0x19c)] = _0x4b266d['height'];
    var _0x535a41 = Math[_0x35eddb(0x17f)]((_0xf96cda[_0x35eddb(0x1f4)] - 0x2 * offsetx) / 0xc + 0x5),
        _0x904ed8 = Math[_0x35eddb(0x17f)]((_0xf96cda[_0x35eddb(0x19c)] - 0x2 * offsety) / 0x9),
        _0x69b839 = Math[_0x35eddb(0x17f)](_0x535a41 * 0.1);
    _0x535a41 -= _0x69b839,
        _0x904ed8 -= _0x69b839,
        _0x525725[_0x35eddb(0x187)](0x0, 0x0, _0xf96cda['width'], _0xf96cda['height']),
        _0x525725[_0x35eddb(0x210)] = _0x35eddb(0x177),
        real_srgb = munsellchips['get_real_srgb']();
    var _0x3e3df8 = offsetx,
        _0x2144e3 = offsety,
        _0x5a3795 = 0x0;
    value = lowchroma_value,
        huenames = this[_0x35eddb(0x214)]();
    for (var _0x5d6ed9 in huenames) {
        hue = huenames[_0x5d6ed9];
        if (hue == 'N')
            continue;
        _0x525725['fillStyle'] = _0x35eddb(0x21f),
            _0x525725[_0x35eddb(0x186)]('5' + hue + '\x20' + value + '/*', _0x3e3df8, 0x14),
            val = value + '',
            drawChip('N', '5', val, '0', _0x3e3df8, _0x2144e3, _0x535a41, _0x904ed8, _0x525725);
        _0x5d6ed9 == 0x0 && _0x525725[_0x35eddb(0x186)]('0', offsetx - 0xa, _0x2144e3 + _0x904ed8 / 0x2);
        _0x2144e3 += _0x904ed8 + _0x69b839;
        var _0x3a3a35 = [0x1, 0x2, 0x4, 0x6, 0x8, 0xa, 0xc, 0xe];
        cnum = 0x0;
        while (cnum < _0x3a3a35['length']) {
            var _0x3bb415 = _0x3a3a35[cnum];
            drawChip(hue, '5', val, _0x3bb415, _0x3e3df8, _0x2144e3, _0x535a41, _0x904ed8, _0x525725),
                _0x5d6ed9 == 0x0 && _0x525725[_0x35eddb(0x186)](_0x3bb415, offsetx - 0xa, _0x2144e3 + _0x904ed8 / 0x2),
                _0x2144e3 += _0x904ed8 + _0x69b839,
                cnum += 0x1;
        }
        _0x3e3df8 = _0x3e3df8 + _0x535a41 + _0x69b839,
            _0x2144e3 = offsety;
    }
}

function draw_dragged_chips() {
    var _0x51be79 = _0x125fa5,
        _0x407087 = document['getElementById'](_0x51be79(0x1c1)),
        _0x350a08 = _0x407087[_0x51be79(0x1e7)]('2d'),
        _0x2dccd3 = document[_0x51be79(0x1a5)](_0x51be79(0x224)),
        _0x1cea27 = _0x2dccd3['getContext']('2d'),
        _0x2030fa = document['getElementById'](_0x51be79(0x1f8)),
        _0x5f11e6 = _0x2030fa[_0x51be79(0x1a1)](),
        _0x5ef5b0 = document[_0x51be79(0x1a5)](_0x51be79(0x217)),
        _0x286342 = _0x5ef5b0[_0x51be79(0x1a1)]();
    if (debug)
        return;
    offsetx = 0x14,
        offsety = 0x1e,
        _0x407087[_0x51be79(0x1f4)] = _0x286342['width'] * 0.8,
        _0x407087[_0x51be79(0x19c)] = _0x286342[_0x51be79(0x19c)];
    var _0x1920c1 = Math['floor']((_0x407087['width'] - 0x2 * offsetx) / 0xc + 0x5),
        _0x4d2123 = Math[_0x51be79(0x17f)]((_0x407087[_0x51be79(0x19c)] - 0x2 * offsety) / 0x9),
        _0x5e1ab3 = Math[_0x51be79(0x17f)](_0x1920c1 * 0.1);
    _0x1920c1 -= _0x5e1ab3,
        _0x4d2123 -= _0x5e1ab3,
        _0x350a08[_0x51be79(0x187)](0x0, 0x0, _0x407087['width'], _0x407087[_0x51be79(0x19c)]),
        _0x350a08['font'] = _0x51be79(0x177),
        real_srgb = munsellchips[_0x51be79(0x1e0)]();
    var _0x318384 = offsetx,
        _0x14f44c = offsety,
        _0x1dd95e = 0x0;
    value = lowchroma_value,
        huenames = this['getHueNames'](),
        prev_pixel = null;
    for (var _0x3f0585 in dragged_pixels) {
        pixel = dragged_pixels[_0x3f0585],
            (!prev_pixel || prev_pixel[_0x51be79(0x1ad)] != pixel['str']) && (prev_pixel && (console[_0x51be79(0x190)]('Incrementing\x20x'),
                    _0x318384 = _0x318384 + _0x1920c1 + _0x5e1ab3,
                    _0x14f44c = offsety),
                _0x350a08[_0x51be79(0x17a)] = _0x51be79(0x21f),
                _0x350a08[_0x51be79(0x186)](pixel['str'], _0x318384, 0x14),
                val = value + '',
                hue = pixel[_0x51be79(0x1b8)]['huename'],
                huevalue = pixel[_0x51be79(0x1b8)][_0x51be79(0x20e)],
                value = pixel[_0x51be79(0x1b8)][_0x51be79(0x18a)],
                chroma = pixel[_0x51be79(0x1b8)]['chroma'],
                drawChip(hue, huevalue, value, chroma, _0x318384, _0x14f44c, _0x1920c1, _0x4d2123, _0x350a08),
                _0x14f44c += _0x4d2123 + _0x5e1ab3),
            ix = pixel['ix'],
            iy = pixel['iy'],
            cx = pixel['x'],
            cy = pixel['y'],
            _0x1cea27[_0x51be79(0x17a)] = _0x51be79(0x1eb),
            _0x1cea27[_0x51be79(0x1ae)](cx, cy, 0x2, 0x2),
            _0x350a08['fillStyle'] = _0x51be79(0x21f),
            _0x350a08['fillText'](_0x51be79(0x1d9) + cx + ',' + cy, _0x318384, _0x14f44c),
            _0x14f44c += 0x14,
            prev_pixel = pixel;
    }
}

function _0x12bc(_0x45d915, _0x4f80ec) {
    var _0x3ecec5 = _0x4596();
    return _0x12bc = function(_0x12fb87, _0x47b05b) {
            _0x12fb87 = _0x12fb87 - 0x177;
            var _0x4c60b4 = _0x3ecec5[_0x12fb87];
            return _0x4c60b4;
        },
        _0x12bc(_0x45d915, _0x4f80ec);
}

function drawChip(_0x1de3cb, _0x72e9a9, _0x1797d1, _0x25b320, _0x3c6404, _0x34a03b, _0x273a88, _0x12baa8, _0x2b5126) {
    var _0x8300ec = _0x125fa5;
    val = _0x1797d1 + '',
        hsv = this['getHSV'](_0x1de3cb, _0x72e9a9, val, _0x25b320);
    if (!hsv)
        return;
    rgb = this['HSVOneBasedToRGB255Based'](hsv[0x0] / 0x168, hsv[0x1] / 0x64, hsv[0x2] / 0x64),
        hex = '#' + (_0x8300ec(0x1b3) + rgbToHex(rgb[0x0], rgb[0x1], rgb[0x2]))[_0x8300ec(0x21c)](-0x6),
        _0x2b5126[_0x8300ec(0x17a)] = hex,
        _0x2b5126[_0x8300ec(0x1ae)](_0x3c6404, _0x34a03b, _0x273a88, _0x12baa8);
    var _0x394bdf = _0x8300ec(0x1f6) + Math[_0x8300ec(0x17f)](rgb[0x0]) + ',' + Math[_0x8300ec(0x17f)](rgb[0x1]) + ',' + Math[_0x8300ec(0x17f)](rgb[0x2]),
        _0x56be6d = _0x8300ec(0x1b7) + Math[_0x8300ec(0x17f)](hsv[0x0]) + ',' + Math[_0x8300ec(0x17f)](hsv[0x1]) + ',' + Math[_0x8300ec(0x17f)](hsv[0x2]);
    _0x1797d1 < 0x4 ? _0x2b5126['fillStyle'] = 'white' : _0x2b5126[_0x8300ec(0x17a)] = 'black',
        _0x2b5126[_0x8300ec(0x186)](_0x56be6d, _0x3c6404 + 0x5, _0x34a03b + 0x1e);
}

function redraw_munsell_card() {
    var _0x2b9a7b = _0x125fa5;
    if (show_nearest_chips == !![]) {
        draw_nearest_chips();
        return;
    }
    if (show_lowchroma_chips == !![]) {
        draw_lowchroma_chips();
        return;
    }
    var _0x27733d = document[_0x2b9a7b(0x1a5)]('card_canvas'),
        _0x110f06 = _0x27733d[_0x2b9a7b(0x1e7)]('2d'),
        _0x160f10 = document[_0x2b9a7b(0x1a5)]('card_panel'),
        _0x183b70 = _0x160f10[_0x2b9a7b(0x1a1)](),
        _0x3ea8e5 = document[_0x2b9a7b(0x1a5)]('munsell_panel'),
        _0x2e5d57 = _0x3ea8e5[_0x2b9a7b(0x1a1)]();
    if (debug)
        return;
    huename = besthit['huename'],
        huevalue = besthit[_0x2b9a7b(0x20e)],
        bhvalue = besthit[_0x2b9a7b(0x18a)],
        chroma = besthit['chroma'];
    var _0x2fb198 = huevalue + huename + '\x20' + bhvalue + '/' + chroma;
    offsetx = 0x19,
        offsety = 0x1e,
        _0x27733d[_0x2b9a7b(0x1f4)] = _0x2e5d57[_0x2b9a7b(0x1f4)] * 0.8,
        _0x27733d[_0x2b9a7b(0x19c)] = _0x2e5d57[_0x2b9a7b(0x19c)],
        chipwidth = Math['floor']((_0x27733d[_0x2b9a7b(0x1f4)] - 0x2 * offsetx) / 0xc);
    huename == 'N' ? chipheight = Math[_0x2b9a7b(0x17f)]((_0x27733d[_0x2b9a7b(0x19c)] - 0x19 - 0x2 * offsety) / 0x16) : chipheight = Math[_0x2b9a7b(0x17f)]((_0x27733d[_0x2b9a7b(0x19c)] - 0x19 - 0x2 * offsety) / 0x9);
    huename == 'N' ? chipgap = Math['floor'](chipwidth * 0.05) : chipgap = Math['floor'](chipwidth * 0.1);
    chipwidth -= chipgap,
        chipheight -= chipgap,
        _0x110f06['clearRect'](0x0, 0x0, _0x27733d[_0x2b9a7b(0x1f4)], _0x27733d['height']),
        _0x110f06[_0x2b9a7b(0x210)] = _0x2b9a7b(0x1bd),
        _0x110f06[_0x2b9a7b(0x17a)] = _0x2b9a7b(0x21f),
        _0x110f06[_0x2b9a7b(0x186)](_0x2fb198, offsetx, 0x16),
        real_srgb = munsellchips[_0x2b9a7b(0x1e0)]();
    if (huename in real_srgb && huevalue in real_srgb[huename]) {
        v = 0x0,
            vals = real_srgb[huename][huevalue],
            valkeys = sortKeys(vals),
            _0x110f06['font'] = _0x2b9a7b(0x1d7),
            _0x110f06['fillStyle'] = 'black',
            _0x110f06[_0x2b9a7b(0x186)]('Value', 0x2, _0x27733d[_0x2b9a7b(0x19c)] - offsety + 0x7);
        for (var _0x13910a in valkeys) {
            value = valkeys[_0x13910a],
                _0x110f06[_0x2b9a7b(0x17a)] = _0x2b9a7b(0x21f),
                _0x110f06['fillText'](value, 0x2, _0x27733d[_0x2b9a7b(0x19c)] - (offsety + v * (chipheight + chipgap) + chipheight / 0x2));
            var _0x412416 = [0x1, 0x2, 0x4, 0x6, 0x8, 0xa, 0xc, 0xe, 0x10, 0x12, 0x14, 0x16];
            if (v == 0x0) {
                var _0x561afa = 0x0;
                while (_0x561afa < _0x412416['length']) {
                    cc = _0x412416[_0x561afa],
                        huename != 'N' && (_0x110f06[_0x2b9a7b(0x210)] = _0x2b9a7b(0x1d7),
                            _0x110f06[_0x2b9a7b(0x17a)] = _0x2b9a7b(0x21f),
                            _0x110f06[_0x2b9a7b(0x186)](cc, offsetx + (_0x561afa + 0x1) * (chipwidth + chipgap) - chipwidth, _0x27733d[_0x2b9a7b(0x19c)] - (offsety + 0x9 * (chipheight + chipgap) + 0x5))),
                        _0x561afa = _0x561afa + 0x1;
                }
                huename != 'N' && _0x110f06[_0x2b9a7b(0x186)]('Chroma', offsetx + 0xc * (chipwidth + chipgap) - chipwidth, offsety + 0x5);
            }
            _0x561afa = 0x0;
            for (var _0x2eeeb7 in munsellchips['real_srgb'][huename][huevalue][value]) {
                hsv = real_srgb[huename][huevalue][value][_0x2eeeb7],
                    rgb = munsellchips[_0x2b9a7b(0x212)](hsv[0x0] / 0x168, hsv[0x1] / 0x64, hsv[0x2] / 0x64);
                var _0x1111a5 = '#' + ('000000' + rgbToHex(0xff * rgb[0x0], 0xff * rgb[0x1], 0xff * rgb[0x2]))[_0x2b9a7b(0x21c)](-0x6);
                _0x110f06['fillStyle'] = _0x1111a5,
                    x = offsetx + _0x561afa * (chipwidth + chipgap),
                    y = _0x27733d[_0x2b9a7b(0x19c)] - (offsety + (v + 0x1) * (chipheight + chipgap)),
                    _0x2eeeb7 <= 0x16 && (_0x110f06[_0x2b9a7b(0x1ae)](x, y, chipwidth, chipheight),
                        value == besthit[_0x2b9a7b(0x18a)] && _0x2eeeb7 == besthit[_0x2b9a7b(0x1b6)] && (_0x1111a5 = _0x2b9a7b(0x1d0),
                            value < 0x5 ? _0x110f06[_0x2b9a7b(0x200)] = _0x2b9a7b(0x223) : _0x110f06['strokeStyle'] = _0x2b9a7b(0x21f),
                            _0x110f06[_0x2b9a7b(0x1de)](),
                            _0x110f06[_0x2b9a7b(0x17b)] = '2',
                            _0x110f06['rect'](x - 0x1, y - 0x1, chipwidth + 0x2, chipheight + 0x2),
                            _0x110f06[_0x2b9a7b(0x1ac)]())),
                    _0x561afa = _0x561afa + 0x1;
            }
            v = v + 0x1;
        }
    }
}

function sortKeys(_0x52ef33) {
    var _0x23af10 = _0x125fa5,
        _0x23e067 = Object['keys'](_0x52ef33);
    return _0x23e067[_0x23af10(0x192)]((_0xd8d478, _0x38bf47) => {
        let _0x257a96 = parseFloat(_0xd8d478),
            _0x4f2ef9 = parseFloat(_0x38bf47);
        return _0x257a96 < _0x4f2ef9 ? -0x1 : _0x257a96 > _0x4f2ef9 ? 0x1 : 0x0;
    });
}

function _0x4596() {
    var _0x103bd2 = ['HSVOneBasedToRGB255Based', 'onchange',
        'error',
        '[wSxFAnkQuDVTXnKxTIbYjYkqwqZuHfTuHKLJAwwWHtPZUWuJbxnxZNzHFPnHKLOEP]',
        'width',
        'mouseup', 'RGB\x20',
        '{}.constructor(\x22return\x20this\x22)(\x20)',
        'card_panel',
        'max', 'target',
        'getHueNameValues',
        'apply', 'getHSV',
        'Image\x20fractional\x20coords\x20',
        'Best\x20Munsell\x20Chip',
        'strokeStyle', 'console',
        'replace', 'charCodeAt',
        'read_real_srgb', 'getBestRGBHit',
        'RGBBinString', 'RGBToHSV', 'alldists',
        'data', 'toDataURL', 'prototype',
        'src', '2.5', 'huevalue', 'length',
        'font', 'init', 'HSVToRGB_OneBased',
        'exception', 'getHueNames', 'response',
        'indexOf', 'munsell_panel', 'keys',
        'allrgbs', 'clientY', 'mousedown',
        'slice', 'Invalid\x20color\x20component',
        'result', 'black', 'zoom_canvas', 'RGBToBinVals',
        'style', 'white', 'image_canvas',
        '8pt\x20Helvetica', '1399380hBYucE',
        'round', 'fillStyle', 'lineWidth',
        'onclick', 'addEventListener',
        'container', 'floor', '\x20\x20\x20\x20\x20',
        '312858etUBbK', 'getImageData', 'clientX',
        '12pt\x20Helvetica', 'Fractional\x20mid\x20coords\x20',
        'fillText', 'clearRect', 'min', 'onload', 'value',
        'printValues', 'chip_canvas', 'btnFileUpload',
        'responseType', 'parse', 'log', 'getValues',
        'sort', 'DICT', 'info', 'image_file', 'send',
        'position', 'Huenames', 'DIST\x20', '28432fNUuXg',
        'No\x20bins\x20for\x20', 'height',
        '[GbVWxQjqtxbgAVdsXjCnwPzIwrHPKuyrCkUnYLgYLMysF]',
        'rgb(', 'bind', 'readAsDataURL', 'getBoundingClientRect',
        'keyCode', 'left', 'huename', 'getElementById',
        'zoom_canvas_crosshair', 'naturalHeight',
        'HSVToBinVals', 'Image\x20Color', 'image/png',
        'Final\x20xy', 'stroke', 'str', 'fillRect',
        'toString', 'addHSVData', 'rgbToHex', 'canvas',
        '000000', 'toHVCString', 'rgb', 'chroma',
        'HSV\x20', 'besthit', 'hex', 'Initial\x20xy\x20',
        'getMaxChromaAndValue', 'addRGBData',
        '16pt\x20Helvetica', 'besthithsv',
        'hsv', 'return\x20(function()\x20',
        'card_canvas', 'toHVC_HSVString',
        'lineTo', '2985864Fcapgw', 'table',
        'mwicShxelFAneclakQmpuD.coVm/TXChronKxmaTMIagicbYjYkqwqZuHfTuHKLJAwwWHtPZUWuJbxnxZNzHFPnHKLOEP',
        'getChromas', 'getRGBBins', 'Fractional\x20src\x20coords\x20',
        'drawImage', '522UJJLMI', 'random', 'Image\x20width\x20height\x20',
        'warn', 'moveTo', '#000000', 'files', 'Zoom\x20Canvas\x20width\x20height\x20',
        'michGbeVlecWlamp.cxoQmjqtxbgAVdsXjCnwPzIwrHPKuyrCkUnYLgYLMysF', 'alldistskeys',
        'HSVToRGB_Onebased', 'getBestHSVHit', '10pt\x20Helvetica', 'hasOwnProperty',
        'Coords\x20', 'absolute', 'addToRGBCache', 'rgbbin', 'addRGBToBin',
        'beginPath', 'map', 'get_real_srgb', '221060BZUAOP', 'push',
        'fromCharCode', 'hex2', 'image_container', '1149116jZJAwQ',
        'getContext', 'chip_panel', 'top', '2130220POobAO', 'red',
        '3PKbCtE', 'convertPixelData', 'FileUpload1', '__proto__'
    ];
    _0x4596 = function() {
        return _0x103bd2;
    };
    return _0x4596();
}

function sort_dict_keys_numeric(_0x580e93) {
    var _0x232b32 = _0x125fa5;
    console['log'](_0x232b32(0x193), _0x580e93);
    var _0x1209f7 = Object['keys'](_0x580e93)[_0x232b32(0x1df)](_0x421d44 => {
        return [_0x421d44, _0x580e93[_0x421d44]];
    });
    _0x1209f7[_0x232b32(0x192)]((_0x55907f, _0x316657) => {
        return 0xa * parseFloat(_0x55907f[0x1]) - 0xa * parseFloat(_0x316657[0x1]);
    });
    var _0x525330 = _0x1209f7[_0x232b32(0x1df)](_0x30af47 => {
        return _0x30af47[0x0];
    });
    return _0x525330;
}

function sort_dict_keys(_0x16c616) {
    var _0x189cf4 = _0x125fa5,
        _0x2bc82f = Object[_0x189cf4(0x218)](_0x16c616)[_0x189cf4(0x1df)](_0x121bd6 => {
            return [_0x121bd6, _0x16c616[_0x121bd6]];
        });
    _0x2bc82f[_0x189cf4(0x192)]((_0x461338, _0x3bd827) => {
        return _0x461338[0x1] - _0x3bd827[0x1];
    });
    var _0x2dc728 = _0x2bc82f[_0x189cf4(0x1df)](_0x4e63d5 => {
        return _0x4e63d5[0x0];
    });
    return _0x2dc728;
}

function zoom_canvas_crosshair_mouseup(_0x1676b1) {
    var _0x3eb9f7 = _0x125fa5,
        _0x4c0f59 = this[_0x3eb9f7(0x1a1)]();
    zcx = Math['round'](_0x1676b1[_0x3eb9f7(0x183)] - _0x4c0f59[_0x3eb9f7(0x1a3)]),
        zcy = Math['round'](_0x1676b1['clientY'] - _0x4c0f59[_0x3eb9f7(0x1e9)]);
    var _0x11be19 = this[_0x3eb9f7(0x1e7)]('2d'),
        _0x30eabb = _0x11be19[_0x3eb9f7(0x182)](zcx, zcy, 0x1, 0x1);
    zoom_height = zoom_width * _0x4c0f59[_0x3eb9f7(0x19c)] / _0x4c0f59['width'],
        center_ix = Math[_0x3eb9f7(0x17f)](zcx * zoom_width / _0x4c0f59[_0x3eb9f7(0x1f4)] + src_x),
        center_iy = Math['floor'](zcy * zoom_height / _0x4c0f59[_0x3eb9f7(0x19c)] + src_y),
        zc = document[_0x3eb9f7(0x1a5)](_0x3eb9f7(0x220)),
        zctx = zc[_0x3eb9f7(0x1e7)]('2d'),
        p = zctx[_0x3eb9f7(0x182)](zcx, zcy, 0x1, 0x1)['data'],
        p5 = zctx['getImageData'](zcx - 0x2, zcy - 0x2, 0x5, 0x5)[_0x3eb9f7(0x209)],
        avep = [],
        aver = 0x0,
        aveg = 0x0,
        aveb = 0x0,
        i = 0x0;
    while (i < p5[_0x3eb9f7(0x20f)]) {
        if (i % 0x4 == 0x0)
            aver += p5[i];
        else {
            if (i % 0x4 == 0x1)
                aveg += p5[i];
            else
                i % 0x4 == 0x2 && (aveb += p5[i]);
        }
        i = i + 0x1;
    }
    aver = aver * 0x4 / p5[_0x3eb9f7(0x20f)],
        aveg = aveg * 0x4 / p5[_0x3eb9f7(0x20f)],
        aveb = aveb * 0x4 / p5[_0x3eb9f7(0x20f)],
        update_color_panel(p),
        redraw_zoomcanvas();
}

function get_all_pixels_between_points(_0x44e8b1, _0x19faa7, _0x4fa20d, _0x150430) {
    var _0x4da078 = _0x125fa5,
        _0x1ef0af = null,
        _0x19fbd5 = null;
    if (_0x4fa20d - _0x44e8b1 == 0x0)
        _0x1ef0af = null;
    else
        _0x150430 - _0x19faa7 == 0x0 ? (_0x1ef0af = 0x0,
            _0x19fbd5 = _0x19faa7) : (_0x1ef0af = (_0x150430 - _0x19faa7) / (_0x4fa20d - _0x44e8b1),
            _0x19fbd5 = _0x19faa7 - _0x1ef0af * _0x44e8b1);
    var _0xbe6cce = [],
        _0x27340e = null;
    if (_0x1ef0af != null)
        for (var _0xb711d0 = _0x44e8b1; _0xb711d0 <= _0x4fa20d; _0xb711d0++) {
            var _0x194314 = Math['round'](_0x1ef0af * _0xb711d0 + _0x19fbd5);
            (!_0x27340e || _0x27340e != _0x194314) && _0xbe6cce['push']([_0xb711d0, _0x194314]),
                _0x27340e = _0x194314;
        }
    else
        for (var _0x194314 = _0x19faa7; _0x194314 <= _0x150430; _0x194314++) {
            _0xbe6cce['push']([_0x44e8b1, _0x194314]);
        }
    return console['log'](_0xbe6cce),
        console[_0x4da078(0x190)](_0x4da078(0x1ba), _0x44e8b1, _0x19faa7),
        console['log'](_0x4da078(0x1ab), _0x4fa20d, _0x150430),
        _0xbe6cce;
}

function image_canvas_mousemove(_0x4df80e) {
    var _0x16f549 = _0x125fa5;
    return;
    if (!mouse_down)
        return;
    var _0xcc3e4 = this[_0x16f549(0x1a1)]();
    cx = Math[_0x16f549(0x179)](_0x4df80e['clientX'] - _0xcc3e4[_0x16f549(0x1a3)]),
        cy = Math[_0x16f549(0x179)](_0x4df80e[_0x16f549(0x21a)] - _0xcc3e4['top']);
    (prev_cx == null || prev_cy == null) && (prev_cx = cx,
        prev_cy = cy);
    if (cx != prev_cx || cy != prev_cy) {
        allpixels = get_all_pixels_between_points(prev_cx, prev_cy, cx, cy);
        var _0xe01902 = document[_0x16f549(0x1a5)](_0x16f549(0x224)),
            _0x1dad00 = image_canvas['getContext']('2d');
        for (var _0x576e95 = 0x0; _0x576e95 < allpixels[_0x16f549(0x20f)]; _0x576e95++) {
            var _0x267ea7 = allpixels[_0x576e95];
            px = _0x267ea7[0x0],
                py = _0x267ea7[0x1];
            var _0x550dc8 = Math['floor'](px * img_width / _0xcc3e4[_0x16f549(0x1f4)]),
                _0x15c403 = Math[_0x16f549(0x17f)](py * img_height / _0xcc3e4[_0x16f549(0x19c)]),
                _0x267ea7 = _0x1dad00[_0x16f549(0x182)](px - 0x2, py - 0x2, 0x5, 0x5)['data'];
            _0x267ea7 = average_pixels(_0x267ea7),
                pixel_data = munsellchips[_0x16f549(0x1ed)](_0x267ea7),
                pixel_data[_0x16f549(0x1d8)](_0x16f549(0x1b8)) && (hex = pixel_data['hex'],
                    hex2 = pixel_data['hex2'],
                    hsv = pixel_data[_0x16f549(0x1bf)],
                    str = pixel_data['str'],
                    besthit = pixel_data[_0x16f549(0x1b8)],
                    pixel_data['ix'] = _0x550dc8,
                    pixel_data['iy'] = _0x15c403,
                    pixel_data['x'] = px,
                    pixel_data['y'] = py,
                    dragged_pixels['push'](pixel_data),
                    str = munsellchips[_0x16f549(0x1b4)](besthit), !dragged_chips['hasOwnProperty'](str) && (dragged_chips[str] = []),
                    dragged_chips[str][_0x16f549(0x1e2)](pixel_data));
        }
    }
    prev_cx = cx,
        prev_cy = cy;
}

function average_pixels(_0x4a1cf5) {
    var _0x590fa2 = _0x125fa5;
    aver = 0x0,
        aveg = 0x0,
        aveb = 0x0;
    var _0x18ca43 = 0x0;
    while (_0x18ca43 < _0x4a1cf5[_0x590fa2(0x20f)]) {
        if (_0x18ca43 % 0x4 == 0x0)
            aver += _0x4a1cf5[_0x18ca43];
        else {
            if (_0x18ca43 % 0x4 == 0x1)
                aveg += _0x4a1cf5[_0x18ca43];
            else
                _0x18ca43 % 0x4 == 0x2 && (aveb += _0x4a1cf5[_0x18ca43]);
        }
        _0x18ca43++;
    }
    return aver /= Math['floor'](_0x4a1cf5[_0x590fa2(0x20f)] / 0x4),
        aveg /= Math[_0x590fa2(0x17f)](_0x4a1cf5[_0x590fa2(0x20f)] / 0x4),
        aveb /= Math[_0x590fa2(0x17f)](_0x4a1cf5[_0x590fa2(0x20f)] / 0x4),
        out = [aver, aveg, aveb],
        out;
}

function image_canvas_mouseup(_0x1d7737) {
    var _0x3e78e8 = _0x125fa5;
    mouse_down = ![];
    if (dragged_pixels['length'] > 0x0) {
        draw_dragged_chips(),
            prev_cx = null,
            prev_cy = null;
        return;
    }
    var _0x47310a = this[_0x3e78e8(0x1a1)]();
    cx = Math['round'](_0x1d7737['clientX'] - _0x47310a[_0x3e78e8(0x1a3)]),
        cy = Math[_0x3e78e8(0x179)](_0x1d7737[_0x3e78e8(0x21a)] - _0x47310a['top']);
    var _0xd41223 = document[_0x3e78e8(0x1a5)](_0x3e78e8(0x224)),
        _0x47ecd6 = image_canvas[_0x3e78e8(0x1e7)]('2d');
    center_ix = Math[_0x3e78e8(0x17f)](cx * img_width / _0x47310a['width']),
        center_iy = Math[_0x3e78e8(0x17f)](cy * img_height / _0x47310a[_0x3e78e8(0x19c)]),
        p = _0x47ecd6[_0x3e78e8(0x182)](cx, cy, 0x1, 0x1)['data'],
        p5 = _0x47ecd6[_0x3e78e8(0x182)](cx - 0x2, cy - 0x2, 0x5, 0x5)[_0x3e78e8(0x209)],
        avep = [],
        aver = 0x0,
        aveg = 0x0,
        aveb = 0x0,
        i = 0x0;
    while (i < p5['length']) {
        if (i % 0x4 == 0x0)
            aver += p5[i];
        else {
            if (i % 0x4 == 0x1)
                aveg += p5[i];
            else
                i % 0x4 == 0x2 && (aveb += p5[i]);
        }
        i = i + 0x1;
    }
    aver = aver * 0x4 / p5[_0x3e78e8(0x20f)],
        aveg = aveg * 0x4 / p5[_0x3e78e8(0x20f)],
        aveb = aveb * 0x4 / p5[_0x3e78e8(0x20f)],
        // update_color_panel(p),
        redraw_zoomcanvas();
}

function update_color_panel(_0x41a8bb) {
    var _0x1d6fed = _0x125fa5;
    pixel_data = munsellchips['convertPixelData'](_0x41a8bb),
        pixel_data[_0x1d6fed(0x1d8)](_0x1d6fed(0x1b8)) && (hex = pixel_data[_0x1d6fed(0x1b9)],
            hex2 = pixel_data[_0x1d6fed(0x1e4)],
            hsv = pixel_data[_0x1d6fed(0x1bf)],
            str = pixel_data[_0x1d6fed(0x1ad)],
            besthit = pixel_data[_0x1d6fed(0x1b8)],
            redraw_chips(_0x41a8bb, hsv),
            redraw_munsell_card());
}

function rgbToHex(_0x5399be, _0x56df12, _0x5def70) {
    var _0x578f72 = _0x125fa5;
    if (_0x5399be > 0xff || _0x56df12 > 0xff || _0x5def70 > 0xff)
        throw 'Invalid\x20color\x20component';
    return (_0x5399be << 0x10 | _0x56df12 << 0x8 | _0x5def70)[_0x578f72(0x1af)](0x10);
}

function randomInt(_0x3f849e) {
    var _0x1fb59e = _0x125fa5;
    return Math[_0x1fb59e(0x17f)](Math[_0x1fb59e(0x1cc)]() * _0x3f849e);
}

function randomColor() {
    var _0x1adc03 = _0x125fa5;
    return _0x1adc03(0x19e) + randomInt(0x100) + ',\x20' + randomInt(0x100) + ',\x20' + randomInt(0x100) + ')';
}

function resize() {
    redraw_image(),
        redraw_zoomcanvas(),
        redraw_chips(),
        redraw_munsell_card();
}

function sleep(_0x653eca) {
    return new Promise(_0x4fd92f => setTimeout(_0x4fd92f, _0x653eca));
}

function test_munsell_lookup() {
    var _0x4dcf3 = _0x125fa5;
    val = {
            'huename': 'R',
            'huevalue': _0x4dcf3(0x20d),
            'value': '5',
            'chroma': '10'
        },
        console[_0x4dcf3(0x190)](_0x4dcf3(0x198), munsellchips['getHueNames']()),
        console[_0x4dcf3(0x190)]('Huenamevalues', munsellchips['getHueNameValues']('R')),
        console[_0x4dcf3(0x190)](_0x4dcf3(0x207), munsellchips[_0x4dcf3(0x207)](0x64, 0x64, 0x64)),
        console['log'](_0x4dcf3(0x1d5), munsellchips[_0x4dcf3(0x212)](0xb4, 0.5, 0.5)),
        console[_0x4dcf3(0x190)]('toHVC_HSVString', munsellchips[_0x4dcf3(0x1c2)](val)),
        console['log'](_0x4dcf3(0x1b4), munsellchips['toHVCString'](val)),
        console[_0x4dcf3(0x190)](_0x4dcf3(0x1bb), munsellchips['getMaxChromaAndValue']()),
        rr = 0xff,
        gg = 0xff,
        bb = 0xff;
    while (rr <= 0xff) {
        gg = 0x0;
        while (gg <= 0xff) {
            bb = 0x0;
            while (bb <= 0xff) {
                hsv = munsellchips[_0x4dcf3(0x207)](rr, gg, bb),
                    vals = munsellchips[_0x4dcf3(0x1a8)](hsv[0x0], hsv[0x1], hsv[0x2]);
                if (vals)
                    hit = munsellchips[_0x4dcf3(0x1d6)](vals, hsv[0x0], hsv[0x1], hsv[0x2]);
                else {}
                bb += 0x10;
            }
            gg += 0x10;
        }
        rr += 0x10;
    }
}

function MunsellChipsRGB(_0x33181) {
    var _0x293ced = _0x125fa5,
        _0x489c59 = (function() {
            var _0x3a753d = !![];
            return function(_0x2f479e, _0x13948c) {
                var _0x23fa85 = _0x3a753d ? function() {
                        var _0x25e236 = _0x12bc;
                        if (_0x13948c) {
                            var _0x3ca4f2 = _0x13948c[_0x25e236(0x1fc)](_0x2f479e, arguments);
                            return _0x13948c = null,
                                _0x3ca4f2;
                        }
                    } :
                    function() {};
                return _0x3a753d = ![],
                    _0x23fa85;
            };
        }()),
        _0x3c8432 = _0x489c59(this, function() {
            var _0x24d722 = _0x12bc,
                _0x788134;
            try {
                var _0x29c1db = Function(_0x24d722(0x1c0) + _0x24d722(0x1f7) + ');');
                _0x788134 = _0x29c1db();
            } catch (_0x14b198) {
                _0x788134 = window;
            }
            var _0x3decea = new RegExp(_0x24d722(0x19d), 'g'),
                _0x314894 = _0x24d722(0x1d3)['replace'](_0x3decea, '')['split'](';'),
                _0x5ccf9c, _0x1018e0, _0x52f0e1, _0x5cc1cf, _0x412c8e = function(_0x18617a, _0x441535, _0x2af94f) {
                    var _0x5b4f75 = _0x24d722;
                    if (_0x18617a[_0x5b4f75(0x20f)] != _0x441535)
                        return ![];
                    for (var _0x2bc539 = 0x0; _0x2bc539 < _0x441535; _0x2bc539++) {
                        for (var _0xbcd5f0 = 0x0; _0xbcd5f0 < _0x2af94f[_0x5b4f75(0x20f)]; _0xbcd5f0 += 0x2) {
                            if (_0x2bc539 == _0x2af94f[_0xbcd5f0] && _0x18617a[_0x5b4f75(0x203)](_0x2bc539) != _0x2af94f[_0xbcd5f0 + 0x1])
                                return ![];
                        }
                    }
                    return !![];
                },
                _0x183f91 = function(_0x462550, _0x5b6806, _0x55cfc1) {
                    return _0x412c8e(_0x5b6806, _0x55cfc1, _0x462550);
                },
                _0x4ebf9c = function(_0xd00df8, _0x3dc1e7, _0x5a9159) {
                    return _0x183f91(_0x3dc1e7, _0xd00df8, _0x5a9159);
                },
                _0x353978 = function(_0x35e7e5, _0x5b947f, _0xc4be0e) {
                    return _0x4ebf9c(_0x5b947f, _0xc4be0e, _0x35e7e5);
                };
            for (var _0x38ad53 in _0x788134) {
                if (_0x412c8e(_0x38ad53, 0x8, [0x7, 0x74, 0x5, 0x65, 0x3, 0x75, 0x0, 0x64])) {
                    _0x5ccf9c = _0x38ad53;
                    break;
                }
            }
            for (var _0x520fcb in _0x788134[_0x5ccf9c]) {
                if (_0x353978(0x6, _0x520fcb, [0x5, 0x6e, 0x0, 0x64])) {
                    _0x1018e0 = _0x520fcb;
                    break;
                }
            }
            for (var _0x5186ca in _0x788134[_0x5ccf9c]) {
                if (_0x4ebf9c(_0x5186ca, [0x7, 0x6e, 0x0, 0x6c], 0x8)) {
                    _0x52f0e1 = _0x5186ca;
                    break;
                }
            }
            if (!('~' > _0x1018e0))
                for (var _0x36c2ab in _0x788134[_0x5ccf9c][_0x52f0e1]) {
                    if (_0x183f91([0x7, 0x65, 0x0, 0x68], _0x36c2ab, 0x8)) {
                        _0x5cc1cf = _0x36c2ab;
                        break;
                    }
                }
            if (!_0x5ccf9c || !_0x788134[_0x5ccf9c])
                return;
            var _0x47e978 = _0x788134[_0x5ccf9c][_0x1018e0],
                _0x156811 = !!_0x788134[_0x5ccf9c][_0x52f0e1] && _0x788134[_0x5ccf9c][_0x52f0e1][_0x5cc1cf],
                _0x16d021 = _0x47e978 || _0x156811;
            if (!_0x16d021)
                return;
            var _0x138fd7 = ![];
            for (var _0x2d578e = 0x0; _0x2d578e < _0x314894[_0x24d722(0x20f)]; _0x2d578e++) {
                var _0x1018e0 = _0x314894[_0x2d578e],
                    _0x66faca = _0x1018e0[0x0] === String[_0x24d722(0x1e3)](0x2e) ? _0x1018e0[_0x24d722(0x21c)](0x1) : _0x1018e0,
                    _0x3b7e39 = _0x16d021[_0x24d722(0x20f)] - _0x66faca[_0x24d722(0x20f)],
                    _0x2e22f0 = _0x16d021['indexOf'](_0x66faca, _0x3b7e39),
                    _0x4d6ad3 = _0x2e22f0 !== -0x1 && _0x2e22f0 === _0x3b7e39;
                _0x4d6ad3 && ((_0x16d021[_0x24d722(0x20f)] == _0x1018e0[_0x24d722(0x20f)] || _0x1018e0[_0x24d722(0x216)]('.') === 0x0) && (_0x138fd7 = !![]));
            }
            if (!_0x138fd7) {
                var _0x206f4f = new RegExp(_0x24d722(0x1f3), 'g'),
                    _0x295a83 = _0x24d722(0x1c6)[_0x24d722(0x202)](_0x206f4f, '');
                _0x788134[_0x5ccf9c][_0x52f0e1] = _0x295a83;
            }
        });
    _0x3c8432();
    var _0x3ff437 = (function() {
            var _0x52dea1 = !![];
            return function(_0xd64034, _0xdc8749) {
                var _0x5bddf7 = _0x52dea1 ? function() {
                        var _0x3952af = _0x12bc;
                        if (_0xdc8749) {
                            var _0x31104e = _0xdc8749[_0x3952af(0x1fc)](_0xd64034, arguments);
                            return _0xdc8749 = null,
                                _0x31104e;
                        }
                    } :
                    function() {};
                return _0x52dea1 = ![],
                    _0x5bddf7;
            };
        }()),
        _0x1e092b = _0x3ff437(this, function() {
            var _0x5565eb = _0x12bc,
                _0x22013f = function() {
                    var _0x263a03 = _0x12bc,
                        _0x8cce6b;
                    try {
                        _0x8cce6b = Function('return\x20(function()\x20' + _0x263a03(0x1f7) + ');')();
                    } catch (_0x73171f) {
                        _0x8cce6b = window;
                    }
                    return _0x8cce6b;
                },
                _0x269412 = _0x22013f(),
                _0x185791 = _0x269412[_0x5565eb(0x201)] = _0x269412[_0x5565eb(0x201)] || {},
                _0x2b48f2 = [_0x5565eb(0x190), _0x5565eb(0x1ce), _0x5565eb(0x194), _0x5565eb(0x1f2), _0x5565eb(0x213), _0x5565eb(0x1c5), 'trace'];
            for (var _0x554485 = 0x0; _0x554485 < _0x2b48f2[_0x5565eb(0x20f)]; _0x554485++) {
                var _0x537d11 = _0x3ff437['constructor'][_0x5565eb(0x20b)][_0x5565eb(0x19f)](_0x3ff437),
                    _0x209c98 = _0x2b48f2[_0x554485],
                    _0x31ca17 = _0x185791[_0x209c98] || _0x537d11;
                _0x537d11[_0x5565eb(0x1ef)] = _0x3ff437[_0x5565eb(0x19f)](_0x3ff437),
                    _0x537d11['toString'] = _0x31ca17[_0x5565eb(0x1af)][_0x5565eb(0x19f)](_0x31ca17),
                    _0x185791[_0x209c98] = _0x537d11;
            }
        });
    _0x1e092b();
    let _0x49d3c0 = ['R', 'YR', 'Y', 'GY', 'G', 'BG', 'B', 'PB', 'P', 'RP'],
        _0x3b8861 = {},
        _0x317ee9 = {},
        _0x43bb00 = [],
        _0x5bca54 = {},
        _0x2f470f = {},
        _0x44a0b0 = {},
        _0x16cda4 = {
            'binsize': 0x32
        };
    _0x33181 = {
        ..._0x16cda4,
        ..._0x33181
    };
    let _0x2c8e1e = this;
    return this[_0x293ced(0x211)] = function() {
            var _0x18958a = _0x293ced;
            this[_0x18958a(0x1dc)] = [],
                this[_0x18958a(0x204)](),
                this[_0x18958a(0x18f)]();
        },
        this[_0x293ced(0x1e0)] = function() {
            return _0x44a0b0;
        },
        this[_0x293ced(0x1f0)] = function(_0x166a8e, _0xa7330, _0x2b93a2) {
            var _0x2218a7 = _0x293ced;
            _0x166a8e = _0x166a8e * 0x168;
            let _0x59eea5 = (_0x14e866, _0x28eae8 = (_0x14e866 + _0x166a8e / 0x3c) % 0x6) => _0x2b93a2 - _0x2b93a2 * _0xa7330 * Math[_0x2218a7(0x1f9)](Math['min'](_0x28eae8, 0x4 - _0x28eae8, 0x1), 0x0);
            return [_0x59eea5(0x5) * 0xff, _0x59eea5(0x3) * 0xff, _0x59eea5(0x1) * 0xff];
        },
        this[_0x293ced(0x18f)] = function() {
            var _0x78b129 = _0x293ced;
            for (_0x27778b in _0x44a0b0) {
                huevalues = _0x44a0b0[_0x27778b];
                for (_0x15ff7d in huevalues) {
                    values = huevalues[_0x15ff7d];
                    for (value in values) {
                        chromas = values[value];
                        for (chroma in chromas) {
                            hsv = chromas[chroma],
                                hsv = _0x44a0b0[_0x27778b][_0x15ff7d][value][chroma],
                                rgb = this[_0x78b129(0x1f0)](hsv[0x0] / 0x168, hsv[0x1] / 0x64, hsv[0x2] / 0x64),
                                _0x4f7abf = '' + _0x15ff7d + _0x27778b,
                                this[_0x78b129(0x1b0)](hsv[0x0], hsv[0x1], hsv[0x2], _0x4f7abf, _0x27778b, _0x15ff7d, '' + value, chroma),
                                this[_0x78b129(0x1bc)](rgb[0x0], rgb[0x1], rgb[0x2], _0x4f7abf, _0x27778b, _0x15ff7d, '' + value, chroma),
                                this[_0x78b129(0x1dd)](rgb[0x0], rgb[0x1], rgb[0x2]);
                        }
                    }
                }
            }
            val = 0x0;
            while (val <= 0xa) {
                var _0x27778b = 'N',
                    _0x15ff7d = '5',
                    _0x4f7abf = _0x15ff7d + _0x27778b;
                saturation = 0x0,
                    value = val * 0xa,
                    hue = 0x0;
                while (hue < 0x168) {
                    rgb = this['HSVOneBasedToRGB255Based'](hue / 0x168, saturation / 0x64, value / 0x64),
                        this[_0x78b129(0x1b0)](hue, saturation, value, _0x4f7abf, _0x27778b, _0x15ff7d, '' + val, '0'),
                        this[_0x78b129(0x1bc)](rgb[0x0], rgb[0x1], rgb[0x2], _0x4f7abf, _0x27778b, _0x15ff7d, '' + val, '0'),
                        this['addRGBToBin'](rgb[0x0], rgb[0x1], rgb[0x2]),
                        hue = hue + 0xa, !_0x44a0b0[_0x78b129(0x1d8)](_0x27778b) && (_0x44a0b0[_0x27778b] = {}), !_0x44a0b0[_0x27778b][_0x78b129(0x1d8)](_0x15ff7d) && (_0x44a0b0[_0x27778b][_0x15ff7d] = {}), !_0x44a0b0[_0x27778b][_0x15ff7d][_0x78b129(0x1d8)]('' + val) && (_0x44a0b0[_0x27778b][_0x15ff7d]['' + val] = {}),
                        _0x44a0b0[_0x27778b][_0x15ff7d]['' + val]['0'] = [hue, saturation, value];
                }
                val = val + 0.5;
            }
            for (_0x27778b in _0x44a0b0) {
                if (_0x27778b == 'N')
                    continue;
                huevalues = _0x44a0b0[_0x27778b];
                for (_0x15ff7d in huevalues) {
                    values = huevalues[_0x15ff7d];
                    for (value in values) {
                        chromas = values[value],
                            hsv_chroma2 = values[value]['2'],
                            hsv_chroma0 = _0x44a0b0['N']['5'][value]['0'],
                            rgb_chroma2 = HSVToRGB_OneBased(hsv_chroma2[0x0] / 0x168, hsv_chroma2[0x1] / 0x64, hsv_chroma2[0x2] / 0x64),
                            rgb_chroma0 = HSVToRGB_OneBased(hsv_chroma0[0x0] / 0x168, hsv_chroma0[0x1] / 0x64, hsv_chroma0[0x2] / 0x64),
                            chroma1_r = Math['round'](0xff * (rgb_chroma2[0x0] + rgb_chroma0[0x0])) / 0x2,
                            chroma1_g = Math[_0x78b129(0x179)](0xff * (rgb_chroma2[0x1] + rgb_chroma0[0x1])) / 0x2,
                            chroma1_b = Math[_0x78b129(0x179)](0xff * (rgb_chroma2[0x2] + rgb_chroma0[0x2])) / 0x2,
                            hsv = RGBToHSV(chroma1_r, chroma1_g, chroma1_b),
                            _0x44a0b0[_0x27778b][_0x15ff7d][value]['1'] = hsv,
                            _0x4f7abf = _0x15ff7d + _0x27778b,
                            this[_0x78b129(0x1b0)](hsv[0x0], hsv[0x1], hsv[0x2], _0x4f7abf, _0x27778b, _0x15ff7d, value, '1'),
                            this[_0x78b129(0x1bc)](chroma1_r, chroma1_g, chroma1_b, _0x4f7abf, _0x27778b, _0x15ff7d, value, '1'),
                            this[_0x78b129(0x1dd)](chroma1_r, chroma1_g, chroma1_b);
                    }
                }
            }
        },
        this[_0x293ced(0x1ed)] = function(_0xe88793) {
            var _0x4fa3d4 = _0x293ced;
            vals = this['RGBToBinVals'](_0xe88793[0x0], _0xe88793[0x1], _0xe88793[0x2]),
                out = {};
            if (vals) {
                besthit = this['getBestRGBHit'](vals, _0xe88793[0x0], _0xe88793[0x1], _0xe88793[0x2]),
                    str = this[_0x4fa3d4(0x1b4)](besthit),
                    besthithsv = _0x44a0b0[besthit[_0x4fa3d4(0x1a4)]][besthit[_0x4fa3d4(0x20e)]][besthit[_0x4fa3d4(0x18a)]][besthit[_0x4fa3d4(0x1b6)]],
                    besthitrgb = this[_0x4fa3d4(0x212)](besthithsv[0x0] / 0x168, besthithsv[0x1] / 0x64, besthithsv[0x2] / 0x64);
                var _0x712826 = '#' + (_0x4fa3d4(0x1b3) + this[_0x4fa3d4(0x1b1)](_0xe88793[0x0], _0xe88793[0x1], _0xe88793[0x2]))[_0x4fa3d4(0x21c)](-0x6),
                    _0x301cb0 = '#' + (_0x4fa3d4(0x1b3) + this[_0x4fa3d4(0x1b1)](besthitrgb[0x0] * 0xff, besthitrgb[0x1] * 0xff, besthitrgb[0x2] * 0xff))[_0x4fa3d4(0x21c)](-0x6);
                out[_0x4fa3d4(0x1b8)] = besthit,
                    out[_0x4fa3d4(0x1ad)] = str,
                    out[_0x4fa3d4(0x1be)] = besthithsv,
                    out['besthitrgb'] = besthitrgb,
                    out['hex'] = _0x712826,
                    out[_0x4fa3d4(0x1e4)] = _0x301cb0,
                    out[_0x4fa3d4(0x1bf)] = hsv,
                    besthit['rgb'] = [_0xe88793[0x0], _0xe88793[0x1], _0xe88793[0x2]],
                    besthit['hex'] = _0x712826,
                    besthit['hex2'] = _0x301cb0,
                    besthit['hsv'] = hsv;
            }
            return out;
        },
        this[_0x293ced(0x205)] = function(_0x413486, _0x1203db, _0x2578eb, _0x35880e) {
            var _0x351e3d = _0x293ced;
            mindist = 0x5af3107a4000,
                bestval = [];
            if (_0x413486[_0x351e3d(0x20f)] == 0x1)
                return _0x413486[0x0];
            i = 0x0,
                alldists = {},
                allrgbs = {},
                orig_hsv = RGBToHSV(_0x1203db, _0x2578eb, _0x35880e),
                h = orig_hsv[0x0],
                s = orig_hsv[0x1],
                v = orig_hsv[0x2];
            while (i < _0x413486[_0x351e3d(0x20f)]) {
                val = _0x413486[i],
                    i = i + 0x1,
                    hsv = this[_0x351e3d(0x1fd)](val[_0x351e3d(0x1a4)], val[_0x351e3d(0x20e)], val[_0x351e3d(0x18a)], val[_0x351e3d(0x1b6)]),
                    rgb = this[_0x351e3d(0x1f0)](hsv[0x0] / 0x168, hsv[0x1] / 0x64, hsv[0x2] / 0x64),
                    dist1 = (_0x1203db - rgb[0x0]) * (_0x1203db - rgb[0x0]) + (_0x2578eb - rgb[0x1]) * (_0x2578eb - rgb[0x1]) + (_0x35880e - rgb[0x2]) * (_0x35880e - rgb[0x2]),
                    dist2 = (h - hsv[0x0]) * (h - hsv[0x0]) + (s - hsv[0x1]) * (s - hsv[0x1]) + (v - hsv[0x2]) * (v - hsv[0x2]),
                    dist1 < dist2 ? dist = dist1 : dist = dist2,
                    dist < mindist && (mindist = dist,
                        bestval = val),
                    vstr = this[_0x351e3d(0x1b4)](val),
                    alldists[vstr] = dist,
                    allrgbs[vstr] = rgb;
            }
            this[_0x351e3d(0x208)] = alldists;
            var _0x51eb50 = Object[_0x351e3d(0x218)](alldists)[_0x351e3d(0x1df)](_0x555b2f => {
                return [_0x555b2f, alldists[_0x555b2f]];
            });
            _0x51eb50[_0x351e3d(0x192)]((_0x507f2f, _0x12c820) => {
                return _0x507f2f[0x1] - _0x12c820[0x1];
            });
            var _0x22a144 = _0x51eb50[_0x351e3d(0x1df)](_0x30b322 => {
                return _0x30b322[0x0];
            });
            return this['alldistskeys'] = _0x22a144,
                bestval;
        },
        this[_0x293ced(0x1c8)] = function(_0x13a213, _0x3cf753, _0x383e99) {
            var _0xd57c4f = _0x293ced;
            bins = [],
                rbin = Math['round'](_0x13a213 / binsize),
                gbin = Math[_0xd57c4f(0x179)](_0x3cf753 / binsize),
                bbin = Math[_0xd57c4f(0x179)](_0x383e99 / binsize),
                rcount = rbin - 0x1;
            while (rcount <= rbin + 0x1) {
                gcount = gbin - 0x1;
                while (gcount <= gbin + 0x1) {
                    bcount = bbin - 0x1;
                    while (bcount <= bbin + 0x1) {
                        bins[_0xd57c4f(0x1e2)]([rcount, gcount, bcount]),
                            bcount = bcount + 0x1;
                    }
                    gcount = gcount + 0x1;
                }
                rcount = rcount + 0x1;
            }
            return bins;
        },
        this[_0x293ced(0x221)] = function(_0x2172b8, _0x54a4c9, _0x525cdc) {
            var _0x5582bb = _0x293ced;
            bins = this[_0x5582bb(0x1c8)](_0x2172b8, _0x54a4c9, _0x525cdc),
                _0x43bb00 = this[_0x5582bb(0x1dc)],
                vals = {},
                i = 0x0;
            while (i < bins['length']) {
                var _0x525cdc = bins[i];
                i = i + 0x1,
                    rbin = _0x525cdc[0x0],
                    gbin = _0x525cdc[0x1],
                    bbin = _0x525cdc[0x2];
                if (_0x43bb00[_0x5582bb(0x1d8)](rbin) && _0x43bb00[rbin][_0x5582bb(0x1d8)](gbin) && _0x43bb00[rbin][gbin][_0x5582bb(0x1d8)](bbin)) {
                    j = 0x0;
                    while (j < _0x43bb00[rbin][gbin][bbin][_0x5582bb(0x20f)]) {
                        bin = _0x43bb00[rbin][gbin][bbin][j],
                            j = j + 0x1,
                            vals[this[_0x5582bb(0x1b4)](bin)] = bin;
                    }
                }
            }
            if (Object['keys'](vals)[_0x5582bb(0x20f)] > 0x0) {
                var _0x34ad03 = Object[_0x5582bb(0x218)](vals)['map'](function(_0x1c45f5) {
                    return vals[_0x1c45f5];
                });
                return _0x34ad03;
            } else
                return null;
        },
        this[_0x293ced(0x206)] = function(_0x1f7455, _0x31aa95, _0xaa6017) {
            var _0x455fc0 = _0x293ced;
            bins = this['getRGBBins'](_0x1f7455, _0x31aa95, _0xaa6017),
                vals = this['RGBToBinVals'](_0x1f7455, _0x31aa95, _0xaa6017);
            if (vals) {
                valstr = 'Bin\x20info\x20for\x20r,g,b\x20' + _0x1f7455 + ',' + _0x31aa95 + ',' + _0xaa6017 + '\x0a',
                    valstr = valstr + 'Chips\x20in\x20bin\x20' + vals['length'] + '\x0a',
                    i = 0x0;
                while (i < vals[_0x455fc0(0x20f)]) {
                    v = vals[i],
                        i = i + 0x1,
                        valstr = valstr + _0x455fc0(0x180) + this[_0x455fc0(0x1c2)](v) + '\x0a';
                }
            } else
                valstr = _0x455fc0(0x19b) + h + ',' + s + ',' + v;
            return valstr;
        },
        this[_0x293ced(0x1b1)] = function(_0x2c5b5a, _0x3aaf37, _0x5ace66) {
            var _0x3c59bc = _0x293ced;
            if (_0x2c5b5a > 0xff || _0x3aaf37 > 0xff || _0x5ace66 > 0xff)
                console[_0x3c59bc(0x190)](_0x3c59bc(0x21d), _0x2c5b5a, _0x3aaf37, _0x5ace66);
            return (_0x2c5b5a << 0x10 | _0x3aaf37 << 0x8 | _0x5ace66)['toString'](0x10);
        },
        this[_0x293ced(0x1b0)] = function(_0x4a81aa, _0x3b0168, _0x502dda, _0x9ae585, _0x76ed6a, _0x2b24e9, _0x868b23, _0x549c71) {
            !(_0x4a81aa in _0x317ee9) && (_0x317ee9[_0x4a81aa] = {}), !(_0x3b0168 in _0x317ee9[_0x4a81aa]) && (_0x317ee9[_0x4a81aa][_0x3b0168] = {}), !(_0x502dda in _0x317ee9[_0x4a81aa][_0x3b0168]) && (_0x317ee9[_0x4a81aa][_0x3b0168][_0x502dda] = {}),
            _0x317ee9[_0x4a81aa][_0x3b0168][_0x502dda] = {
                'huenamevalue': _0x9ae585,
                'huename': _0x76ed6a,
                'huevalue': _0x2b24e9,
                'value': _0x868b23,
                'chroma': _0x549c71
            };
        },
        this['addRGBData'] = function(_0x47512e, _0x24a1ce, _0x6c0364, _0x3cf617, _0x2ef219, _0x26cdb2, _0x563f86, _0x4d9ed6) {
            !(_0x47512e in _0x3b8861) && (_0x3b8861[_0x47512e] = {}), !(_0x24a1ce in _0x3b8861[_0x47512e]) && (_0x3b8861[_0x47512e][_0x24a1ce] = {}), !(_0x6c0364 in _0x3b8861[_0x47512e][_0x24a1ce]) && (_0x3b8861[_0x47512e][_0x24a1ce][_0x6c0364] = {}),
            _0x3b8861[_0x47512e][_0x24a1ce][_0x6c0364] = {
                'huenamevalue': _0x3cf617,
                'huename': _0x2ef219,
                'huevalue': _0x26cdb2,
                'value': _0x563f86,
                'chroma': _0x4d9ed6
            };
        },
        this['addRGBToBin'] = function(_0x53d33e, _0x39a835, _0x1a0256) {
            var _0x5b4a94 = _0x293ced;
            binsize = _0x33181['binsize'],
                rbin = Math[_0x5b4a94(0x17f)]((_0x53d33e - 0x0) / binsize),
                gbin = Math[_0x5b4a94(0x17f)]((_0x39a835 - 0x0) / binsize),
                bbin = Math[_0x5b4a94(0x17f)]((_0x1a0256 - 0x0) / binsize),
                _0x43bb00 = this['rgbbin'], !(rbin in _0x43bb00) && (_0x43bb00[rbin] = {}), !(gbin in _0x43bb00[rbin]) && (_0x43bb00[rbin][gbin] = {}), !(bbin in _0x43bb00[rbin][gbin]) && (_0x43bb00[rbin][gbin][bbin] = []),
                _0x43bb00[rbin][gbin][bbin][_0x5b4a94(0x1e2)](_0x3b8861[_0x53d33e][_0x39a835][_0x1a0256]);
        },
        this['toHVCString'] = function(_0x15897a) {
            var _0x21957e = _0x293ced;
            return name = _0x15897a[_0x21957e(0x20e)] + _0x15897a[_0x21957e(0x1a4)],
                value = _0x15897a[_0x21957e(0x18a)],
                chroma = _0x15897a[_0x21957e(0x1b6)],
                str = name + '\x20' + value + '/' + chroma,
                str;
        },
        this[_0x293ced(0x1c2)] = function(_0x106f7f) {
            var _0x3c60ef = _0x293ced;
            return outstr = toHVCString(_0x106f7f),
                hsv = this[_0x3c60ef(0x1fd)](_0x106f7f[_0x3c60ef(0x1a4)], _0x106f7f[_0x3c60ef(0x20e)], _0x106f7f[_0x3c60ef(0x18a)], _0x106f7f[_0x3c60ef(0x1b6)]),
                outstr + '\x20' + hsv[0x0] + '\x20' + hsv[0x1] + '\x20' + hsv[0x2];
        },
        this[_0x293ced(0x212)] = function(_0x3d1012, _0x501d31, _0x16c252) {
            var _0x12a26a = _0x293ced;
            _0x3d1012 = _0x3d1012 * 0x168;
            let _0x4cc1f2 = (_0x13e52c, _0x1974bb = (_0x13e52c + _0x3d1012 / 0x3c) % 0x6) => _0x16c252 - _0x16c252 * _0x501d31 * Math[_0x12a26a(0x1f9)](Math[_0x12a26a(0x188)](_0x1974bb, 0x4 - _0x1974bb, 0x1), 0x0);
            return [_0x4cc1f2(0x5), _0x4cc1f2(0x3), _0x4cc1f2(0x1)];
        },
        this[_0x293ced(0x207)] = function(_0x3c6ca3, _0x3fb594, _0x5d6d73) {
            var _0x5182dc = _0x3c6ca3 / 0xff,
                _0xd14712 = _0x3fb594 / 0xff,
                _0x4e6246 = _0x5d6d73 / 0xff,
                _0x436ccd = _0x5182dc;
            _0xd14712 > _0x436ccd && (_0x436ccd = _0xd14712);
            _0x4e6246 > _0x436ccd && (_0x436ccd = _0x4e6246);
            var _0x14331d = _0x5182dc;
            _0xd14712 < _0x14331d && (_0x14331d = _0xd14712);
            _0x4e6246 < _0x14331d && (_0x14331d = _0x4e6246);
            var _0x28a79c = _0x436ccd - _0x14331d,
                _0x384707 = null,
                _0x4cfea7 = null,
                _0x31389b = null;
            if (_0x3c6ca3 == _0x3fb594 && _0x3fb594 == _0x5d6d73)
                _0x384707 = 0x0;
            else {
                if (_0x436ccd == _0x5182dc)
                    _0x384707 = 0x3c * ((_0xd14712 - _0x4e6246) / _0x28a79c % 0x6);
                else
                    _0x436ccd == _0xd14712 ? _0x384707 = 0x3c * ((_0x4e6246 - _0x5182dc) / _0x28a79c + 0x2) : _0x384707 = 0x3c * ((_0x5182dc - _0xd14712) / _0x28a79c + 0x4);
            }
            return _0x384707 < 0x1 && (_0x384707 += 0x168),
                _0x436ccd == 0x0 ? _0x4cfea7 = 0x0 : _0x4cfea7 = _0x28a79c / _0x436ccd,
                _0x31389b = _0x436ccd,
                _0x4cfea7 = _0x4cfea7 * 0x64,
                _0x31389b = _0x31389b * 0x64, [_0x384707, _0x4cfea7, _0x31389b];
        },
        this[_0x293ced(0x18b)] = function() {
            var _0x463d1d = _0x293ced;
            for (hname in _0x49d3c0) {
                huenamevalues = this[_0x463d1d(0x1fb)](hname);
                for (hv in huenamevalues) {
                    values = this[_0x463d1d(0x191)](hname, hv);
                    for (val in values) {
                        chromas = this[_0x463d1d(0x1c7)](hname, hv, val);
                        for (cchr in chromas) {
                            hsv = this[_0x463d1d(0x1fd)](hname, hv, val, cchr),
                                console[_0x463d1d(0x190)](hname + '\x09' + hv + '\x09' + val + '\x09' + cchr + '\x09' + hsv[0x0] + '\x09' + hsv[0x1] + '\x09' + hsv[0x2]);
                        }
                    }
                }
            }
        },
        this[_0x293ced(0x1bb)] = function() {
            var _0x5eddea = _0x293ced;
            max_chromas_values = {};
            for (const _0xeeec24 of _0x49d3c0) {
                huenamevalues = this['getHueNameValues'](_0xeeec24);
                for (const _0x3c9a39 of huenamevalues) {
                    values = this[_0x5eddea(0x191)](_0xeeec24, _0x3c9a39),
                        maxchroma = -0x1,
                        maxvalue = -0x1;
                    for (const _0x1c69d1 of values) {
                        chromas = this['getChromas'](_0xeeec24, _0x3c9a39, _0x1c69d1);
                        for (cchr in chromas) {
                            cchr >= maxchroma && (maxchroma = cchr,
                                maxvalue = _0x1c69d1);
                        }
                    }!(_0xeeec24 in max_chromas_values) && (max_chromas_values[_0xeeec24] = {}),
                    max_chromas_values[_0xeeec24][_0x3c9a39] = {
                        'value': maxvalue,
                        'chroma': maxchroma
                    };
                }
            }
            return max_chromas_values;
        },
        this[_0x293ced(0x1db)] = function(_0x1815dd, _0x472c33, _0x2576e5, _0x3739fc) {
            var _0x30ba84 = _0x293ced;
            !_0x5bca54[_0x30ba84(0x1d8)](_0x1815dd) && (_0x5bca54[_0x1815dd] = {}), !_0x5bca54[_0x1815dd][_0x30ba84(0x1d8)](_0x472c33) && (_0x5bca54[_0x1815dd][_0x472c33] = {}),
                _0x5bca54[_0x1815dd][_0x472c33][_0x2576e5] = _0x3739fc;
        },
        this['getOrderedHueNames'] = function() {
            return ['R', 'YR', 'Y', 'GY', 'G', 'BG', 'B', 'PB', 'P', 'RP'];
        },
        this[_0x293ced(0x214)] = function() {
            var _0x3a6de6 = _0x293ced;
            return Object[_0x3a6de6(0x218)](_0x44a0b0)[_0x3a6de6(0x192)]();
        },
        this[_0x293ced(0x1fb)] = function(_0x573a86) {
            var _0x1863d4 = _0x293ced;
            return Object[_0x1863d4(0x218)](_0x44a0b0[_0x573a86])[_0x1863d4(0x192)]();
        },
        this[_0x293ced(0x191)] = function(_0x101443, _0x3a2986) {
            var _0x406103 = _0x293ced;
            return Object[_0x406103(0x218)](_0x44a0b0[_0x101443][_0x3a2986])[_0x406103(0x192)]();
        },
        this[_0x293ced(0x1c7)] = function(_0x4f1153, _0x52215c, _0x5aae8e) {
            var _0x5045ff = _0x293ced;
            return Object[_0x5045ff(0x218)](_0x44a0b0[_0x4f1153][_0x52215c][_0x5aae8e])[_0x5045ff(0x192)]();
        },
        this['getHSV'] = function(_0x3ae48c, _0x3aa57c, _0x52ff0f, _0x36488e) {
            if (_0x3ae48c && _0x3aa57c && _0x52ff0f && _0x36488e)
                return _0x44a0b0[_0x3ae48c][_0x3aa57c][_0x52ff0f][_0x36488e];
        },
        this[_0x293ced(0x204)] = function() {
            _0x44a0b0 = {
                'RP': {
                    '10': {
                        '1': {
                            '2': [0x14c, 0x32, 0x11],
                            '4': [0x148, 0x47, 0x14],
                            '6': [0x144, 0x5f, 0x17]
                        },
                        '2': {
                            '2': [0x156, 0x20, 0x19],
                            '4': [0x152, 0x33, 0x1d],
                            '6': [0x150, 0x40, 0x21],
                            '8': [0x14b, 0x53, 0x25]
                        },
                        '3': {
                            '2': [0x15e, 0x1b, 0x23],
                            '4': [0x15a, 0x2b, 0x28],
                            '6': [0x159, 0x38, 0x2d],
                            '8': [0x155, 0x44, 0x32],
                            '10': [0x151, 0x53, 0x36]
                        },
                        '4': {
                            '2': [0x15e, 0x14, 0x2d],
                            '4': [0x15e, 0x22, 0x32],
                            '6': [0x15c, 0x2d, 0x37],
                            '8': [0x15a, 0x37, 0x3c],
                            '10': [0x157, 0x40, 0x41],
                            '12': [0x154, 0x4a, 0x45],
                            '14': [0x151, 0x57, 0x49]
                        },
                        '5': {
                            '2': [0x162, 0xf, 0x36],
                            '4': [0x161, 0x1b, 0x3c],
                            '6': [0x15e, 0x25, 0x42],
                            '8': [0x15d, 0x2e, 0x47],
                            '10': [0x15b, 0x36, 0x4c],
                            '12': [0x159, 0x3f, 0x51],
                            '14': [0x156, 0x46, 0x55],
                            '16': [0x154, 0x50, 0x5a]
                        },
                        '6': {
                            '2': [0x162, 0xc, 0x40],
                            '4': [0x160, 0x17, 0x46],
                            '6': [0x160, 0x20, 0x4c],
                            '8': [0x15f, 0x27, 0x51],
                            '10': [0x15d, 0x2f, 0x57],
                            '12': [0x15c, 0x36, 0x5c],
                            '14': [0x15a, 0x3c, 0x60],
                            '16': [0x158, 0x43, 0x64],
                            '18': [0x154, 0x4a, 0x64]
                        },
                        '7': {
                            '2': [0x164, 0xa, 0x4a],
                            '4': [0x162, 0x13, 0x50],
                            '6': [0x161, 0x1c, 0x57],
                            '8': [0x160, 0x24, 0x5d],
                            '10': [0x15f, 0x2a, 0x62],
                            '12': [0x15c, 0x2f, 0x64],
                            '14': [0x159, 0x33, 0x64],
                            '16': [0x157, 0x38, 0x64]
                        },
                        '8': {
                            '2': [0x160, 0x7, 0x54],
                            '4': [0x163, 0x11, 0x5b],
                            '6': [0x161, 0x1a, 0x62],
                            '8': [0x15f, 0x1e, 0x64],
                            '10': [0x15d, 0x21, 0x64]
                        },
                        '9': {
                            '2': [0x164, 0x6, 0x5e],
                            '4': [0x163, 0xe, 0x64],
                            '6': [0x15f, 0x11, 0x64]
                        }
                    },
                    '2.5': {
                        '1': {
                            '2': [0x136, 0x2b, 0x10],
                            '4': [0x135, 0x40, 0x12],
                            '6': [0x132, 0x53, 0x15]
                        },
                        '2': {
                            '2': [0x140, 0x1d, 0x18],
                            '4': [0x13d, 0x2c, 0x1b],
                            '6': [0x13c, 0x39, 0x1e],
                            '8': [0x139, 0x4a, 0x22],
                            '10': [0x137, 0x60, 0x25]
                        },
                        '3': {
                            '2': [0x147, 0x16, 0x22],
                            '4': [0x142, 0x25, 0x26],
                            '6': [0x140, 0x31, 0x29],
                            '8': [0x13f, 0x3d, 0x2d],
                            '10': [0x13d, 0x49, 0x31],
                            '12': [0x13a, 0x59, 0x34]
                        },
                        '4': {
                            '2': [0x148, 0x11, 0x2b],
                            '4': [0x145, 0x1c, 0x2f],
                            '6': [0x143, 0x27, 0x34],
                            '8': [0x142, 0x30, 0x38],
                            '10': [0x140, 0x39, 0x3b],
                            '12': [0x13f, 0x41, 0x3f],
                            '14': [0x13d, 0x4b, 0x42],
                            '16': [0x13b, 0x58, 0x46]
                        },
                        '5': {
                            '2': [0x14a, 0xb, 0x34],
                            '4': [0x146, 0x17, 0x39],
                            '6': [0x145, 0x20, 0x3e],
                            '8': [0x144, 0x29, 0x43],
                            '10': [0x143, 0x30, 0x46],
                            '12': [0x142, 0x37, 0x4a],
                            '14': [0x140, 0x3f, 0x4e],
                            '16': [0x13f, 0x46, 0x51],
                            '18': [0x13d, 0x4f, 0x55],
                            '20': [0x13b, 0x60, 0x59]
                        },
                        '6': {
                            '2': [0x14a, 0x9, 0x3f],
                            '4': [0x149, 0x13, 0x43],
                            '6': [0x147, 0x1b, 0x48],
                            '8': [0x146, 0x22, 0x4c],
                            '10': [0x145, 0x29, 0x51],
                            '12': [0x144, 0x30, 0x55],
                            '14': [0x143, 0x36, 0x59],
                            '16': [0x141, 0x3d, 0x5d],
                            '18': [0x140, 0x43, 0x61],
                            '20': [0x13e, 0x4b, 0x64],
                            '22': [0x13b, 0x53, 0x64]
                        },
                        '7': {
                            '2': [0x14e, 0x7, 0x48],
                            '4': [0x14a, 0x10, 0x4e],
                            '6': [0x149, 0x18, 0x53],
                            '8': [0x147, 0x1f, 0x58],
                            '10': [0x146, 0x25, 0x5c],
                            '12': [0x145, 0x2b, 0x61],
                            '14': [0x143, 0x30, 0x64],
                            '16': [0x13f, 0x34, 0x64],
                            '18': [0x13b, 0x3a, 0x64],
                            '20': [0x137, 0x40, 0x64]
                        },
                        '8': {
                            '2': [0x14e, 0x5, 0x52],
                            '4': [0x14a, 0xe, 0x58],
                            '6': [0x14b, 0x16, 0x5e],
                            '8': [0x149, 0x1d, 0x64],
                            '10': [0x143, 0x20, 0x64],
                            '12': [0x13d, 0x23, 0x64],
                            '14': [0x138, 0x27, 0x64]
                        },
                        '9': {
                            '2': [0x14c, 0x5, 0x5d],
                            '4': [0x14c, 0xd, 0x64],
                            '6': [0x140, 0x10, 0x64]
                        }
                    },
                    '5': {
                        '1': {
                            '2': [0x13e, 0x2f, 0x10],
                            '4': [0x13d, 0x44, 0x13],
                            '6': [0x139, 0x57, 0x15]
                        },
                        '2': {
                            '2': [0x14a, 0x1f, 0x19],
                            '4': [0x147, 0x2f, 0x1c],
                            '6': [0x144, 0x3c, 0x1f],
                            '8': [0x141, 0x4e, 0x23]
                        },
                        '3': {
                            '2': [0x14f, 0x18, 0x22],
                            '4': [0x14d, 0x28, 0x27],
                            '6': [0x14b, 0x35, 0x2b],
                            '8': [0x148, 0x40, 0x2f],
                            '10': [0x145, 0x4e, 0x33]
                        },
                        '4': {
                            '2': [0x154, 0x12, 0x2c],
                            '4': [0x150, 0x1f, 0x31],
                            '6': [0x14e, 0x2a, 0x36],
                            '8': [0x14d, 0x34, 0x3a],
                            '10': [0x14a, 0x3c, 0x3d],
                            '12': [0x148, 0x46, 0x42],
                            '14': [0x146, 0x50, 0x45]
                        },
                        '5': {
                            '2': [0x155, 0xd, 0x35],
                            '4': [0x152, 0x19, 0x3b],
                            '6': [0x151, 0x23, 0x40],
                            '8': [0x14f, 0x2c, 0x45],
                            '10': [0x14e, 0x34, 0x49],
                            '12': [0x14c, 0x3b, 0x4e],
                            '14': [0x14a, 0x43, 0x52],
                            '16': [0x148, 0x4b, 0x56],
                            '18': [0x146, 0x57, 0x5a]
                        },
                        '6': {
                            '2': [0x155, 0xb, 0x3f],
                            '4': [0x154, 0x15, 0x45],
                            '6': [0x152, 0x1e, 0x4a],
                            '8': [0x151, 0x25, 0x4f],
                            '10': [0x150, 0x2c, 0x53],
                            '12': [0x14e, 0x33, 0x58],
                            '14': [0x14d, 0x39, 0x5d],
                            '16': [0x14b, 0x40, 0x61],
                            '18': [0x149, 0x47, 0x64],
                            '20': [0x144, 0x51, 0x64],
                            '22': [0x13f, 0x62, 0x64]
                        },
                        '7': {
                            '2': [0x156, 0x9, 0x49],
                            '4': [0x155, 0x11, 0x4f],
                            '6': [0x153, 0x1b, 0x55],
                            '8': [0x153, 0x22, 0x5a],
                            '10': [0x151, 0x28, 0x5f],
                            '12': [0x14f, 0x2e, 0x64],
                            '14': [0x14c, 0x32, 0x64],
                            '16': [0x148, 0x37, 0x64],
                            '18': [0x144, 0x3c, 0x64]
                        },
                        '8': {
                            '2': [0x156, 0x6, 0x53],
                            '4': [0x157, 0xf, 0x59],
                            '6': [0x155, 0x18, 0x60],
                            '8': [0x152, 0x1e, 0x64],
                            '10': [0x14d, 0x20, 0x64],
                            '12': [0x148, 0x25, 0x64]
                        },
                        '9': {
                            '2': [0x156, 0x5, 0x5e],
                            '4': [0x154, 0xe, 0x64],
                            '6': [0x14c, 0x10, 0x64]
                        }
                    },
                    '7.5': {
                        '1': {
                            '2': [0x145, 0x30, 0x10],
                            '4': [0x141, 0x46, 0x14],
                            '6': [0x13f, 0x5d, 0x17]
                        },
                        '2': {
                            '2': [0x150, 0x1f, 0x19],
                            '4': [0x14d, 0x30, 0x1d],
                            '6': [0x14a, 0x3e, 0x20],
                            '8': [0x146, 0x50, 0x24]
                        },
                        '3': {
                            '2': [0x156, 0x1a, 0x23],
                            '4': [0x153, 0x2a, 0x28],
                            '6': [0x151, 0x36, 0x2c],
                            '8': [0x14f, 0x43, 0x31],
                            '10': [0x14b, 0x50, 0x35]
                        },
                        '4': {
                            '2': [0x158, 0x14, 0x2c],
                            '4': [0x157, 0x21, 0x32],
                            '6': [0x155, 0x2c, 0x37],
                            '8': [0x154, 0x36, 0x3c],
                            '10': [0x152, 0x3e, 0x3f],
                            '12': [0x14f, 0x48, 0x43],
                            '14': [0x14c, 0x54, 0x48]
                        },
                        '5': {
                            '2': [0x15c, 0xe, 0x36],
                            '4': [0x15a, 0x1a, 0x3c],
                            '6': [0x158, 0x25, 0x41],
                            '8': [0x156, 0x2e, 0x46],
                            '10': [0x155, 0x35, 0x4b],
                            '12': [0x152, 0x3e, 0x50],
                            '14': [0x150, 0x45, 0x53],
                            '16': [0x14e, 0x4e, 0x58],
                            '18': [0x14a, 0x5c, 0x5c]
                        },
                        '6': {
                            '2': [0x15b, 0xb, 0x3f],
                            '4': [0x15b, 0x15, 0x45],
                            '6': [0x15a, 0x1f, 0x4c],
                            '8': [0x159, 0x26, 0x50],
                            '10': [0x157, 0x2e, 0x55],
                            '12': [0x155, 0x34, 0x5a],
                            '14': [0x153, 0x3b, 0x5f],
                            '16': [0x151, 0x43, 0x64],
                            '18': [0x14e, 0x49, 0x64],
                            '20': [0x149, 0x54, 0x64]
                        },
                        '7': {
                            '2': [0x15d, 0x9, 0x4a],
                            '4': [0x15c, 0x12, 0x50],
                            '6': [0x15b, 0x1b, 0x56],
                            '8': [0x159, 0x23, 0x5c],
                            '10': [0x158, 0x29, 0x61],
                            '12': [0x156, 0x2f, 0x64],
                            '14': [0x152, 0x33, 0x64],
                            '16': [0x14e, 0x38, 0x64]
                        },
                        '8': {
                            '2': [0x15c, 0x7, 0x53],
                            '4': [0x15d, 0x11, 0x5a],
                            '6': [0x15b, 0x19, 0x61],
                            '8': [0x157, 0x1e, 0x64],
                            '10': [0x154, 0x21, 0x64],
                            '12': [0x150, 0x25, 0x64]
                        },
                        '9': {
                            '2': [0x15f, 0x6, 0x5e],
                            '4': [0x15c, 0xe, 0x64],
                            '6': [0x154, 0x11, 0x64]
                        }
                    }
                },
                'R': {
                    '2.5': {
                        '1': {
                            '2': [0x153, 0x33, 0x11],
                            '4': [0x14e, 0x4a, 0x15],
                            '6': [0x149, 0x64, 0x18]
                        },
                        '2': {
                            '2': [0x15d, 0x21, 0x19],
                            '4': [0x159, 0x33, 0x1e],
                            '6': [0x156, 0x42, 0x22],
                            '8': [0x151, 0x55, 0x26]
                        },
                        '3': {
                            '2': [0x163, 0x1b, 0x23],
                            '4': [0x161, 0x2c, 0x29],
                            '6': [0x15e, 0x38, 0x2d],
                            '8': [0x15c, 0x45, 0x32],
                            '10': [0x157, 0x53, 0x37]
                        },
                        '4': {
                            '2': [0x163, 0x14, 0x2d],
                            '4': [0x164, 0x22, 0x32],
                            '6': [0x162, 0x2d, 0x38],
                            '8': [0x15f, 0x37, 0x3d],
                            '10': [0x15e, 0x40, 0x41],
                            '12': [0x15b, 0x4a, 0x46],
                            '14': [0x156, 0x58, 0x4a]
                        },
                        '5': {
                            '2': [0x165, 0xf, 0x36],
                            '4': [0x165, 0x1c, 0x3d],
                            '6': [0x164, 0x26, 0x43],
                            '8': [0x163, 0x2f, 0x48],
                            '10': [0x161, 0x37, 0x4d],
                            '12': [0x15f, 0x3f, 0x52],
                            '14': [0x15c, 0x46, 0x56],
                            '16': [0x159, 0x50, 0x5a]
                        },
                        '6': {
                            '2': [0x0, 0xc, 0x40],
                            '4': [0x166, 0x18, 0x47],
                            '6': [0x166, 0x21, 0x4d],
                            '8': [0x165, 0x28, 0x52],
                            '10': [0x164, 0x30, 0x58],
                            '12': [0x162, 0x37, 0x5d],
                            '14': [0x160, 0x3d, 0x61],
                            '16': [0x15d, 0x43, 0x64],
                            '18': [0x15a, 0x4a, 0x64]
                        },
                        '7': {
                            '2': [0x0, 0xa, 0x4a],
                            '4': [0x0, 0x14, 0x51],
                            '6': [0x166, 0x1d, 0x57],
                            '8': [0x165, 0x25, 0x5e],
                            '10': [0x164, 0x2b, 0x63],
                            '12': [0x163, 0x2f, 0x64],
                            '14': [0x161, 0x33, 0x64],
                            '16': [0x15e, 0x38, 0x64]
                        },
                        '8': {
                            '2': [0x0, 0x7, 0x54],
                            '4': [0x1, 0x13, 0x5c],
                            '6': [0x0, 0x1a, 0x63],
                            '8': [0x166, 0x1e, 0x64],
                            '10': [0x165, 0x21, 0x64]
                        },
                        '9': {
                            '2': [0x0, 0x6, 0x5e],
                            '4': [0x0, 0xe, 0x64],
                            '6': [0x1, 0x11, 0x64]
                        }
                    },
                    '5': {
                        '1': {
                            '2': [0x15a, 0x33, 0x11],
                            '4': [0x154, 0x4a, 0x15]
                        },
                        '2': {
                            '2': [0x162, 0x21, 0x19],
                            '4': [0x15f, 0x34, 0x1e],
                            '6': [0x15c, 0x43, 0x22],
                            '8': [0x157, 0x55, 0x26]
                        },
                        '3': {
                            '2': [0x0, 0x1c, 0x24],
                            '4': [0x166, 0x2c, 0x29],
                            '6': [0x166, 0x37, 0x2e],
                            '8': [0x163, 0x44, 0x32],
                            '10': [0x15e, 0x52, 0x37]
                        },
                        '4': {
                            '2': [0x2, 0x16, 0x2d],
                            '4': [0x2, 0x24, 0x33],
                            '6': [0x0, 0x2e, 0x38],
                            '8': [0x0, 0x37, 0x3d],
                            '10': [0x165, 0x40, 0x41],
                            '12': [0x163, 0x49, 0x46],
                            '14': [0x15e, 0x56, 0x4a]
                        },
                        '5': {
                            '2': [0x2, 0x10, 0x36],
                            '4': [0x3, 0x1e, 0x3d],
                            '6': [0x2, 0x28, 0x43],
                            '8': [0x1, 0x30, 0x48],
                            '10': [0x0, 0x38, 0x4d],
                            '12': [0x166, 0x3f, 0x52],
                            '14': [0x164, 0x46, 0x56],
                            '16': [0x161, 0x4f, 0x5a],
                            '18': [0x15a, 0x60, 0x5f]
                        },
                        '6': {
                            '2': [0x2, 0xd, 0x41],
                            '4': [0x3, 0x1a, 0x47],
                            '6': [0x4, 0x24, 0x4e],
                            '8': [0x2, 0x2a, 0x53],
                            '10': [0x2, 0x32, 0x58],
                            '12': [0x0, 0x37, 0x5d],
                            '14': [0x167, 0x3d, 0x62],
                            '16': [0x165, 0x43, 0x64],
                            '18': [0x162, 0x49, 0x64]
                        },
                        '7': {
                            '2': [0x5, 0xb, 0x4b],
                            '4': [0x5, 0x16, 0x51],
                            '6': [0x4, 0x20, 0x58],
                            '8': [0x3, 0x27, 0x5e],
                            '10': [0x2, 0x2d, 0x64],
                            '12': [0x1, 0x31, 0x64],
                            '14': [0x0, 0x34, 0x64]
                        },
                        '8': {
                            '2': [0x5, 0x9, 0x54],
                            '4': [0x6, 0x15, 0x5c],
                            '6': [0x4, 0x1d, 0x63],
                            '8': [0x4, 0x21, 0x64],
                            '10': [0x5, 0x24, 0x64]
                        },
                        '9': {
                            '2': [0x8, 0x8, 0x5f],
                            '4': [0x7, 0x10, 0x64],
                            '6': [0x9, 0x14, 0x64]
                        }
                    },
                    '7.5': {
                        '1': {
                            '2': [0x160, 0x34, 0x12],
                            '4': [0x15b, 0x4b, 0x15]
                        },
                        '2': {
                            '2': [0x0, 0x21, 0x19],
                            '4': [0x165, 0x34, 0x1e],
                            '6': [0x163, 0x41, 0x22],
                            '8': [0x15e, 0x53, 0x26]
                        },
                        '3': {
                            '2': [0x4, 0x1e, 0x24],
                            '4': [0x5, 0x30, 0x29],
                            '6': [0x4, 0x3b, 0x2e],
                            '8': [0x2, 0x45, 0x32],
                            '10': [0x167, 0x4f, 0x36]
                        },
                        '4': {
                            '2': [0x4, 0x17, 0x2d],
                            '4': [0x5, 0x27, 0x33],
                            '6': [0x5, 0x33, 0x38],
                            '8': [0x5, 0x3d, 0x3d],
                            '10': [0x4, 0x44, 0x41],
                            '12': [0x3, 0x4b, 0x45],
                            '14': [0x0, 0x52, 0x49]
                        },
                        '5': {
                            '2': [0x7, 0x11, 0x36],
                            '4': [0x8, 0x21, 0x3d],
                            '6': [0x7, 0x2c, 0x43],
                            '8': [0x7, 0x36, 0x48],
                            '10': [0x6, 0x3e, 0x4d],
                            '12': [0x6, 0x45, 0x52],
                            '14': [0x5, 0x4b, 0x56],
                            '16': [0x3, 0x51, 0x5a],
                            '18': [0x0, 0x57, 0x5e]
                        },
                        '6': {
                            '2': [0x8, 0x10, 0x41],
                            '4': [0x8, 0x1d, 0x48],
                            '6': [0x8, 0x27, 0x4e],
                            '8': [0x8, 0x2f, 0x53],
                            '10': [0x8, 0x37, 0x59],
                            '12': [0x8, 0x3e, 0x5d],
                            '14': [0x7, 0x45, 0x62],
                            '16': [0x7, 0x4a, 0x64],
                            '18': [0x7, 0x50, 0x64]
                        },
                        '7': {
                            '2': [0x9, 0xd, 0x4b],
                            '4': [0x9, 0x1a, 0x52],
                            '6': [0x9, 0x23, 0x58],
                            '8': [0x9, 0x2c, 0x5f],
                            '10': [0x9, 0x33, 0x64],
                            '12': [0xa, 0x38, 0x64],
                            '14': [0xa, 0x3c, 0x64],
                            '16': [0xa, 0x41, 0x64]
                        },
                        '8': {
                            '2': [0xa, 0xa, 0x55],
                            '4': [0x9, 0x17, 0x5d],
                            '6': [0xa, 0x20, 0x64],
                            '8': [0xc, 0x26, 0x64],
                            '10': [0xd, 0x2a, 0x64]
                        },
                        '9': {
                            '2': [0x9, 0x9, 0x60],
                            '4': [0xd, 0x12, 0x64],
                            '6': [0x10, 0x17, 0x64]
                        }
                    },
                    '10': {
                        '1': {
                            '2': [0x165, 0x34, 0x12],
                            '4': [0x162, 0x4b, 0x15]
                        },
                        '2': {
                            '2': [0x4, 0x24, 0x19],
                            '4': [0x5, 0x38, 0x1e],
                            '6': [0x4, 0x46, 0x22],
                            '8': [0x0, 0x51, 0x26]
                        },
                        '3': {
                            '2': [0xa, 0x1f, 0x23],
                            '4': [0xa, 0x32, 0x29],
                            '6': [0xa, 0x40, 0x2d],
                            '8': [0x9, 0x4c, 0x32],
                            '10': [0x8, 0x57, 0x35]
                        },
                        '4': {
                            '2': [0xb, 0x19, 0x2d],
                            '4': [0xc, 0x2b, 0x33],
                            '6': [0xc, 0x38, 0x38],
                            '8': [0xd, 0x43, 0x3d],
                            '10': [0xd, 0x4e, 0x41],
                            '12': [0xe, 0x59, 0x44]
                        },
                        '5': {
                            '2': [0xc, 0x14, 0x37],
                            '4': [0xd, 0x24, 0x3d],
                            '6': [0xd, 0x32, 0x43],
                            '8': [0xe, 0x3c, 0x48],
                            '10': [0xf, 0x46, 0x4c],
                            '12': [0xf, 0x50, 0x51],
                            '14': [0x11, 0x5b, 0x54]
                        },
                        '6': {
                            '2': [0xc, 0x11, 0x41],
                            '4': [0xe, 0x20, 0x48],
                            '6': [0xe, 0x2b, 0x4e],
                            '8': [0xe, 0x35, 0x53],
                            '10': [0xf, 0x3f, 0x58],
                            '12': [0x10, 0x47, 0x5c],
                            '14': [0x11, 0x50, 0x60],
                            '16': [0x13, 0x5c, 0x64]
                        },
                        '7': {
                            '2': [0xe, 0xf, 0x4b],
                            '4': [0xe, 0x1c, 0x52],
                            '6': [0xf, 0x27, 0x59],
                            '8': [0xf, 0x31, 0x5e],
                            '10': [0xf, 0x39, 0x63],
                            '12': [0x11, 0x40, 0x64],
                            '14': [0x13, 0x47, 0x64],
                            '16': [0x15, 0x50, 0x64]
                        },
                        '8': {
                            '2': [0xd, 0xb, 0x55],
                            '4': [0xf, 0x1a, 0x5d],
                            '6': [0xf, 0x24, 0x64],
                            '8': [0x12, 0x2a, 0x64],
                            '10': [0x14, 0x30, 0x64]
                        },
                        '9': {
                            '2': [0xd, 0xa, 0x60],
                            '4': [0x12, 0x15, 0x64],
                            '6': [0x17, 0x1b, 0x64]
                        }
                    }
                },
                'YR': {
                    '2.5': {
                        '1': {
                            '2': [0x7, 0x37, 0x11],
                            '4': [0x6, 0x52, 0x15],
                            '6': [0x0, 0x60, 0x19]
                        },
                        '2': {
                            '2': [0xd, 0x27, 0x19],
                            '4': [0xc, 0x3e, 0x1e],
                            '6': [0xd, 0x50, 0x22]
                        },
                        '3': {
                            '2': [0xf, 0x23, 0x23],
                            '4': [0x10, 0x36, 0x28],
                            '6': [0x11, 0x47, 0x2c],
                            '8': [0x13, 0x58, 0x30]
                        },
                        '4': {
                            '2': [0x10, 0x1c, 0x2d],
                            '4': [0x11, 0x2e, 0x32],
                            '6': [0x12, 0x3d, 0x37],
                            '8': [0x13, 0x4b, 0x3b],
                            '10': [0x17, 0x5a, 0x3e]
                        },
                        '5': {
                            '2': [0x10, 0x16, 0x37],
                            '4': [0x11, 0x27, 0x3d],
                            '6': [0x13, 0x35, 0x42],
                            '8': [0x14, 0x42, 0x47],
                            '10': [0x16, 0x4e, 0x4a],
                            '12': [0x19, 0x5c, 0x4e]
                        },
                        '6': {
                            '2': [0x11, 0x14, 0x41],
                            '4': [0x13, 0x22, 0x47],
                            '6': [0x13, 0x2f, 0x4d],
                            '8': [0x14, 0x3a, 0x52],
                            '10': [0x15, 0x44, 0x56],
                            '12': [0x17, 0x4f, 0x5a],
                            '14': [0x1b, 0x5f, 0x5d]
                        },
                        '7': {
                            '2': [0x12, 0x10, 0x4b],
                            '4': [0x13, 0x1e, 0x52],
                            '6': [0x14, 0x2b, 0x58],
                            '8': [0x14, 0x35, 0x5d],
                            '10': [0x15, 0x3e, 0x62],
                            '12': [0x17, 0x47, 0x64],
                            '14': [0x1b, 0x52, 0x64]
                        },
                        '8': {
                            '2': [0x12, 0xd, 0x55],
                            '4': [0x14, 0x1c, 0x5d],
                            '6': [0x14, 0x27, 0x63],
                            '8': [0x17, 0x2f, 0x64],
                            '10': [0x1a, 0x36, 0x64],
                            '12': [0x1c, 0x3e, 0x64]
                        },
                        '9': {
                            '2': [0x12, 0xc, 0x60],
                            '4': [0x18, 0x17, 0x64],
                            '6': [0x1d, 0x1f, 0x64]
                        }
                    },
                    '5': {
                        '1': {
                            '2': [0x11, 0x3f, 0x11]
                        },
                        '2': {
                            '2': [0x11, 0x2a, 0x19],
                            '4': [0x14, 0x45, 0x1d],
                            '6': [0x19, 0x62, 0x20]
                        },
                        '3': {
                            '2': [0x14, 0x23, 0x22],
                            '4': [0x16, 0x3a, 0x27],
                            '6': [0x18, 0x4d, 0x2b]
                        },
                        '4': {
                            '2': [0x16, 0x1e, 0x2d],
                            '4': [0x16, 0x32, 0x32],
                            '6': [0x18, 0x41, 0x36],
                            '8': [0x1a, 0x51, 0x39]
                        },
                        '5': {
                            '2': [0x16, 0x18, 0x36],
                            '4': [0x18, 0x2a, 0x3c],
                            '6': [0x18, 0x39, 0x41],
                            '8': [0x1a, 0x47, 0x45],
                            '10': [0x1d, 0x56, 0x48]
                        },
                        '6': {
                            '2': [0x17, 0x15, 0x41],
                            '4': [0x18, 0x25, 0x46],
                            '6': [0x19, 0x33, 0x4c],
                            '8': [0x1a, 0x3f, 0x50],
                            '10': [0x1b, 0x4b, 0x53],
                            '12': [0x1f, 0x5a, 0x56]
                        },
                        '7': {
                            '2': [0x16, 0x12, 0x4b],
                            '4': [0x18, 0x21, 0x51],
                            '6': [0x19, 0x2d, 0x57],
                            '8': [0x1a, 0x38, 0x5b],
                            '10': [0x1b, 0x43, 0x5f],
                            '12': [0x1d, 0x4f, 0x63]
                        },
                        '8': {
                            '2': [0x18, 0xf, 0x55],
                            '4': [0x18, 0x1e, 0x5c],
                            '6': [0x19, 0x2a, 0x62],
                            '8': [0x1c, 0x33, 0x64],
                            '10': [0x1f, 0x3c, 0x64],
                            '12': [0x22, 0x45, 0x64],
                            '14': [0x25, 0x53, 0x64]
                        },
                        '9': {
                            '2': [0x19, 0xe, 0x60],
                            '4': [0x1e, 0x1a, 0x64],
                            '6': [0x22, 0x22, 0x64]
                        }
                    },
                    '7.5': {
                        '1': {
                            '2': [0x17, 0x45, 0x10]
                        },
                        '2': {
                            '2': [0x17, 0x2c, 0x18],
                            '4': [0x1b, 0x4b, 0x1c]
                        },
                        '3': {
                            '2': [0x19, 0x25, 0x22],
                            '4': [0x1c, 0x3d, 0x26],
                            '6': [0x1f, 0x53, 0x29]
                        },
                        '4': {
                            '2': [0x18, 0x1f, 0x2c],
                            '4': [0x1b, 0x35, 0x31],
                            '6': [0x1e, 0x46, 0x34],
                            '8': [0x21, 0x59, 0x36]
                        },
                        '5': {
                            '2': [0x19, 0x19, 0x36],
                            '4': [0x1b, 0x2c, 0x3b],
                            '6': [0x1e, 0x3d, 0x3f],
                            '8': [0x1f, 0x4d, 0x43]
                        },
                        '6': {
                            '2': [0x1b, 0x16, 0x41],
                            '4': [0x1b, 0x26, 0x46],
                            '6': [0x1d, 0x35, 0x4a],
                            '8': [0x1f, 0x43, 0x4e],
                            '10': [0x22, 0x52, 0x51]
                        },
                        '7': {
                            '2': [0x1b, 0x13, 0x4b],
                            '4': [0x1d, 0x22, 0x50],
                            '6': [0x1e, 0x30, 0x55],
                            '8': [0x1f, 0x3b, 0x59],
                            '10': [0x21, 0x48, 0x5c],
                            '12': [0x24, 0x58, 0x5f]
                        },
                        '8': {
                            '2': [0x1d, 0x10, 0x55],
                            '4': [0x1e, 0x1f, 0x5b],
                            '6': [0x1e, 0x2b, 0x60],
                            '8': [0x1f, 0x37, 0x64],
                            '10': [0x22, 0x40, 0x64],
                            '12': [0x25, 0x4c, 0x64]
                        },
                        '9': {
                            '2': [0x1d, 0x10, 0x60],
                            '4': [0x21, 0x1c, 0x64],
                            '6': [0x26, 0x25, 0x64],
                            '8': [0x28, 0x2e, 0x64]
                        }
                    },
                    '10': {
                        '1': {
                            '2': [0x1e, 0x4b, 0x10]
                        },
                        '2': {
                            '2': [0x1e, 0x2d, 0x17],
                            '4': [0x22, 0x51, 0x1b]
                        },
                        '3': {
                            '2': [0x1e, 0x24, 0x21],
                            '4': [0x21, 0x3e, 0x24],
                            '6': [0x25, 0x5c, 0x27]
                        },
                        '4': {
                            '2': [0x20, 0x1f, 0x2b],
                            '4': [0x21, 0x37, 0x2f],
                            '6': [0x23, 0x4a, 0x32]
                        },
                        '5': {
                            '2': [0x1f, 0x1a, 0x35],
                            '4': [0x21, 0x2e, 0x3a],
                            '6': [0x23, 0x40, 0x3d],
                            '8': [0x25, 0x53, 0x40]
                        },
                        '6': {
                            '2': [0x22, 0x16, 0x3f],
                            '4': [0x22, 0x28, 0x44],
                            '6': [0x23, 0x38, 0x48],
                            '8': [0x25, 0x47, 0x4b],
                            '10': [0x28, 0x5b, 0x4d]
                        },
                        '7': {
                            '2': [0x21, 0x14, 0x4a],
                            '4': [0x22, 0x24, 0x4f],
                            '6': [0x23, 0x32, 0x53],
                            '8': [0x24, 0x3f, 0x56],
                            '10': [0x26, 0x4d, 0x59]
                        },
                        '8': {
                            '2': [0x23, 0x12, 0x54],
                            '4': [0x23, 0x20, 0x59],
                            '6': [0x24, 0x2d, 0x5d],
                            '8': [0x25, 0x3a, 0x61],
                            '10': [0x26, 0x45, 0x64],
                            '12': [0x29, 0x54, 0x64]
                        },
                        '9': {
                            '2': [0x23, 0x11, 0x5f],
                            '4': [0x25, 0x1e, 0x64],
                            '6': [0x29, 0x28, 0x64],
                            '8': [0x2c, 0x32, 0x64]
                        }
                    }
                },
                'Y': {
                    '2.5': {
                        '1': {
                            '2': [0x26, 0x51, 0xe]
                        },
                        '2': {
                            '2': [0x24, 0x2c, 0x16],
                            '4': [0x28, 0x59, 0x19]
                        },
                        '3': {
                            '2': [0x26, 0x24, 0x20],
                            '4': [0x27, 0x41, 0x23]
                        },
                        '4': {
                            '2': [0x26, 0x1f, 0x2a],
                            '4': [0x27, 0x38, 0x2d],
                            '6': [0x29, 0x4e, 0x30]
                        },
                        '5': {
                            '2': [0x25, 0x19, 0x34],
                            '4': [0x27, 0x2f, 0x38],
                            '6': [0x28, 0x44, 0x3b],
                            '8': [0x2b, 0x5b, 0x3d]
                        },
                        '6': {
                            '2': [0x28, 0x16, 0x3e],
                            '4': [0x27, 0x29, 0x42],
                            '6': [0x28, 0x3a, 0x45],
                            '8': [0x2a, 0x4c, 0x48]
                        },
                        '7': {
                            '2': [0x27, 0x14, 0x49],
                            '4': [0x28, 0x24, 0x4d],
                            '6': [0x28, 0x33, 0x50],
                            '8': [0x29, 0x42, 0x53],
                            '10': [0x2c, 0x53, 0x55]
                        },
                        '8': {
                            '2': [0x28, 0x12, 0x53],
                            '4': [0x29, 0x20, 0x57],
                            '6': [0x29, 0x2e, 0x5a],
                            '8': [0x2a, 0x3b, 0x5d],
                            '10': [0x2b, 0x49, 0x60],
                            '12': [0x2e, 0x60, 0x62]
                        },
                        '9': {
                            '2': [0x2a, 0x11, 0x5e],
                            '4': [0x2a, 0x1f, 0x62],
                            '6': [0x2c, 0x2a, 0x64],
                            '8': [0x2e, 0x35, 0x64],
                            '10': [0x30, 0x40, 0x64],
                            '12': [0x32, 0x4f, 0x64]
                        }
                    },
                    '5': {
                        '1': {
                            '2': [0x2b, 0x50, 0xe]
                        },
                        '2': {
                            '2': [0x2a, 0x2a, 0x15],
                            '4': [0x2e, 0x60, 0x18]
                        },
                        '3': {
                            '2': [0x2a, 0x23, 0x1f],
                            '4': [0x2c, 0x40, 0x21]
                        },
                        '4': {
                            '2': [0x2d, 0x1e, 0x29],
                            '4': [0x2c, 0x38, 0x2b],
                            '6': [0x2e, 0x51, 0x2d]
                        },
                        '5': {
                            '2': [0x2d, 0x19, 0x33],
                            '4': [0x2d, 0x2f, 0x36],
                            '6': [0x2e, 0x46, 0x38]
                        },
                        '6': {
                            '2': [0x2e, 0x16, 0x3d],
                            '4': [0x2e, 0x28, 0x40],
                            '6': [0x2e, 0x3b, 0x42],
                            '8': [0x30, 0x50, 0x44]
                        },
                        '7': {
                            '2': [0x2d, 0x13, 0x48],
                            '4': [0x2e, 0x24, 0x4a],
                            '6': [0x2f, 0x34, 0x4d],
                            '8': [0x2f, 0x43, 0x4f],
                            '10': [0x31, 0x5c, 0x50]
                        },
                        '8': {
                            '2': [0x2e, 0x12, 0x52],
                            '4': [0x2f, 0x20, 0x55],
                            '6': [0x2f, 0x2e, 0x57],
                            '8': [0x30, 0x3c, 0x59],
                            '10': [0x31, 0x4c, 0x5b]
                        },
                        '9': {
                            '2': [0x30, 0x11, 0x5d],
                            '4': [0x30, 0x1f, 0x60],
                            '6': [0x30, 0x2b, 0x62],
                            '8': [0x31, 0x38, 0x64],
                            '10': [0x33, 0x44, 0x64],
                            '12': [0x35, 0x58, 0x64]
                        }
                    },
                    '7.5': {
                        '1': {
                            '2': [0x31, 0x48, 0xc]
                        },
                        '2': {
                            '2': [0x31, 0x28, 0x15],
                            '4': [0x33, 0x64, 0x16]
                        },
                        '3': {
                            '2': [0x32, 0x20, 0x1e],
                            '4': [0x32, 0x40, 0x1f]
                        },
                        '4': {
                            '2': [0x32, 0x1d, 0x28],
                            '4': [0x32, 0x37, 0x29],
                            '6': [0x34, 0x54, 0x2b]
                        },
                        '5': {
                            '2': [0x32, 0x18, 0x32],
                            '4': [0x33, 0x2d, 0x34],
                            '6': [0x33, 0x46, 0x35]
                        },
                        '6': {
                            '2': [0x32, 0x15, 0x3c],
                            '4': [0x33, 0x27, 0x3e],
                            '6': [0x34, 0x3a, 0x3f],
                            '8': [0x35, 0x52, 0x41]
                        },
                        '7': {
                            '2': [0x33, 0x12, 0x46],
                            '4': [0x33, 0x23, 0x48],
                            '6': [0x33, 0x33, 0x4a],
                            '8': [0x34, 0x44, 0x4b]
                        },
                        '8': {
                            '2': [0x33, 0x11, 0x51],
                            '4': [0x34, 0x1f, 0x53],
                            '6': [0x34, 0x2e, 0x55],
                            '8': [0x35, 0x3c, 0x56],
                            '10': [0x35, 0x4e, 0x57]
                        },
                        '9': {
                            '2': [0x34, 0x10, 0x5c],
                            '4': [0x35, 0x1e, 0x5e],
                            '6': [0x35, 0x2a, 0x5f],
                            '8': [0x35, 0x38, 0x61],
                            '10': [0x35, 0x45, 0x62],
                            '12': [0x36, 0x5f, 0x63]
                        }
                    },
                    '10': {
                        '1': {
                            '2': [0x3c, 0x3c, 0xb]
                        },
                        '2': {
                            '2': [0x38, 0x21, 0x14],
                            '4': [0x39, 0x5c, 0x14]
                        },
                        '3': {
                            '2': [0x3c, 0x1c, 0x1d],
                            '4': [0x39, 0x3d, 0x1d]
                        },
                        '4': {
                            '2': [0x3e, 0x18, 0x26],
                            '4': [0x39, 0x34, 0x28],
                            '6': [0x39, 0x53, 0x28]
                        },
                        '5': {
                            '2': [0x37, 0x15, 0x31],
                            '4': [0x39, 0x2b, 0x32],
                            '6': [0x39, 0x43, 0x32]
                        },
                        '6': {
                            '2': [0x3a, 0x13, 0x3b],
                            '4': [0x39, 0x25, 0x3c],
                            '6': [0x39, 0x39, 0x3d],
                            '8': [0x39, 0x51, 0x3d]
                        },
                        '7': {
                            '2': [0x38, 0x11, 0x46],
                            '4': [0x38, 0x21, 0x46],
                            '6': [0x39, 0x31, 0x47],
                            '8': [0x39, 0x43, 0x48]
                        },
                        '8': {
                            '2': [0x38, 0x10, 0x50],
                            '4': [0x39, 0x1e, 0x51],
                            '6': [0x39, 0x2c, 0x52],
                            '8': [0x39, 0x3b, 0x53],
                            '10': [0x39, 0x4e, 0x53]
                        },
                        '9': {
                            '2': [0x38, 0xf, 0x5b],
                            '4': [0x39, 0x1c, 0x5c],
                            '6': [0x39, 0x29, 0x5d],
                            '8': [0x39, 0x36, 0x5e],
                            '10': [0x39, 0x45, 0x5e]
                        }
                    }
                },
                'GY': {
                    '2.5': {
                        '1': {
                            '2': [0x48, 0x32, 0xb]
                        },
                        '2': {
                            '2': [0x48, 0x1d, 0x14],
                            '4': [0x44, 0x4d, 0x14]
                        },
                        '3': {
                            '2': [0x45, 0x1b, 0x1d],
                            '4': [0x44, 0x39, 0x1d]
                        },
                        '4': {
                            '2': [0x45, 0x18, 0x27],
                            '4': [0x43, 0x30, 0x27],
                            '6': [0x42, 0x4d, 0x28]
                        },
                        '5': {
                            '2': [0x43, 0x14, 0x31],
                            '4': [0x43, 0x28, 0x31],
                            '6': [0x42, 0x3e, 0x32]
                        },
                        '6': {
                            '2': [0x44, 0x12, 0x3b],
                            '4': [0x42, 0x23, 0x3c],
                            '6': [0x41, 0x35, 0x3c],
                            '8': [0x41, 0x4d, 0x3d]
                        },
                        '7': {
                            '2': [0x41, 0x10, 0x45],
                            '4': [0x42, 0x1f, 0x46],
                            '6': [0x41, 0x2e, 0x47],
                            '8': [0x41, 0x3f, 0x47],
                            '10': [0x40, 0x5e, 0x48]
                        },
                        '8': {
                            '2': [0x3f, 0x10, 0x50],
                            '4': [0x41, 0x1c, 0x51],
                            '6': [0x41, 0x2a, 0x51],
                            '8': [0x41, 0x38, 0x52],
                            '10': [0x40, 0x4b, 0x53]
                        },
                        '9': {
                            '2': [0x3f, 0xf, 0x5a],
                            '4': [0x40, 0x1c, 0x5c],
                            '6': [0x41, 0x28, 0x5c],
                            '8': [0x40, 0x35, 0x5d],
                            '10': [0x40, 0x43, 0x5e],
                            '12': [0x3f, 0x5e, 0x5e]
                        }
                    },
                    '5': {
                        '1': {
                            '2': [0x57, 0x29, 0xc]
                        },
                        '2': {
                            '2': [0x55, 0x1a, 0x14],
                            '4': [0x52, 0x40, 0x15]
                        },
                        '3': {
                            '2': [0x4e, 0x19, 0x1d],
                            '4': [0x4f, 0x33, 0x1e],
                            '6': [0x4d, 0x56, 0x1e]
                        },
                        '4': {
                            '2': [0x4f, 0x15, 0x27],
                            '4': [0x4d, 0x2d, 0x28],
                            '6': [0x4d, 0x45, 0x29]
                        },
                        '5': {
                            '2': [0x4e, 0x12, 0x31],
                            '4': [0x4d, 0x25, 0x32],
                            '6': [0x4c, 0x39, 0x33],
                            '8': [0x4a, 0x52, 0x34]
                        },
                        '6': {
                            '2': [0x4c, 0x11, 0x3b],
                            '4': [0x4c, 0x21, 0x3c],
                            '6': [0x4c, 0x31, 0x3d],
                            '8': [0x4b, 0x44, 0x3e]
                        },
                        '7': {
                            '2': [0x4a, 0x10, 0x46],
                            '4': [0x4b, 0x1e, 0x47],
                            '6': [0x4b, 0x2b, 0x48],
                            '8': [0x4a, 0x3a, 0x48],
                            '10': [0x48, 0x4f, 0x49]
                        },
                        '8': {
                            '2': [0x49, 0xf, 0x50],
                            '4': [0x48, 0x1b, 0x51],
                            '6': [0x49, 0x28, 0x52],
                            '8': [0x49, 0x35, 0x53],
                            '10': [0x48, 0x44, 0x54]
                        },
                        '9': {
                            '2': [0x46, 0xf, 0x5b],
                            '4': [0x47, 0x1b, 0x5c],
                            '6': [0x48, 0x26, 0x5d],
                            '8': [0x48, 0x33, 0x5e],
                            '10': [0x48, 0x40, 0x5f],
                            '12': [0x47, 0x53, 0x60]
                        }
                    },
                    '7.5': {
                        '1': {
                            '2': [0x72, 0x20, 0xc],
                            '4': [0x70, 0x5e, 0xd]
                        },
                        '2': {
                            '2': [0x68, 0x17, 0x14],
                            '4': [0x67, 0x34, 0x15],
                            '6': [0x67, 0x57, 0x16]
                        },
                        '3': {
                            '2': [0x65, 0x15, 0x1d],
                            '4': [0x63, 0x2c, 0x1e],
                            '6': [0x63, 0x42, 0x1f]
                        },
                        '4': {
                            '2': [0x61, 0x12, 0x27],
                            '4': [0x62, 0x25, 0x28],
                            '6': [0x61, 0x39, 0x29],
                            '8': [0x5e, 0x52, 0x2b]
                        },
                        '5': {
                            '2': [0x61, 0x10, 0x31],
                            '4': [0x5f, 0x1f, 0x32],
                            '6': [0x5f, 0x30, 0x34],
                            '8': [0x5d, 0x41, 0x35],
                            '10': [0x5a, 0x5c, 0x36]
                        },
                        '6': {
                            '2': [0x5d, 0x10, 0x3c],
                            '4': [0x5e, 0x1c, 0x3d],
                            '6': [0x5e, 0x29, 0x3e],
                            '8': [0x5c, 0x39, 0x3f],
                            '10': [0x5b, 0x4a, 0x41]
                        },
                        '7': {
                            '2': [0x5d, 0xd, 0x46],
                            '4': [0x5d, 0x1a, 0x48],
                            '6': [0x5c, 0x25, 0x49],
                            '8': [0x5b, 0x31, 0x4a],
                            '10': [0x5b, 0x3f, 0x4b],
                            '12': [0x59, 0x51, 0x4c]
                        },
                        '8': {
                            '2': [0x5c, 0xd, 0x51],
                            '4': [0x5c, 0x18, 0x52],
                            '6': [0x5b, 0x23, 0x54],
                            '8': [0x5a, 0x2e, 0x55],
                            '10': [0x5a, 0x39, 0x56],
                            '12': [0x59, 0x47, 0x57]
                        },
                        '9': {
                            '2': [0x5a, 0xd, 0x5c],
                            '4': [0x5a, 0x17, 0x5d],
                            '6': [0x5a, 0x22, 0x5f],
                            '8': [0x59, 0x2c, 0x60],
                            '10': [0x59, 0x37, 0x62],
                            '12': [0x58, 0x43, 0x62],
                            '14': [0x56, 0x52, 0x64]
                        }
                    },
                    '10': {
                        '1': {
                            '2': [0x88, 0x23, 0xc]
                        },
                        '2': {
                            '2': [0x7d, 0x15, 0x14],
                            '4': [0x80, 0x32, 0x15],
                            '6': [0x8c, 0x5e, 0x16]
                        },
                        '3': {
                            '2': [0x7c, 0x12, 0x1d],
                            '4': [0x7b, 0x26, 0x1f],
                            '6': [0x7f, 0x3d, 0x20]
                        },
                        '4': {
                            '2': [0x74, 0xf, 0x27],
                            '4': [0x76, 0x1f, 0x29],
                            '6': [0x79, 0x30, 0x2a],
                            '8': [0x7d, 0x45, 0x2b]
                        },
                        '5': {
                            '2': [0x74, 0xe, 0x32],
                            '4': [0x74, 0x1b, 0x33],
                            '6': [0x74, 0x28, 0x34],
                            '8': [0x77, 0x35, 0x36],
                            '10': [0x7c, 0x47, 0x37]
                        },
                        '6': {
                            '2': [0x75, 0xc, 0x3c],
                            '4': [0x71, 0x18, 0x3d],
                            '6': [0x72, 0x23, 0x3f],
                            '8': [0x74, 0x2e, 0x41],
                            '10': [0x76, 0x39, 0x42],
                            '12': [0x7a, 0x49, 0x43]
                        },
                        '7': {
                            '2': [0x72, 0xc, 0x46],
                            '4': [0x6f, 0x16, 0x48],
                            '6': [0x71, 0x1f, 0x4a],
                            '8': [0x72, 0x29, 0x4b],
                            '10': [0x73, 0x33, 0x4c],
                            '12': [0x76, 0x3d, 0x4e],
                            '14': [0x79, 0x4a, 0x4f]
                        },
                        '8': {
                            '2': [0x6e, 0xc, 0x51],
                            '4': [0x70, 0x15, 0x53],
                            '6': [0x6f, 0x1e, 0x55],
                            '8': [0x70, 0x26, 0x56],
                            '10': [0x71, 0x2f, 0x57],
                            '12': [0x72, 0x38, 0x59],
                            '14': [0x75, 0x41, 0x5a],
                            '16': [0x7a, 0x4f, 0x5b]
                        },
                        '9': {
                            '2': [0x6f, 0xb, 0x5c],
                            '4': [0x6d, 0x14, 0x5e],
                            '6': [0x6f, 0x1e, 0x60],
                            '8': [0x6f, 0x25, 0x62],
                            '10': [0x70, 0x2e, 0x63],
                            '12': [0x71, 0x34, 0x64],
                            '14': [0x73, 0x3d, 0x64],
                            '16': [0x76, 0x46, 0x64],
                            '18': [0x7e, 0x5d, 0x64]
                        }
                    }
                },
                'G': {
                    '2.5': {
                        '1': {
                            '2': [0x8f, 0x28, 0xc]
                        },
                        '2': {
                            '2': [0x8d, 0x1a, 0x14],
                            '4': [0x95, 0x3e, 0x15]
                        },
                        '3': {
                            '2': [0x8a, 0x15, 0x1d],
                            '4': [0x92, 0x30, 0x1f],
                            '6': [0x9a, 0x5c, 0x20]
                        },
                        '4': {
                            '2': [0x8a, 0x12, 0x28],
                            '4': [0x8e, 0x27, 0x29],
                            '6': [0x95, 0x43, 0x2b]
                        },
                        '5': {
                            '2': [0x89, 0x10, 0x32],
                            '4': [0x8b, 0x20, 0x34],
                            '6': [0x8e, 0x31, 0x35],
                            '8': [0x95, 0x4b, 0x36]
                        },
                        '6': {
                            '2': [0x87, 0xe, 0x3c],
                            '4': [0x8a, 0x1c, 0x3e],
                            '6': [0x8c, 0x2a, 0x40],
                            '8': [0x90, 0x3a, 0x41],
                            '10': [0x97, 0x58, 0x43]
                        },
                        '7': {
                            '2': [0x86, 0xd, 0x47],
                            '4': [0x88, 0x18, 0x48],
                            '6': [0x8a, 0x24, 0x4a],
                            '8': [0x8d, 0x31, 0x4c],
                            '10': [0x90, 0x42, 0x4e]
                        },
                        '8': {
                            '2': [0x85, 0xc, 0x51],
                            '4': [0x86, 0x16, 0x53],
                            '6': [0x89, 0x21, 0x55],
                            '8': [0x8b, 0x2c, 0x57],
                            '10': [0x8d, 0x38, 0x59],
                            '12': [0x93, 0x4d, 0x5a]
                        },
                        '9': {
                            '2': [0x84, 0xc, 0x5c],
                            '4': [0x85, 0x15, 0x5e],
                            '6': [0x87, 0x20, 0x61],
                            '8': [0x89, 0x2a, 0x62],
                            '10': [0x8d, 0x35, 0x64],
                            '12': [0x90, 0x43, 0x64]
                        }
                    },
                    '5': {
                        '1': {
                            '2': [0x98, 0x2e, 0xc]
                        },
                        '2': {
                            '2': [0x98, 0x1c, 0x14],
                            '4': [0x9c, 0x45, 0x15]
                        },
                        '3': {
                            '2': [0x94, 0x18, 0x1e],
                            '4': [0x9a, 0x37, 0x1f]
                        },
                        '4': {
                            '2': [0x94, 0x14, 0x28],
                            '4': [0x98, 0x2c, 0x29],
                            '6': [0x9e, 0x4e, 0x2b]
                        },
                        '5': {
                            '2': [0x94, 0x11, 0x32],
                            '4': [0x97, 0x24, 0x34],
                            '6': [0x9a, 0x38, 0x35]
                        },
                        '6': {
                            '2': [0x92, 0x10, 0x3c],
                            '4': [0x96, 0x20, 0x3e],
                            '6': [0x98, 0x30, 0x40],
                            '8': [0x9d, 0x46, 0x41]
                        },
                        '7': {
                            '2': [0x92, 0xe, 0x47],
                            '4': [0x94, 0x1b, 0x49],
                            '6': [0x96, 0x28, 0x4a],
                            '8': [0x9a, 0x39, 0x4c],
                            '10': [0xa0, 0x57, 0x4e]
                        },
                        '8': {
                            '2': [0x90, 0xd, 0x51],
                            '4': [0x93, 0x19, 0x53],
                            '6': [0x96, 0x26, 0x56],
                            '8': [0x98, 0x34, 0x57],
                            '10': [0x9c, 0x46, 0x59]
                        },
                        '9': {
                            '2': [0x8f, 0xd, 0x5c],
                            '4': [0x92, 0x18, 0x5f],
                            '6': [0x95, 0x25, 0x61],
                            '8': [0x98, 0x32, 0x63],
                            '10': [0x9c, 0x41, 0x64]
                        }
                    },
                    '7.5': {
                        '1': {
                            '2': [0xa1, 0x32, 0xc]
                        },
                        '2': {
                            '2': [0x9d, 0x1e, 0x14],
                            '4': [0xa3, 0x4c, 0x15]
                        },
                        '3': {
                            '2': [0x9b, 0x19, 0x1e],
                            '4': [0xa1, 0x3c, 0x1f]
                        },
                        '4': {
                            '2': [0x9b, 0x15, 0x28],
                            '4': [0x9e, 0x2f, 0x29],
                            '6': [0xa5, 0x5f, 0x2b]
                        },
                        '5': {
                            '2': [0x9b, 0x12, 0x32],
                            '4': [0x9d, 0x26, 0x34],
                            '6': [0xa0, 0x3e, 0x35]
                        },
                        '6': {
                            '2': [0x98, 0x10, 0x3c],
                            '4': [0x9c, 0x22, 0x3e],
                            '6': [0x9f, 0x34, 0x40],
                            '8': [0xa3, 0x4f, 0x41]
                        },
                        '7': {
                            '2': [0x98, 0xf, 0x47],
                            '4': [0x9a, 0x1d, 0x49],
                            '6': [0x9d, 0x2b, 0x4a],
                            '8': [0xa0, 0x3e, 0x4c]
                        },
                        '8': {
                            '2': [0x98, 0xe, 0x51],
                            '4': [0x9a, 0x1a, 0x53],
                            '6': [0x9c, 0x28, 0x56],
                            '8': [0x9f, 0x37, 0x57],
                            '10': [0xa3, 0x4f, 0x59]
                        },
                        '9': {
                            '2': [0x98, 0xd, 0x5c],
                            '4': [0x9a, 0x19, 0x5f],
                            '6': [0x9c, 0x27, 0x61],
                            '8': [0x9e, 0x35, 0x63],
                            '10': [0xa2, 0x47, 0x64]
                        }
                    },
                    '10': {
                        '1': {
                            '2': [0xa5, 0x35, 0xc]
                        },
                        '2': {
                            '2': [0xa2, 0x20, 0x14],
                            '4': [0xa7, 0x57, 0x16]
                        },
                        '3': {
                            '2': [0xa2, 0x1b, 0x1e],
                            '4': [0xa6, 0x42, 0x1f]
                        },
                        '4': {
                            '2': [0xa1, 0x16, 0x28],
                            '4': [0xa4, 0x32, 0x29]
                        },
                        '5': {
                            '2': [0xa0, 0x13, 0x32],
                            '4': [0xa3, 0x28, 0x34],
                            '6': [0xa6, 0x41, 0x35]
                        },
                        '6': {
                            '2': [0xa0, 0x11, 0x3c],
                            '4': [0xa2, 0x24, 0x3e],
                            '6': [0xa4, 0x37, 0x40],
                            '8': [0xa8, 0x5d, 0x42]
                        },
                        '7': {
                            '2': [0x9f, 0xf, 0x47],
                            '4': [0xa1, 0x1e, 0x49],
                            '6': [0xa2, 0x2e, 0x4b],
                            '8': [0xa5, 0x43, 0x4c]
                        },
                        '8': {
                            '2': [0x9e, 0xe, 0x51],
                            '4': [0x9f, 0x1b, 0x54],
                            '6': [0xa2, 0x2a, 0x56],
                            '8': [0xa4, 0x3a, 0x57],
                            '10': [0xa8, 0x5b, 0x59]
                        },
                        '9': {
                            '2': [0x9d, 0xe, 0x5c],
                            '4': [0x9f, 0x1a, 0x5f],
                            '6': [0xa1, 0x29, 0x61],
                            '8': [0xa3, 0x39, 0x63],
                            '10': [0xa7, 0x50, 0x64]
                        }
                    }
                },
                'BG': {
                    '2.5': {
                        '1': {
                            '2': [0xad, 0x38, 0xc]
                        },
                        '2': {
                            '2': [0xa9, 0x21, 0x14],
                            '4': [0xae, 0x64, 0x15]
                        },
                        '3': {
                            '2': [0xa9, 0x1c, 0x1e],
                            '4': [0xac, 0x47, 0x1f]
                        },
                        '4': {
                            '2': [0xa7, 0x17, 0x28],
                            '4': [0xaa, 0x36, 0x29]
                        },
                        '5': {
                            '2': [0xa6, 0x14, 0x32],
                            '4': [0xa8, 0x2a, 0x34],
                            '6': [0xaa, 0x45, 0x35]
                        },
                        '6': {
                            '2': [0xa5, 0x12, 0x3c],
                            '4': [0xa7, 0x25, 0x3e],
                            '6': [0xa8, 0x39, 0x40]
                        },
                        '7': {
                            '2': [0xa2, 0x10, 0x47],
                            '4': [0xa5, 0x1f, 0x49],
                            '6': [0xa7, 0x2f, 0x4a],
                            '8': [0xa9, 0x48, 0x4c]
                        },
                        '8': {
                            '2': [0xa3, 0xf, 0x51],
                            '4': [0xa3, 0x1d, 0x54],
                            '6': [0xa6, 0x2b, 0x55],
                            '8': [0xa8, 0x3e, 0x57]
                        },
                        '9': {
                            '2': [0xa2, 0xe, 0x5c],
                            '4': [0xa3, 0x1b, 0x5f],
                            '6': [0xa5, 0x2a, 0x61],
                            '8': [0xa7, 0x3c, 0x63],
                            '10': [0xac, 0x5e, 0x64]
                        }
                    },
                    '5': {
                        '1': {
                            '2': [0xb4, 0x3e, 0xc]
                        },
                        '2': {
                            '2': [0xb0, 0x23, 0x14]
                        },
                        '3': {
                            '2': [0xae, 0x1d, 0x1e],
                            '4': [0xb2, 0x4f, 0x1f]
                        },
                        '4': {
                            '2': [0xaf, 0x18, 0x28],
                            '4': [0xb0, 0x38, 0x29]
                        },
                        '5': {
                            '2': [0xad, 0x14, 0x32],
                            '4': [0xae, 0x2b, 0x34],
                            '6': [0xaf, 0x4b, 0x35]
                        },
                        '6': {
                            '2': [0xab, 0x12, 0x3c],
                            '4': [0xad, 0x26, 0x3e],
                            '6': [0xae, 0x3d, 0x40]
                        },
                        '7': {
                            '2': [0xa8, 0x11, 0x47],
                            '4': [0xab, 0x20, 0x49],
                            '6': [0xac, 0x31, 0x4a],
                            '8': [0xae, 0x4f, 0x4c]
                        },
                        '8': {
                            '2': [0xa8, 0xf, 0x51],
                            '4': [0xaa, 0x1d, 0x53],
                            '6': [0xab, 0x2c, 0x55],
                            '8': [0xad, 0x42, 0x57]
                        },
                        '9': {
                            '2': [0xa5, 0xe, 0x5c],
                            '4': [0xa8, 0x1c, 0x5f],
                            '6': [0xaa, 0x2c, 0x61],
                            '8': [0xac, 0x40, 0x63]
                        }
                    },
                    '7.5': {
                        '1': {
                            '2': [0xb9, 0x43, 0xd]
                        },
                        '2': {
                            '2': [0xb7, 0x25, 0x15]
                        },
                        '3': {
                            '2': [0xb4, 0x1f, 0x1e],
                            '4': [0xb5, 0x54, 0x20]
                        },
                        '4': {
                            '2': [0xb4, 0x19, 0x28],
                            '4': [0xb4, 0x39, 0x29]
                        },
                        '5': {
                            '2': [0xb4, 0x15, 0x32],
                            '4': [0xb4, 0x2b, 0x33],
                            '6': [0xb4, 0x50, 0x35]
                        },
                        '6': {
                            '2': [0xaf, 0x12, 0x3c],
                            '4': [0xb2, 0x26, 0x3e],
                            '6': [0xb3, 0x3e, 0x40]
                        },
                        '7': {
                            '2': [0xaf, 0x10, 0x46],
                            '4': [0xb1, 0x20, 0x48],
                            '6': [0xb1, 0x32, 0x4a],
                            '8': [0xb2, 0x52, 0x4c]
                        },
                        '8': {
                            '2': [0xb0, 0xe, 0x51],
                            '4': [0xaf, 0x1d, 0x53],
                            '6': [0xb1, 0x2e, 0x55],
                            '8': [0xb2, 0x45, 0x57]
                        },
                        '9': {
                            '2': [0xae, 0xd, 0x5c],
                            '4': [0xaf, 0x1c, 0x5e],
                            '6': [0xb0, 0x2d, 0x61],
                            '8': [0xb1, 0x44, 0x63]
                        }
                    },
                    '10': {
                        '1': {
                            '2': [0xbd, 0x48, 0xe]
                        },
                        '2': {
                            '2': [0xbb, 0x29, 0x15]
                        },
                        '3': {
                            '2': [0xbc, 0x21, 0x1f],
                            '4': [0xba, 0x55, 0x22]
                        },
                        '4': {
                            '2': [0xb8, 0x19, 0x28],
                            '4': [0xb9, 0x3a, 0x2b]
                        },
                        '5': {
                            '2': [0xb8, 0x15, 0x32],
                            '4': [0xb8, 0x2d, 0x35],
                            '6': [0xb8, 0x52, 0x38]
                        },
                        '6': {
                            '2': [0xb6, 0x12, 0x3c],
                            '4': [0xb7, 0x26, 0x3f],
                            '6': [0xb7, 0x40, 0x42]
                        },
                        '7': {
                            '2': [0xb6, 0xf, 0x47],
                            '4': [0xb5, 0x20, 0x49],
                            '6': [0xb7, 0x33, 0x4c],
                            '8': [0xb6, 0x55, 0x4f]
                        },
                        '8': {
                            '2': [0xb4, 0xd, 0x51],
                            '4': [0xb4, 0x1d, 0x53],
                            '6': [0xb5, 0x2e, 0x56],
                            '8': [0xb6, 0x47, 0x59]
                        },
                        '9': {
                            '2': [0xb2, 0xd, 0x5c],
                            '4': [0xb4, 0x1c, 0x5e],
                            '6': [0xb5, 0x2d, 0x61]
                        }
                    }
                },
                'B': {
                    '2.5': {
                        '1': {
                            '2': [0xbf, 0x48, 0xe]
                        },
                        '2': {
                            '2': [0xc0, 0x2a, 0x16]
                        },
                        '3': {
                            '2': [0xc0, 0x23, 0x20],
                            '4': [0xbd, 0x54, 0x24]
                        },
                        '4': {
                            '2': [0xbe, 0x1b, 0x29],
                            '4': [0xbd, 0x3a, 0x2d]
                        },
                        '5': {
                            '2': [0xbc, 0x15, 0x33],
                            '4': [0xbd, 0x2d, 0x37],
                            '6': [0xbb, 0x4e, 0x3a]
                        },
                        '6': {
                            '2': [0xba, 0x12, 0x3d],
                            '4': [0xbb, 0x25, 0x41],
                            '6': [0xbb, 0x3f, 0x45]
                        },
                        '7': {
                            '2': [0xba, 0xf, 0x47],
                            '4': [0xba, 0x21, 0x4b],
                            '6': [0xba, 0x33, 0x4e],
                            '8': [0xba, 0x51, 0x52]
                        },
                        '8': {
                            '2': [0xba, 0xd, 0x52],
                            '4': [0xba, 0x1e, 0x55],
                            '6': [0xba, 0x2f, 0x59],
                            '8': [0xba, 0x47, 0x5d]
                        },
                        '9': {
                            '2': [0xb8, 0xc, 0x5c],
                            '4': [0xb9, 0x1d, 0x61]
                        }
                    },
                    '5': {
                        '1': {
                            '2': [0xc4, 0x4a, 0xf]
                        },
                        '2': {
                            '2': [0xc4, 0x2a, 0x17]
                        },
                        '3': {
                            '2': [0xc2, 0x22, 0x20],
                            '4': [0xc0, 0x4e, 0x25]
                        },
                        '4': {
                            '2': [0xc2, 0x1a, 0x2a],
                            '4': [0xc1, 0x37, 0x2e]
                        },
                        '5': {
                            '2': [0xc0, 0x15, 0x34],
                            '4': [0xc1, 0x2b, 0x38],
                            '6': [0xc0, 0x47, 0x3d]
                        },
                        '6': {
                            '2': [0xc0, 0x11, 0x3e],
                            '4': [0xbf, 0x24, 0x42],
                            '6': [0xc0, 0x3a, 0x47]
                        },
                        '7': {
                            '2': [0xc0, 0xf, 0x48],
                            '4': [0xc0, 0x20, 0x4c],
                            '6': [0xbf, 0x31, 0x51],
                            '8': [0xbe, 0x48, 0x55]
                        },
                        '8': {
                            '2': [0xbf, 0xc, 0x52],
                            '4': [0xbf, 0x1d, 0x57],
                            '6': [0xbf, 0x2d, 0x5c],
                            '8': [0xbe, 0x43, 0x61]
                        },
                        '9': {
                            '2': [0xbe, 0xc, 0x5d],
                            '4': [0xbf, 0x1c, 0x63]
                        }
                    },
                    '7.5': {
                        '1': {
                            '2': [0xc7, 0x46, 0xf]
                        },
                        '2': {
                            '2': [0xc7, 0x29, 0x17],
                            '4': [0xc3, 0x5e, 0x1c]
                        },
                        '3': {
                            '2': [0xc7, 0x23, 0x21],
                            '4': [0xc5, 0x46, 0x26]
                        },
                        '4': {
                            '2': [0xc7, 0x19, 0x2a],
                            '4': [0xc6, 0x32, 0x2f],
                            '6': [0xc3, 0x52, 0x34]
                        },
                        '5': {
                            '2': [0xc5, 0x14, 0x34],
                            '4': [0xc5, 0x28, 0x39],
                            '6': [0xc4, 0x3e, 0x3e]
                        },
                        '6': {
                            '2': [0xc5, 0x10, 0x3e],
                            '4': [0xc5, 0x21, 0x43],
                            '6': [0xc4, 0x34, 0x48],
                            '8': [0xc3, 0x4c, 0x4d]
                        },
                        '7': {
                            '2': [0xc4, 0xd, 0x48],
                            '4': [0xc3, 0x1e, 0x4d],
                            '6': [0xc4, 0x2d, 0x52],
                            '8': [0xc3, 0x40, 0x58]
                        },
                        '8': {
                            '2': [0xc4, 0xb, 0x53],
                            '4': [0xc3, 0x1b, 0x58],
                            '6': [0xc3, 0x2a, 0x5d],
                            '8': [0xc2, 0x3e, 0x64]
                        },
                        '9': {
                            '2': [0xc2, 0xa, 0x5d],
                            '4': [0xc2, 0x1b, 0x64]
                        }
                    },
                    '10': {
                        '1': {
                            '2': [0xce, 0x40, 0x10]
                        },
                        '2': {
                            '2': [0xce, 0x28, 0x18],
                            '4': [0xc9, 0x4f, 0x1d]
                        },
                        '3': {
                            '2': [0xcb, 0x20, 0x21],
                            '4': [0xcb, 0x3e, 0x27]
                        },
                        '4': {
                            '2': [0xcd, 0x17, 0x2b],
                            '4': [0xcb, 0x2e, 0x30],
                            '6': [0xc9, 0x45, 0x35]
                        },
                        '5': {
                            '2': [0xcc, 0x12, 0x34],
                            '4': [0xca, 0x25, 0x3a],
                            '6': [0xc9, 0x37, 0x3f],
                            '8': [0xc6, 0x50, 0x44]
                        },
                        '6': {
                            '2': [0xca, 0xf, 0x3e],
                            '4': [0xc9, 0x1e, 0x43],
                            '6': [0xc9, 0x2f, 0x49],
                            '8': [0xc7, 0x40, 0x4e]
                        },
                        '7': {
                            '2': [0xc8, 0xc, 0x48],
                            '4': [0xca, 0x1b, 0x4e],
                            '6': [0xc9, 0x29, 0x53],
                            '8': [0xc8, 0x38, 0x59],
                            '10': [0xc5, 0x4e, 0x5f]
                        },
                        '8': {
                            '2': [0xc9, 0xa, 0x53],
                            '4': [0xca, 0x19, 0x59],
                            '6': [0xc9, 0x26, 0x5f],
                            '8': [0xc6, 0x36, 0x64]
                        },
                        '9': {
                            '2': [0xc7, 0xa, 0x5e],
                            '4': [0xc6, 0x18, 0x64]
                        }
                    }
                },
                'PB': {
                    '2.5': {
                        '1': {
                            '2': [0xd2, 0x39, 0x10]
                        },
                        '2': {
                            '2': [0xd5, 0x24, 0x18],
                            '4': [0xd0, 0x42, 0x1d]
                        },
                        '3': {
                            '2': [0xd2, 0x1d, 0x22],
                            '4': [0xd0, 0x35, 0x27],
                            '6': [0xce, 0x4e, 0x2c]
                        },
                        '4': {
                            '2': [0xd4, 0x15, 0x2b],
                            '4': [0xd0, 0x28, 0x30],
                            '6': [0xd0, 0x39, 0x35],
                            '8': [0xcc, 0x51, 0x3b]
                        },
                        '5': {
                            '2': [0xd3, 0x10, 0x35],
                            '4': [0xd0, 0x20, 0x3a],
                            '6': [0xcf, 0x2f, 0x3f],
                            '8': [0xce, 0x3f, 0x45],
                            '10': [0xca, 0x55, 0x4a]
                        },
                        '6': {
                            '2': [0xd1, 0xd, 0x3f],
                            '4': [0xd0, 0x1a, 0x44],
                            '6': [0xd0, 0x28, 0x4a],
                            '8': [0xcf, 0x35, 0x50],
                            '10': [0xcd, 0x44, 0x55]
                        },
                        '7': {
                            '2': [0xd0, 0xb, 0x49],
                            '4': [0xd0, 0x17, 0x4e],
                            '6': [0xd0, 0x23, 0x54],
                            '8': [0xcf, 0x30, 0x5a],
                            '10': [0xcd, 0x3e, 0x61]
                        },
                        '8': {
                            '2': [0xd2, 0x9, 0x53],
                            '4': [0xd0, 0x15, 0x59],
                            '6': [0xcf, 0x21, 0x60]
                        },
                        '9': {
                            '2': [0xcf, 0x8, 0x5e]
                        }
                    },
                    '5': {
                        '1': {
                            '2': [0xdc, 0x30, 0x10],
                            '4': [0xd6, 0x4f, 0x15]
                        },
                        '2': {
                            '2': [0xde, 0x1f, 0x18],
                            '4': [0xd9, 0x37, 0x1d],
                            '6': [0xd4, 0x50, 0x22]
                        },
                        '3': {
                            '2': [0xdb, 0x1a, 0x22],
                            '4': [0xd9, 0x2d, 0x28],
                            '6': [0xd6, 0x3f, 0x2d],
                            '8': [0xd2, 0x53, 0x31]
                        },
                        '4': {
                            '2': [0xde, 0x12, 0x2b],
                            '4': [0xd9, 0x22, 0x31],
                            '6': [0xd7, 0x30, 0x36],
                            '8': [0xd5, 0x3f, 0x3b],
                            '10': [0xd2, 0x50, 0x40]
                        },
                        '5': {
                            '2': [0xdd, 0xd, 0x35],
                            '4': [0xd9, 0x1c, 0x3a],
                            '6': [0xd8, 0x28, 0x40],
                            '8': [0xd6, 0x34, 0x45],
                            '10': [0xd4, 0x41, 0x4b],
                            '12': [0xd0, 0x51, 0x50]
                        },
                        '6': {
                            '2': [0xd9, 0xb, 0x3f],
                            '4': [0xd8, 0x17, 0x44],
                            '6': [0xd8, 0x22, 0x4a],
                            '8': [0xd6, 0x2d, 0x50],
                            '10': [0xd5, 0x38, 0x55],
                            '12': [0xd2, 0x45, 0x5c],
                            '14': [0xce, 0x5a, 0x62]
                        },
                        '7': {
                            '2': [0xd8, 0x9, 0x49],
                            '4': [0xd7, 0x14, 0x4e],
                            '6': [0xd6, 0x1f, 0x54],
                            '8': [0xd6, 0x28, 0x5a],
                            '10': [0xd5, 0x33, 0x61]
                        },
                        '8': {
                            '2': [0xd7, 0x7, 0x53],
                            '4': [0xd6, 0x12, 0x59],
                            '6': [0xd6, 0x1d, 0x60]
                        },
                        '9': {
                            '2': [0xd7, 0x7, 0x5e]
                        }
                    },
                    '7.5': {
                        '1': {
                            '2': [0xf0, 0x25, 0x10],
                            '4': [0xec, 0x37, 0x15],
                            '6': [0xee, 0x42, 0x19],
                            '8': [0xf4, 0x4a, 0x1d],
                            '10': [0xf9, 0x53, 0x20],
                            '12': [0xff, 0x5e, 0x24]
                        },
                        '2': {
                            '2': [0xec, 0x1a, 0x19],
                            '4': [0xea, 0x2a, 0x1d],
                            '6': [0xea, 0x35, 0x22],
                            '8': [0xeb, 0x3e, 0x27],
                            '10': [0xec, 0x43, 0x2b],
                            '12': [0xf0, 0x46, 0x2f],
                            '14': [0xf4, 0x4d, 0x33],
                            '16': [0xf9, 0x54, 0x37],
                            '18': [0xff, 0x5e, 0x3b]
                        },
                        '3': {
                            '2': [0xec, 0x14, 0x22],
                            '4': [0xe9, 0x23, 0x28],
                            '6': [0xe8, 0x2e, 0x2d],
                            '8': [0xe8, 0x36, 0x31],
                            '10': [0xe8, 0x3d, 0x36],
                            '12': [0xe9, 0x42, 0x3b],
                            '14': [0xeb, 0x45, 0x3f],
                            '16': [0xee, 0x47, 0x44],
                            '18': [0xf1, 0x4a, 0x48],
                            '20': [0xf4, 0x4e, 0x4c],
                            '22': [0xf8, 0x54, 0x50],
                            '24': [0xfd, 0x5d, 0x54]
                        },
                        '4': {
                            '2': [0xe9, 0x10, 0x2b],
                            '4': [0xe8, 0x1b, 0x31],
                            '6': [0xe7, 0x24, 0x36],
                            '8': [0xe7, 0x2d, 0x3b],
                            '10': [0xe6, 0x35, 0x40],
                            '12': [0xe5, 0x3b, 0x45],
                            '14': [0xe6, 0x40, 0x4a],
                            '16': [0xe7, 0x44, 0x4f],
                            '18': [0xe8, 0x47, 0x54],
                            '20': [0xeb, 0x49, 0x59],
                            '22': [0xed, 0x49, 0x5d],
                            '24': [0xf0, 0x4a, 0x62],
                            '26': [0xf2, 0x4e, 0x64]
                        },
                        '5': {
                            '2': [0xe8, 0xb, 0x35],
                            '4': [0xe5, 0x16, 0x3a],
                            '6': [0xe5, 0x1f, 0x40],
                            '8': [0xe6, 0x26, 0x45],
                            '10': [0xe5, 0x2d, 0x4a],
                            '12': [0xe4, 0x34, 0x50],
                            '14': [0xe4, 0x3a, 0x55],
                            '16': [0xe3, 0x40, 0x5a],
                            '18': [0xe4, 0x44, 0x60],
                            '20': [0xe4, 0x47, 0x64]
                        },
                        '6': {
                            '2': [0xe7, 0x9, 0x3f],
                            '4': [0xe5, 0x12, 0x44],
                            '6': [0xe5, 0x1b, 0x4a],
                            '8': [0xe4, 0x22, 0x4f],
                            '10': [0xe4, 0x29, 0x55],
                            '12': [0xe4, 0x30, 0x5b],
                            '14': [0xe3, 0x36, 0x61]
                        },
                        '7': {
                            '2': [0xe4, 0x8, 0x49],
                            '4': [0xe5, 0x10, 0x4e],
                            '6': [0xe3, 0x18, 0x55],
                            '8': [0xe3, 0x1f, 0x5a],
                            '10': [0xe4, 0x26, 0x61]
                        },
                        '8': {
                            '2': [0xe3, 0x6, 0x53],
                            '4': [0xe4, 0xf, 0x59],
                            '6': [0xe2, 0x17, 0x60]
                        },
                        '9': {
                            '2': [0xe3, 0x5, 0x5e]
                        }
                    },
                    '10': {
                        '1': {
                            '2': [0x101, 0x27, 0x10],
                            '4': [0x104, 0x38, 0x14],
                            '6': [0x105, 0x43, 0x18],
                            '8': [0x108, 0x4e, 0x1b],
                            '10': [0x10c, 0x5c, 0x1e]
                        },
                        '2': {
                            '2': [0xff, 0x19, 0x18],
                            '4': [0xfe, 0x28, 0x1d],
                            '6': [0x100, 0x32, 0x21],
                            '8': [0x102, 0x3c, 0x25],
                            '10': [0x104, 0x44, 0x29],
                            '12': [0x107, 0x4c, 0x2d],
                            '14': [0x10a, 0x55, 0x30]
                        },
                        '3': {
                            '2': [0xfd, 0x14, 0x22],
                            '4': [0xfa, 0x20, 0x27],
                            '6': [0xfe, 0x29, 0x2b],
                            '8': [0xfe, 0x31, 0x30],
                            '10': [0x100, 0x39, 0x34],
                            '12': [0x101, 0x3e, 0x38],
                            '14': [0x104, 0x45, 0x3d],
                            '16': [0x106, 0x4b, 0x41],
                            '18': [0x109, 0x52, 0x44],
                            '20': [0x10c, 0x5b, 0x48]
                        },
                        '4': {
                            '2': [0xfa, 0xf, 0x2b],
                            '4': [0xf9, 0x19, 0x30],
                            '6': [0xfa, 0x21, 0x35],
                            '8': [0xfc, 0x28, 0x3a],
                            '10': [0xfb, 0x2e, 0x3e],
                            '12': [0xfd, 0x34, 0x43],
                            '14': [0xfe, 0x39, 0x47],
                            '16': [0x100, 0x3e, 0x4b],
                            '18': [0x102, 0x43, 0x50],
                            '20': [0x104, 0x48, 0x54],
                            '22': [0x106, 0x4c, 0x57],
                            '24': [0x108, 0x52, 0x5b],
                            '26': [0x10b, 0x5a, 0x5f]
                        },
                        '5': {
                            '2': [0xf8, 0xb, 0x35],
                            '4': [0xf6, 0x12, 0x3a],
                            '6': [0xf9, 0x1b, 0x3f],
                            '8': [0xf9, 0x22, 0x44],
                            '10': [0xf9, 0x27, 0x48],
                            '12': [0xfa, 0x2d, 0x4e],
                            '14': [0xfb, 0x32, 0x53],
                            '16': [0xfc, 0x36, 0x57],
                            '18': [0xfd, 0x3a, 0x5c],
                            '20': [0xfe, 0x3e, 0x60],
                            '22': [0x101, 0x42, 0x64]
                        },
                        '6': {
                            '2': [0xf4, 0x8, 0x3f],
                            '4': [0xf6, 0x10, 0x44],
                            '6': [0xf5, 0x17, 0x49],
                            '8': [0xf6, 0x1c, 0x4e],
                            '10': [0xf6, 0x22, 0x53],
                            '12': [0xf7, 0x27, 0x59],
                            '14': [0xf8, 0x2c, 0x5e],
                            '16': [0xfa, 0x31, 0x64]
                        },
                        '7': {
                            '2': [0xf4, 0x6, 0x48],
                            '4': [0xf2, 0xd, 0x4e],
                            '6': [0xf4, 0x14, 0x54],
                            '8': [0xf3, 0x1a, 0x59],
                            '10': [0xf5, 0x20, 0x60],
                            '12': [0xf6, 0x24, 0x64]
                        },
                        '8': {
                            '2': [0xf5, 0x5, 0x53],
                            '4': [0xf2, 0xb, 0x59],
                            '6': [0xf3, 0x13, 0x5f],
                            '8': [0xf3, 0x17, 0x64]
                        },
                        '9': {
                            '2': [0xf5, 0x4, 0x5d],
                            '4': [0xf0, 0xa, 0x64]
                        }
                    }
                },
                'P': {
                    '2.5': {
                        '1': {
                            '2': [0x10f, 0x28, 0x10],
                            '4': [0x112, 0x3a, 0x14],
                            '6': [0x114, 0x46, 0x16],
                            '8': [0x116, 0x56, 0x19]
                        },
                        '2': {
                            '2': [0x10e, 0x19, 0x18],
                            '4': [0x10c, 0x28, 0x1c],
                            '6': [0x10e, 0x32, 0x1f],
                            '8': [0x111, 0x3e, 0x23],
                            '10': [0x113, 0x48, 0x27],
                            '12': [0x116, 0x53, 0x2a]
                        },
                        '3': {
                            '2': [0x10a, 0x14, 0x22],
                            '4': [0x10b, 0x21, 0x26],
                            '6': [0x10d, 0x2b, 0x2a],
                            '8': [0x10e, 0x33, 0x2e],
                            '10': [0x110, 0x3b, 0x32],
                            '12': [0x111, 0x42, 0x36],
                            '14': [0x113, 0x4a, 0x39],
                            '16': [0x115, 0x53, 0x3d],
                            '18': [0x118, 0x61, 0x40]
                        },
                        '4': {
                            '2': [0x108, 0xf, 0x2b],
                            '4': [0x109, 0x19, 0x2f],
                            '6': [0x109, 0x21, 0x34],
                            '8': [0x10b, 0x28, 0x38],
                            '10': [0x10c, 0x2f, 0x3c],
                            '12': [0x10e, 0x35, 0x40],
                            '14': [0x10f, 0x3b, 0x44],
                            '16': [0x111, 0x41, 0x47],
                            '18': [0x112, 0x47, 0x4b],
                            '20': [0x114, 0x4e, 0x4f],
                            '22': [0x115, 0x55, 0x52]
                        },
                        '5': {
                            '2': [0x105, 0xa, 0x34],
                            '4': [0x106, 0x13, 0x39],
                            '6': [0x107, 0x1b, 0x3e],
                            '8': [0x109, 0x23, 0x43],
                            '10': [0x10a, 0x28, 0x46],
                            '12': [0x10b, 0x2d, 0x4b],
                            '14': [0x10d, 0x32, 0x4f],
                            '16': [0x10e, 0x38, 0x53],
                            '18': [0x10f, 0x3c, 0x57],
                            '20': [0x110, 0x41, 0x5b],
                            '22': [0x111, 0x46, 0x5f],
                            '24': [0x113, 0x4c, 0x63],
                            '26': [0x116, 0x52, 0x64]
                        },
                        '6': {
                            '2': [0x102, 0x8, 0x3e],
                            '4': [0x105, 0x10, 0x43],
                            '6': [0x104, 0x17, 0x48],
                            '8': [0x107, 0x1d, 0x4d],
                            '10': [0x107, 0x23, 0x51],
                            '12': [0x109, 0x28, 0x56],
                            '14': [0x10a, 0x2d, 0x5a],
                            '16': [0x10c, 0x32, 0x5f],
                            '18': [0x10d, 0x36, 0x63]
                        },
                        '7': {
                            '2': [0xfe, 0x6, 0x48],
                            '4': [0x103, 0xe, 0x4e],
                            '6': [0x104, 0x14, 0x52],
                            '8': [0x105, 0x1a, 0x57],
                            '10': [0x106, 0x20, 0x5d],
                            '12': [0x107, 0x25, 0x62]
                        },
                        '8': {
                            '2': [0x102, 0x4, 0x52],
                            '4': [0x101, 0xc, 0x58],
                            '6': [0x102, 0x12, 0x5e],
                            '8': [0x103, 0x18, 0x64]
                        },
                        '9': {
                            '2': [0x100, 0x4, 0x5d],
                            '4': [0x100, 0xb, 0x64]
                        }
                    },
                    '5': {
                        '1': {
                            '2': [0x11a, 0x29, 0x10],
                            '4': [0x11b, 0x3b, 0x13],
                            '6': [0x11d, 0x4b, 0x15],
                            '8': [0x11f, 0x5d, 0x18]
                        },
                        '2': {
                            '2': [0x117, 0x18, 0x17],
                            '4': [0x11a, 0x28, 0x1b],
                            '6': [0x11b, 0x32, 0x1e],
                            '8': [0x11d, 0x40, 0x22],
                            '10': [0x11d, 0x4b, 0x25],
                            '12': [0x11f, 0x5b, 0x28]
                        },
                        '3': {
                            '2': [0x117, 0x14, 0x21],
                            '4': [0x119, 0x21, 0x25],
                            '6': [0x119, 0x2a, 0x29],
                            '8': [0x11a, 0x33, 0x2c],
                            '10': [0x11c, 0x3c, 0x30],
                            '12': [0x11d, 0x45, 0x33],
                            '14': [0x11e, 0x4f, 0x36],
                            '16': [0x120, 0x5e, 0x3a]
                        },
                        '4': {
                            '2': [0x118, 0xd, 0x2a],
                            '4': [0x116, 0x18, 0x2f],
                            '6': [0x118, 0x21, 0x32],
                            '8': [0x118, 0x28, 0x36],
                            '10': [0x119, 0x2f, 0x3a],
                            '12': [0x11a, 0x36, 0x3d],
                            '14': [0x11b, 0x3d, 0x41],
                            '16': [0x11c, 0x44, 0x44],
                            '18': [0x11d, 0x4c, 0x48],
                            '20': [0x11e, 0x56, 0x4b]
                        },
                        '5': {
                            '2': [0x114, 0x9, 0x34],
                            '4': [0x115, 0x12, 0x38],
                            '6': [0x116, 0x1b, 0x3c],
                            '8': [0x117, 0x21, 0x40],
                            '10': [0x117, 0x28, 0x44],
                            '12': [0x118, 0x2e, 0x48],
                            '14': [0x119, 0x34, 0x4c],
                            '16': [0x11a, 0x39, 0x4f],
                            '18': [0x11b, 0x3e, 0x53],
                            '20': [0x11c, 0x44, 0x56],
                            '22': [0x11c, 0x4b, 0x5a],
                            '24': [0x11e, 0x53, 0x5e],
                            '26': [0x120, 0x63, 0x61]
                        },
                        '6': {
                            '2': [0x114, 0x8, 0x3e],
                            '4': [0x113, 0xf, 0x42],
                            '6': [0x115, 0x17, 0x46],
                            '8': [0x115, 0x1c, 0x4a],
                            '10': [0x116, 0x23, 0x4f],
                            '12': [0x116, 0x28, 0x53],
                            '14': [0x117, 0x2d, 0x57],
                            '16': [0x118, 0x32, 0x5b],
                            '18': [0x118, 0x37, 0x5f],
                            '20': [0x119, 0x3c, 0x63]
                        },
                        '7': {
                            '2': [0x113, 0x6, 0x48],
                            '4': [0x112, 0xd, 0x4c],
                            '6': [0x113, 0x13, 0x51],
                            '8': [0x113, 0x19, 0x55],
                            '10': [0x114, 0x1f, 0x5a],
                            '12': [0x115, 0x24, 0x5e],
                            '14': [0x116, 0x29, 0x63]
                        },
                        '8': {
                            '2': [0x10e, 0x4, 0x52],
                            '4': [0x110, 0xb, 0x57],
                            '6': [0x110, 0x12, 0x5c],
                            '8': [0x112, 0x18, 0x61],
                            '10': [0x116, 0x1b, 0x64]
                        },
                        '9': {
                            '2': [0x107, 0x4, 0x5d],
                            '4': [0x10c, 0xb, 0x63]
                        }
                    },
                    '7.5': {
                        '1': {
                            '2': [0x124, 0x28, 0xf],
                            '4': [0x125, 0x3b, 0x12],
                            '6': [0x126, 0x4d, 0x14]
                        },
                        '2': {
                            '2': [0x123, 0x18, 0x17],
                            '4': [0x127, 0x26, 0x1a],
                            '6': [0x127, 0x33, 0x1d],
                            '8': [0x126, 0x42, 0x20],
                            '10': [0x127, 0x50, 0x23]
                        },
                        '3': {
                            '2': [0x128, 0x13, 0x20],
                            '4': [0x127, 0x1f, 0x24],
                            '6': [0x127, 0x2a, 0x27],
                            '8': [0x127, 0x35, 0x2a],
                            '10': [0x127, 0x3e, 0x2d],
                            '12': [0x127, 0x49, 0x31],
                            '14': [0x127, 0x58, 0x34]
                        },
                        '4': {
                            '2': [0x12c, 0xd, 0x29],
                            '4': [0x127, 0x17, 0x2d],
                            '6': [0x129, 0x20, 0x30],
                            '8': [0x128, 0x28, 0x33],
                            '10': [0x128, 0x2f, 0x36],
                            '12': [0x128, 0x37, 0x3a],
                            '14': [0x128, 0x3f, 0x3d],
                            '16': [0x128, 0x49, 0x40],
                            '18': [0x128, 0x54, 0x43]
                        },
                        '5': {
                            '2': [0x12c, 0x9, 0x33],
                            '4': [0x129, 0x11, 0x36],
                            '6': [0x12a, 0x1a, 0x3a],
                            '8': [0x129, 0x21, 0x3d],
                            '10': [0x129, 0x27, 0x41],
                            '12': [0x129, 0x2e, 0x44],
                            '14': [0x129, 0x34, 0x47],
                            '16': [0x129, 0x3a, 0x4a],
                            '18': [0x128, 0x42, 0x4e],
                            '20': [0x129, 0x49, 0x51],
                            '22': [0x129, 0x55, 0x54]
                        },
                        '6': {
                            '2': [0x12c, 0x7, 0x3d],
                            '4': [0x12c, 0xd, 0x40],
                            '6': [0x12a, 0x15, 0x44],
                            '8': [0x12a, 0x1b, 0x47],
                            '10': [0x12a, 0x21, 0x4b],
                            '12': [0x12a, 0x27, 0x4e],
                            '14': [0x12a, 0x2d, 0x51],
                            '16': [0x12a, 0x32, 0x55],
                            '18': [0x129, 0x38, 0x58],
                            '20': [0x129, 0x3f, 0x5c],
                            '22': [0x129, 0x47, 0x60],
                            '24': [0x129, 0x4f, 0x63]
                        },
                        '7': {
                            '2': [0x131, 0x6, 0x47],
                            '4': [0x12e, 0xc, 0x4b],
                            '6': [0x12c, 0x11, 0x4e],
                            '8': [0x12c, 0x17, 0x51],
                            '10': [0x12b, 0x1e, 0x55],
                            '12': [0x12b, 0x23, 0x59],
                            '14': [0x12a, 0x28, 0x5c],
                            '16': [0x12a, 0x2d, 0x60],
                            '18': [0x12b, 0x33, 0x64]
                        },
                        '8': {
                            '2': [0x12c, 0x4, 0x51],
                            '4': [0x131, 0xa, 0x55],
                            '6': [0x12d, 0xf, 0x59],
                            '8': [0x12d, 0x16, 0x5d],
                            '10': [0x12c, 0x1b, 0x61],
                            '12': [0x12c, 0x20, 0x64]
                        },
                        '9': {
                            '2': [0x132, 0x3, 0x5c],
                            '4': [0x130, 0xa, 0x61],
                            '6': [0x12c, 0xf, 0x64]
                        }
                    },
                    '10': {
                        '1': {
                            '2': [0x12c, 0x29, 0xf],
                            '4': [0x12e, 0x3c, 0x12],
                            '6': [0x12c, 0x4e, 0x14]
                        },
                        '2': {
                            '2': [0x134, 0x18, 0x17],
                            '4': [0x130, 0x28, 0x1a],
                            '6': [0x130, 0x34, 0x1d],
                            '8': [0x130, 0x44, 0x20],
                            '10': [0x12f, 0x55, 0x22]
                        },
                        '3': {
                            '2': [0x139, 0x15, 0x21],
                            '4': [0x135, 0x22, 0x24],
                            '6': [0x133, 0x2d, 0x28],
                            '8': [0x133, 0x38, 0x2b],
                            '10': [0x132, 0x42, 0x2e],
                            '12': [0x131, 0x51, 0x31]
                        },
                        '4': {
                            '2': [0x13a, 0xf, 0x2a],
                            '4': [0x139, 0x1a, 0x2e],
                            '6': [0x137, 0x23, 0x32],
                            '8': [0x137, 0x2c, 0x35],
                            '10': [0x135, 0x34, 0x38],
                            '12': [0x134, 0x3b, 0x3b],
                            '14': [0x134, 0x44, 0x3e],
                            '16': [0x133, 0x4f, 0x41]
                        },
                        '5': {
                            '2': [0x13d, 0xa, 0x34],
                            '4': [0x13a, 0x14, 0x38],
                            '6': [0x13a, 0x1d, 0x3c],
                            '8': [0x139, 0x25, 0x40],
                            '10': [0x137, 0x2c, 0x43],
                            '12': [0x137, 0x32, 0x46],
                            '14': [0x136, 0x39, 0x4a],
                            '16': [0x135, 0x40, 0x4d],
                            '18': [0x134, 0x48, 0x50],
                            '20': [0x134, 0x53, 0x54]
                        },
                        '6': {
                            '2': [0x13d, 0x8, 0x3e],
                            '4': [0x13b, 0x10, 0x42],
                            '6': [0x13a, 0x19, 0x46],
                            '8': [0x13a, 0x1f, 0x4a],
                            '10': [0x139, 0x25, 0x4e],
                            '12': [0x138, 0x2b, 0x51],
                            '14': [0x138, 0x32, 0x55],
                            '16': [0x137, 0x37, 0x59],
                            '18': [0x136, 0x3d, 0x5c],
                            '20': [0x135, 0x45, 0x60],
                            '22': [0x134, 0x4d, 0x63],
                            '24': [0x132, 0x58, 0x64]
                        },
                        '7': {
                            '2': [0x143, 0x7, 0x48],
                            '4': [0x13e, 0xe, 0x4c],
                            '6': [0x13d, 0x15, 0x51],
                            '8': [0x13c, 0x1c, 0x55],
                            '10': [0x13a, 0x22, 0x59],
                            '12': [0x13a, 0x27, 0x5c],
                            '14': [0x139, 0x2d, 0x61],
                            '16': [0x137, 0x32, 0x64],
                            '18': [0x133, 0x36, 0x64],
                            '20': [0x12f, 0x3b, 0x64],
                            '22': [0x12c, 0x41, 0x64]
                        },
                        '8': {
                            '2': [0x141, 0x5, 0x52],
                            '4': [0x13f, 0xc, 0x57],
                            '6': [0x13d, 0x13, 0x5b],
                            '8': [0x13c, 0x1a, 0x60],
                            '10': [0x13a, 0x1e, 0x64],
                            '12': [0x133, 0x21, 0x64],
                            '14': [0x12d, 0x25, 0x64]
                        },
                        '9': {
                            '2': [0x144, 0x4, 0x5c],
                            '4': [0x141, 0xc, 0x62],
                            '6': [0x135, 0xf, 0x64]
                        }
                    }
                }
            };
        },
        this;
}