import React from 'react';
import { FrozenYoghurtBuilder } from './components/FrozenYoghurtBuilder';
import './App.css';

function App() {
  return (
    <div className="app">
      <section className="builder">
        <FrozenYoghurtBuilder></FrozenYoghurtBuilder>
      </section>
    </div>
  );
}

export default App;
