FlowRouter.template('/gray_', 'gray_');

Template.gray_.onRendered(function() {

    // Filters
    function grayscaleFilter(pixels) {
        var d = pixels.data;
        for (var i = 0; i < d.length; i += 4) {
            var r = d[i];
            var g = d[i + 1];
            var b = d[i + 2];

            var v = 0.2126 * r + 0.7152 * g + 0.0722 * b;  // 보정값
            d[i] = d[i + 1] = d[i + 2] = v               // RBG 색을 같게 맞추자
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

    $("canvas").attr("width", image.width).attr("height", image.height);

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    console.log(ctx.getImageData(0, 0, canvas.width, canvas.height));

    // imageData를 가져온다.
    var pixels = ctx.getImageData(0,0, canvas.width, canvas.height);
    // image processing
    var filteredData = grayscaleFilter(pixels);
    ctx.putImageData(filteredData, 0 , 0);


    // 작업 이미지 로컬 다운로드(.PNG)
    $("#save").click(function(){
        downloadCanvas(this, 'canvas', 'huWeb_img_gray.png');
    });

    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }
});