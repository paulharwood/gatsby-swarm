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

                <hr></hr>

                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <a className="navbar-item" href="https://github.com/paulharwood/gatsby-swarm">
                        S.W.A.R.M. Open Directory on GitHub
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
                <hr></hr>
                  <section>
                    <h3>This website's code is shared using the MIT License</h3>
                    <p>
                      A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
                    </p>
                    <br />
                    <h3>Terms & Conditions : This website's data is open licensed</h3>
                    <p>By sharing information on this website, you agree it will be placed in the public domain, licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
                      <br /><br />  <a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a>
                    </p>
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
