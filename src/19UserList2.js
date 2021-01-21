import React from 'react';

function User({ user, onRemove }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
      <button onClick={()=> onRemove(user.id)}>삭제</button>
    </div>
  );
}
//이부분에서 프롭스를 비구조할당으로 사용하는게 아직 어색하다
function UserList({ users, onRemove }) {
  return (
    <div>
      {/* <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} /> */}
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} />
      ))}
    </div>
  );
}
//맵같은경우도 아직 익숙지 않아 한눈에 코드를 해석하는것이 불편하다 연습문제같은걸 내줬으면 좋겠다
//맵을쓸땐 고유의값을 안넣주게되면 키에관한 에러가뜨게되는데 이걸 해결하기위해선 위에 객체배열에 고유의값인 id값을 넣어주면된다
//여기서 위와같이 배열이 고정적이라면 이런식으로 해도 무방하나 배열이 유동적으로 바뀔수있다면 자바스크립트의 내장함수인 map을 쓰는게 맞다

export default UserList;
