import React, { useState } from 'react';

function InputSample2() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = inputs; //비구조화 할당을 통해 값 추출 (이해완료)

  const onChange = (e) => {
    const { name, value } = e.target; // e.target 에서 name과 value를 추출 (이해x)

    setInputs({
      ...inputs, // 기존의 input 객체를 복사한다 spread까진 (이해완료)
      [name]: value, //(이해x)
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
  };
  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name}({nickname})
      </div>
    </div>
  );
}

export default InputSample2;

//onClick,onChange 예제는 완벽히 이해가 갔으나 오늘의 문제는 input값을 여러개를 관리할때이다
