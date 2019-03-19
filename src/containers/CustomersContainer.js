import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import AppFrame from '../components/AppFrame'
import CustomersList from '../components/CustomersList'
import CustomersActions from '../components/CustomersActions'

const customers = [
  {
    dni: '27000000',
    name: 'Juan Perez',
    age: 37
  },
  {
    dni: '30000000',
    name: 'Otro',
    age: 35
  },
  {
    dni: '33000000',
    name: 'Luis Martinez',
    age: 32
  }
]

class CustomersContainer extends Component {
  handleAddNew = () => {
    this.props.history.push('/customers/new')
  }
  renderBody = customers => (
    <div>
      <CustomersList customers={customers} urlPath={'customers/'} />
      <CustomersActions>
        <button onClick={this.handleAddNew}>Nuevo cliente</button>
      </CustomersActions>
    </div>
  )

  render() {
    return (
      <div>
        <AppFrame header="home" body={this.renderBody(customers)} />
      </div>
    )
  }
}

export default withRouter(CustomersContainer)
