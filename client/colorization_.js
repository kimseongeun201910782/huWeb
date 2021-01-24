FlowRouter.template('/colorization_', 'colorization_');

Template.colorization_.onRendered(function() {

    // Filters
    function brightnessFilter(pixels, value) {
        var d = pixels.data;
        for(var i =0; i< d.length; i+=4){
            d[i] += value/1.3;
            d[i+1] += value/1.3;
            d[i+2] += value/1.3;
        }
        return pixels;
    }

    function drawImageData(image) {
        image.height *= canvas.offsetWidth / image.width;
        image.width = canvas.offsetWidth;

        if (image.height > canvas.offsetHeight) {
            image.width *= canvas.offsetHeight / image.height;
            image.height = canvas.offsetHeight;
        }

        ctx.drawImage(image, 0, 0, image.width, image.height);
        console.log(ctx.getImageData(0, 0, canvas.width, canvas.height));
    }


    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext('2d');

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    console.log(ctx.getImageData(0, 0, canvas.width, canvas.height));


    // imageData를 가져온다.
    var pixels = ctx.getImageData(0,0, canvas.width, canvas.height);

// image processing
    var filteredData = brightnessFilter(pixels, 100);

// Canvas에 다시 그린다.
    ctx.putImageData(filteredData, 0 , 0);


    // 작업 이미지 로컬 다운로드(.PNG)
    $("#save").click(function(){
        downloadCanvas(this, 'canvas', 'huWeb_img_colorization.png');
    });

    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }
});