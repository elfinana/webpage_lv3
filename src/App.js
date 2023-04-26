import "./App.css";
import GlobalStyle from "./components/GlobalStyle";
import Input from "./components/Input";
import Modal from "./components/Pinkmodal";
import Openmodal from "./components/Openmodal";
import Selectbox from "./components/Selectbox";
import Topbutton from "./components/Topbutton";

function App() {
  return (
    <div>
      <Topbutton />
      <Input />
      <Openmodal />
      <Selectbox />
    </div>
  );
}

export default App;
