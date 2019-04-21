import { handleActions } from 'redux-actions'
import {
  FETCH_CUSTOMERS,
  INSERT_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER
} from '../constants'

export const customers = handleActions(
  {
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
    [UPDATE_CUSTOMER]: (state, action) => {
      const customerPayload = action.payload
      const { id } = customerPayload // i = 2, name = Nuevo nombre''
      // [
      //  { id: 1, name: '', ... }
      //  { id: 2, name: 'Viejo nombre', ... }
      //  { id: 3, name: '', ... }
      // ]
      const customers = state
      const initialValue = []
      // Primer interación
      // acc = []
      // { id: 1, name: '', ... }
      // [{ id: 1, name: '', ... }]

      // Segunda iteración
      // acc = [{ id: 1, name: '', ... }]
      // { id: 2, name: 'Viejo nombre', ... } => { id: 2, name: 'Viejo nombre', ... }
      // [{ id: 1, name: '', ... }, { id: 2, name: 'Viejo nombre', ... }]
      const newCustomers = customers.reduce((acc, customer) => {
        if (customer.id === id) {
          return [...acc, customerPayload]
        } else {
          return [...acc, customer]
        }
      }, initialValue)
      return newCustomers
    },
    [DELETE_CUSTOMER]: (state, action) =>
      state.filter(c => c.id !== action.payload)
  },
  []
)
