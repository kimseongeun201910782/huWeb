FlowRouter.template('/resize_', 'resize_');

Template.resize_.onRendered(function() {
    var a = prompt("설정할 가로 길이를 입력해주세요 (예: 300)").split(" ");
    var b= prompt(" 설정할 세로 길이를 입력해주세요 (예: 300)").split(" ");
    console.log(a,b);

    let canvas = $('#canvas')[0];
    let ctx = canvas.getContext('2d');
    $("canvas").attr("width", a).attr("height", b);

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    console.log(ctx.getImageData(0, 0, image.width, image.height));
    let pixels = ctx.getImageData(0,0,image.width,image.height);
    ctx.putImageData(pixels, 0 , 0);
    //작업 이미지 로컬 다운로드(.PNG)
    $("#save").click(function(){
        downloadCanvas(this, 'canvas', 'huWeb_img_resize.png');
    });
    function downloadCanvas(link, canvasId, filename) {
        link.href = document.getElementById(canvasId).toDataURL();
        link.download = filename;
    }

});