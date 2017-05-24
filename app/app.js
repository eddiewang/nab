import React from 'react'
import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from 'containers/Landing'

// import { Provider } from 'mobx-react'
// import { MainStore } from 'stores/MainStore'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj31oezpg5jvz0101vghpdohh'
})

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
})

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Landing />
      </ApolloProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

/*
<Provider mainStore={this.mainStore}>
          <Router>
            <div className='app'>
              <Route exact path='/' component={Landing} />
            </div>
          </Router>
        </Provider>
        */
