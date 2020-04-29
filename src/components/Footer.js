import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
            <div className="columns">
              <div className="column is-offset-1 is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <a className="navbar-item" href="https://github.com/paulharwood/gatsby-swarm">
                        Open Directory on GitHub
                      </a>
                    </li>
                    <li>
                      <a className="navbar-item" href="https://medium.com/@swarm_directory">
                        Articles
                      </a>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>

            </div>
          </div>
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="SWARM"
            style={{ width: '14em', height: '10em', marginBottom: '10em',  marginTop: '4em' }}
          />
        </div>
      </footer>
    )
  }
}

export default Footer
