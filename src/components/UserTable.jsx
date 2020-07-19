import React, { useState } from 'react';

const UserTable = () => {
  const url = 'https://herokuphpapirest.herokuapp.com/delete.php';

  const [equipo, setEquipo] = React.useState([]);
  const [data, setdata] = useState({
    id: '',
  });

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch('https://herokuphpapirest.herokuapp.com/read.php');
    const users = await data.json();
    setEquipo(users);
  };
  function submit(id) {
    debugger;

    data.id = id;

    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8 ',
      },
      body: JSON.stringify(data),
    }).catch((err) => console.log(err));
    window.location.href = window.location.href;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>identificacion</th>
          <th>Nombre</th>
          <th>Curso</th>
          <th>nota1</th>
          <th>nota2</th>
          <th>nota3</th>
        </tr>
      </thead>
      <tbody>
        {equipo.map((item) => (
          <tr key={item.id}>
            <td>{item.identificacion}</td>
            <td>{item.nombre}</td>
            <td>{item.curso}</td>
            <td>{item.nota1}</td>
            <td>{item.nota2}</td>
            <td>{item.nota3}</td>
            <td>
              <button
                onClick={() => submit(item.id)}
                className="button muted-button"
              >
                Eliminar
              </button>
            </td>
            <td>
              <button className="button muted-button">Editar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
