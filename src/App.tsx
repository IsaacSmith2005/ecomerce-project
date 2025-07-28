import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/NavItems'
import Footer from './components/Footer'

function App() {
  console.log("App component rendered"); // Kiểm tra component có render không
  return (
    <>
      <NavItems />
      <div className='min-vh-100'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App
