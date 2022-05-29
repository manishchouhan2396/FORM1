import { useState } from 'react';
import './App.css';
import Print from './components/Print';
import Showdata from './components/Showdata';
function App() {

  const [toggles , setToggles] = useState(false);

  return (
    

    <div className="App">
      <button onClick={() =>setToggles(!toggles)}>{toggles ? "Show Form" : "Show List"}</button>
      {toggles ?  <Showdata/> : <Print/>}
    </div>
  );
}

export default App;
