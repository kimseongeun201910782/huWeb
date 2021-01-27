FlowRouter.template('/posting', 'posting');

Template.posting.onRendered(function() {

    var upload = document.querySelector('#inp-file');
    var upload2 = document.querySelector('#preview');

    /* FileReader 객체 생성 */
    var reader = new FileReader();

    /* reader 시작시 함수 구현 */
    reader.onload = (function () {
        this.image = document.createElement('img');
        var vm = this;
        return function (e) {
            /* base64 인코딩 된 스트링 데이터 */
            vm.image.src = e.target.result
        }
    })()

    upload.addEventListener('change',function (e) {
        var get_file = e.target.files;
        if(get_file){
            reader.readAsDataURL(get_file[0]);
        }
        image.style.width = '400px';
        image.style.height = 'auto';
        image.style.display = 'block';
        image.style.margin = 'auto';

        preview.appendChild(image);
    })
});

Template.posting.events({
    'click #btn-posting': function(evt, inst,e) {
        var chk = document.getElementById('inp-file');
        if(!chk.value){
            $('#btn-posting').attr('href','');
            alert('이미지 파일을 먼저 업로드 해주세요.');
        }
        else {
            // 파일 먼저 저장
            var file = $('#inp-file').prop('files')[0];   // 화면에서 선택 된 파일 가져오기
            var post_id = DB_FILES.insertFile(file);
            // DB 저장 시 파일의 _id와 name을 함께 저장
            DB_POST.insert({    // 컨텐츠 DB에 저장
                createdAt: new Date(),          // 저장 시각
                content: $('#ta-article').val(),// 저장 컨텐츠
                post_id: post_id               // 저장된 posting 파일의 _id
            });
            $('#inp-file').val('');
            $('#ta-article').val('');
            $('#btn-posting').attr('href','post');
            alert('업로드 되었습니다.');
        }
    }
});