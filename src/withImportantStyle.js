import React from 'react';
import ReactDOM from 'react-dom';
var camelToDash = require('./camelToDash');

module.exports = function withImportantSupport(Comp) {
  return class WithImportantSupportWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.handleRef = (ref) => {
        this.ref = ref;
        this.element = ReactDOM.findDOMNode(ref);
      };
    }

    // public
    getRef() { return this.ref; }

    componentDidMount() {
      this.setImportantStyles();
    }
    componentDidUpdate() {
      this.setImportantStyles();
    }
    setImportantStyles() {
      if (!this.props.style) return;
      Object.keys(this.props.style).forEach((key) => {
        var value = this.props.style[key];
        if (value.indexOf('!important') === -1) return;
        var dashedKey = camelToDash(key);
        this.element.style.setProperty(
          dashedKey,
          value.replace(/\s*!important/g, ''),
          'important'
        );
      });
    }
    render() {
      return <Comp ref={this.handleRef} {...this.props} />
    }
  };
}

