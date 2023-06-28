import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import LoginPage from './Pages/Login';
import Product from './Pages/Product';
import SignupPage from './Pages/Signup';
import DashBoard from './Pages/DashBoard';
import Navbar from './Components/Navbar';
import Allroutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
     {/* <LoginPage/> */}
     {/* <Product/> */}
     {/* <SignupPage/>
      */}
      {/* <DashBoard/> */}
    </div>
  );
}

export default App;
