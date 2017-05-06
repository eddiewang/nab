import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import 'styles/main.scss'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`

@inject('mainStore')
@observer
class Landing extends React.Component {
  render () {
    return (
      <Container>
        <div>
          <h3>welcome to nab</h3>
        </div>
      </Container>
    )
  }
}

export default Landing
