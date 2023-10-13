import styled from '@emotion/styled';

export const SearchForm = styled.div`
  width: 450px;
  display: flex;
  justify-content: center;
  border-radius: 6px;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const SearchInput = styled.input`
  width: 250px;
  border-radius: 6px;
  outline: none;
  border: 1px solid green;
  padding: 5px;
  background-color: #ffffff;
  box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.5);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    & {
      width: 500px;
    }
  }

  &:focus {
    background-color: #fff;

    color: green;
    border-color: #00ff00;
  }

  font-size: 18px;
`;
