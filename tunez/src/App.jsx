import { useState } from 'react'
import { Router } from './routes/Router'
import { Column } from './components/column/column'

function App() {


  return (
    <div className="App">
      <Column/>
     <Router/>
    </div>
  )
}

export default App
