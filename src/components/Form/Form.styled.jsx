import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 10px;
`;

export const StyledInput = styled.input`
  width: 250px;
  border-radius: 6px;
  outline: none;
  border: 1px solid green;
  padding: 5px;
  background-color: #ffffff;
  box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.5);

  @media screen and (max-width: 768px) {
    width: 250px;
  }

  &:focus {
    border-color: #00ff00;
  }
`;
export const FormButton = styled.button`
  margin-top: 40px;
  padding: 6px;
  width: 80%;
  height: 100%;
  flex-shrink: 0;
  border-radius: 33.5px;
  background: #3cb3ab;
  border: none;
  &:hover {
    color: #fff;
    background-color: #147a73;
    box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.7);
  }
  box-shadow: 0 2px 4px rgba(33, 83, 60, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 150px;
  }
`;
export const ErrorMessage = styled.p`
  font-size: 12px;
  text-align: center;
  max-width: 250px;
  color: red;
  box-shadow: 0 0 10px #ff0000;
  border-radius: 25px;
  padding: 2px 4px;
`;
