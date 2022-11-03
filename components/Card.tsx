import styled from 'styled-components'
import Link from 'next/link'



const CardStyle = styled.div`
  padding: 1.5rem;
  color: white;
  font-family: CODAC;
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;

  &:hover,
  :focus,
  :active {
    color: ${({ theme }) => theme.colors.secondary};
    border-color:${({ theme }) => theme.colors.secondary};
  }
`

const StyledA = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
`
interface CardProps {
  href: string;
  name: string;
}
const StyledLink = ({ href, name }: CardProps) => (
  <Link href={href} passHref legacyBehavior>
    <StyledA>{name}</StyledA>
  </Link>
)

export default function Card({ href, name }: CardProps) {
  return (
    <CardStyle>
      <StyledLink href={href} name={name} />
    </CardStyle>
  )
}
