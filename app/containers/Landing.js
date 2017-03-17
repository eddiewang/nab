import React from 'react'

import { inject, observer } from 'mobx-react'

@inject('mainStore')
@observer
class Landing extends React.Component {
  componentDidMount () {
    setInterval(() => { this.props.mainStore.counter += 1 }, 1000)
  }
  render () {
    return (
      <div className='container'>
        <div className='card-container'>
          <div className='section'>
            <div className='header'>
              <div className='title'>Custom App</div>
            </div>
          </div>
          <div className='card'>
            <div className='section'>
              <div className='row-sm'>
                <div className='header'>
                  <div className='title'>This is a custom title</div>
                </div>
              </div>
              <div className='buttons'>
                <button className='button primary-action'>Primary</button>
                <button className='button secondary-action'>Secondary</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
