const a = 1;

const b = 1;

console.log(a === b);

const c = [1]; // ? 변수 C의 index 0번째는 값이 1이다.

const d = [1];

console.log( c[0] === d[0] );

console.log( c === d ); // print : false;

const origin = [
  {name : '김정수', age : 29},
  {name : '김인티저', age : 27}
];

const shallow = origin.map((item)=>{
  return item;
})

console.log(origin);

console.log(shallow);

shallow[1].name = '인티저 킴';

console.log(origin);

console.log(shallow);