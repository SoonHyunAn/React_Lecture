import { useState } from 'react';
import '../apps/App.css';


export default function User(props) {
  const initUsers = [
    { id: 1, name: 'admin', email: 'admin@human.com' },
    { id: 2, name: 'james', email: 'james@naver.com' }
  ];
  const [users, setUsers] = useState(initUsers);

  const [form, setForm] = useState({ id: '', name: '', email: '' });
  const handleSubmit = (event) => {
    event.preventDefault(); // submit 버튼을 누르면 페이지 자동 변환 방지
    setUsers([...users, form]);
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value })
  }

  return (
    <div className="card">
      <h1>사용자 목록</h1>
      <table border={1}>
        <tr><th>ID</th><th>name</th><th>email</th></tr>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </table>

      <button onClick={() => {
        const id = prompt("아이디 추가");
        const name = prompt("이름 추가");
        const email = prompt("이메일 추가");
        setUsers([...users, { id, name, email }]);
      }}>추가</button>

      <button onClick={() => {
        const id = prompt("계정 삭제");
        //  let newUser = users.filter(users => users.id != id);
        //  newUser = [];
        //  for (let user of users)
        //    if (users.id !=id)
        //     array.push(user);
        setUsers(users.filter(users => users.id != id));
      }}>삭제</button>


    </div>
  )
}


// 사용자 리스트 화면
// 1. admin admin@human.com
// id 값 입력받고, name입력받고, email 입력받아 admin 아래에 추가하기