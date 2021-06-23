const arr = [
  {id:0, name:'a0'},
  {id:1, name:'a1'},
  {id:2, name:'a2'},
]

const b = [...arr.map(data => Object.assign({},data)), {id:3, name: 'a3'}];

b[0].id = 5;
console.log(arr);
const c = arr.concat({id:3, name: 'a3'});
c[0].id = 6;
console.log(arr);

