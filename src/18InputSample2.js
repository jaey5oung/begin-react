import React, { useState } from 'react';

function InputSample2() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = inputs; //비구조화 할당을 통해 값 추출 (이해완료)

  const onChange = (e) => {
    const { name, value } = e.target; // e.target 에서 name과 value를 추출 (이해x)
    // 이해가 안되면 console로 찍어보자
    // e.target으로 부터 비구조화 할당을 함으로
    // console.log(e.target) 을 해보자
    console.log(e.target);
    // 브라우저에서 이름을 입력하면  <input name="name" placeholder="이름" value="재영">
    // 닉네임을 입력하면 <input name="nickname" placeholder="닉네임" value="재영갓">

    // 저 element에서 비구조화 할당을 하면
    // 이름을 입력했을때 name="name" , value="재영"
    // 닉네임을 입력했을때 name="nickname" , value = "재영갓"
    // 사실 이것두 console로 찍어보면 안다
    // 이런식으로 console.log(e.target.name, e.target.value)
    console.log(e.target.name, e.target.value);

    setInputs({
      ...inputs, // 기존의 input 객체를 복사한다 spread까진 (이해완료)
      [name]: value, //(이해x)
      // 여기 이해 안될만 하다...
      // 위에서 콘솔로 찍어 봐서 알겠지만
      // 이름을 입력했을 때 name="name" , value="재영" 이었다.
      // 닉네임을 입력했을 때는 name="nickname" , value = "재영갓"
      //그러면 각각 이렇게 대입이된다.
      // 이름 입력시 --> ["name"]: "재영"
      // 닉네임 입력시 --> ["nickname"]: "재영갓"
      // 이걸 속성접근자라고 한다고 한다..

      //참고 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors

      //결국
      //["name"]: "재영" --> name: "재영"
      //["nickname"]: "재영갓" --> nickname: "재영갓"

      // 이걸 다시 풀어서 쓰면
      //이름입력시
      // setInputs({
      //      ...inputs, //이건 이해된다고했으니 넘어가고.
      //      name: "재영"
      //  })
      //닉네임 입력시
      // setInputs({
      //      ...inputs, //이건 이해된다고했으니 넘어가고.
      //      nickname: "재영갓"
      //  })
      // 참고로 ...inputs에 name과 nickname을 spread 하는데 밑에 또 name과 nickname이 있으면 밑에꺼로 덮어 씌운다고 생각해라(위의 예시)

      // 정리 하자면 name 입력과 nickname 입력을 한꺼번에 setInputs로 처리하려고 저렇게 한거다.
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
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
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
