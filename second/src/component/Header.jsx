import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
  return (
    <div>
        <h1>{props.name}</h1>
        <h1>{props.age}</h1>
    </div>
  )
}

Header.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number
}
