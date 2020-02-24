import React, {useRef, useEffect} from 'react';
import './App.css';
import CETEI from 'CETEIcean';

function App() {
  const teiDiv = useRef(null);

  useEffect(() => {
    async function getTEI() {
      const ct = new CETEI();
      
      // Override default CETEI TEI behaviors.
      ct.addBehavior('tei', 'teiHeader', undefined);
  
      const teiData = await ct.getHTML5(`example.xml`);
  
      // Add here other DOM operations as needed.
      teiDiv.current.innerHTML = teiData.outerHTML;
    }
    getTEI();
  })
  
  return (
    <div className="App">
      <div ref={teiDiv}>Loading...</div>
    </div>
  );
}

export default App;
