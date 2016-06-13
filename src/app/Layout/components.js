import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

class CoreLayout extends React.Component {
  componentWillMount() {
    this.props.fetchInitialSettings();
  }

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this.refs.container);
    this.renderContent();
  }

  componentWillReceiveProps(newProps) {
    this.renderContent(newProps);
  }

  renderContent(props) {
    props = props || this.props;

    if (props.firstLoadDone) {
      ReactDOM.render(<Provider store={props.store}>{props.children}</Provider>, this.node);
    }
    else {
      ReactDOM.render(<div />, this.node);
    }
  }

  render() {
    return (
      <div>
        <h1>Infinite Loop App</h1>
        <div className='main' ref='container'></div>
      </div>
    );
  }
}

CoreLayout.propTypes = {
  fetchInitialSettings: React.PropTypes.func.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};

export default CoreLayout;
