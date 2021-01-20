FlowRouter.template('/mosaic_', 'mosaic_');

Template.mosaic_.onCreated(function() {
    var _id = FlowRouter.getParam('_id')
});

Template.mosaic_.helpers({
    board: function() {
        var _id = FlowRouter.getParam('_id')
        return DB_MOSAIC.findOne({_id:_id});
    },
    link: function() {
        // 저장 된 이미지 링크를 반환
        return DB_FILES.findOne({_id: this.mosaic_id}).link();
    }
});