import styled from '@emotion/styled';

export const ListItem = styled.li`
  border: 2px solid grey;
  padding: 10px;
  width: 400px;
  display: flex;
  justify-content: space-between;
`;
export const Prompt = styled.span`
  margin-bottom: 10px;
  margin-right: 40px;
  color: grey;
`;
export const Button = styled.button`
  background-color: transparent;
  border: 2px solid rgb(27, 113, 242);
  border-radius: 5px;
  color: rgb(27, 113, 242);
  padding: 7px;
  width: 100px;
  font-weight: 500;

  &:hover {
    color: white;
    background-color: rgb(27, 113, 242);
    transition: color, background-color, 1s;
  }
`;
