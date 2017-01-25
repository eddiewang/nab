import React, { PropTypes } from 'react'

const Title = ({children}) => (
  <h1 className='title'>{children}</h1>
)

Title.propTypes = {
  children: PropTypes.string
}

export default Title
