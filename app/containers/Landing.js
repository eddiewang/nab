import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('mainStore')
@observer
class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    )
  }
}

export default Landing
