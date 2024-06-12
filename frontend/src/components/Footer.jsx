import styled from "styled-components"

const FooterContainer = styled.div`
  position: fixed;
  width: 100%;
  margin-top: 200px;
  text-align: center;
  padding: 20px 0;
`

const CopyrightText = styled.p`
  font-family: var(--font-family-text);
  font-size: var(--font-size-small);
  color: var(--text-color-secondary);
`
const CreditsText = styled.p`
  font-family: var(--font-family-text);
  font-size: var(--font-size-small);
  color: var(--text-color-secondary);
`

export const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>
        © 2024 _Alexandra _Axel _Lovisa. All rights reserved.
      </CopyrightText>
      <CreditsText>
        Text generated by ChatGPT. Images from Unsplash.
      </CreditsText>
    </FooterContainer>
  )
}