import { useState } from 'react'
import Navbar from '../src/components/Navbar/Navbar'
import Sidebar from '../src/components/sidebar/Sidebar'
import { Routes , Route} from'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/Order/Order'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <hr />
      <div className='flex'>
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/order" element={<Order/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
