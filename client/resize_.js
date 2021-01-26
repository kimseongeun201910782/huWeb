FlowRouter.template('/resize_', 'resize_');

Template.resize_.onRendered(function() {
    function ResizeImage(ctx, image) {
        var filesToUpload = document.getElementById('inp-file').files;
        var file = filesToUpload[0];
        var img = document.createElement("img");

        var reader = new FileReader();
        reader.onload = function(e) {
            img.src = e.target.result;
            var canvas = document.createElement("canvas");
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);

            // 최대폭을 400 으로 정했다고 가정했을때
            // 최대폭을 넘어가는 경우 canvas 크기를 변경해 줍니다.
            var MAX_WIDTH = 100;
            var MAX_HEIGHT = 100;
            var width = img.width;
            var height = img.height;

            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;

            //변경된 크기의 이미지
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            var dataurl = canvas.toDataURL("image/png");
            document.getElementById('output').src = dataurl;
        }
        reader.readAsDataURL(file);
    }

    let canvas = $('#canvas')[0];
    let ctx = canvas.getContext('2d');
    $("canvas").attr("width", image.width).attr("height", image.height);

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    console.log(ctx.getImageData(0, 0, canvas.width, canvas.height));


    // 작업 이미지 로컬 다운로드(.PNG)
    $("#save").click(function(){
        downloadCanvas(this, 'canvas', 'huWeb_img_resize.png');
    });

    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }
});

