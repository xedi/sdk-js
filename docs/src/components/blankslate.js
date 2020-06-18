import PropTypes from 'prop-types';
import styled from 'styled-components';
import {COMMON, LAYOUT, TYPOGRAPHY, get} from '@primer/components/src/constants';

const Blankslate = styled.div`
  position: relative;
  padding: ${get('space.5')};
  text-align: center;
`

Blankslate.propTypes = {
  children: PropTypes.node,
  ...COMMON.propTypes,
  ...LAYOUT.propTypes
}

export default Blankslate;

const BlankslateTitle = styled.h3`
  margin: 16px 0;
  font-size: 24px;
  font-weight: 600;
`

BlankslateTitle.propTypes = {
  ...COMMON.propTypes,
  ...TYPOGRAPHY.propTypes,
  theme: PropTypes.object
}

export {
    BlankslateTitle
};
