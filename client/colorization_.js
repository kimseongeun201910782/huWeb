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


    //var file = image.target.files[0];
    //var fileReader = new FileReader();


    //fileReader.readAsDataURL(file);

    // imageData를 가져온다.
    var pixels = ctx.getImageData(0,0, canvas.width, canvas.height);

// image processing
    var filteredData = brightnessFilter(pixels, 100);

// Canvas에 다시 그린다.
    ctx.putImageData(filteredData, 0 , 0);

<<<<<<< HEAD
   //ctx.drawImage(filteredData, 0, 0, canvas.width, canvas.height);
=======
    //ctx.drawImage(filteredData, 0, 0, canvas.width, canvas.height);
>>>>>>> c1779419f8db014f597d743156a8f73e8f08d948

    //preview.appendChild(filteredData);

    //preview.appendChild(image);  (<업데이트할 데이터선택>,<데이터를 입력>)

    $("#btn-save-colorization").click(function(){ downloadCanvas(this, 'canvas', 'photo')});
    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }



});