import React from 'react'
import './styles/index.css'
import {Provider} from 'react-redux'
import GameFunc from './components/GameFunc'
import store from './store/store';
import ModalStart from './components/ModalStart';

function App() {
    return (
        <Provider store={store}>
            <ModalStart/>
            <div className='wrapper'>
                <GameFunc/>
            </div>
        </Provider>
    )
}

export default App
