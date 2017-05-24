import React from 'react'
// import styled from 'styled-components'
// import { inject, observer } from 'mobx-react'
import 'styles/main.scss'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'

class Landing extends React.Component {
  render() {
    if (this.props.getData.loading) {
      return <div>loading</div>
    } else {
      return (
        <div>
          <h3>welcome to nab</h3>
        </div>
      )
    }
  }
}

const getData = gql`
  query getData {
    allCustomers {
      id
      name
    }
}
`

export default compose(graphql(getData, { name: 'getData' }))(Landing)
