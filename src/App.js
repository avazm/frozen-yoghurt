import React, {useState} from 'react';
import { FrozenYoghurtBuilder } from './components/FrozenYoghurtBuilder';
import './App.css';

function App() {

  const [submittedYoghurts, setSubmittedYoghurts] = useState([])

  const onSubmitYoghurt = (yoghurt) => {
    setSubmittedYoghurts([...submittedYoghurts, yoghurt]);
  }

  return (
    <div className="app">
      <section className="jumbo">
        <h1 className="title is-1">Frozen Yoghurt Builder</h1>
      </section>
      <section className="builder">
        <FrozenYoghurtBuilder onSubmit={(data) => onSubmitYoghurt(data)}></FrozenYoghurtBuilder>
      </section>
      <section className="yoghurts-json">
        {JSON.stringify(submittedYoghurts)}
      </section>
    </div>
  );
}

export default App;
