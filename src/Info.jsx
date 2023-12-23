import styled from "styled-components"

const StyledInfo = styled.section`
  padding-block: 4.8rem;
`

const Container = styled.div`
  max-width: 102.4rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;

  @media (min-width: 60em) {
    grid-template-columns: 1fr 1fr;
    position: relative;
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
  content: url("./mobile/image-interactive.jpg");

  @media (min-width: 48em) {
    content: url("./desktop/image-interactive.jpg");
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media (min-width: 60em) {
    padding: 0;
    padding-top: 6.4rem;
    padding-left: 6.4rem;
    position: absolute;
    background-color: var(--color-white);
    width: 60%;
    right: 0px;
    bottom: 0;
  }
`

const Heading = styled.h2`
  font-family: "Josefin Sans";
  font-weight: 300;
  line-height: 1.1;
  text-transform: uppercase;
  color: var(--color-black);
  font-size: 3rem;
  text-align: center;

  @media (min-width: 60em) {
    text-align: left;
  }
`

const Text = styled.p`
  text-align: center;
  padding-inline: 2.4rem;

  @media (min-width: 60em) {
    text-align: left;
    padding-inline: 0;
  }
`

export default function Info() {
  return (
    <StyledInfo>
      <Container>
        <Image src="mobile/image-interactive.jpg" alt="interactive image" />
        <Content>
          <Heading>The Leader in Interactive VR</Heading>
          <Text>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </Text>
        </Content>
      </Container>
    </StyledInfo>
  )
}
