// dom tree 구조 
// web에서 발생하는 event를 인식할 수 있는 수단
// DOMContentLoaded 렌더링 다 한 시점 loaded 완료 그 html내용에 관한 이벤트 들을 준비
// loaded 완료된 시점에 콜백함수 어차피 렌더링 안 되어있는데 함수 기능 활용 당연히 X

                                             //콜백함수
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOCUMENT READY')

    init();   

});


// 깔끔하게 밑에다가 빼기

function init() {
    console.log('init() CALLED!!')

    initViews();
    addEvents();

}

// 클래스 이름 자체가 이미 유일무이(Unique)

function addEvents() {
    console.log('addEvents() CALLED!!')

    let signUpMenuBtn = document.querySelector('div.menu_wrap a.sign-up');
    signUpMenuBtn.addEventListener('click', function() {
        console.log('signUpMenuBtn CLICKED!!');

        showSelectedView(SIGN_UP_VIEW)
    });

    let signInMenuBtn = document.querySelector('div.menu_wrap a.sign-in');
    signInMenuBtn.addEventListener('click', function() {
        console.log('signInMenuBtn CLICKED!!');

        showSelectedView(SIGN_IN_VIEW)
    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap a.sign-out');
    signOutMenuBtn.addEventListener('click', function() {
        console.log('signOutMenuBtn CLICKED!!');

        showSelectedView(SIGN_OUT_VIEW)
    });

    let writeMenuBtn = document.querySelector('div.menu_wrap a.write');
    writeMenuBtn.addEventListener('click', function() {
        console.log('writeMenuBtn CLICKED!!');

        showSelectedView(DIARY_WRITE_VIEW)
    });

    let listMenuBtn = document.querySelector('div.menu_wrap a.list');
    listMenuBtn.addEventListener('click', function() {
        console.log('listMenuBtn CLICKED!!');

        showSelectedView(DIARY_LIST_VIEW)

    });

    let signUpBtn = document.querySelector('div.sign_up_wrap > input[type="button"]');
    signUpBtn.addEventListener('click',function() {   
        console.log('signUpBtn CALLED');

        let u_id = document.querySelector('div.sign_up_wrap > input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_up_wrap > input[name="u_pw"]').value;
        let u_mail = document.querySelector('div.sign_up_wrap > input[name="u_mail"]').value;

        addMember(u_id,u_pw,u_mail);

        alert('SIGN UP SUCCESS!');

        document.querySelector('div.sign_up_wrap > input[name="u_id"]').value = '';
        document.querySelector('div.sign_up_wrap > input[name="u_pw"]').value = '';
        document.querySelector('div.sign_up_wrap > input[name="u_mail"]').value = '';

        // 화면 입력칸에는 방금 내가 적었던 비밀번호와 개인정보 비우기
       
    });
}


    