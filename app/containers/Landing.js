import React from 'react'
import Title from 'components/Title'

import { inject, observer } from 'mobx-react'

@inject('mainStore')
@observer
class Landing extends React.Component {
  componentDidMount () {
    setInterval(() => { this.props.mainStore.counter += 1 }, 1000)
  }
  render () {
    return (
      <div className='main-container'>
        <Title>hello universe.</Title>
        <h2>{this.props.mainStore.counter}</h2>
      </div>
    )
  }
}

export default Landing
