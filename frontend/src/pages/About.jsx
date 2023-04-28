import { useEffect, useState } from 'react';
import React from 'react'


function About() {

  const endpoint = "http://127.0.0.1:8000/api";

  
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      getAllUser();
    })
  
    async function getAllUser() {
      console.log("enviando");
      // const response = await axios.get('http://127.0.0.1:8000/api/users');
      const response = await fetch(`${endpoint}/users`, {method: 'GET'})
      .then((data) => data.json());
      console.log(response);
      setUsers(response);
    }


  return (
    // <div>About</div>
    <div>
      <h1>Info Usuarios Tabla</h1>
      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>CORREO</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.correo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default About