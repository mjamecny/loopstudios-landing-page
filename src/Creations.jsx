import styled from "styled-components"
import Creation from "./Creation"

const StyledCreations = styled.section`
  padding-block: 4.8rem;

  @media (min-width: 48em) {
    padding-block: 6.4rem;
  }
`

const Container = styled.div`
  max-width: 102.4rem;
  margin: 0 auto;
  padding-inline: 2.4rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media (min-width: 48em) {
    row-gap: 3.2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content 1fr;
    justify-items: stretch;
  }
`

const Heading = styled.h2`
  font-family: "Josefin Sans";
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-black);

  @media (min-width: 48em) {
    text-align: start;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;
  margin-top: 3.2rem;

  @media (min-width: 48em) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column: 1 / -1;
    margin-top: 0;
  }
`

const Button = styled.button`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: var(--color-black);
  letter-spacing: 3px;
  background-color: transparent;
  border: 1px solid var(--color-black);
  border-radius: 1px;
  padding-block: 0.8rem;
  padding-inline: 3.2rem;
  margin-top: 2.4rem;
  transition: all 0.3s;

  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }

  @media (min-width: 48em) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    margin-top: 0;
    justify-self: end;
  }
`

const creations = [
  { title: "deep earth", img: "image-deep-earth.jpg" },
  { title: "night arcade", img: "image-night-arcade.jpg" },
  { title: "soccer team vr", img: "image-soccer-team.jpg" },
  { title: "the grid", img: "image-grid.jpg" },
  { title: "from up above vr", img: "image-from-above.jpg" },
  { title: "pocket borealis", img: "image-pocket-borealis.jpg" },
  { title: "the curiosity", img: "image-curiosity.jpg" },
  { title: "make it fisheye", img: "image-fisheye.jpg" },
]

export default function Creations() {
  return (
    <StyledCreations>
      <Container>
        <Heading>Our creations</Heading>
        <Grid>
          {creations.map((creation, i) => (
            <Creation key={i} creation={creation} />
          ))}
        </Grid>
        <Button>See all</Button>
      </Container>
    </StyledCreations>
  )
}
