import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { resetErrorMessage, showErrorMessage } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage();
    e.preventDefault();
  }

  handleShowError(e) {
    console.log("handleShowError");
    this.props.showErrorMessage("sample error!!");
    e.preventDefault();
  }

  renderErrorMessage() {
    const { errorMessage } = this.props;
    if (!errorMessage) {
      return null;
    }

    return (
      <p style={{ backgroundColor: '#e99', padding: 10 }}>
        <b>{errorMessage}</b>
        {' '}
        (<a href="#"
            onClick={::this.handleDismissClick}>
          Dismiss
        </a>)
      </p>
    );
  }

  renderSample() {
    return (
      <ul>
        <li><a href="#" onClick={::this.handleShowError}>show error</a></li>
      </ul>
    );
  }

  render() {
    const { children, inputValue } = this.props;
    return (
      <div>
        {this.renderErrorMessage()}
        {this.renderSample()}
        {children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  showErrorMessage: PropTypes.func.isRequired,
  pushState: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    inputValue: state.router.location.pathname.substring(1)
  };
}

export default connect(mapStateToProps, {
  resetErrorMessage,
  showErrorMessage,
  pushState
})(App);
