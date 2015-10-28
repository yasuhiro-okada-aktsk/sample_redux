import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import * as Actions from '../actions';

import MessageModal from "../components/MessageModal.js"

class App extends Component {
  constructor(props) {
    super(props);
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage();
    e.preventDefault();
  }

  handleShowError(e) {
    this.props.showErrorMessage("sample error!!");
    e.preventDefault();
  }

  handleShowErrorDelayed(e) {
    this.props.showErrorMessageDelayed("delayed sample error!!");
    e.preventDefault();
  }

  handleShowModal(e) {
    const title = "Sample Modal";
    const message = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    this.props.showModal(title, message);
    e.preventDefault();
  }

  handleModalPrimaryButton(e) {
    this.props.hideModal();
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
        <li><a href="#" onClick={::this.handleShowErrorDelayed}>show error (in 1 sec)</a></li>
      </ul>
    );
  }

  renderModal() {
    const { messageModal } = this.props;

    return (
      <div>
        <button type="button" className="btn btn-primary btn-lg" onClick={::this.handleShowModal}>
          show modal
        </button>

        <MessageModal modal={messageModal} onPrimaryButton={::this.handleModalPrimaryButton}/>
      </div>

    );
  }

  render() {
    const { children, inputValue } = this.props;
    return (
      <div>
        {this.renderErrorMessage()}
        {this.renderSample()}
        {this.renderModal()}

        {children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  pushState: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  messageModal: PropTypes.object.isRequired,
  // Injected by React Router
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
    messageModal: state.messageModal,
    errorMessage: state.errorMessage,
    inputValue: state.router.location.pathname.substring(1)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Actions, dispatch),
    pushState
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
