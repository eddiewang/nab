import React from 'react'
import { inject, observer } from 'mobx-react'
import Button from 'components/Button'

@inject('mainStore')
@observer
class Landing extends React.Component {
  render () {
    return (
      <div>
        <Button />
      </div>
    )
  }
}

export default Landing
