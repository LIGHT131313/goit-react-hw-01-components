import PropTypes from 'prop-types';
import { List, ListLabel, Section, Title } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">{title}</Title>}
      <List className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <ListLabel className="label">{label}</ListLabel>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
