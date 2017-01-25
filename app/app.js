import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from 'containers/Landing'

import 'less/style.less'
import 'less/normalize.less'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
