// 컨테이너 자료형  Shift + Alt + A 

/* 
컨테이너(Container) 자료형이란 여러 개의 데이터를 
하나의 변수에 담아 관리할 수 있는 자료형을 말합니다.
즉, 하나의 값이 아닌 값들의 집합(묶음)을 표현할 수 있습니다.

JavaScript의 대표적인 컨테이너 자료형은 다음과 같습니다.

- 배열(Array) : 순서가 있는 데이터 집합(by index)
- 객체(Object) : 이름(키)과 값(value)으로 구성된 데이터의 집합
*/

//배열(Array)
// - 대괄호 []로 묶어 표현하며, 순서(index)를 기반으로 각 요소에 접근합니다. 
// - 인덱스는 0부터 시작합니다.

let fruits = ['사과','바나나','포도']
console.log('fruits:',fruits)
console.log('fruits[0]:',fruits[0])
console.log('fruits[1]:',fruits[1])
// for (let i = 0; i < fruits/length; i++) {
//     console.log(fruits[i])
// }

for (let fruit of fruits) {
    console.log(fruit);
}

/*  💡 완벽 정리 (공식처럼 외우세요)

for...of : 배열의 알맹이(값)를 꺼낼 때 씁니다. (우리가 평소에 원하는 것)

for...in : 객체(딕셔너리)의 Key(이름)나 배열의 인덱스 번호를 꺼낼 때 씁니다.*/

// 마지막 값 구하기
let lastData = fruits[fruits.length-1]
console.log(lastData);

console.log(fruits[10]); // undefined  (java같은 경우는 out of indexError)

// 객체(Object)  ---> dic 중요! 
let man = {
    'name': '홍길동',
    'age':20,
    'mail':'gildong@gmail.com',
    'hobby': ['축구','농구','배구'],
    'fun': function() {
        console.log('멍멍~~')
    }
}

console.log('man:', man);
console.log('man name:', man['name']);
console.log('man hobby 마지막 데이터:', man['hobby'][man['hobby'].length-1]);

man['fun']();

//함수(function)
/*  
1. function 함수 이름(매개변수, ....) {
    함수 실행 구문
}
*/

function intro() {
    alert('안녕하세요!!')
}

intro();      //함수 호출부

// 2. 함수 표현식(function expression)
/* 
const 함수이름 = function(매개변수, ......) {
    함수 실행부
}
*/
           //익명 함수 선언 방법
const intro1 = function() {  
    alert('안녕하세요!!');
}

intro1();

// 3. 화살표 함수(arrow function) at ES6
/* 
const 함수이름 = (매개변수, ......) => {
    함수 실행부
    }
*/
               // 이것도 일종의 익명함수 가장 진보된 
const intro2 = () => {
    alert('안녕하세요.!!!!!!!!!!');
}

// 소괄호 중괄호 다 없앨 수도 있음
const intro3 = (n1) => alert('안녕하세요.!!!!!!!!!!');
            //매개변수
intro3();

// const add = (n1, n2) => {
//     return n1 + n2;
// }

// result = add(10,20)
// console.log('result:', result)
        // return 하나만 있을 때 
const add = (n1, n2) => n1 + n2; 
let result = add(10,20)
console.log('result:', result)

/* 
DOM (Document object model)

*/
