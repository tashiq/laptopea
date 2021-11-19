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
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import Purchase from './Pages/Purchase/Purchase'
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Pay from './Pages/Dashboard/Pay/Pay';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import DashReview from './Pages/Dashboard/DashReview/DashReview';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
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
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="pay" element={<Pay />} />
              <Route path="myorders" element={<MyOrders />} />
              <Route path="review" element={<DashReview />} />
              <Route path="add" element={<AddProduct />} />
              <Route path="manageorders" element={<ManageOrders />} />
              <Route path="manageproducts" element={<ManageProduct />} />
              <Route path="makeadmin" element={<MakeAdmin />} />
              <Route element={<AdminRoute />} >

              </Route>
            </Route>
            <Route path="/purchase/:id" element={<Purchase />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
