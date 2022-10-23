import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import './styles/test.css'


function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen">
        <Navbar></Navbar>
        <SideMenu></SideMenu>
      </div>
    </div>
  );
}

export default App;
