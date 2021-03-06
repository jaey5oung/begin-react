import React, { useState, useRef, useMemo, useCallback } from 'react';
import './App.css';
import CreateUser from './21CreateUser';
import UserList from './19UserList2';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter((user) => user.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email, users]);

  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
      console.log(id);
    },
    [users]
  );

  const onToggle = useCallback(
    (id) => {
      setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
    },
    [users]
  );

  const count = useMemo(() => countActiveUsers(users), [users]);
  //useMemo를 사용하게되면 필요한연산만 사용할수잇게된다 컴포넌트 최적화
  return (
    <>
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;

//jsx조건
//0: 태그는 무조건 닫아줘야대고 내용이없을땐 셀프클로징 태그로 닫아준다 ex <input/>
//1: 2개이상태그가있을땐 <></>프레그먼트로 감싸준다
//2: jsx내에서 자바스크립트함수를 불러올땐 const name = 'react' 라고했을땐 <div>{name}</div> 이런식으로 불러오면댄다
//3: jsx에서 스타일을 사용할땐 위와같이 객체형태로 넣어줘야한다
//4: css클래스를 사용할땐 class가아니라 className으로 써줘야한다

//메모장에 필기한 면접준비하기 1분자기소개,기술면접,프로젝트면접