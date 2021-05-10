import styled from 'styled-components';

export const Con = styled.div`
  background-color:black;
  color:white;
  grid-area: C;
  height: 80vh;
  width: 50vw;
  padding: 12%;


  button{
  font-family: "Playfair Display", serif;
  text-decoration: none;
  background-color: transparent;
  color: white;
  outline: none;
  border-radius: 10px;
  border: none;
  padding: 10px;
  margin-right: -100px;
  border: 1px dashed rgba(43, 20, 255, 0.678);
  border-radius: 10px;
  }

  a:hover,
  a:visited,
  a:link,
  a:active {
  text-decoration: none;
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px;
}

img {
  height: 40px;
  width: 40px;
  margin-bottom: -15px;
  animation: App-logo-spin infinite 5s linear;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

h1,
p {
  margin-top: 2%;
}
h1 {
  font-family: "Playfair Display", serif;
  font-size: 50px;
}
h5 {
  font-family: "Playfair Display", serif;
  letter-spacing: 1px;
}
p {
  font-family: "Playfair Display", serif;
  font-size: 22px;
}
h6 {
  font-family: "Quicksand", sans-serif;
  letter-spacing: 8px;
}

  @media screen and (max-width: 1100px) {
    grid-area: C;
    height: 40vh;
    width: 100vw;
    place-items: center;
    display: grid;

  p {
  font-family: "Playfair Display", serif;
  font-size: 12px;
    }
  }
`