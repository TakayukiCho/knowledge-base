import { graphql } from 'gatsby'
import * as React from 'react'
import styled from '@emotion/styled'

import { DisplayOption } from '../domain/displayOption'
import Container from '../atoms/Container'
import Layout from '../organisms/Layout'
import Page from '../atoms/Page'
import Sidebar from '../organisms/Sidebar'
import Content from '../organisms/Content'

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

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  const [displayOption, setDisplayOption] = React.useState(DisplayOption.Show)

  const onClickEditAndExport = () => {
    setDisplayOption(DisplayOption.EditAndExport)
  }

  return (
    <Layout>
      <StyledPage>
        <Sidebar onClickEditAndExport={onClickEditAndExport} />
        <Content
          markdownRemark={data.markdownRemark}
          displayOption={displayOption}
        />
      </StyledPage>
    </Layout>
  )
}

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
