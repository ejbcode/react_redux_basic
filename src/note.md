# React Redux with Hooks

Redux es un patron de arquitectura de datos que permite manejar el estado de la app de forma global

En React, el state fluye de componente a componente mediante de props. Pero al crecer una app, se hace necesario manejar el state como un estado global (store) permitiendo que cualquier componente pueda acceder a el, y cambiarlo (condiciones aplican)

<center> 
<img src="https://image.slidesharecdn.com/006-170302100440/95/006-react-redux-framework-6-638.jpg?cb=1488450003" width=300px /></center>

## Principios Basicos de Redux

- El store es la unica fuente de la verdad
- El state es solo de lectura (inmutable)
- Los cambios se hacen por medio de Acciones (Actions) y funciones puras (Reducers)

## Partes de Redux

### El Store

Es el objeto central que contiene el state de la aplicacion. Es creado usando el metodo **_createStore_** que importamos de la libreria redux. Se le pasa como parametro los reducers

```js
import { createStore } from ‘redux’;
let store = createStore(reducer);
```

### Actions

El action es un objecto que contienen la informacion que necesita ser cambiada y es enviada al store. Al menos contiene un type el cual por convencion es un nombre descriptivo escrito en uppercase.

Adicional se le puede pasar un _payload_ que es la info a cambiar. puede ser un objeto,array, un string, o boleano

```js
{
   type: ADD_ITEM,
   payload: {name: ‘Iphone XX’, price: 100000}
}
```

Se puede usar **_Action Creators_** que son funciones que retornan acciones(los objetos que se le pasan al dispatch del store). Son opcionales pero es una buena practiva usarlas.

Asi que el ejemplo anterior en vez de pasar una accion, se utilizaria una funcion que contruye el action, quedano asi.

```js
const newItem = item => {
  return {
    type: ADD_ITEM,
    payload: {
      name: ‘Iphone XX’, price: 100000}
  }
}

// y para invocarlos seria
dispatch(newItem(item))
```

### Reducers

Los reducers son funciones puras de javascript que reciben dos parametros. El estado anterior y una accion.
El reducer devuelve un nuevo state de la aplicacion.

El state no es cambiado directamente, sino q se saca una copia del state y al nuevo state se actualiza mediante alguna funcion.

Los reducers se ayudan con el uso de switch, que permite estudiar cada caso action.type y devolver un stado nuevo dependiendo del caso

<img src="https://miro.medium.com/proxy/1*EdiFUfbTNmk_IxFDNqokqg.png" width=300px /></center> Flujo de Redux

## Implementacion Redux con React

Primero crear un basico de React con

`npx create-react-app redux-start`

instalar las dos dependecias necesarias de redux que seria

`npm i redux react-redux`

La estructura de carpeta siempre varia segun la persona, si bien existen convenciones y buenas practicas, siempre existen ligeras diferencias. El boilerplate de redux puede ser un poco grande y a veces repetitivo. En ejemplos pequeños se evita usar las subcarpetas por comodidad y rapidez, pero si buscas rapidez y comodidad en una app pequeña, quizas es mejor irse con usecontext o directamente con props.

La convencion indica que dentro de .src/ se debe tener una carpeta para los actions, otra para los reducers. Aun se puede ir mas alla y creat una carpeta llamada redux y colocar todo dentro alli ordenado por subcarpeta y asi mantener mas ordenado y limpio la estructura de folder. Hagamos eso.

Se crea
.src/redux/actions
.src/redux/reducers
.src/redux/types
.src/redux/store.js

Se hace un ejemplo donde tenemos dos estados separados, uno para incrementaun contador, y el otro que maneje el stato del login del usuario.

### Types

Los types es simplemente un nombre que por convencion se utiliza uppercase. Con el uso del type evitamos quemar codigo en nuestros actions y reducers.

```js
//.src/redux/types/index.js

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const SET_USER = "SET_USER";
export const LOG_OUT = "LOG_OUT";
```

Se nota facilmente dos bloques correspondientes los type de cada store

### Actions

El action se puede generar uno por cada estado y despues se importan combinados, o se usa un solo archivo pero se separan para que visualmente se vea un bloque que corresponde a a los actions de un store vs los otros actions.

se crea

```js
//.src/redux/actions/index.js

import * as type from "../types";

const sumar = () => {
  return {
    type: type.SUMAR,
  };
};

const restar = () => {
  return {
    type: type.RESTAR,
  };
};

const logIn = (useData) => {
  return {
    type: type.LOG_IN,
    payload: userData,
  };
};

const logOut = () => {
  return {
    type: type.LOG_OUT,
  };
};
```

### Reducers

Si bien el store inicial que esta en el archivo de reducer deberia ser uno solo, se puede usar varios store para dar mas orden y se combinan con combineReducers from "redux";

Se hace un ejemplo donde tenemos dos estados separados, uno para incrementaun contador, y el otro que maneje el state del login del usuario.

Dentro de la carpeta Reducer se crea un archivo index.js
