import React from 'react';
import ReactDOM from 'react-dom';
import withImportantStyle from './src/withImportantStyle.js';

var Wrapped = withImportantStyle('span');

class C extends React.Component {
  render() {
    return (
      <div>
        <Wrapped style={{color: 'red', backgroundColor: 'blue !important'}}>
          Hello, world!
        </Wrapped>
      </div>
    )
  }
}

ReactDOM.render(<C />, document.getElementById('root'), () => {
  console.log(document.getElementById('root').innerHTML);
});

