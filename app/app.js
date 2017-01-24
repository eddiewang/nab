import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import Landing from 'Landing'
import Search from 'Search'

import 'less/style.less'
import 'less/normalize.less'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
