import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root')



// 让m和n不相互影响
let _state = []
let index = 0
const myUseState = initialValue => {
  // 只能将index的值保存下来，对currentIndex进行操作，不然无法让index加一
  const currentIndex = index
  _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex]
  const setState = newValue => {
    _state[currentIndex] = newValue
    render()
  }
  index +=1
  return [_state[currentIndex], setState]
}
const render = () => {
  // 在渲染组件之前将index的值重置，否则会一直往上加
  index = 0
  ReactDOM.render( < App / > , rootElement)
}

function App() {
  const [n,setN] = React.useState(0)
  const [m,setM] = React.useState(0)
  return(
    <div className="App">
      <p>{n}</p>
      <p>
        <button onClick={()=>setN(n+1)}>+1</button>
      </p>
      <p>{m}</p>
      <p>
        <button onClick={()=>setM(m+1)}>+1</button>
      </p>
    </div>
  )
}
ReactDOM.render( < App / > , rootElement)