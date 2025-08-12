import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './components/Login'
import User from './pages/User';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/user" element={<User/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
