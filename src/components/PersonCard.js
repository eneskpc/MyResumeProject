import React from 'react';
import profile from '../profile.jpg';

class PersonCard extends React.Component {
    clickHireMe = () => {
        window.location.href = "mailto:enes.kapucu@outlook.com.tr";
    }
    clickDownloadResume = () => {
        window.print();
    }
    render = () => {
        return (
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
                    <button className="custom-btn-info lg mr-2" type="button" onClick={this.clickHireMe}>Hire Me!</button>
                    <button className="custom-btn-light lg" type="button" onClick={this.clickDownloadResume}>Print My Resume!</button>
                </div>
            </div>
        );
    }
}
export default PersonCard;