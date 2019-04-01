import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import AppFrame from '../components/AppFrame'
import CustomersActions from '../components/CustomersActions'

class HomeContainer extends Component {
  handleOnclick = () => {
    console.log('Handle on CLick')
    this.props.history.push('/customers')
  }
  render() {
    return (
      <div>
        <AppFrame
          header="home"
          body={
            <div>
              Esta es la pantalla inicial
              <CustomersActions>
                <button onClick={this.handleOnclick}>
                  Listado de clientes
                </button>
              </CustomersActions>
            </div>
          }
        />
      </div>
    )
  }
}

HomeContainer.propTypes = {}

export default withRouter(HomeContainer)
