import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Pokemon() {
  const [name, setName] = useState(null);
  useEffect(() => {
    const fetchNames = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setName(response.data);
      } catch (error) {}
    };
    fetchNames();
  }, []);

  return <ul>{name && name.map((user) => <li key={user.id}>({user.name})</li>)}</ul>;
}

export default Pokemon;
//진우형이 내준 예제 axios통해 제이슨데이터들을 랜더링하는방법
//0.app.js에서 컴포넌트 한개만들어준다
//1.먼저 생각해야대는것은 name값을 li로 쭉뿌리기위해선 useEffect생각해야댄다 이유는 화면이 보여지기 전에 데이터를 불러올수있게끔 하기위해서이다
//2.useEffect세팅을 하고 제이슨을 담기위해선 useState도 세팅해줘야한다
//3.useEffect 에서 []을 마지막에 쓰는이유는 state값이 변동이있을때마다 데이터를 다시끌고오기때문이다
//4.axios로 사이트에있는 제이슨데이터들을 끌고오기위해서 이펙트안에 fetchNames 함수를 만든다
//5.try catch 문으로 axios를 통해 괄호속에 들어있는 api주소의 데이터를 response로 담겠다
//6.모든 데이터를 불러오거나 추가하거나 삭제할때 async를 써줘야한다 데이터들이 꼬이지않기 위해
//7.데이터들이 잘왔는지 response밑에 콘솔을찍어준다 그러면 리스폰스에대한 정보들을 있는데 거기서 객체배열로된 데이터들을 갖고오기위해서 response.data로 콘솔을찍어주면 거기에대한 객체배열데이터들이 들어온다
//8.이후 response.data들을 담기위해선 맵을 사용해야댄다
//9.이때 맵을사용했는데 에러가떳다 이유는 라이프사이클이다 랜더링되는 순서는 1.return() 2.useEffect 3.return()인데
//지금 내 코드로순서로봤을땐 2->1->3 이되므로 맵에 프로포티가 비어있다고 에러가뜰것이다 이걸방지하기위해선
//name&& name.map  name state안에 값이 있으면(&&) 맵을 돌려라
//이렇게되면 리턴이 먼저 실행될때 name&&만날때 데이터들이없으니까 false가 뜨므로 2번을 먼저돌려라 돌렸을땐 useEffect안에 
//name안에 데이터들이 있으므로 true가 된다 