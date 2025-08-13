import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './components/Login'
import User from './pages/User';
import Product from './pages/Product';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/product" element={<Product/>}/>
            <Route path="/add-user" element={<AddUser/>}/>
            <Route path="/edit-user/:id" element={<EditUser/>}/>
            <Route path="/add-product" element={<AddProduct/>}/>
            <Route path="/edit-product/:id" element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
