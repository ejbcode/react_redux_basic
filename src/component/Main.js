import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../redux/actions/actions";

const Main = () => {
  const state = useSelector((state) => state.login);
  const contador = useSelector((state) => state.contador);

  const dispatch = useDispatch();

  const [usuario, setUsuario] = useState({ nombre: "" });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(actions.logIn(usuario));
    setUsuario({ nombre: "" });
  };
  const handleSumaClick = () => {
    dispatch(actions.sumar());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={usuario.nombre}
          onChange={(event) =>
            setUsuario({ [event.target.name]: event.target.value })
          }
        />
        <button type="submit">Log In</button>
      </form>
      {!state.usuario ? null : (
        <div>
          <button onClick={() => dispatch(actions.logOut())}>Log Out</button>
          <p>Hola {state.usuario.nombre}</p>
          <h2>Contador: {contador}</h2>
          <button onClick={() => dispatch(actions.restar())}>Restar</button>
          <button onClick={handleSumaClick}>Sumar</button>
        </div>
      )}
    </>
  );
};

export default Main;
