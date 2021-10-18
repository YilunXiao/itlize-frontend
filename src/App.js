import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <Login/>
      <Signup/>
    </div>
  );
}

export default App;
