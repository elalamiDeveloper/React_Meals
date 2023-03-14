import styled from 'styled-components';

import COLORS from '../../utils/contants/colors';

import { Logo } from '../UI';
import Basket from './Basket';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${COLORS.primaryColor600};
  color: ${COLORS.greyColor100};
  padding: 1rem 3rem;
`;

const Header = () => (
  <HeaderContainer>
    <Logo />
    <Basket />
  </HeaderContainer>
);

export default Header;
