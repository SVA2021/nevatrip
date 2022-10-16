import React, {useState} from 'react';
import {Main} from './pages/main';
import {Second} from './pages/second';
import {Table} from './pages/table';
import {TimeCalc} from './pages/time';

function App() {

  const [task, setTask] = useState(0)

  return (
    <div className="container">
      <div className='changer' >
        <button onClick={() => setTask(0)} disabled={task === 0}>task 1-1</button>
        <button onClick={() => setTask(1)} disabled={task === 1}>task 1-2</button>
        <button onClick={() => setTask(2)} disabled={task === 2}>task 2-1</button>
        <button onClick={() => setTask(3)} disabled={task === 3}>task 2-2</button>
      </div>
      {task === 0 && <Main />}
      {task === 1 && <Second />}
      {task === 2 && <Table />}
      {task === 3 && <TimeCalc />}
    </div>
  );
}

export default App;
