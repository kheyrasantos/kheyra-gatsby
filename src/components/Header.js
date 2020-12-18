import React from 'react';

const Header = () => {

    return(
        <>
        <section className="hero">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <header className="text-center">
                        <ul className="no-bullet">
                            <li>
                                <a href="#about" className="page-scroll nav-animation">About <span className="hide-for-small">Me</span></a>
                            </li>
                            <li>
                                <a href="#professional" className="page-scroll nav-animation">Professional</a>
                            </li>
                            <li>
                                <a href="#personal" className="page-scroll nav-animation">Personal</a>
                            </li>
                            <li>
                                <a href="#contact" className="page-scroll nav-animation">Contact <span className="hide-for-small">Me</span></a>
                            </li>
                        </ul>
                    </header>
                </div>
                <div className="grid-x grid-padding-x">
                    <div className="small-12 cell">
                        <div className="title-container">
                            <h1>
                                <span className="name-animation">K</span>
                                <span className="name-animation">h</span>
                                <span className="name-animation">e</span>
                                <span className="name-animation">y</span>
                                <span className="name-animation">r</span>
                                <span className="name-animation">a</span>
                                <br />
                                <span className="name-animation">S</span>
                                <span className="name-animation">a</span>
                                <span className="name-animation">n</span>
                                <span className="name-animation">t</span>
                                <span className="name-animation">o</span>
                                <span className="name-animation">s</span>

                            </h1>
                            <h2>Front End Developer</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="animated-text"></div>
        </section>
        </>
    );
};

export default Header;
