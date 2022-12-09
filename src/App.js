import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/sb-admin-2.css';
import './css/fontawesome-free/css/all.min.css';
import Dashboard from './dashboard.js';
import Users from './users.js';
import Createuser from './createuser';
import Viewuser from './viewuser.js';
import Edituser from './edituser.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PortalLayout from './PortalLayout';
import Login from './login';


function App() {

  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/portal' element={<PortalLayout />}>
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='users' element={<Users />}></Route>
          <Route path='/portal/users/createuser' element={<Createuser />}></Route>
          <Route path='/portal/users/viewuser/:id' element={<Viewuser />}></Route>
          <Route path='/portal/users/edituser/:id' element={<Edituser />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
