import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {sendRequestAction} from './redux/actions.js'

function App() {
  const data = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div className="show">
        <ul>
        {data.map((item, index)=><li key={index}>{item.id} {item.name}</li>)}
        </ul>
      </div>
      <button onClick={()=>dispatch(sendRequestAction("send"))}>Fetch</button>
    </div>
  );
}

export default App;
