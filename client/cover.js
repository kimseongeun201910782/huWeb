FlowRouter.template('/cover', 'cover');

Template.cover.onRendered(function() {

    function showImage() {
        var background_img = "/examples/image_";
        var number = Math.floor(Math.random() * 2) + 1;
        var cover_ = document.getElementById("cover_");
        background_img += number + ".jpg";
        cover_.style.backgroundImage = "url('" + background_img + "')";
        setTimeout(showImage, 5000);
    }
    showImage();
});