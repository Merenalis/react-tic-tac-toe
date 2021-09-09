import React, {Component} from 'react';
import '../styles/modalStart.css';

export default class ModalStart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'block'
        };
    }

    hideWindow(e) {
        this.setState({display: 'none'});
    }

    render() {
        const style = {display: this.state.display}
        return (
            <div id="modal-start" style={style}>
                <div id="overlay-start">
                    <div id="modal-window-start">
                        <div id="content-start">
                            Press Start to start a new game. <br/>
                            <p> May the strongest win!</p>
                        </div>
                        <div id="btn-start_game" onClick={e => this.hideWindow()}>
                            Start
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}