import './App.css'
import { Parent } from './components/UseImperativeHandleSample'
import { ImageUploader } from './components/useRefSample'

function App() {
  return (
    <div className="App">
      <ImageUploader></ImageUploader>
      <Parent></Parent>
    </div>
  )
}

export default App
