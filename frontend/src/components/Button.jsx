import styled from "styled-components";

export const Button = styled.button`
  display: inline-flex;
  padding: 10px 30px;
  justify-content: center;
  border-radius: 25px;
  border: none;
  font-family: "Space Mono";
  font-weight: 700;
  font-size: 18px;
  background: #cf4b14;
  color: #ffffff;
  
  &:hover {
    background: #A53C10;
  }

  &:active {
  background: #7b2d0c;
  }
`;
