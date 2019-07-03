import React from 'react';
import Header from './components/Header';
import PersonCard from './components/PersonCard';
import BasicInfo from './components/BasicInfo';
import Skills from './components/Skills';
import WorkExperiences from './components/WorkExperiences';
import EducationInformation from './components/EducationInformation';
import Project from './components/Project';

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
          <Project />
          <div className="bg-white p-3 mb-4 text-center">
            Copyright &copy; 2019. Enes KAPUCU
          </div>
        </div>
      </div>
    );
  }
}

export default App;
