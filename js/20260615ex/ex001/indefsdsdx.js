// var num;  
// console.log('num:'.num)

//원시타입
// ; -> 종결자 

var num = 42;     //Number
var pi = 3.14;     //Number
var name = '홍길동';  //String
var name = "홍길동";  //String
// var name = "홍길동';  //String()x
var isStudent = true;  // Boolean

//python만 대문자로 시작한다  True False

var nothing;   //undefined

console.log('num:', num)
console.log('num:', typeof(num));

console.log('pi:', pi)
console.log('pi:', typeof(pi));

console.log('name', name)
console.log('name', typeof(name));

console.log('isStudent:', isStudent)
console.log('isStudent:', typeof(isStudent));

console.log('nothing:', nothing)
console.log('nothing:', typeof(nothing));

//참조 타입
var fruits = ['사과','바나나','포도'] //Array
console.log('fruits:', fruits)
console.log('fruits length:', fruits.length)
console.log('fruits:', typeof(fruits));

var person = {         //Object
    'name':'홍길동',
    'age':'20',
    'mail':'gildong@gmail.com' 
};

console.log('person:', person);
console.log('person:', typeof(person));
//함수도 데이터다 
var myFun = function() {
    console.log('myFun() CALLED!!')
}

function() {  //즉시실행! 
    console.log('myFun() CALLED!!')
}()

console.log('myFun:', myFun);
console.log('myFun:', typeof(myFun));

myFun();


//undefined javascript만의 특이한 특성 
/*
1. 변수만 선언하고 값을 안 넣었을 때:
let age;
2. 객체(Object)에 없는 속성을 찾을 때:
let user = { name: "홍길동" };
console.log(user.age);
3. 함수에서 매개변수(파라미터)를 안 넘겨줬을 때:
function sayHello(message) {
    console.log(message);
}
sayHello();
4.함수에서 아무것도 return하지 않았을 때:
function doNothing() {}
let result = doNothing();

undefined (시스템의 무관심): 상자를 사 오긴 했는데, 안에 무엇을 넣을지 결정을 안 한 상태입니다. (컴퓨터가 자동으로 채워 넣는 빈 값)

null (개발자의 의도): 개발자가 상자 안에 "이 상자는 텅 비어있음"이라는 쪽지를 일부러 꾹꾹 눌러 쓴 뒤에 넣어둔 상태입니다. (개발자가 명시적으로 비웠다고 선언한 빈 값)
*/