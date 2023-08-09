import './App.css';
import Dd from './components/dropdown';
import MHomePage from './components/home';
import Dropdown from './components/dropdown';
// import Register from './components/register';
import UserLogin from './components/userLogin';
// import Signup from './components/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/homepage';
import HrLogin from './components/hrLogin';
import ItLogin from './components/itLogin';
import TtLogin from './components/ttLogin';
import Hrregister from './components/Hrregister';
import Itregister from './components/Itregister';
import Ttregister from './components/Ttregister';
import Document from './components/document';
import FForm from './components/practice/practice';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route index path='/' element={<MHomePage/>}/>
          <Route  path='/userLogin' element={<UserLogin/>}></Route>
          <Route path='/HrLogin' element={<HrLogin/>}></Route>
          <Route path='/ItLogin' element={<ItLogin/>}></Route>
          <Route path='TtLogin' element={<TtLogin/>}></Route>
          <Route path='/HrRegister' element={<Hrregister/>}></Route>
          <Route path='/TtRegister' element={<Itregister/>}></Route>
          <Route path='/TtRegister' element={<Ttregister/>}></Route>
        </Routes>
      </Router> */}
      {/* <Document></Document> */}
      <FForm></FForm>
    </div>
  );
}

export default App;
