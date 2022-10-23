import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import Logo from "./components/Logo"
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen">
        <Navbar></Navbar>
        <SideMenu></SideMenu>
        <div className='MainBody'>
          <Logo></Logo>
        </div>
      </div>
    </div>
  );
}

export default App;
