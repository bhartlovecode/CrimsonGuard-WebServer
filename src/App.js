import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import Logo from "./components/Logo"
import './styles/app.css';
import UploadButton from "./components/UploadButton";

function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen">
        <Navbar></Navbar>
        <SideMenu></SideMenu>
        <div className='MainBody'>
          <Logo></Logo>
          <UploadButton></UploadButton>
        </div>
      </div>
    </div>
  );
}

export default App;
