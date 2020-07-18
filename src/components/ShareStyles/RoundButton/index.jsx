import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { themes } from '../../../utils/themes';
import * as Styled from './style';

function RoundButton({ theme, variant, children, className, style }) {

  return (
    <Styled.RoundButton theme={theme} variant={variant} size="lg" className={className} style={style}>
      {children}
    </Styled.RoundButton>
  );
}

RoundButton.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes)),
  variant: PropTypes.oneOf(['primary', 'default']),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

RoundButton.defaultProps = {
  theme: 'metal',
  variant: 'default',
  className: '',
  style: {},
};

const mapStateToProps = (state) => ({
  theme: state.config.theme,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RoundButton);
