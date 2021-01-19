import React, { useState, useRef } from 'react';
//useRef : 우리가 내용을적고 초기화를 눌렀을때 그 포커스가 내가 원하는 곳에 가게끔하는것( = 선택하고싶은 돔으로 위치하게됨)
//0: useRef 선언
function InputSample2() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  //1: useRef 함수로호출
  const nameInput = useRef();
  const { name, nickname } = inputs; //비구조화 할당을 통해 값 추출 (이해완료)

  const onChange = (e) => {
    const { name, value } = e.target; // e.target 에서 name과 value를 추출 (이해x)
    console.log(e.target.value);

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
    nameInput.current.focus();
    //3: useRef 원하는곳에 포커스 설정
  };
  return (
    <div>
      {/* 2: ref={nameInput} 설정 */}
      <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
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
