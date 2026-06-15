// 제어문 - 조건문(if문, switch ~ case문)
/*
if문
if (조건식) {
    실행문 
}
*/

let age = 20
if (age >= 18) {
    console.log('성인 입니다.')
}


/*
if ~ else문
*/

let islogin = false;
if (islogin) {
        console.log('로그인 되어 있어요.')
}   else {
        console.log('로그인 되어 있지 않아요.')  
}

/*
if ~ else if ~ else if ......  -> 다중 비교
*/

let score = 85;
if (score >=90) {
    console.log('A학점');
} else if (score >= 80) {
    console.log('B학점');
} else if (score >= 70) {
    console.log('C학점');
} else if (score >= 60) {
    console.log('D학점');
} else  {
    console.log('F학점');
}


// switch문 --> 콕! 찝어서 실행   성능 좋은 for문 느낌  순서는 맘대로 
let day = 1;
            // case 1 -> literal constant  변수를 집어넣어서 사용하지 말기 
switch(day) {
    case 1:
        console.log('월요일')
        break;
    case 2:
        console.log('화요일')
        break;
    case 3:
        console.log('수요일')
        break;
    case 4:
        console.log('목요일')
        break;
    case 5:
        console.log('금요일')
        break;
    case 6:
        console.log('토요일')
        break;   
        
    default:      // 관례상 맨 아래에  맨 뒤에 두면 break없어도 사실상 결과는 같음
        console.log('몰라요!!')
        break;    
}

// switch문이 더 선호되긴 하지만 상황에 따라서 가변적으로 사용


// 제어문 - 박복문(for문, while문)

// for문 -> 횟수에 의한 반복 실행 
/*
1에서부터 10까지의 정수의 합
                                    range(1.1.1) 뭔가 이 구조랑 비슷하네
for (초기식; 조건식; 증감식) {
    반복 실행문 
}
*/

let sum = 0;
for (let n = 1; n < 11; n++) {  // 1부터 10까지 1씩 증가해야!
    console.log('n:', n)
    sum += n;
}

console.log('sum:',sum);   //55

let n = 1;
for (; n < 11; n++) {
    sum += n;
}
console.log('sum:',sum);   //55
                                   //조건식에 true 이런거 x
for (let i=10, j=0; i>0, j<10; i--,j++) {
    console.log('i:',i);
    console.log('j:',j);
}

// while문 -> 조건에 의한 반복 실행 

/*
while (조건식) {
    실행문
}
*/

let k = 3;
while (k <10) {
    console.log('k:', k);
    if (k>=7) break;  
    k++;
}

//do ~ while문 선입장 후검사 

//특징: 조건이 참이든 거짓이든 아무 상관 없이, 일단 do 블록 안의 코드를 무조건 1번은 실행
//주로 사용자에게 무엇인가를 입력받아 검증할 때
let count = 5;
do {
    console.log('count:', count);      //5
    count--;
} while(count > 0)

// let count = 5;
// do {
//     console.log('count:', count);     
//     count--;
// } while(count > 10)  // -> 조건에 맞지 않아도 do부분 한번은 일단 실행됨

let pt = prompt('이름을 입력하세요')
console.log('pt:', typeof(number(pt)));

/*
let password;

do {
    // 일단 무조건 1번은 창을 띄워서 물어봄
    password = prompt("비밀번호를 입력하세요 (힌트: 1234):");
} while (password !== "1234"); // 틀리면 다시 do로 올라가서 또 물어봄!

console.log("로그인 성공!");

황 B. 프로그램의 메인 메뉴판 (키오스크)
파이썬으로 시스템 짜실 때 while flag: 하시고 그 안에서 input('1. 메뉴 등록 2. 조회... 99. 종료') 받으셨던 구조가 바로 이 상황
*/

let selectedNum; // 입력받을 변수만 하나 준비합니다. (초기값 없음 = undefined)

do {
    // 1. 일단 묻지도 따지지도 않고 메뉴판(prompt)을 화면에 띄웁니다.
    selectedNum = Number(prompt('1. 등록, 2. 조회, 99. 종료: '));

    // 2. 입력받은 값에 따라 기능 실행
    if (selectedNum === 1) {
        console.log("등록 기능 실행");
    } else if (selectedNum === 2) {
        console.log("조회 기능 실행");
    }
    
// 3. 마지막에 검사: "방금 입력한 값이 99(종료)가 아니지? 그럼 다시 위(do)로 올라가!"
} while (selectedNum !== 99); 

console.log("시스템이 안전하게 종료되었습니다.");