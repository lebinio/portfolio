import { faCog } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import { themes, defaultTheme } from '../../utils/themes';
import * as Styled from './style';
import { changeTheme } from '../../redux/actions/configActions';

function Themer({ theme, changeThemeRedux }) {

  const [show, setShow] = useState(false);

  function toggle() {
    setShow(!show);
  }

  function onColorClick(inputTheme) {
    changeThemeRedux(inputTheme);
  }

  return (
    <Styled.Themer>
      <Styled.ThemerIcon onClick={toggle} theme={theme} variant="primary" size="2x" color="#000" icon={faCog} />
      <Styled.ColorBox show={show}>
        { Object.keys(themes).map((t) =>
          <Styled.ColorItem onClick={() => onColorClick(t)} key={t} theme={t} variant="primary" />
        )}
      </Styled.ColorBox>
    </Styled.Themer>
  );
}

Themer.propTypes = {
  theme: PropTypes.oneOf(Object.keys(themes)),
  changeThemeRedux: PropTypes.func.isRequired,
};

Themer.defaultProps = {
  theme: defaultTheme,
};

const mapStateToProps = (state) => ({
  theme: state.config.theme,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeThemeRedux: (inputTheme) => dispatch(changeTheme(inputTheme))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Themer);

