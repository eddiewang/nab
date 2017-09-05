import React from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'
import 'styles/spectre.scss'

@inject('mainStore')
@observer
class Landing extends React.Component {
  render () {
    return (
      <div>
        <Nav className='container grid-xl'>
          <header className='navbar'>
            <section className='navbar-section'>
              <div className='form-group'>
                <input
                  className='form-input'
                  type='text'
                  placeholder='Search...'
                />
              </div>
            </section>
            <section className='navbar-center'>Brand</section>
            <section className='navbar-section'>
              <a href='#' className='btn btn-link'>Twitter</a>
              <a href='#' className='btn btn-link'>GitHub</a>
            </section>
          </header>
        </Nav>
        <Hero className='bg-secondary'>
          <div className='container grid-xl text-center'>
            <h2>let's start building</h2>
          </div>
        </Hero>
        <Footer className='container grid-xl'>
          Made in Toronto
        </Footer>
      </div>
    )
  }
}

const Hero = styled.div`
padding: 150px 0;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
`

const Nav = styled.div`
padding: 50px 0;
`

const Footer = styled.div`
padding: 50px 0;
display: flex;
align-items: center;
justify-content: center;
`

export default Landing
