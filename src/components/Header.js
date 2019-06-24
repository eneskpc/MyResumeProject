import React from 'react';

class Header extends React.Component {
    render = () => {
        return (
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
        );
    }
}
export default Header;