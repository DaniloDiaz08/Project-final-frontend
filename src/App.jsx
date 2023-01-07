import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
