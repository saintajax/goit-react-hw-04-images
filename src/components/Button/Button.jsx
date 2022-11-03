import { LMBtn } from './Button.styled';
import { PropTypes } from 'prop-types';

export const Button = ({ loadMore }) => {
  return <LMBtn onClick={loadMore}>Load more</LMBtn>;
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
