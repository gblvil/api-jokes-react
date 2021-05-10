import styled from 'styled-components'

export const Fot = styled.div`
  background-color:black;
  color:white;
  grid-area: D;
  height: 10vh;
  width: 50vw;
  place-items: center;
  display: flex;
  justify-content: center;
  gap: 5px;
  font-family: "Playfair Display", serif;
  font-size:10px;
  letter-spacing: .5px;

  a{
    text-decoration: none;
    background-color: transparent;
    color: whitesmoke;
  }

  @media screen and (max-width: 1100px) {
    grid-area: D;
    height: 10vh;
    width: 100vw;
    place-items: center;
    display: flex;
    justify-content: center;
    gap: 5px;
  }
`