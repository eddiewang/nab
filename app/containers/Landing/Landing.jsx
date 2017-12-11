import React from 'react'
import { inject, observer } from 'mobx-react'
import { Column, Row, Page } from 'hedron'
import Button from 'components/Button'
import { Helmet } from 'react-helmet'

@inject('mainStore')
@observer
class Landing extends React.Component {
  render () {
    return (
      <div>
        <Helmet>
          <title>Welcome Page</title>
        </Helmet>
        <Page>
          <Row
            style={{ height: '100vh', textAlign: 'center' }}
            alignItems='center'
          >
            <Column>
              <p>Welcome - let's start building.</p>
            </Column>
          </Row>
        </Page>
      </div>
    )
  }
}

export default Landing
