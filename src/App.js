import './styles/index.css';
import Game from "./components/Game";
import ModalStart from "./components/ModalStart";

function App() {
  return (<div>
<ModalStart/>
          <div className={'wrapper'}>
              <Game/>
          </div>
  </div>

    
  );


}

export default App;
