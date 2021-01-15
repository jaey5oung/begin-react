import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem',
  };
  return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial={true} />
      <Hello color="blue" />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </Wrapper>
  );
}

export default App;

//jsx조건
//0: 태그는 무조건 닫아줘야대고 내용이없을땐 셀프클로징 태그로 닫아준다 ex <input/>
//1: 2개이상태그가있을땐 <></>프레그먼트로 감싸준다
//2: jsx내에서 자바스크립트함수를 불러올땐 const name = 'react' 라고했을땐 <div>{name}</div> 이런식으로 불러오면댄다
//3: jsx에서 스타일을 사용할땐 위와같이 객체형태로 넣어줘야한다
//4: css클래스를 사용할땐 class가아니라 className으로 써줘야한다
