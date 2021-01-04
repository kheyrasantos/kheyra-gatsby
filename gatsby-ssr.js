exports.onRenderBody = ({ setBodyAttributes }) => {
    setBodyAttributes({
        className: 'no-js',
        opacity: '0'
      });
  };