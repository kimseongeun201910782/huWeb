FlowRouter.template('/bright_', 'bright_');

Template.bright_.onRendered(function() {

    // Filters
    function brightnessFilter(pixels, value) {
        var num = prompt("밝기정도를 입력하세요. (※ 1.0에 가까울수록 밝아집니다.)","(1.0 ~ 4.0 사이값을 입력해주세요.)");
        var d = pixels.data;
        for(var i =0; i< d.length; i+=4){
            d[i] += value/num;
            d[i+1] += value/num;
            d[i+2] += value/num;
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
    var filteredData = brightnessFilter(pixels, 100);

// Canvas에 다시 그린다.
    ctx.putImageData(filteredData, 0 , 0);


    //ctx.drawImage(filteredData, 0, 0, canvas.width, canvas.height);

    //ctx.drawImage(filteredData, 0, 0, canvas.width, canvas.height);

    //preview.appendChild(filteredData);

    // 작업 이미지 로컬 다운로드(.PNG)
    $("#save").click(function(){
        downloadCanvas(this, 'canvas', 'huWeb_img_bright.png');
    });

    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }
});