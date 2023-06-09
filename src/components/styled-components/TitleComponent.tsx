import styled from 'styled-components'

interface TitleComponentProps {
  bgColor: string
  fontColor?: string
}
export const TitleComponent = styled.h1<TitleComponentProps>`
  font-size: 1.5em;
  text-align: center;
  color: ${ (props) => props.fontColor ? props.fontColor : 'white' };
  background-color: ${ (props) => props.bgColor };
  padding: 1rem;
  font-weight: 700;
`