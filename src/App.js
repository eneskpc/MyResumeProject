import React from 'react';
import profile from './profile.jpg';
import profileBg from './profile-bg.jpg';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="top-area">
            <div className="container d-flex justify-content-between align-items-center">
              <h1>I'm Enes KAPUCU</h1>
              <div className="contact-information">
                <div>enes.kapucu@outlook.com.tr</div>
                <div>+90(539) 944 9818</div>
              </div>
            </div>
          </div>
          <div className="bottom-area">
          </div>
        </div>
        <div className="container">
          <div className="person-box bg-secondary ek-shadow">
            <img alt="Enes KAPUCU" src={profile} />
            <h1>Enes KAPUCU</h1>
            <div><b>&#123;</b>Full Stack Developer<b>&#125;</b></div>
            <div>
              <a rel="noopener noreferrer" href="https://www.linkedin.com/in/eneskpc" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a rel="noopener noreferrer" href="https://github.com/eneskpc" target="_blank">
                <i className="fab fa-github-square"></i>
              </a>
            </div>
            <div className="mt-4">
              <button className="custom-btn-info lg mr-2" type="button">Hire Me!</button>
              <button className="custom-btn-light lg" type="button">Download Resume!</button>
            </div>
          </div>
          <div className="bg-white p-4 mb-4 ek-shadow">
            <div className="row">
              <div className="col-md-8">
                <h3 className="text-info font-weight-bold">About</h3>
                <p>Hello, I am Enes KAPUCU and Full Stack Developer.</p>
                <h5 className="font-weight-bold">What did I do?</h5>
                <ul>
                  <li>I studied HTML basic at Primary Education</li>
                  <li>I met C# and Algorithms at High School</li>
                  <li>I met C++ at Sakarya University</li>
                  <li>I studied PHP and Java at Marmara University</li>
                  <li>I developed my knowledge of Java at Open Business Software Solution (OBSS)</li>
                  <li>I developed my knowledge of PHP at YeniÇözüm Information Technology</li>
                  <li>I worked with PBS Software Agency, Inka Tescil Internet Services, Stores Technology(it closed)</li>
                  <li>Apart from these, I have developed my own projects.</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3 className="text-info font-weight-bold">Basic Information</h3>
                <div className="row">
                  <div className="col-md-4 font-weight-bold">Date of Birth</div>
                  <div className="col-md-8">June 16, 1994</div>
                  <div className="col-md-4 font-weight-bold">Place of Birth</div>
                  <div className="col-md-8">Kadikoy-Istanbul/TURKEY</div>
                  <div className="col-md-4 font-weight-bold">Languages</div>
                  <div className="col-md-8">Turkish, English</div>
                  <div className="col-md-4 font-weight-bold">Gender</div>
                  <div className="col-md-8">Male</div>
                </div>
                <h5 className="font-weight-bold mt-3">What do I am doing?</h5>
                <ul>
                  <li>Currently, I am studying at Namık Kemal University Computer Engineering and I am working as freelance developer GoldmanSoft Smart Technology Systems.</li>
                  <li>And I believe I will do great things...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
