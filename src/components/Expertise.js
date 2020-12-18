import React from 'react';

const Expertise = () => {

    return(
        <>
        <section className="expertise" id="expertise">
            <div className="grid-container text-center">
                <div className="grid-x grid-padding-x">
                    <div className="small-12 large-12 cell">
                        <h3>My Expertise</h3>
                        <p className="expertise-p">
                        </p>
                    </div>
                </div>
                <div className="grid-x grid-padding-x">
                    <div className="small-12 large-4 cell e-cell">
                        <div className="wow fadeIn expertise-item-container">
                            <div className="expertise-item-inner">
                                <i className="fas fa-code"></i>
                                <h4>HTML/CSS + JAVASCRIPT</h4>
                                <p>
                                    The core building blocks needed on every website
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="small-12 large-4 cell e-cell">
                        <div className="wow fadeIn expertise-item-container">
                            <div className="expertise-item-inner">
                                <i className="fas fa-tablet-alt"></i>
                                <h4>Responsive Design</h4>
                                <p>
                                    Design and development of websites responsive to the user’s behavior &amp; environment based on screen size, platform and orientation
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="small-12 large-4 cell e-cell">
                        <div className="wow fadeIn expertise-item-container">
                            <div className="expertise-item-inner">
                                <i className="fas fa-tags"></i>
                                <h4>Shopify Expert</h4>
                                <p>
                                    Extensive knowledge of Shopify’s templating language Liquid and API making e-commerce easier for you
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Expertise;
