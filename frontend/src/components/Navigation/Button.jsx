import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  height: 45px;
  background-color: #cf4b14;
  color: #ffffff;
  border-radius: 40px;
  border: none;
  font-family: var(--font-family-text);
  font-size: var(--font-size-text-mob);
  font-weight: 700;
  display: block;
  justify-content: center;
  margin-bottom: 20px;

  &:hover {
    background-color: #ee723f;
  }

  &.active {
    background-color: #ee723f;
  }

  @media (min-width: 768px) {
    width: 200px;
    height: 60px;
    font-size: var(--font-size-large);
    display: block;
  }
`;
