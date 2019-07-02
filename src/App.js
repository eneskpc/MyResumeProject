import React from 'react';
import Header from './components/Header';
import PersonCard from './components/PersonCard';
import BasicInfo from './components/BasicInfo';
import Skills from './components/Skills';
import WorkExperiences from './components/WorkExperiences';
import EducationInformation from './components/EducationInformation';

class App extends React.Component {
  render = () => {
    return (
      <div>
        <Header />
        <div className="container">
          <PersonCard />
          <BasicInfo />
          <Skills />
          <WorkExperiences />
          <EducationInformation />
        </div>
      </div>
    );
  }
}

export default App;
