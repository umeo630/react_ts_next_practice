import './App.css'
import { CountButton } from './components/ContainerComponent'

function App() {
  return (
    <div className="App">
      <CountButton label='Count' maximum={10}></CountButton>
    </div>
  )
}

export default App
