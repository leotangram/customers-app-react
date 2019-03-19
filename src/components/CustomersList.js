import React from 'react'
import PropTypes from 'prop-types'
import CustomerListItem from './CustomerListItem'

function CustomersList({ customers, urlPath }) {
  return (
    <div>
      <div className="customers-list">
        {customers.map(customer => (
          <CustomerListItem
            key={customer.dni}
            dni={customer.dni}
            name={customer.name}
            editAction={'Editar'}
            deleteAction={'Eliminar'}
            urlPath={urlPath}
          />
        ))}
      </div>
    </div>
  )
}

CustomersList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired
}

export default CustomersList
