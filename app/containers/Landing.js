import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`

@inject('mainStore')
@observer
class Landing extends React.Component {
  render () {
    return (
      <Container>
        <h1>let's get coding</h1>
      </Container>
    )
  }
}

export default Landing
