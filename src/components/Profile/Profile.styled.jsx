import styled from '@emotion/styled';
export const ProfileCard = styled.div`
  display: block;
  text-align: center;
  padding: 0;
  margin-right: auto;
  margin-left: auto;
  background-color: #ffffff;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  box-shadow: 10px 10px 20px #333333;
`;
export const Description = styled.div``;
export const Avatar = styled.img`
  width: 250px;
  height: 250px;
  padding: 5px;
`;
export const Name = styled.p`
  font-size: 16px;
  line-height: 1.2;
  font-weight: 800;
  color: #afb1b8;
`;
export const Tag = styled.p`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  color: #afb1b8;
`;
export const Location = styled.p`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 400;
  color: #afb1b8;
`;
export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid #d9d9d9;
  background-color: #f3f3f3;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  li: last-child
  border-right: none;
  li: last-child
  border-right: none;
`;

export const Label = styled.span`
  display: block;
  list-style: none;
  font-size: 14px;
  line-height: 1.2;
  color: #9fa4ad;
`;
export const StatsBlock = styled.li`
  padding: 14px;
  width: calc(100% / 3);
  border-right: 2px solid #d9d9d9;
`;
export const Quantity = styled.span`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
`;
