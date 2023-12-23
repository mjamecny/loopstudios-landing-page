import styled from "styled-components"

const StyledCreation = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.5;

    div {
      opacity: 1;
    }
  }
`

const CreationImg = styled.img`
  display: block;
  width: 100%;
  content: url(${({ url }) => `../public/mobile/${url}`});

  @media (min-width: 48em) {
    content: url(${({ url }) => `../public/desktop/${url}`});
  }
`

const CreationHeading = styled.h3`
  font-family: "Josefin Sans";
  font-weight: 300;
  font-size: 2.4rem;
  text-transform: uppercase;
  line-height: 1.1;
  width: 35%;
  position: absolute;
  top: 50%;
  left: 24px;
  color: var(--color-white);

  @media (min-width: 48em) {
    top: 80%;
    width: 70%;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  opacity: 0;
  transition: opacity 0.3s;
`

export default function Creation({ creation }) {
  const { title, img } = creation

  return (
    <StyledCreation url={img}>
      <Overlay />
      <CreationImg url={img} alt="test" />
      <CreationHeading>{title}</CreationHeading>
    </StyledCreation>
  )
}
