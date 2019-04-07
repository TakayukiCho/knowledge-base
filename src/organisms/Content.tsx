import * as React from 'react'

import Container from '../atoms/Container'
import { DisplayOption } from '../domain/displayOption'

type Props = {
  markdownRemark: {
    html: string
    excerpt: string
    frontmatter: {
      title: string
    }
  }
  displayOption: DisplayOption
}

export default ({ markdownRemark }: Props) => (
  <Container>
    <h1>{markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
  </Container>
)
