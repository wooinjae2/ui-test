function doSomething(){
for(let i =0; i < 5; i++){
console.log(i)
}

    console.log('finally', i)

}

doSomething();

--> tsc main.ts

6 console.log('finally', i)
~
Found 1 error.
에러주지만 유효한 자바스크립트 코드로 컴파일이 된다.
컴파일타임에 에러메시지를 통해 인식할 필요가 있음

function doSomething() {
for (var i = 0; i < 5; i++) {
console.log(i);
}
console.log('finally', i);
}
doSomething();
