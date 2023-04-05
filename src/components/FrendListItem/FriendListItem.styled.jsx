import styled from '@emotion/styled';
export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  box-shadow: 5px 5px 20px #333333;
  align-items: center;
  padding: 5px;
`;
export const ListStatus = styled.span`
  display: block;
  margin-left: 20px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${({ status }) => {
    return status ? 'green' : 'red';
  }};
`;
export const ListAvatar = styled.img`
  margin-left: 7px;
`;
export const ListName = styled.p`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 400;
  color: ##2f303a;
  margin-left: 7px;
`;
