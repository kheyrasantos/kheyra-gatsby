import React from 'react';

const Personal = () => {

    return(
        <>
        <section className="personal" id="personal">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="small-12 large-12 cell text-center">
                        <h3>Personal Work</h3>
                        <p>
                        </p>
                    </div>
                    <div className="small-12 medium-12 large-4 cell wow fadeInUp">
                        <a href="http://helpinghominids.com/" target="_blank" rel="noreferrer" className="personal-work-item">
                            <img src="/img/helping-hominids.png" alt="Helping Hominids" />
                        </a>
                    </div>
                    <div className="small-12 medium-12 large-4 cell wow fadeInUp">
                        <a href="http://roarieyum.com/" target="_blank" rel="noreferrer" className="personal-work-item">
                            <img src="/img/roarieyum.png" alt="Roarie Yum" />
                        </a>
                    </div>
                    <div className="small-12 medium-12 large-4 cell wow fadeInUp">
                        <a href="https://www.pocket7clothing.com/" target="_blank" rel="noreferrer" className="personal-work-item">
                            <img src="/img/pocket7.png" alt="Pocket7 Clothing" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Personal;
