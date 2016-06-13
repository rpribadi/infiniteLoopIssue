import React from 'react';
import { IndexLink } from 'react-router';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h2>This is Home Page</h2>
        <h3>Default Configuration</h3>
        <ul>
          {this.props.settings.map(config =>
          <li key={config.id}>{config.id}: {config.value}</li>
          )}
        </ul>
        <h3>Quick Links</h3>
        <ul>
          <li>
            <button onClick={() => this.props.goToModule('/product/1')}>
              CLICK ME to go to Product 1
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

Layout.propTypes = {
  settings: React.PropTypes.array.isRequired,
  goToModule: React.PropTypes.func.isRequired
};

export default Layout;
