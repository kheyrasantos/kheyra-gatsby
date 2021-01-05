import React from 'react';
import Layout from '../components/layout.js';
import About from '../components/About.js';
import Expertise from '../components/Expertise.js';
import Professional from '../components/Professional.js';
import Personal from '../components/Personal.js';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { ready: false };
    }
  
    componentDidMount() {
      this.setState({ ready: true });
    }
  
    render() {
      return (
        <Layout style={{ visibility: this.state.ready ? 'visible' : 'hidden' }}>
            <About />
            <Expertise />
            <Professional />
            <Personal />
        </Layout>
      );
    }
  }

  export default App;


// export default() => {
//     return(
        // <Layout>
        //     <About />
        //     <Expertise />
        //     <Professional />
        //     <Personal />
        // </Layout>
//     );
// }
