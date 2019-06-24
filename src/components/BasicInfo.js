import React from 'react';

class BasicInfo extends React.Component {
    render = () => {
        return (
            <div className="bg-white p-5 mb-4 ek-shadow">
                <div className="row">
                    <div className="col-lg-7">
                        <h3 className="text-info font-weight-bold">About</h3>
                        <p>Hello, I am Enes KAPUCU and Full Stack Developer.</p>
                        <h5 className="font-weight-bold">What did I do?</h5>
                        <ul>
                            <li>I studied HTML basic at Primary Education</li>
                            <li>I met C# and Algorithms at High School</li>
                            <li>I met C++ at Sakarya University</li>
                            <li>I studied PHP and Java at Marmara University</li>
                            <li>I developed my knowledge of Java at <a href="https://obss.com.tr/">Open Business Software Solution (OBSS)</a></li>
                            <li>I developed my knowledge of PHP at <a href="https://www.yenicozum.com/">YeniÇözüm Information Technology</a></li>
                            <li>I worked with <a href="https://www.biiclick.com/">PBS Software Agency</a>, Stores Technology(it closed)</li>
                            <li>Apart from these, I have developed my own projects.</li>
                        </ul>
                    </div>
                    <div className="col-lg-5">
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
                            <li>Currently, I am studying at Namık Kemal University Computer Engineering.</li>
                            <li>I am working as full stack developer at <a href="http://www.pro-minds.com">Professional Minds Information Technologies.</a></li>
                            <li>And I believe I will do great things...</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default BasicInfo;