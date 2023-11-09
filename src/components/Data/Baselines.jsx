import react from 'react';
import data from './genies.json';

function Baselines() {
  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', width:'100%', marginBottom: '10vh'}}>
      <h2 class="section__title">Baseline intervention scores</h2>
      <img src="/images/baselines.png" alt="baselines" width='100%'/>
    </div>
  );
}

export default Baselines;