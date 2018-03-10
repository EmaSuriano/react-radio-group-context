import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

export default class ExampleComponent extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const { text } = this.props;
    const a = 2;
    return <div className={styles.test}>Example: {text}</div>;
  }
}
