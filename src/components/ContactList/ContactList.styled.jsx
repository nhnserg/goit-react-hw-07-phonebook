import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 4px;
`;

export const ItemName = styled.span`
  font-weight: bold;
  margin-right: 10px;
  
`;

export const DeleteBtn = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  

  &:hover {
    background-color: #c0392b;
  }
`;
