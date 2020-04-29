import React from 'react'

import Layout from '../../components/Layout'
import Directory from '../../components/Directory'

export default class DirectoryIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <Directory />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
