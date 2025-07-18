import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/NavItems'

function App() {
  console.log("App component rendered"); // Kiểm tra component có render không
  return (
    <>
      <NavItems />
      <Outlet />
    </>
  );
}

export default App
