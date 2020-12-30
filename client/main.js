<<<<<<< HEAD
FlowRouter.template('/', 'main');
=======
FlowRouter.template('/main', 'main');
>>>>>>> 20201230

Template.main.onRendered(function() {
  // 화면이 그려지고 난 후 제일 먼저 수행
  Session.set('count', 0);
});

Template.main.helpers({
  // 화면에 데이터를 전달
  count: function() {
    var count = Session.get('count');
    if (!count) {
<<<<<<< HEAD
      return '편집하기';
=======
      return 'Click!';
    } else {
      return 'Count: ' + count;
>>>>>>> 20201230
    }
  }
});

<<<<<<< HEAD
=======
Template.main.events({
  // 화면의 이벤트를 처리
  'click #btn-count': function() {
    Session.set('count', Session.get('count')+1);
  }
});
>>>>>>> 20201230
