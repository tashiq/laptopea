import './App.css';
import AuthProvider from './Context/AuthProvider';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Products/Products';
import Register from './Pages/Register/Register';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="products" element={<Products />} />
          <Route path="register" element={<Register />} />


        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
