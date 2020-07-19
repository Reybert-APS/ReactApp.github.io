import React, { useState } from 'react';
import Axios from 'axios';

export default function AddUserForm(props) {
  const url = 'https://herokuphpapirest.herokuapp.com/insert.php';

  const [data, setdata] = useState({
    nombre: '',
    identificacion: '',
    curso: '',
    nota1: '',
    nota2: '',
    nota3: '',
  });

  function submit(e) {
    debugger;
    e.preventDefault();
    Axios.post(url, JSON.stringify(data)).then((res) => {
      res.data = data;
      alert('agregado correctamente ', data);

      //  fetch(Url, {
      //     method: 'POST', // or 'PUT'
      //     body: JSON.stringify(data), // data can be `string` or {object}!
      //     headers:{
      //       'Content-Type': 'application/json'
      //     }
      //   }).then(res => res.json())
      //   .catch(error => console.error('Error:', error))
      //   .then(response => console.log('Success:', response));
    });
    window.location.href = window.location.href;
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setdata(newData);
  }
  return (
    <div className="container mr-0">
      <h1> Agregar Empleado</h1>
      <hr />
      <br />
      <form onSubmit={(e) => submit(e)}>
        <div className="form-group">
          <label for="nombre">Nombre</label>
          <input
            onChange={(e) => handle(e)}
            value={data.nombre}
            type="text"
            name="nombre"
            className={`form-control is-valid`}
            id="nombre"
            placeholder="nombre"
          />
          <label for="apellido">Identificacion</label>
          <input
            onChange={(e) => handle(e)}
            value={data.identificacion}
            type="text"
            name="identificacion"
            className="form-control is-valid"
            id="identificacion"
            placeholder="identificacion"
          />
          <label for="identificacion">curso</label>
          <input
            onChange={(e) => handle(e)}
            value={data.curso}
            type="text"
            name="curso"
            className="form-control is-valid"
            id="curso"
            placeholder="curso"
          />
          <label for="correo">Nota 01</label>
          <input
            onChange={(e) => handle(e)}
            value={data.nota1}
            type="text"
            name="nota1"
            className="form-control data.noombre != is-valid "
            id="nota1"
            placeholder="nota1"
          />
          <label for="correo">Nota 02</label>
          <input
            onChange={(e) => handle(e)}
            value={data.nota2}
            type="text"
            name="nota2"
            className="form-control data.noombre != is-valid "
            id="nota2"
            placeholder="nota2"
          />
          <label for="correo">Nota 03</label>
          <input
            onChange={(e) => handle(e)}
            value={data.nota3}
            type="text"
            name="nota3"
            className="form-control data.noombre != is-valid "
            id="nota3"
            placeholder="nota3"
          />
        </div>

        <button type="submit" className="btn btn-success">
          Agregar
        </button>
      </form>
    </div>
  );
}
