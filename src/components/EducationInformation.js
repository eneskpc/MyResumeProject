import React, { Component } from 'react'

export default class EducationInformation extends Component {
    render() {
        return (
            <div className="bg-white p-5 my-4 ek-shadow">
                <h3 className="text-info font-weight-bold text-center mb-4" style={{marginLeft:'120px'}}>Education Information</h3>
                <div className="timeline-one-column">
                    <div className="time-dots"></div>
                    <div className="time-cards">
                        <div className="card text-center mb-4">
                            <div className="time-dot">
                                <span className="badge badge-primary">2015 - 2019</span>
                            </div>
                            <div className="card-header bg-primary text-white font-weight-bold">
                                Namık Kemal University - Çorlu Faculty of Engineering
                                </div>
                            <div className="card-body">
                                <h5 className="card-title">Computer Engineering</h5>
                                <p className="card-text">Bachelor's Degree</p>
                            </div>
                        </div>
                        <div className="card text-center mb-4">
                            <div className="time-dot">
                                <span className="badge badge-primary">2012 - 2014</span>
                            </div>
                            <div className="card-header bg-primary text-white font-weight-bold">
                                Marmara University - Vocational School of Technical Sciences
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Computer Programming</h5>
                                <p className="card-text">Associate Degree</p>
                            </div>
                        </div>
                        <div className="card text-center mb-4">
                            <div className="time-dot">
                                <span className="badge badge-primary">2008 - 2012</span>
                            </div>
                            <div className="card-header bg-primary text-white font-weight-bold">
                                Haydarpaşa Anatolian Technical and Industrial Vocational High School
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Information Technologies</h5>
                                <p className="card-text">High School</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
