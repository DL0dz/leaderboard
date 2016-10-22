import React from 'react'

const TableHeaderLink = props => {
  return props.top100 === props.top100Link
    ? <p>{props.text}</p>
    : <a href='#' data-top100={props.top100Link} onClick={props.onGetUsers} >{props.text}</a>
}

export default TableHeaderLink
