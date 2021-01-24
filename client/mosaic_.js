FlowRouter.template('/mosaic_', 'mosaic_');

Template.mosaic_.onRendered(function() {
    // Filters
    function mosaic(ctx, image) {
        // Dimensions of each tile
        var tileWidth = 20;
        var tileHeight = 20;

        // Number of mosaic tiles
        var numTileRows = image.height / tileHeight;
        var numTileCols = image.width / tileWidth;
        var d = image.data;
        //function for finding the average color
        function averageColor(row, column) {
            var blockSize = 1, // we can set how many pixels to skip

                data, width, height,
                i = -4,
                length,
                rgb = {
                    r: 0,
                    g: 0,
                    b: 0
                },
                count = 0;

            try {
                data = ctx.getImageData(column * tileWidth, row * tileHeight, tileHeight, tileWidth);
            } catch (e) {
                alert('Not happening this time!');
                return rgb;
            }

            length = data.data.length;

            while ((i += blockSize * 4) < length) {
                ++count;
                rgb.r += data.data[i];
                rgb.g += data.data[i + 1];
                rgb.b += data.data[i + 2];
            }

            // ~~ used to floor values
            rgb.r = ~~(rgb.r / count);
            rgb.g = ~~(rgb.g / count);
            rgb.b = ~~(rgb.b / count);

            return rgb;
        }

        // Loop through each tile
        for (var r = 0; r < numTileRows; r++) {
            for (var c = 0; c < numTileCols; c++) {
                // Set the pixel values for each tile
                var rgb = averageColor(r, c)
                var red = rgb.r;
                var green = rgb.g;
                var blue = rgb.b;

                // Loop through each tile pixel
                for (var tr = 0; tr < tileHeight; tr++) {
                    for (var tc = 0; tc < tileWidth; tc++) {

                        // Calculate the true position of the tile pixel
                        var trueRow = (r * tileHeight) + tr;
                        var trueCol = (c * tileWidth) + tc;

                        // Calculate the position of the current pixel in the array
                        var pos = (trueRow * (image.width * 4)) + (trueCol * 4);

                        // Assign the colour to each pixel
                        d[pos] = red;
                        d[pos + 1] = green;
                        d[pos + 2] = blue;
                        d[pos + 3] = 255;
                    };
                };
            };
        };
        // Draw image data to the canvas
        return image;
    }

    let canvas = $('#canvas')[0];
    $("canvas").attr("width", image.width).attr("height", image.height);
    let ctx = canvas.getContext('2d');

    var scale1=Math.min((canvas.width/image.width),(canvas.height/image.height));
    var sw1=image.width*scale1;
    var sh1=image.height*scale1;
    ctx.drawImage(image,(canvas.width-sw1)/2,(canvas.height-sh1)/2,sw1,sh1);

    console.log(ctx.getImageData(0, 0, image.width, image.height));

    let pixels = ctx.getImageData(0,0, image.width, image.height);
    let filteredData=mosaic(ctx, pixels);
    ctx.putImageData(filteredData, 0 , 0);


    // 작업 이미지 로컬 다운로드(.PNG)
    $("#save").click(function(){
        downloadCanvas(this, 'canvas', 'huWeb_img_mosaic.png');
    });

    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }
});