import React from 'react';
import {Helmet} from 'react-helmet';

const Footer = () => {

    return(
        <>
        <footer className="contact" id="contact">
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <div className="small-12 large-6 cell">
                        <h3>Contact Me</h3>
                        <p>
                            If you care to collaborate or are interested in learning more, please feel free to reach out to me by filling out the contact form or via email at:
                        </p>
                        <a href="mailto:kheyra@gmail.com">kheyra@gmail.com</a>
                    </div>

                    <div className="small-12 large-6 cell">
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <textarea placeholder="Type your message..."></textarea>
                            <div className="text-right">
                                <button type="submit" id="submit">SUBMIT <i className="fas fa-chevron-right"></i></button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </footer>

        <button className="back-to-top transition"><i className="fas fa-chevron-up"></i></button>

        <Helmet>
        <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>
        <script src="js/jquery.easing.min.js"></script>
        <script src="js/vendor/what-input.js"></script>
        <script src="js/vendor/foundation.js"></script>
        <script src="js/wow.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9"></script>
        <script src="js/app.js?v=1.0.1"></script>
        </Helmet>
        </>
    );
};

export default Footer;
