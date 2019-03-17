import { graphql } from 'gatsby'
import * as React from 'react'
import styled from '@emotion/styled'

import Container from '../components/Container'
import Page from '../components/Page'
import Sidebar from '../organisms/Sidebar'
import IndexLayout from '../organisms/Layout'

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const StyledPage = styled(Page)`
  display: flex;
`

// マークダウンを表示して、ダウンロード

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <StyledPage>
      <Sidebar />
      <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
    </StyledPage>
  </IndexLayout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`
