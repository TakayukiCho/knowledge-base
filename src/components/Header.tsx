import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

// @ts-ignore
import Logo from '-!svg-react-loader!../imgs/logo.svg'

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.white};
  color: ${transparentize(0.5, colors.white)};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-betweeen;
  align-items: flex-end;
  padding: 15px 0;
  height: 100%;
`

const LogoLink = styled(Link)`
  margin-right: 40px;
  height: 30px;
`

// const HomepageLink = styled(Link)`
//   color: ${colors.white};
//   font-size: 1.2rem;
//   font-weight: 600;
//   line-height: 1;
//   &:hover,
//   &:focus {
//     text-decoration: none;
//   }
// `

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = () => (
  <StyledHeader>
    <HeaderInner>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
    </HeaderInner>
  </StyledHeader>
)

export default Header
