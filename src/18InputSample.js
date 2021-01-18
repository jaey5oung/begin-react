import React, { useState } from 'react';

function InputSample() {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText('');
  };
  return (
    <div>
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {text}
      </div>
    </div>
  );
}
//onClick 과 비슷한개념이나 주의해야할것은 파라메터에 이벤트넣어줘야한다? ex) e,event
//input에서 value={text}를 넣지않으면 초기화할때 그값이 사라지는것을 방지하기위해서 벨류값을 넣어준다? 확인해보니 초기화를 누를때 벨류값을 설정을 안해주면 인풋창에 내가 적었던 텍스트가 그대로 남아있다
//초기화를 하기위해선 초기화버튼을 눌렀을때 onClick 이벤트가 발생하게끔한다 이후 초기화함수를 만들어서 setText에 공백을 짚어넣는다
export default InputSample;
