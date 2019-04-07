import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../atoms/Page'
import Container from '../atoms/Container'
import IndexLayout from '../organisms/Layout'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
