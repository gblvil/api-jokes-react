import styled from 'styled-components'

export const Nav = styled.div`
  background-color:black;
  grid-area: A;
  height: 10vh;
  width: 50vw;
  display: flex;
  justify-content: space-around;
  place-items: center;
  font-size: 12px;
  font-family: "Playfair Display", serif;

  .obj {
  display: flex;
  align-content: center;
  justify-content: flex-start;
  background-color: rgba(43, 20, 255, 0.678);
  backdrop-filter: blur(5px);
  width: 20px;
  height: 20px;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
button,
a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  background-color: transparent;
  color: white;
  border-radius: 10px;
  border: none;
  padding: 10px;
}

  @media screen and (max-width: 1100px) {
    grid-area: A;
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    place-items: center;
    font-size: 12px;
}
`