import PropTypes from 'prop-types';
import { FaTable, FaDollarSign, FaRegListAlt } from 'react-icons/fa';
import { Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <th>
            <FaTable size={12} />
            Type
          </th>
          <th>
            <FaRegListAlt size={12} />
            Amount
          </th>
          <th>
            <FaDollarSign size={12} />
            Currency
          </th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
