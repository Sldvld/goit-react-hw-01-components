import PropTypes from 'prop-types';
import { getColor } from 'utils';
import {
  StatsSection,
  StatsTitle,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id} color={getColor()}>
              <StatsLabel>{label}</StatsLabel>
              <StatsPercentage>{percentage}%</StatsPercentage>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatsSection>
  );
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequred,
      label: PropTypes.string.isRequred,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string.isRequired,
};
