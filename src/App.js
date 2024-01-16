import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Router>
    
    <Header/>

      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/profile" element = { <Profile/> }/>
        <Route path="/forgotpassword" element = { <ForgotPassword/> }/>
        <Route path="/offers" element={ <Offers/> }/>
        <Route path="/signin" element={ <Signin/> }/>
        <Route path="/signup" element = {<Signup/>}/>
      </Routes>
    </Router>
    </>
  );
}
 
export default App;
