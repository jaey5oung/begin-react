import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1);
  };
  const Decrease = () => {
    setNumber(number - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-1</button>
    </div>
  );
}
//클릭이됬을때 호출해야하니까 onclick에서 ()는 쓰면안댄다 예를들어 onClick={Increase()} 이렇게쓰게되면 렌더링될때 호출이 되므로 x
//콘솔로 +1 -1이 클릭할때 이벤트가 발생했으면 이제 여기에 useState로 동적으로 만들어줘야한다
//useState를 선언한 이후 number(현재상태) setNumber(반환한값)을 위에와같이 적는데 이렇게쓰는건 setNumber의 상태를 바꿔주기 위함이다(구조분해를한것이다)
//useState(0)이라고 지정한것은 기본값을 지정해준것이다
//나중에 성능최적화에 대해 알아볼때 일반적으로는 number + 1을 쓰지만 setNumber(prevNumber => prevNumber + 1) 이런식으로 함수형으로 업데이트가 필요하다
export default Counter;
