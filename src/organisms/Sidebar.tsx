import * as React from 'react'
import styled from '@emotion/styled'
import { DisplayOption } from '../domain/displayOption'

interface PageProps {
  className?: string
  onClickEditAndExport: (
    x: React.Dispatch<React.SetStateAction<DisplayOption>>
  ) => void
}

const Wrapper = styled.div`
  width: 200px;
`

const Sidebar: React.SFC<PageProps> = ({ onClickEditAndExport }) => (
  <Wrapper>
    <button onClick={onClickEditAndExport}>Edit and export</button>
  </Wrapper>
)

export default Sidebar
