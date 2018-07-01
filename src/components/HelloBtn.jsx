import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, css, withStylesPropTypes } from '../helpers/withStyles';

function HelloBtn({ styles, children, onClick }) {
  return (
    <button type="submit" onClick={onClick} {...css(styles.btn)}>
      {children}
    </button>
  );
}

HelloBtn.propTypes = {
  ...withStylesPropTypes,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(() => ({
  btn: {
    fontSize: '3em',
  },
}))(HelloBtn);
