import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ContainerSample from './components/ContainerSample'
import Page from './components/ContextSample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ContainerSample></ContainerSample>
      <Page></Page>
    </div>
  )
}

export default App
