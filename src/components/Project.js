import React, { Component } from 'react';
import * as moment from 'moment';

export default class Project extends Component {
    render() {
        return (
            <div className="bg-white p-5 my-4 ek-shadow">
                <h3 className="text-info font-weight-bold px-3">Projects</h3>
                <div className="list-group list-group-flush">
                    <div className="list-group-item px-3">
                        <div className="d-flex w-100 justify-content-between">
                            <a href="http://cv.execuhrp.com/" className="d-inline-block h5 mb-1 text-info">ExecuSelect CV Resolver</a>
                            <small>{moment('06/04/2019 20:23').fromNow()}</small>
                        </div>
                        <p className="mb-1">This project is a project that analyzes your resume. It present JSON Data with Rest API.</p>
                        <small>Developed with C# and <i class="fab fa-react text-info"></i>React.js</small>
                    </div>
                    <div className="list-group-item px-3">
                        <div className="d-flex w-100 justify-content-between">
                            <a href="https://github.com/eneskpc/stumeet-spa" className="d-inline-block h5 mb-1 text-info">Social Network for The Students</a>
                            <small>{moment('05/15/2019 20:23').fromNow()}</small>
                        </div>
                        <p className="mb-1">This project is my graduation project in Namık Kemal University.</p>
                        <small>Developed with C# and <i class="fab fa-angular text-danger"></i>Angular.io</small>
                    </div>
                    <div className="list-group-item px-3">
                        <div className="d-flex w-100 justify-content-between">
                            <a href="http://www.bsec-organization.org/" className="d-inline-block h5 mb-1 text-info">B.S.E.C Core Mobile Application</a>
                            <small>{moment('03/04/2019 20:23').fromNow()}</small>
                        </div>
                        <p className="mb-1">This project is a project developed for BSEC Member Gate.</p>
                        <small>Developed with C# and Ionic Framework</small>
                    </div>
                    <div className="list-group-item px-3">
                        <div className="d-flex w-100 justify-content-between">
                            <a href="https://github.com/eneskpc/OnlineFoodOrderingSPA" className="d-inline-block h5 mb-1 text-info">Online Food Ordering</a>
                            <small>{moment('11/25/2018 20:23').fromNow()}</small>
                        </div>
                        <p className="mb-1">This project is a project developed for Agile Development Course in Namık Kemal University.</p>
                        <small>Developed with <i class="fab fa-envira text-success"></i>Java Spring Framework and <i class="fab fa-angular text-danger"></i>Angular.io</small>
                    </div>
                    <div className="list-group-item px-3">
                        <div className="d-flex w-100 justify-content-between">
                            <a href="https://github.com/eneskpc/OnlineFoodOrderingSPA" className="d-inline-block h5 mb-1 text-info">eXecuInfirmary</a>
                            <small>{moment('09/27/2018 20:23').fromNow()}</small>
                        </div>
                        <p className="mb-1">eXecuInfirmary is workplace medical infirmary automation software. it does of all periodic tracking and examination processes. E-Reçete is include. We included E-Reçete at date specified.</p>
                        <small>Developed with VB.Net</small>
                    </div>
                </div>
                <div className="text-center">
                    See more with
                    <div className="fa-3x">
                        <a className="text-primary mr-3" rel="noopener noreferrer" href="https://www.linkedin.com/in/eneskpc" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a  className="text-dark" rel="noopener noreferrer" href="https://github.com/eneskpc" target="_blank">
                            <i className="fab fa-github-square"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
