import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppFrame from '../components/AppFrame'
import CustomerEdit from '../components/CustomerEdit'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class NewCustomerContainer extends Component {
  handleSubmit = () => {}

  handleOnSubmitSuccess = () => {}

  handleOnBack = () => {}

  renderBody = () => {
    return (
      <CustomerEdit
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleOnSubmitSuccess}
        onBack={this.handleOnBack}
      />
    )
  }

  render() {
    return (
      <div>
        <AppFrame header={`Edición del cliente`} body={this.renderBody()} />
      </div>
    )
  }
}

NewCustomerContainer.propTypes = {}

export default withRouter(
  connect(
    null,
    null
  )(NewCustomerContainer)
)
