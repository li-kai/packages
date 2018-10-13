import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.scss';

class App extends React.Component {
  render() {
    return <h1 className={styles.app}>Hello world!</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
