import React, { PropTypes } from 'react'
import TableHeaderLink from './TableHeaderLink'

const TableHeader = props =>
  <thead>
    <tr>
      <th>#</th>
      <th>Camper Name</th>
      <th>
        <TableHeaderLink {...props} top100Link='recent' text='Points in past 30 days' />
      </th>
      <th>
        <TableHeaderLink {...props} top100Link='alltime' text='All time points' />
      </th>
    </tr>
  </thead>

TableHeader.proptypes = {
  onGetUsers: PropTypes.func.isRequired
}

export default TableHeader
