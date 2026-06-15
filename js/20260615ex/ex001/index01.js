// 호이스팅(hoisting) 현상 - 선언부를 위로 올려버림 초기화는 안 함. bug

console.log(num)
var num = 10;

//----------------------------------

// var num;
// console.log(num)  //undefined
// var num = 10;

//------2015년 구글 엔지니어들이 ES6(V8)
let name = 'gildong' 
const PI = 3.14;            //상수 선언 및 초기화

/*
var(X), let(O), const(O)
*/

// 연산자 
// 산술연산자

console.log(10+20);     //30
console.log(10-20);     //10
console.log(10*20);     //200
console.log(10/20);     //0.5 
console.log(10-20);     // -10
console.log(10%20);     // 10

// 대입 연산자, 복합대입연산자

num = 10;
num += 10; // num = num + 10
num -= 10; // num = num - 10
num *= 10; // num = num * 10
num /= 10; // num = num / 10
num %= 10; // num = num % 10

// 비교연산자
console.log(10 > 20);  //false 
console.log(10 >= 20);  //false 
console.log(10 < 20);  //true 
console.log(10 >= 20);  //true 
console.log(10 == 20);  //false 
console.log(10 != 20);  //true 

let num1 = 10;
let num2 = '10';
console.log('num1 == num2:', num1 == num2);   //num1 == num2: true 문자열로 알아서 둘다 인식해버림 dynamic casting issue
console.log('num1 === num2:', num1 === num2);   // false
console.log('num1 !== num2:', num1 !== num2);   // true


//논리연산자 
//&&   --> and
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// ||  --> or
console.log(true && true); // true
console.log(true && false); // true
console.log(false && true); // true
console.log(false && false); // false

// ! --> not
console.log(!true); // false
console.log(!false); // true
console.log(!!false); // false  (이중 부정)

// 증감 연산자 
let myScore = 80;
console.log('myScore:', myScore); //80)

// myScore +=1;
myScore++;                  // 딱 1씩 증가할 때만 사용가능
console.log('myScore:', myScore);  //81

myScore--; 
console.log('myScore:', myScore);  //80

// 후위 증감연산자 ("원본을 복사해두고 빼기")
var temp = myScore--;     // 
console.log('temp:', temp);  //80
console.log('myScore:', myScore); //79

myScore = 80
명령: temp = myScore--
/*
1. [Hidden Box 임시공간] = 80 생성 (myScore의 현재 값을 복사)
2. myScore = 79 로 변경됨 
3. temp = [Hidden Box 임시공간]의 값(80)을 대입
*/

// 전위 증감연산자("빼고 나서 그 값을 바로 쓰기")
myScore = 80;
temp = --myScore;    //79
console.log('temp:', temp);  //79
console.log('myScore:', myScore); //79

// (if (myScore-- > 0))

//삼항(조건식) 연산자
//status = 'sucess'if myScore > 80 else 'fail'

let score = 85;
let grade = score >=90 ? 'A' : 'B';
console.log('grade:', grade);


