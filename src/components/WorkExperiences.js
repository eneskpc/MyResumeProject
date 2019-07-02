import React, { Component } from 'react';

class WorkExperiences extends Component {
    render() {
        return (
            <div className="bg-white p-5 my-4 ek-shadow text-center">
                <h3 className="text-info font-weight-bold">Work Experience</h3>
                <p className="text-muted">Freelance works are not included. I included them in Projects section</p>
                <div className="row no-gutters timeline d-inline-flex h-100">
                    <div className="col-sm-5">
                        <div className="card custom-card">
                            <div className="card-header bg-primary text-white">
                                Oct 2017 - Present
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Professional Minds Information Technology</h5>
                                <p className="card-text">Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 position-relative">
                        <div className="position-absolute timeline-dots"></div>
                    </div>
                    <div className="col-sm-5">
                        <div className="card custom-card">
                            <div className="card-header bg-primary text-white">
                                Jun 2016 - Nov 2017
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">PBS Digital Agency (biiclick)</h5>
                                <p className="card-text">Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="card custom-card">
                            <div className="card-header bg-primary text-white">
                                Oct 2014 - Aug 2015
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">YeniÇözüm Web Information Services</h5>
                                <p className="card-text">Full Stack Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 position-relative">
                        <div className="position-absolute timeline-dots"></div>
                    </div>
                    <div className="col-sm-5">
                        <div className="card custom-card">
                            <div className="card-header bg-primary text-white">
                                Jul 2014 - Aug 2014
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Open Business Software Solutions (OBSS)</h5>
                                <p className="card-text">Intern</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default WorkExperiences;