const sum = (a, b) => {
    return a + b;
};

const makeUser = (name, age) => {
    return {
        name,
        age,
    };
};

const makeArrayAtoB = (a, b) => {
  let newArr = [];
  for(let i = a; i < b ;i++){
    newArr.push(i);
  }

  return newArr;
}


module.exports = {
sum,
makeUser,
makeArrayAtoB
};