import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import { getColor } from 'utils';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id} color={getColor()}>
              <span className={css.label}>{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
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
  title: PropTypes.string,
};
