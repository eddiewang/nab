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
        <input type='text' />
      </Container>
    )
  }
}

export default Landing
