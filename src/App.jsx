import { useState } from 'react';
import './App.css';
import Draggable from './components/Draggable';


function App() {
  const [draggables, setDraggables] = useState([
    <Draggable key={0}>Initial Child</Draggable>,
  ]);

  const addParent = () => {
    const newDraggable = (
      <Draggable key={draggables.length}>
        {draggables[draggables.length - 1]}
      </Draggable>
    );
    setDraggables([...draggables, newDraggable]);
  };

  return (
    <div className="App">
      <button onClick={addParent}>Add Parent</button>
      <div className="draggable-container">
        {draggables[draggables.length - 1]}
      </div>
    </div>
  );
}

export default App;
