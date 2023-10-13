import styled from '@emotion/styled';
import { FaTrash } from 'react-icons/fa';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 15px;
`;

export const Item = styled.li`
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: 600;
`;

export const ContactName = styled.p`
  margin: 0px;
  color: rgb(8, 38, 13);
`;

export const DeleteButton = styled.button`
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
    width: 50px;
  }
`;

export const DeleteIcon = styled(FaTrash)`
  width: 20px;
  height: 20px;
  /* &:hover,
  &:focus {
    color: rgb(181, 181, 127);
  } */
`;
