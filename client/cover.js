<<<<<<< HEAD
FlowRouter.template('/', 'cover');

Template.cover.onRendered(function() {
    // 화면이 그려지고 난 후 제일 먼저 수행
    Session.set('count', 0);
});

Template.cover.helpers({
    // 화면에 데이터를 전달
    count: function() {
        var count = Session.get('count');
        if (!count) {
            return '편집하기';
        }
    }
});
=======
FlowRouter.template('/cover', 'cover');
>>>>>>> 20201230
