import { Outlet } from 'react-router-dom';
import './App.css'
import Pattern from './components/pattern/pattern'

function App() {
  return (
    <div className='pattern'>
      <Pattern />
      <Outlet />
    </div>
  )
}

export default App;
