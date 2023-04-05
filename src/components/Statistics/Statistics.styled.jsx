import styled from '@emotion/styled';
export const StatsSection = styled.section`
  margin: 40px auto;
  padding: 0;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 10px 10px 20px #333333;
`;
export const StatsTitle = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
  margin: 0;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 800;
  color: #afb1b8;
`;
export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const StatsItem = styled.li`
  flex-direction: row;
  width: calc(100% / 5);
  padding: 10px;
  background-color: ${({ color }) => color};
`;
export const StatsLabel = styled.span`
  display: block;
  font-size: 16px;
  line-height: 1.1;
  font-weight: 400;
  color: #ffffff;
`;
export const StatsPercentage = styled.span`
  font-size: 18px;
  line-height: 1.1;
  font-weight: 800;
  color: #ffffff;
`;
