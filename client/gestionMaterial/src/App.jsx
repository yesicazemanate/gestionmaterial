import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './components/login.jsx'
import Register from './components/register.jsx'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
