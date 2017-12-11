import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from 'containers/Landing'

import { Provider } from 'mobx-react'
import { MainStore } from 'stores/MainStore'
import { BreakpointProvider } from 'hedron'
import { Helmet } from 'react-helmet'

const breakpoints = {
  sm: 500,
  md: 768,
  lg: 1100
}

class App extends React.Component {
  mainStore = new MainStore()

  render () {
    return (
      <Provider mainStore={this.mainStore}>
        <BreakpointProvider breakpoints={breakpoints}>
          <Router>
            <div className='app'>
              <Helmet>
                <title>My App</title>
              </Helmet>
              <Route exact path='/' component={Landing} />
            </div>
          </Router>
        </BreakpointProvider>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
