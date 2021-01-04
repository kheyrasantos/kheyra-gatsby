exports.onClientEntry = () => {
    window.addEventListener('load', () => {
      document.body.className = document.body.className.replace(/\bno-js\b/, '');
      document.body.style.opacity = 0;
    });
  }