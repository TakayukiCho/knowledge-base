import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../atoms/Page'
import Container from '../atoms/Container'
import IndexLayout from '../organisms/Layout'

const NotFoundPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>404: Page not found.</h1>
        <p>
          You've hit the void. <Link to="/">Go back.</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
)

export default NotFoundPage
