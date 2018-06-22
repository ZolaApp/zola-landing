import styled from 'styled-components'
import { media } from '../../theme'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  ${media.tablet`flex-direction: row;`};
  justify-content: space-between;
  align-items: center;
`
