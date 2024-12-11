import React from 'react'
import './App.css'
import ContextComponent from "./component/contextcomponent"
import { ProviderProperty } from './component/store'; 

function App() {
  return (
    <>
      <ProviderProperty>
      <ContextComponent />
      </ProviderProperty>
    </>
  )
}

export default App
