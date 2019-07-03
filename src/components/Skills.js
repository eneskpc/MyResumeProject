import React from 'react';
import skills from '../skills.png';

class Skills extends React.Component {
    render = () => {
        return (
            <div className="bg-white p-5 my-4 ek-shadow">
                <div className="row">
                    <div className="col-lg-6 d-flex">
                        <div className="bg-light rounded d-flex align-items-center px-5">
                            <img src={skills} width="100%" alt="Enes KAPUCU's Skills" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="text-info font-weight-bold">Skills</h3>
                        <p className="mt-2 mb-0">.NET Framework / .NET Core</p>
                        <div className="progress" style={{ overflow: 'unset' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated justify-content-center align-items-end" style={{ width: '95%' }}>
                                <div className="border rounded-circle bg-white p-2 text-secondary" style={{ marginRight: '-5px' }}>
                                    95%
                        </div>
                            </div>
                        </div>
                        <p className="mt-2 mb-0">Javascript</p>
                        <div className="progress" style={{ overflow: 'unset' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated justify-content-center align-items-end" style={{ width: '95%' }}>
                                <div className="border rounded-circle bg-white p-2 text-secondary" style={{ marginRight: '-5px' }}>
                                    95%
                        </div>
                            </div>
                        </div>
                        <p className="mt-2 mb-0">PHP</p>
                        <div className="progress" style={{ overflow: 'unset' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated justify-content-center align-items-end" style={{ width: '95%' }}>
                                <div className="border rounded-circle bg-white p-2 text-secondary" style={{ marginRight: '-5px' }}>
                                    95%
                        </div>
                            </div>
                        </div>
                        <p className="mt-2 mb-0">Java</p>
                        <div className="progress" style={{ overflow: 'unset' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated justify-content-center align-items-end" style={{ width: '80%' }}>
                                <div className="border rounded-circle bg-white p-2 text-secondary" style={{ marginRight: '-5px' }}>
                                    80%
                        </div>
                            </div>
                        </div>
                        <p className="mt-2 mb-0">WebSocket</p>
                        <div className="progress" style={{ overflow: 'unset' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated justify-content-center align-items-end" style={{ width: '90%' }}>
                                <div className="border rounded-circle bg-white p-2 text-secondary" style={{ marginRight: '-5px' }}>
                                    90%
                        </div>
                            </div>
                        </div>
                        <p className="mt-2 mb-0">ASP.NET Web API</p>
                        <div className="progress" style={{ overflow: 'unset' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated justify-content-center align-items-end" style={{ width: '90%' }}>
                                <div className="border rounded-circle bg-white p-2 text-secondary" style={{ marginRight: '-5px' }}>
                                    90%
                        </div>
                            </div>
                        </div>
                        <p className="mt-2 mb-0">SOAP Web Services</p>
                        <div className="progress" style={{ overflow: 'unset' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated justify-content-center align-items-end" style={{ width: '75%' }}>
                                <div className="border rounded-circle bg-white p-2 text-secondary" style={{ marginRight: '-5px' }}>
                                    75%
                        </div>
                            </div>
                        </div>
                        <p className="mt-2 mb-0">Java Spring Framework</p>
                        <div className="progress" style={{ overflow: 'unset' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated justify-content-center align-items-end" style={{ width: '75%' }}>
                                <div className="border rounded-circle bg-white p-2 text-secondary" style={{ marginRight: '-5px' }}>
                                    75%
                        </div>
                            </div>
                        </div>
                        <p className="mt-2 mb-0">React.js</p>
                        <div className="progress" style={{ overflow: 'unset' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated justify-content-center align-items-end" style={{ width: '75%' }}>
                                <div className="border rounded-circle bg-white p-2 text-secondary" style={{ marginRight: '-5px' }}>
                                    75%
                        </div>
                            </div>
                        </div>
                        <p className="mt-2 mb-0">Angular</p>
                        <div className="progress" style={{ overflow: 'unset' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated justify-content-center align-items-end" style={{ width: '90%' }}>
                                <div className="border rounded-circle bg-white p-2 text-secondary" style={{ marginRight: '-5px' }}>
                                    90%
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;