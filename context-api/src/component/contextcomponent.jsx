import React, { useContext } from 'react'
import { Context } from './store';

function ContextComponent() {
   const {name,city} = useContext(Context);

  return (
    <>
     <h1>Context-API example</h1>
     <h4>My name is {name}</h4>
     <h4>My City is {city}</h4>
    </>
  )
}

export default ContextComponent
