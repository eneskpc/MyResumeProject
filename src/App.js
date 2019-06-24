import React from 'react';
import Header from './components/Header';
import PersonCard from './components/PersonCard';
import BasicInfo from './components/BasicInfo';
import Skills from './components/Skills';

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Header />
        <div className="container">
          <PersonCard />
          <BasicInfo />
          <Skills />
        </div>
      </div>
    );
  }
}

export default App;
