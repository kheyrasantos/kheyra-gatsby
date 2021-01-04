import React from 'react';
import Layout from '../components/layout.js';
import About from '../components/About.js';
import Expertise from '../components/Expertise.js';
import Professional from '../components/Professional.js';
import Personal from '../components/Personal.js';

export default() => {
    return(
        <Layout
        style={{
            opacity: '0'
          }}>
            <About />
            <Expertise />
            <Professional />
            <Personal />
        </Layout>
    );
}
