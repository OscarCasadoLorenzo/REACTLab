import './App.css'
import Router from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {

  console.log(Router + 'App')
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
