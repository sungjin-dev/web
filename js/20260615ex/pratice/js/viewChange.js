// 직관적으로 유지관리하기 쉽게 상수로 
const SIGN_UP_VIEW  = 1;
const SIGN_IN_VIEW  = 2;
const SIGN_OUT_VIEW = 3;
const WRITE_VIEW    = 4;
const LIST_VIEW     = 5;
const HOME_VIEW     = 6;

let signUpWrap = '';
let signInWrap = '';
let writeWrap = '';
let listWrap = '';

function initViews() {
    console.log('initViews() CALLED!!')

    signUpWrap = document.querySelector('div.sign_up_wrap');   
    signInWrap = document.querySelector('div.sign_in_wrap');   
    writeWrap = document.querySelector('div.write_wrap');   
    listWrap = document.querySelector('div.list_wrap');   
}

function showSelectedView(viewNo) {
    console.log('showSelectedView() CALLED!!');

        switch(viewNo) {
            case SIGN_UP_VIEW:
                signUpWrap.style.display = 'block';  //div라서 어차피 특정 블록을 차지하기 때문에 그냥 block
                signInWrap.style.display = 'none';
                writeWrap.style.display = 'none';
                listWrap.style.display = 'none';
                break;

            case SIGN_IN_VIEW: 
                signUpWrap.style.display = 'none';
                signInWrap.style.display = 'block';
                writeWrap.style.display = 'none';
                listWrap.style.display = 'none';
                break;

            case HOME_VIEW:       // sign ined ---> go home
            case SIGN_OUT_VIEW:   // sign out
                signUpWrap.style.display = 'none';
                signInWrap.style.display = 'none';
                writeWrap.style.display = 'none';
                listWrap.style.display = 'none';
                break;    

            case WRITE_VIEW:
                signUpWrap.style.display = 'none';
                signInWrap.style.display = 'none';
                writeWrap.style.display = 'block';
                listWrap.style.display = 'none'; 
                break;
              
            case LIST_VIEW:    
                signUpWrap.style.display = 'none';
                signInWrap.style.display = 'none';
                writeWrap.style.display = 'none';
                listWrap.style.display = 'block';
                break;                         
        }

 }