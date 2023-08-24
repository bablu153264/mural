import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./home/home";
import FForm from "./components/form";
import HrSideBar from "./Hrhome/siebar";
import Myprofile from "./Hrhome/myprofile";
import ViewFiles from "./components/display/display";
function App() {
  return (
    <div className="App">
      <HomePage/>
      {/* <Router>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0 0 20%" }}>
            <HrSideBar  />
          </div>
          <div style={{ flex: "1", paddingLeft: "0%", overflow: "hidden",maxHeight: "645px", overflowY: "auto"}}>
            <Routes>
              <Route path="/" element={< Myprofile/>} />
              <Route path="/user/viewfiles" element={<FForm />} />
              <Route path="/myprofile" element={<Myprofile />} />
              <Route path="/hr/viewfiles" element={<ViewFiles/>} />
              <Route path="/hr/addfiles" element={<FForm />}/>
            </Routes>
          </div>
        </div>
      </Router> */}
    </div>
  );
}

export default App;
