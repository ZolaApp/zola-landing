import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: ${({ theme }) => theme.sizes.huge};
`

export const Column = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.sizes.large};
  border-left: 1px solid ${({ theme }) => theme.colors.lightGray};

  &:last-child {
    border-right: 1px solid ${({ theme }) => theme.colors.lightGray};
  }
`

export const Header = styled.div`
  display: flex;
`

export const Price = styled.span`
  margin-left: auto;
`

export const Feature = styled.div`
  display: flex;
  align-items: center;
  min-height: 2.9em;
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.sizes.large};
`

const dotColors = {
  green: '#6fd500',
  orange: '#FFA107',
  red: '#FB4359'
}

export const Dot = styled.span`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${({ color }) => dotColors[color] || dotColors.green};
  margin-right: 0.7em;
`

export const FeatureTexts = styled.div``

export const FeatureNote = styled.span`
  display: block;
  width: 100%;
  font-style: italic;
`

export const OpenSourceLink = styled.a`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -${({ theme }) => theme.sizes.regular}
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark}
`
