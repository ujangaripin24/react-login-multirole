import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './components/Login'
import User from './pages/User';
import Product from './pages/Product';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
