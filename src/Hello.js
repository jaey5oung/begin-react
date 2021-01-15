import React from 'react';

// function Hello(props) {
//   console.log(props);

//   return <div style={{ color: props.color }}>안녕하세요{props.name}</div>;
// }

// export default Hello;

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}안녕하세요{name}
    </div>
  );
}
//값이 변하는걸 보여주고싶다라고하면 삼항연산자
//값을 숨겻다가 나타냇다가를 단순하게 보여주고싶으면 엔드연산자

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;

//app.js에서 프롭스를 보내고 hello.js에서 프롭스를 파라메터로 받아와 사용할수있다
//여기서 프롭스를 구조분해할당으로 줄여사용하기위해서는
