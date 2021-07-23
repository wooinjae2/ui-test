const { sum, makeUser, makeArrayAtoB } = require('./index');


describe('test index.js file', () =>{
    it('sum', () => {
        let result = sum(1,2);
        //toBe를 통해 값을 비교할 수 있다.
        expect(result).toBe(3);

        result = sum(2,3);
        expect(result).toBe(5);
    })
})

describe("test makeUser", () => {
    
  it("makes a person", () => { 
    let user = makeUser('Test', 31);
    //toEqual을 통해 Object 비교를 할수있다.
    expect(user).toEqual({
      name: "Test",
      age: 31,
    });
  });
});


describe("test toContains", () => {
    
    it("toContains Test", () => { 
      let array = makeArrayAtoB(1,5);
      

      //toContains를 통해 특정값이 포함되어 있는지 확인할 수 있다.
      expect(array).toContain(2)
    });
  });
