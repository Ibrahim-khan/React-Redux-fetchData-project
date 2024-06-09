import React from 'react'
import './App.css'
import Todos from './Componets/Todos'

function App() {

  return (
    <>
      <div className='App'>
        <h1>React Redux Fetch Data</h1>
        <Todos />
      </div>
    </>
  )
}

export default App



// step1 : install package
// step2 : constants define
// step3 : async action creator
// step4 : reducer
// step5 : create store
// step6 : provide store
// step7 : use store
// step8 : adding css
