import styled from "styled-components";

const PlaceWeatherStyled = styled.div`
  background-color: #5584ac;
  color: white;
  font-size: 1.2em;
  height: 120px;
  width: 200px;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 10px;
  :hover {
    background-color: #2e4a65;
  }
  :active {
    background-color: #000000;
  }
  h3 {
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
    }
  }
`;

export default PlaceWeatherStyled;
