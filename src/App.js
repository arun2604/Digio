import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import First from './pages/First'
import Second from './pages/Second'
import './App.css'

function App() {
  return (
    <div>
    <Router >
      <Routes>
        <Route path='/' element={<First />} />
        <Route path='/second' element={<Second />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App