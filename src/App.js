import React from 'react';
import TopSearchComponent from './components/Search';
import initialDetails from './data/initialDetails';

function App() {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <TopSearchComponent details={initialDetails}/>
    </div>
  );
}

export default App;