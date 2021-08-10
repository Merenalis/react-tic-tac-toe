import React, {Component} from "react";
import check from "./Check";

export default class MainClass extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          move: 0,
          show: 'none',
          winner:'',
          nolik:0,
          krestik:0,
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.clear = this.clear.bind(this)
      }
  
    handleSubmit(e) {      
            this.setState(state => ({
                move: ++state.move,
              }));
            this.state.move % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
           const temp=check(this.state.move)
              if (temp!==undefined) {
                  this.setState(() => ({
                    move: 0,
                    show:'block'
                  }));
                  

                  if (temp===1) {
                    this.setState((state) => ({
                      winner:'Победа крестиков',
                      krestik:++state.krestik
                    }));
                  }else if(temp===2){
                    this.setState((state) => ({
                      winner:'Победа ноликов',
                      nolik: ++state.nolik,
                      
                    }));
                  }else{
                    this.setState(() => ({
                      winner:'Ничья'
                      
                    }));
                  }
               }
           
      }
clear(){
  const boxes = document.getElementsByClassName('box');
  for (let ii = 0; ii < 9; ii++) {
    boxes[ii].innerHTML = '';
}
this.setState(() => ({
  show:'none'
  
}));
}
  

    render() {

const style = {display:this.state.show}

  return (<div>         
    <h1>Крестики - нолики</h1>
<div id="results">
  <p>Результат: {' '+this.state.winner}</p>
</div>
<div className='score'>
<span>Нолики: {this.state.nolik}<br/> Крестики: {this.state.krestik}
</span>
</div>
<div className='btn'><button onClick={this.clear}>Play again</button>
</div>

<div className="playground">
<div id='overlay' style={style}></div>

<div id="area" onClick={e=>this.handleSubmit(e)}>
<div className="box"></div>
<div className="box"></div>
<div className="box"></div>
<div className="box"></div>
<div className="box"></div>
<div className="box"></div>
<div className="box"></div>
<div className="box"></div>
<div className="box"></div>
</div>
</div>

</div>
);

    }
}