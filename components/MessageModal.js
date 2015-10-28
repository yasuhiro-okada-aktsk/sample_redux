import React, { Component, PropTypes } from 'react';

class SampleModal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.showModal();
  }

  componentDidUpdate(prevProps, prevState) {
    this.showModal();
  }

  showModal() {
    $('#messageModal').modal(this.props.modal.visibility)
  }

  render() {
    const { title, message } = this.props.modal;

    return (
      <div className="modal fade" id="messageModal" tabIndex="-1" role="dialog" aria-labelledby="messageModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">{title}</h4>
            </div>
            <div className="modal-body">
              {message}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" onClick={::this.props.onPrimaryButton}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SampleModal.propTypes = {
  modal: PropTypes.object.isRequired,
  onPrimaryButton: PropTypes.func.isRequired
};

export default SampleModal;
