import styled from 'styled-components'
import { media } from '../../theme'
import { StyledButton } from '../Button/styles'

export const ActionsWrapper = styled.div`
  display: none;
  ${media.tablet`
    display: block;
    margin-left: ${({ theme }) => theme.sizes.large};
    padding-left: ${({ theme }) => theme.sizes.large};
    border-left: solid 1px ${({ theme }) => theme.colors.lightGray};
  `};

  ${StyledButton} {
    margin-right: ${({ theme }) => theme.sizes.regular};

    &:last-child {
      margin-right: 0;
    }
  }
`
