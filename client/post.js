FlowRouter.template('/post', 'post');

Template.post.helpers({
    contents: function() {
        // CONTENTS 데이터베이스를 화면에 전달
        return DB_POST.findAll();
    },
    createdAt: function() {
        // 화면에 보이는 날짜 데이터를 정해진 포맷으로 변환하여 전달
        return this.createdAt.toStringHMS();
    },
    link: function() {
        // 저장 된 이미지 링크를 반환
        return DB_FILES.findOne({_id: this.post_id}).link();
    }
});

Template.post.events({
    'click #btn-remove': function() {
        if(confirm('게시판에서 삭제 하시겠습니까?')) {
            DB_POST.remove({_id: this._id});  // 선택 컨텐츠를 DB에서 삭제
            alert('삭제 되었습니다.');
        }
    }
});