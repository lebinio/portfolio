import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { themes } from '../../../utils/themes';
import * as Styled from './style';

function Divider({ theme, variant, className, style }) {
  return (
    <>
      <Styled.Divider theme={theme} variant={variant} className={className} style={style} />
    </>
  );
}

Divider.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes)),
  variant: PropTypes.oneOf(['primary', 'default']),
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

Divider.defaultProps = {
  theme: 'metal',
  variant: 'default',
  className: '',
  style: {},
};

const mapStateToProps = (state) => ({
  theme: state.config.theme,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Divider);
