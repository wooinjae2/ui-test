import { useContext, useEffect, useState } from "react";

const useCounter = (forward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        
        if(forward) {
            setCounter((prevCounter) => prevCounter+1);
        }else{
            setCounter((prevCounter) => prevCounter-1);
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    return counter; // [] number obj 등등 리턴할 수 있다.
};

export default useCounter;

//custom hook : stateful logic을 공통으로 만들어서 사용할수 있고, state관련 로직을 사용할 수 있다.
// 또 이로직을 여러 콤포넌트들에서 공통으로 사용할 수 있다.
//use * 로 이름을 지정하는 것은 리액트에게 이게 커스텀 훅이라는 것을 알려주고 
//여기서 useState를 이용하는것을 보장해주고 hooks를 사용가능한 위치인지 판단을 해주는등의 역할을 하게 되므로 use라는 이름으로 시작하도록 한다.