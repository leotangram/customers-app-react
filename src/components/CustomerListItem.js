import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function CustomerListItem({ name, editAction, deleteAction, urlPath, dni }) {
  return (
    <div>
      <div className="customers-list-item">
        <div className="field">
          <Link to={`${urlPath}${dni}`}>{name}</Link>
        </div>
        <div className="field">
          <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
        </div>
        <div className="field">
          <Link to={`${urlPath}${dni}/delet`}>{deleteAction}</Link>
        </div>
      </div>
    </div>
  )
}

CustomerListItem.propTypes = {
  dni: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  deleteAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired
}

export default CustomerListItem
