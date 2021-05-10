import styled from 'styled-components'
import statue from './statue.jpg'

export const RightS = styled.div`
  grid-area: B;
  height: 100vh;
  width: 50vw;
  place-items: center;
  display: flex;
  justify-content: center;
  gap: 30px;
  background-image: linear-gradient(
        to left,
        rgba(138, 138, 138, 0),
        rgba(119, 119, 119, 0),
        rgb(0, 0, 0)
      ),
      url(${statue});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1100px) {
    grid-area: B;
    height: 40vh;
    width: 100vw;
    place-items: center;
    display: grid;
    background-image: linear-gradient(
        to bottom,
        rgba(138, 138, 138, 0),
        rgba(119, 119, 119, 0),
        rgb(0, 0, 0)
      ),
      url(${statue});
  }
  `