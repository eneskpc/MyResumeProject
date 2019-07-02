import React, { Component } from 'react'

export default class EducationInformation extends Component {
    render() {
        return (
            <div className="bg-white p-5 my-4 ek-shadow">
                <h3 className="text-info font-weight-bold text-center mb-4" style={{marginLeft:'150px'}}>Education Information</h3>
                <div className="timeline-one-column">
                    <div className="time-dots"></div>
                    <div className="time-cards">
                        <div className="card text-center mb-4">
                            <div className="time-dot">
                                <span className="badge badge-primary">2015 - 2019</span>
                            </div>
                            <div className="card-header bg-primary text-white font-weight-bold">
                                Namık Kemal Üniversitesi - Çorlu Mühendislik Fakültesi
                                </div>
                            <div className="card-body">
                                <h5 className="card-title">Bilgisayar Mühendisliği</h5>
                            </div>
                        </div>
                        <div className="card text-center mb-4">
                            <div className="time-dot">
                                <span className="badge badge-primary">2012 - 2014</span>
                            </div>
                            <div className="card-header bg-primary text-white font-weight-bold">
                                Marmara Üniversitesi - Teknik Bilimler Meslek Yüksekokulu
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Bilgisayar Programcılığı</h5>
                            </div>
                        </div>
                        <div className="card text-center mb-4">
                            <div className="time-dot">
                                <span className="badge badge-primary">2008 - 2012</span>
                            </div>
                            <div className="card-header bg-primary text-white font-weight-bold">
                                Haydarpaşa Anadolu Teknik ve Endüstri Meslek Lisesi
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Bilişim Teknolojileri</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
