import * as React from 'react'
import styled from '@emotion/styled'

interface PageProps {
  className?: string
}

const Wrapper = styled.div`
  width: 200px;
`

const Sidebar: React.SFC<PageProps> = () => <Wrapper />

export default Sidebar
