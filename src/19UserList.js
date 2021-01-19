import React from 'react';

function UserList() {
  const users = [
    {
      id: 1,
      username: 'jaeyoung',
      email: 'jaey5oung@naver.com',
    },
    {
      id: 2,
      username: 'kangpoul',
      email: 'kangpoul@naver.com',
    },
    {
      id: 3,
      username: 'jinwoo',
      email: 'jinwoo@naver.com',
    },
  ];
  return (
    <div>
      <div>
        <b>{users[0].username}</b>
        <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b>
        <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b>
        <span>({users[2].email})</span>
      </div>
    </div>
  );
}

export default UserList;

//위에와같이 써도되지만 더 편하게 쓰기위해선 19UserList2.js로 가주자