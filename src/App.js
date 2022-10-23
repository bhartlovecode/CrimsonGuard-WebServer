import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import './styles/test.css'


function App() {
  return (
    <div className="App">
      <div className="w-screen h-screen border-2 border-lime-500 border-solid">
        <div className="Navbar inset-x-0 top-0 border-2 border-red-900 border-solid"></div>
        <div className="SideMenu inset-x-0 top-0 w-1/12 border-2 border-pink-600 border-solid"></div>
      </div>
    </div>
  );
}

export default App;
