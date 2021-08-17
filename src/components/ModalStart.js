import React, {Component} from "react";
import '../styles/modalStart.css';


export default class ModalStart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          display: 'block'
        };
      }
    
      hideWindow(e) {
        this.setState({ display: 'none' });
      }
 
    
    render() {
        const style  = { display: this.state.display }
        return (        


<div id="modal-start" style={style}>
    <div id="overlay-start">
        <div id="modal-window-start">
            <div id="content-start">
                Чтобы начать новую игру, нажмите Старт.<br/>
                <p> Пусть победит сильнейший!</p>
            </div>
            <div id="btn-start_game" onClick={e=>this.hideWindow()}>
                Старт
            </div>
        </div>
    </div>
</div>

        
        );
    }
}