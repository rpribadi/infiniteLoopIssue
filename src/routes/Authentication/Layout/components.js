import React from 'react';
import { connect } from 'react-redux';

import LoginForm from '../LoginForm';

class Layout extends React.Component {
  componentWillMount() {
    const query = this.props.location.query;

    if (query) {
      this.props.setRedirect(query.redirect);
    }
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className='container'>
        <LoginForm />
      </div>
    );
  }
}

Layout.propTypes = {
  location: React.PropTypes.object.isRequired,
  setRedirect: React.PropTypes.func.isRequired
};

export default Layout;
