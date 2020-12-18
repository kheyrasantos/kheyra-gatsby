import React from 'react';

const About = () => {
    return(
        <>
        <section className="about" id="about">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="small-12 cell text-center">
                        <div className="about-container wow zoomIn">

                            <div className="profile-image">
                                <div className="hexa">
                                    <div className="hex1">
                                        <div className="hex2">
                                            <img src="/img/khey.jpg" alt="Kheyra Santos" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3>My Name is Kheyra Santos</h3>
                            <p>
                                I am a creative Front-end Developer with 6+ years of experience designing, developing, managing and maintaining complex e-commerce sites. Leveraging JavaScript to build responsive websites and interactive features, I have helped improve UX and drive business growth. I am also a Shopify expert that has worked with multi-million dollar companies excel in their efforts.
                            </p>
                            <a href="/img/resume-kheyrasantos.pdf" className="about-button">My Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default About;
