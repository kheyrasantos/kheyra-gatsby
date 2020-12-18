import React from 'react';
import Head from '../components/Head.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Layout = (props) => {
    const {children} = props;

    return(
        <>
            <Head />
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
