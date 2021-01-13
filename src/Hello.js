import React from 'react';

// function Hello(props) {
//   console.log(props);

//   return <div style={{ color: props.color }}>안녕하세요{props.name}</div>;
// }

// export default Hello;

function Hello({ color, name }) {
  return <div style={{ color }}>안녕하세요{name}</div>;
}

Hello.defaultProps = {
  name: '이름없음',
};

export default Hello;

//app.js에서 프롭스를 보내고 hello.js에서 프롭스를 파라메터로 받아와 사용할수있다
//여기서 프롭스를 구조분해할당으로 줄여사용하기위해서는
