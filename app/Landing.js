import React from 'react'
import { Link } from 'react-router'

class Landing extends React.Component {
  render () {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>svideo</h1>
          <input type='text' placeholder='Search' />
          <Link to='/search'>or Browse All</Link>
        </div>
      </div>
    )
  }
}

export default Landing
